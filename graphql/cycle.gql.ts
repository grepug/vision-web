import gql from "graphql-tag";

export const RECORD_RES_FRAGMENT = gql`
  fragment recordRes on record {
    id
    remark
    quantity
    createdAt
  }
`;

export const KEY_RESULT_RES_FRAGMENT = gql`
  fragment keyResultRes on key_result {
    id
    title
    unit
    total
    weight
    remark
    records {
      ...recordRes
    }
  }

  ${RECORD_RES_FRAGMENT}
`;

export const OBJECTIVE_RES_FRAGMENT = gql`
  fragment objectiveRes on objective {
    id
    title
    weight
    remark
    keyResults {
      ...keyResultRes
    }
  }

  ${KEY_RESULT_RES_FRAGMENT}
`;

const CYCLE_RES_FRAGMENT = gql`
  fragment cycleRes on cycle {
    id
    startAt
    endAt
    remark
    predict_score
    title
    objectives {
      ...objectiveRes
    }
  }

  ${OBJECTIVE_RES_FRAGMENT}
`;

export const GET_CYCLES = gql`
  query GetCycles {
    cycle {
      ...cycleRes
    }
  }

  ${CYCLE_RES_FRAGMENT}
`;

export const createCycleGQL = gql`
  mutation CreateCycle($objects: [cycle_insert_input!]!) {
    insert_cycle(objects: $objects) {
      affected_rows
      returning {
        ...cycleRes
      }
    }
  }

  ${CYCLE_RES_FRAGMENT}
`;
