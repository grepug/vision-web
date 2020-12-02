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
    predictScore
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

export const CREATE_CYCLE_GQL = gql`
  mutation CreateCycle($object: cycle_insert_input!) {
    insert_cycle_one(object: $object) {
      id
    }
  }
`;

export const CREATE_KR_GQL = gql`
  mutation CreateKeyResult($object: key_result_insert_input!) {
    insert_key_result_one(object: $object) {
      id
    }
  }
`;

export const DELETE_CYCLE = gql`
  mutation DeleteCycle($id: uuid!) {
    delete_cycle_by_pk(id: $id) {
      id
    }
  }
`;

export const UPDATE_KR = gql`
  mutation updateKR(
    $krSet: key_result_set_input!
    $krId: uuid!
    $objId: uuid!
    $objSet: objective_set_input!
  ) {
    update_key_result_by_pk(_set: $krSet, pk_columns: { id: $krId }) {
      id
    }

    update_objective_by_pk(pk_columns: { id: $objId }, _set: $objSet) {
      id
    }
  }
`;

export const Add_RECORD = gql`
  mutation AddRecord($object: record_insert_input!) {
    insert_record_one(object: $object) {
      id
    }
  }
`;

export const UPDATE_CYCLE = gql`
  mutation UpdateCycle($id: uuid!, $set: cycle_set_input!) {
    update_cycle_by_pk(pk_columns: { id: $id }, _set: $set) {
      id
    }
  }
`;

export const DELETE_KR = gql`
  mutation DeleteKR($id: uuid!) {
    delete_key_result_by_pk(id: $id) {
      id
      objectiveId
    }
  }
`;

export const DELETE_OBJ = gql`
  mutation DeleteObj($id: uuid!) {
    delete_objective_by_pk(id: $id) {
      id
    }
  }
`;

export const DELETE_RECORD = gql`
  mutation DeleteRecord($id: uuid!) {
    delete_record_by_pk(id: $id) {
      id
    }
  }
`;
