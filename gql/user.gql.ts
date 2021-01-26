import { gql } from "graphql-request";

export const GET_USER_GQL = gql`
  query GetUser($auth0UserId: String!) {
    user(where: { auth0_user_id: { _eq: $auth0UserId } }, limit: 1) {
      id
      name
      email
      userConfig {
        id
        curSelectedCycleId
      }
    }
  }
`;

export const CHANGE_CUR_CYCLE_ID_GQL = gql`
  mutation ChangeCurCycleId($userId: uuid!, $curSelectedCycleId: uuid!) {
    update_user_config_by_pk(
      pk_columns: { userId: $userId }
      _set: { curSelectedCycleId: $curSelectedCycleId }
    ) {
      id
      curSelectedCycleId
    }
  }
`;

export const CREATE_USER_CONFIG_AND_SET_CUR_CYCLE_ID = gql`
  mutation CreateUserConfigAndSetCurCycleId(
    $userId: uuid!
    $curSelectedCycleId: uuid!
  ) {
    insert_user_config_one(
      object: { userId: $userId, curSelectedCycleId: $curSelectedCycleId }
    ) {
      id
    }
  }
`;
