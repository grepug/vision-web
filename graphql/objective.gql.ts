import gql from "graphql-tag";
import { OBJECTIVE_RES_FRAGMENT } from "./cycle.gql";

export const CREATE_OBJECTIVE = gql`
  mutation CreateObjective($objects: [objective_insert_input!]!) {
    insert_objective(objects: $objects) {
      returning {
        ...objectiveRes
      }
    }
  }

  ${OBJECTIVE_RES_FRAGMENT}
`;

export const GET_OBJECTIVE = gql`
  query GetObjectives {
    objective {
      ...objectiveRes
    }
  }

  ${OBJECTIVE_RES_FRAGMENT}
`;
