import { useMutation } from "@apollo/client";
import changeCurCycleIdGQL from "graphql/mutations/changeCurCycleId.gql";
import {
  ChangeCurCycleIdVariables,
  ChangeCurCycleId,
} from "graphql/mutations/__generated__/ChangeCurCycleId";
import {
  CreateCycleVariables,
  CreateCycle,
} from "graphql/mutations/__generated__/CreateCycle";
import { createCycleGQL, GET_CYCLES } from "graphql/cycle.gql";
import { GetCycles } from "graphql/__generated__/GetCycles";
import { CREATE_OBJECTIVE, GET_OBJECTIVE } from "graphql/objective.gql";
import {
  CreateObjective,
  CreateObjectiveVariables,
} from "graphql/__generated__/CreateObjective";
import { GetObjectives } from "graphql/__generated__/GetObjectives";

export function useMutations() {
  const [changeCurCycleId] = useMutation<
    ChangeCurCycleId,
    ChangeCurCycleIdVariables
  >(changeCurCycleIdGQL);

  const [createCycle] = useMutation<CreateCycle, CreateCycleVariables>(
    createCycleGQL,
    {
      update: (cache, { data }) => {
        const existingCycles =
          cache.readQuery<GetCycles>({
            query: GET_CYCLES,
          })?.cycle ?? [];

        const newCycle = data?.insert_cycle?.returning[0];
        cache.writeQuery({
          query: GET_CYCLES,
          data: {
            cycle: [...existingCycles, newCycle],
          },
        });
      },
    },
  );

  const [createObjective] = useMutation<
    CreateObjective,
    CreateObjectiveVariables
  >(CREATE_OBJECTIVE, {
    update: (cache, { data }) => {
      const cycles = cache.readQuery<GetCycles>({
        query: GET_CYCLES,
      })?.cycle;

      const existing = cycles ? cycles[cycles.length - 1]?.objectives : [];

      debugger;
      const newObj = data?.insert_objective?.returning[0];
      debugger;
      cache.writeQuery({
        query: GET_CYCLES,
        data: {
          // cycle: [...cycles, ],
        },
      });
    },
  });

  return {
    changeCurCycleId,
    createCycle,
    createObjective,
  };
}
