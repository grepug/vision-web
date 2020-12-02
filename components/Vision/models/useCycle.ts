import { useEffect, useState } from "react";
import { useLoginCtx } from "components/Login/Context";
import { Cycle } from "./Cycle";
import { Objective } from "./Objective";
import { KeyResult } from "./KeyResult";
/**
 *
 */
import {
  CREATE_CYCLE_GQL,
  CREATE_KR_GQL,
  GET_CYCLES,
  DELETE_CYCLE,
  UPDATE_KR,
  Add_RECORD,
  UPDATE_CYCLE,
  DELETE_KR,
  DELETE_OBJ,
  DELETE_RECORD,
} from "gql/cycle.gql";
import { CHANGE_CUR_CYCLE_ID_GQL } from "gql/user.gql";
import { CREATE_OBJECTIVE } from "gql/objective.gql";

import {
  GetCyclesQuery,
  ChangeCurCycleIdMutation,
  ChangeCurCycleIdMutationVariables,
  CreateObjectiveMutation,
  CreateCycleMutation,
  CreateCycleMutationVariables,
  CreateKeyResultMutation,
  CreateKeyResultMutationVariables,
  CreateObjectiveMutationVariables,
  DeleteCycleMutation,
  DeleteCycleMutationVariables,
  UpdateKrMutation,
  UpdateKrMutationVariables,
  AddRecordMutation,
  AddRecordMutationVariables,
  UpdateCycleMutation,
  UpdateCycleMutationVariables,
  DeleteKrMutation,
  DeleteKrMutationVariables,
  DeleteObjMutation,
  DeleteObjMutationVariables,
  DeleteRecordMutation,
  DeleteRecordMutationVariables,
} from "gql/gql.generated";
import { Record } from "./Record";
/**
 *
 */

export function useCycle() {
  const [cycle, setCycle] = useState<Cycle[]>([]);
  const loginCtx = useLoginCtx()!;
  const [key, setKey] = useState(0);
  const forceRender = () => setKey((s) => s + 1);

  const curCycleId: string | undefined =
    loginCtx.user?.userConfig?.curSelectedCycleId;
  const curCycleIndex = cycle?.findIndex((el) => el.id === curCycleId) ?? -1;
  const curCycle = cycle?.[curCycleIndex];

  useEffect(() => {
    loginCtx.client
      ?.request<GetCyclesQuery>(GET_CYCLES)
      .then(({ cycle }) => setCycle(cycle.map(Cycle.fromJSON)));
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

  async function handleCreateCycle() {
    const cycle = new Cycle();

    const object = {
      ...cycle.toJSON_data(),
      userId: loginCtx.user?.id,
    };

    await loginCtx.client?.request<
      CreateCycleMutation,
      CreateCycleMutationVariables
    >(CREATE_CYCLE_GQL, { object });

    setCycle((cycles) => {
      cycles.push(cycle);

      return cycles;
    });

    forceRender();
  }

  async function handleUpdateCycle(
    id: string,
    cycle: UpdateCycleMutationVariables["set"],
  ) {
    await loginCtx.client?.request<
      UpdateCycleMutation,
      UpdateCycleMutationVariables
    >(UPDATE_CYCLE, {
      id,
      set: cycle,
    });

    setCycle((cycles) => {
      Object.assign(cycles[curCycleIndex], cycle);

      return cycles;
    });

    forceRender();
  }

  async function handleDeleteCycle(id: string, index: number) {
    await loginCtx.client?.request<
      DeleteCycleMutation,
      DeleteCycleMutationVariables
    >(DELETE_CYCLE, {
      id,
    });

    setCycle((cycles) => {
      cycles.splice(index, 1);

      return cycles;
    });

    forceRender();
  }

  async function handleCreateObjective() {
    const objective = new Objective();

    const object = {
      ...objective.toJSON(),
      cycleId: curCycleId,
    };

    // @ts-ignore
    delete object.keyResults;

    await loginCtx.client?.request<
      CreateObjectiveMutation,
      CreateObjectiveMutationVariables
    >(CREATE_OBJECTIVE, {
      object: { ...object, keyResults: { data: [] } },
    });

    setCycle((cycles) => {
      const index = cycles!.findIndex((el) => el.id === curCycleId);
      cycles[index].objectives.push(objective);

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

    setCycle((cycles) => {
      const curCycleIndex =
        cycles?.findIndex((el) => el.id === curCycleId) ?? -1;

      const curCycle = cycles[curCycleIndex];

      const index =
        curCycle.objectives.findIndex((el) => el.id === objectiveId) ?? -1;

      const objective = curCycle.objectives[index];

      kr.objective = objective;

      objective.keyResults.push(kr);

      return cycles;
    });

    forceRender();
  }

  async function handleUpdateKR(kr: KeyResult) {
    const krSet = kr.toJSON();
    const objSet = kr.objective.toJSON();

    // @ts-ignore
    delete krSet.records;
    // @ts-ignore
    delete objSet.keyResults;

    await loginCtx.client?.request<UpdateKrMutation, UpdateKrMutationVariables>(
      UPDATE_KR,
      {
        krSet,
        krId: kr.id,
        objSet,
        objId: kr.objective.id,
      },
    );

    setCycle((cycles) => {
      const objectiveIndex = cycles[curCycleIndex].findIndexByKeyResult(kr);
      cycles[curCycleIndex].objectives[objectiveIndex].editKeyResult(kr);

      return cycles;
    });

    forceRender();
  }

  async function handleDeleteKR(kr: KeyResult, isLastKR = false) {
    await loginCtx.client?.request<DeleteKrMutation, DeleteKrMutationVariables>(
      DELETE_KR,
      { id: kr.id },
    );

    if (isLastKR) {
      await loginCtx.client?.request<
        DeleteObjMutation,
        DeleteObjMutationVariables
      >(DELETE_OBJ, { id: kr.objective.id });
    }

    setCycle((cycles) => {
      const curCycleIndex =
        cycles?.findIndex((el) => el.id === curCycleId) ?? -1;

      const curCycle = cycles[curCycleIndex];
      const index = curCycle.findIndexByKeyResult(kr);

      if (isLastKR) {
        curCycle.objectives.splice(index, 1);
      } else {
        const objective = curCycle.objectives[index];
        const krIndex = objective.keyResults.findIndex((el) => el.isEqual(kr));

        objective.keyResults.splice(krIndex, 1);
      }

      return cycles;
    });

    forceRender();
  }

  async function handleAddRecord(
    object: AddRecordMutationVariables["object"],
    kr: KeyResult,
  ) {
    if (kr.total >= kr.current + object.quantity) {
      await loginCtx.client?.request<
        AddRecordMutation,
        AddRecordMutationVariables
      >(Add_RECORD, {
        object: { ...object, keyResultId: kr.id },
      });

      setCycle((cycles) => {
        const record = new Record();

        Object.assign(record, object);

        kr.records.push(record);

        return cycles;
      });

      forceRender();
    }
  }

  async function handleDeleteRecord(kr: KeyResult, index: number) {
    await loginCtx.client?.request<
      DeleteRecordMutation,
      DeleteRecordMutationVariables
    >(DELETE_RECORD, {
      id: kr.records[index].id,
    });

    setCycle((cycles) => {
      kr.records.splice(index, 1);

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
    handleDeleteCycle,
    handleCreateCycle,
    handleUpdateKR,
    handleUpdateCycle,
    handleDeleteKR,
    handleAddRecord,
    handleDeleteRecord,
  };
}
