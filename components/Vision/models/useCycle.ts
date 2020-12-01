import { useEffect, useState } from "react";
import { useLoginCtx } from "components/Login/Context";
import { Cycle } from "./Cycle";
import { Objective } from "./Objective";
import { KeyResult } from "./KeyResult";
/**
 *
 */
import { CREATE_KR_GQL, GET_CYCLES } from "gql/cycle.gql";
import { CHANGE_CUR_CYCLE_ID_GQL } from "gql/user.gql";
import { CREATE_OBJECTIVE } from "gql/objective.gql";

import {
  GetCyclesQuery,
  ChangeCurCycleIdMutation,
  ChangeCurCycleIdMutationVariables,
  CreateObjectiveMutation,
  CreateCycleMutationVariables,
  CreateKeyResultMutation,
  CreateKeyResultMutationVariables,
  CreateObjectiveMutationVariables,
} from "gql/gql.generated";
/**
 *
 */

export function useCycle() {
  const [cycleData, setCycleData] = useState<GetCyclesQuery["cycle"]>();
  const loginCtx = useLoginCtx()!;
  const [key, setKey] = useState(0);
  const forceRender = () => setKey((s) => s + 1);
  const cycle = cycleData ? cycleData.map((el) => Cycle.fromJSON(el)) : null;

  const curCycleId: string | undefined =
    loginCtx.user?.userConfig?.curSelectedCycleId;

  const curCycleIndex = cycle?.findIndex((el) => el.id === curCycleId) ?? -1;
  const curCycle = cycle?.[curCycleIndex];

  useEffect(() => {
    loginCtx.client
      ?.request<GetCyclesQuery>(GET_CYCLES)
      .then(({ cycle }) => setCycleData(cycle));
  }, [loginCtx.user]);

  async function handleChangeCurSelectedCycle(id: string) {
    await loginCtx.client?.request<
      ChangeCurCycleIdMutation,
      ChangeCurCycleIdMutationVariables
    >(CHANGE_CUR_CYCLE_ID_GQL, {
      curSelectedCycleId: id,
      userId: loginCtx.user?.id,
    });

    loginCtx.setUser((user) => {
      const userConfig = user?.userConfig;

      if (userConfig) {
        userConfig.curSelectedCycleId = id;
      }

      return user;
    });

    forceRender();
  }

  async function handleCreateObjective() {
    const objective = new Objective();

    const object = {
      ...objective.toJSON(),
      curCycleId,
    };

    // @ts-ignore
    delete object.keyResults;

    await loginCtx.client?.request<
      CreateObjectiveMutation,
      CreateObjectiveMutationVariables
    >(CREATE_OBJECTIVE, {
      object: { ...object, keyResults: { data: [] } },
    });

    setCycleData((cycles) => {
      if (cycles) {
        const index = cycles!.findIndex((el) => el.id === curCycleId);
        cycles[index].objectives.push(objective);
      }

      return cycles;
    });

    await handleCreateKR(objective.id);

    forceRender();
  }

  async function handleCreateKR(objectiveId: string) {
    const kr = new KeyResult();

    const object = {
      ...kr.toJSON(),
      objectiveId,
    };

    // @ts-ignore
    delete object.records;

    await loginCtx.client?.request<
      CreateKeyResultMutation,
      CreateKeyResultMutationVariables
    >(CREATE_KR_GQL, { object: { ...object, records: { data: [] } } });

    setCycleData((cycles) => {
      if (curCycle) {
        const index =
          curCycle.objectives.findIndex((el) => el.id === objectiveId) ?? -1;
        const objective = curCycle.objectives[index];

        kr.objective = objective;

        objective.keyResults.push(kr);
      }

      return cycles;
    });

    forceRender();
  }

  return {
    key,
    forceRender,
    cycle,
    curCycle,
    curCycleId,
    handleChangeCurSelectedCycle,
    handleCreateObjective,
    handleCreateKR,
  };
}
