export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type Cycle = {
  __typename?: 'cycle';
  createdAt: Scalars['timestamptz'];
  endAt: Scalars['timestamptz'];
  groups: Array<Group_Cycle>;
  groups_aggregate: Group_Cycle_Aggregate;
  id: Scalars['uuid'];
  objectives: Array<Objective>;
  objectives_aggregate: Objective_Aggregate;
  predictScore?: Maybe<Scalars['numeric']>;
  remark: Scalars['String'];
  startAt: Scalars['timestamptz'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  user: User;
  userId: Scalars['uuid'];
};


export type CycleGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type CycleGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type CycleObjectivesArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};


export type CycleObjectives_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};

export type Cycle_Aggregate = {
  __typename?: 'cycle_aggregate';
  aggregate?: Maybe<Cycle_Aggregate_Fields>;
  nodes: Array<Cycle>;
};

export type Cycle_Aggregate_Fields = {
  __typename?: 'cycle_aggregate_fields';
  avg?: Maybe<Cycle_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Cycle_Max_Fields>;
  min?: Maybe<Cycle_Min_Fields>;
  stddev?: Maybe<Cycle_Stddev_Fields>;
  stddev_pop?: Maybe<Cycle_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cycle_Stddev_Samp_Fields>;
  sum?: Maybe<Cycle_Sum_Fields>;
  var_pop?: Maybe<Cycle_Var_Pop_Fields>;
  var_samp?: Maybe<Cycle_Var_Samp_Fields>;
  variance?: Maybe<Cycle_Variance_Fields>;
};


export type Cycle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Cycle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Cycle_Aggregate_Order_By = {
  avg?: Maybe<Cycle_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Cycle_Max_Order_By>;
  min?: Maybe<Cycle_Min_Order_By>;
  stddev?: Maybe<Cycle_Stddev_Order_By>;
  stddev_pop?: Maybe<Cycle_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Cycle_Stddev_Samp_Order_By>;
  sum?: Maybe<Cycle_Sum_Order_By>;
  var_pop?: Maybe<Cycle_Var_Pop_Order_By>;
  var_samp?: Maybe<Cycle_Var_Samp_Order_By>;
  variance?: Maybe<Cycle_Variance_Order_By>;
};

export type Cycle_Arr_Rel_Insert_Input = {
  data: Array<Cycle_Insert_Input>;
  on_conflict?: Maybe<Cycle_On_Conflict>;
};

export type Cycle_Avg_Fields = {
  __typename?: 'cycle_avg_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Avg_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Cycle_Bool_Exp>>>;
  _not?: Maybe<Cycle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Cycle_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  endAt?: Maybe<Timestamptz_Comparison_Exp>;
  groups?: Maybe<Group_Cycle_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  objectives?: Maybe<Objective_Bool_Exp>;
  predictScore?: Maybe<Numeric_Comparison_Exp>;
  remark?: Maybe<String_Comparison_Exp>;
  startAt?: Maybe<Timestamptz_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

export enum Cycle_Constraint {
  CyclePkey = 'Cycle_pkey'
}

export type Cycle_Inc_Input = {
  predictScore?: Maybe<Scalars['numeric']>;
};

export type Cycle_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  groups?: Maybe<Group_Cycle_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  objectives?: Maybe<Objective_Arr_Rel_Insert_Input>;
  predictScore?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

export type Cycle_Max_Fields = {
  __typename?: 'cycle_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  predictScore?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export type Cycle_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  predictScore?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Cycle_Min_Fields = {
  __typename?: 'cycle_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  predictScore?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export type Cycle_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  predictScore?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type Cycle_Mutation_Response = {
  __typename?: 'cycle_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Cycle>;
};

export type Cycle_Obj_Rel_Insert_Input = {
  data: Cycle_Insert_Input;
  on_conflict?: Maybe<Cycle_On_Conflict>;
};

export type Cycle_On_Conflict = {
  constraint: Cycle_Constraint;
  update_columns: Array<Cycle_Update_Column>;
  where?: Maybe<Cycle_Bool_Exp>;
};

export type Cycle_Order_By = {
  createdAt?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  groups_aggregate?: Maybe<Group_Cycle_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  objectives_aggregate?: Maybe<Objective_Aggregate_Order_By>;
  predictScore?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

export type Cycle_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Cycle_Select_Column {
  CreatedAt = 'createdAt',
  EndAt = 'endAt',
  Id = 'id',
  PredictScore = 'predictScore',
  Remark = 'remark',
  StartAt = 'startAt',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type Cycle_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  endAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  predictScore?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  startAt?: Maybe<Scalars['timestamptz']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export type Cycle_Stddev_Fields = {
  __typename?: 'cycle_stddev_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Stddev_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Stddev_Pop_Fields = {
  __typename?: 'cycle_stddev_pop_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Stddev_Pop_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Stddev_Samp_Fields = {
  __typename?: 'cycle_stddev_samp_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Stddev_Samp_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Sum_Fields = {
  __typename?: 'cycle_sum_fields';
  predictScore?: Maybe<Scalars['numeric']>;
};

export type Cycle_Sum_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export enum Cycle_Update_Column {
  CreatedAt = 'createdAt',
  EndAt = 'endAt',
  Id = 'id',
  PredictScore = 'predictScore',
  Remark = 'remark',
  StartAt = 'startAt',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type Cycle_Var_Pop_Fields = {
  __typename?: 'cycle_var_pop_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Var_Pop_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Var_Samp_Fields = {
  __typename?: 'cycle_var_samp_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Var_Samp_Order_By = {
  predictScore?: Maybe<Order_By>;
};

export type Cycle_Variance_Fields = {
  __typename?: 'cycle_variance_fields';
  predictScore?: Maybe<Scalars['Float']>;
};

export type Cycle_Variance_Order_By = {
  predictScore?: Maybe<Order_By>;
};


export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

export type Group = {
  __typename?: 'group';
  createdAt: Scalars['timestamptz'];
  creator: User;
  creatorUserId: Scalars['uuid'];
  cycles: Array<Group_Cycle>;
  cycles_aggregate: Group_Cycle_Aggregate;
  endAt: Scalars['date'];
  id: Scalars['uuid'];
  startAt: Scalars['date'];
  updatedAt: Scalars['timestamptz'];
};


export type GroupCyclesArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type GroupCycles_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};

export type Group_Aggregate = {
  __typename?: 'group_aggregate';
  aggregate?: Maybe<Group_Aggregate_Fields>;
  nodes: Array<Group>;
};

export type Group_Aggregate_Fields = {
  __typename?: 'group_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Max_Fields>;
  min?: Maybe<Group_Min_Fields>;
};


export type Group_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Group_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Max_Order_By>;
  min?: Maybe<Group_Min_Order_By>;
};

export type Group_Arr_Rel_Insert_Input = {
  data: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};

export type Group_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Bool_Exp>>>;
  _not?: Maybe<Group_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  creator?: Maybe<User_Bool_Exp>;
  creatorUserId?: Maybe<Uuid_Comparison_Exp>;
  cycles?: Maybe<Group_Cycle_Bool_Exp>;
  endAt?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  startAt?: Maybe<Date_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Group_Constraint {
  GroupPkey = 'Group_pkey'
}

export type Group_Cycle = {
  __typename?: 'group_cycle';
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycle: Cycle;
  cycleId: Scalars['uuid'];
  group: Group;
  groupId: Scalars['uuid'];
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Cycle_Aggregate = {
  __typename?: 'group_cycle_aggregate';
  aggregate?: Maybe<Group_Cycle_Aggregate_Fields>;
  nodes: Array<Group_Cycle>;
};

export type Group_Cycle_Aggregate_Fields = {
  __typename?: 'group_cycle_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Group_Cycle_Max_Fields>;
  min?: Maybe<Group_Cycle_Min_Fields>;
};


export type Group_Cycle_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Group_Cycle_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Group_Cycle_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Group_Cycle_Max_Order_By>;
  min?: Maybe<Group_Cycle_Min_Order_By>;
};

export type Group_Cycle_Arr_Rel_Insert_Input = {
  data: Array<Group_Cycle_Insert_Input>;
  on_conflict?: Maybe<Group_Cycle_On_Conflict>;
};

export type Group_Cycle_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Group_Cycle_Bool_Exp>>>;
  _not?: Maybe<Group_Cycle_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Group_Cycle_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  cycle?: Maybe<Cycle_Bool_Exp>;
  cycleId?: Maybe<Uuid_Comparison_Exp>;
  group?: Maybe<Group_Bool_Exp>;
  groupId?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Group_Cycle_Constraint {
  GroupCyclePkey = 'group_cycle_pkey'
}

export type Group_Cycle_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycle?: Maybe<Cycle_Obj_Rel_Insert_Input>;
  cycleId?: Maybe<Scalars['uuid']>;
  group?: Maybe<Group_Obj_Rel_Insert_Input>;
  groupId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Cycle_Max_Fields = {
  __typename?: 'group_cycle_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  groupId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Cycle_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycleId?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Cycle_Min_Fields = {
  __typename?: 'group_cycle_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  groupId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Cycle_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycleId?: Maybe<Order_By>;
  groupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Cycle_Mutation_Response = {
  __typename?: 'group_cycle_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Group_Cycle>;
};

export type Group_Cycle_Obj_Rel_Insert_Input = {
  data: Group_Cycle_Insert_Input;
  on_conflict?: Maybe<Group_Cycle_On_Conflict>;
};

export type Group_Cycle_On_Conflict = {
  constraint: Group_Cycle_Constraint;
  update_columns: Array<Group_Cycle_Update_Column>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};

export type Group_Cycle_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycle?: Maybe<Cycle_Order_By>;
  cycleId?: Maybe<Order_By>;
  group?: Maybe<Group_Order_By>;
  groupId?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Cycle_Pk_Columns_Input = {
  cycleId: Scalars['uuid'];
  groupId: Scalars['uuid'];
};

export enum Group_Cycle_Select_Column {
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  GroupId = 'groupId',
  UpdatedAt = 'updatedAt'
}

export type Group_Cycle_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  groupId?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export enum Group_Cycle_Update_Column {
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  GroupId = 'groupId',
  UpdatedAt = 'updatedAt'
}

export type Group_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  creator?: Maybe<User_Obj_Rel_Insert_Input>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  cycles?: Maybe<Group_Cycle_Arr_Rel_Insert_Input>;
  endAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  startAt?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Max_Fields = {
  __typename?: 'group_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  endAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  startAt?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  creatorUserId?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Min_Fields = {
  __typename?: 'group_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  endAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  startAt?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Group_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  creatorUserId?: Maybe<Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Mutation_Response = {
  __typename?: 'group_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Group>;
};

export type Group_Obj_Rel_Insert_Input = {
  data: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};

export type Group_On_Conflict = {
  constraint: Group_Constraint;
  update_columns: Array<Group_Update_Column>;
  where?: Maybe<Group_Bool_Exp>;
};

export type Group_Order_By = {
  createdAt?: Maybe<Order_By>;
  creator?: Maybe<User_Order_By>;
  creatorUserId?: Maybe<Order_By>;
  cycles_aggregate?: Maybe<Group_Cycle_Aggregate_Order_By>;
  endAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  startAt?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Group_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Group_Select_Column {
  CreatedAt = 'createdAt',
  CreatorUserId = 'creatorUserId',
  EndAt = 'endAt',
  Id = 'id',
  StartAt = 'startAt',
  UpdatedAt = 'updatedAt'
}

export type Group_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  creatorUserId?: Maybe<Scalars['uuid']>;
  endAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
  startAt?: Maybe<Scalars['date']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export enum Group_Update_Column {
  CreatedAt = 'createdAt',
  CreatorUserId = 'creatorUserId',
  EndAt = 'endAt',
  Id = 'id',
  StartAt = 'startAt',
  UpdatedAt = 'updatedAt'
}

export type Key_Result = {
  __typename?: 'key_result';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  objective?: Maybe<Objective>;
  objectiveId?: Maybe<Scalars['uuid']>;
  records: Array<Record>;
  records_aggregate: Record_Aggregate;
  remark: Scalars['String'];
  title: Scalars['String'];
  total: Scalars['numeric'];
  unit: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  weight: Scalars['numeric'];
};


export type Key_ResultRecordsArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};


export type Key_ResultRecords_AggregateArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};

export type Key_Result_Aggregate = {
  __typename?: 'key_result_aggregate';
  aggregate?: Maybe<Key_Result_Aggregate_Fields>;
  nodes: Array<Key_Result>;
};

export type Key_Result_Aggregate_Fields = {
  __typename?: 'key_result_aggregate_fields';
  avg?: Maybe<Key_Result_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Key_Result_Max_Fields>;
  min?: Maybe<Key_Result_Min_Fields>;
  stddev?: Maybe<Key_Result_Stddev_Fields>;
  stddev_pop?: Maybe<Key_Result_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Key_Result_Stddev_Samp_Fields>;
  sum?: Maybe<Key_Result_Sum_Fields>;
  var_pop?: Maybe<Key_Result_Var_Pop_Fields>;
  var_samp?: Maybe<Key_Result_Var_Samp_Fields>;
  variance?: Maybe<Key_Result_Variance_Fields>;
};


export type Key_Result_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Key_Result_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Key_Result_Aggregate_Order_By = {
  avg?: Maybe<Key_Result_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Key_Result_Max_Order_By>;
  min?: Maybe<Key_Result_Min_Order_By>;
  stddev?: Maybe<Key_Result_Stddev_Order_By>;
  stddev_pop?: Maybe<Key_Result_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Key_Result_Stddev_Samp_Order_By>;
  sum?: Maybe<Key_Result_Sum_Order_By>;
  var_pop?: Maybe<Key_Result_Var_Pop_Order_By>;
  var_samp?: Maybe<Key_Result_Var_Samp_Order_By>;
  variance?: Maybe<Key_Result_Variance_Order_By>;
};

export type Key_Result_Arr_Rel_Insert_Input = {
  data: Array<Key_Result_Insert_Input>;
  on_conflict?: Maybe<Key_Result_On_Conflict>;
};

export type Key_Result_Avg_Fields = {
  __typename?: 'key_result_avg_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Avg_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Key_Result_Bool_Exp>>>;
  _not?: Maybe<Key_Result_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Key_Result_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  objective?: Maybe<Objective_Bool_Exp>;
  objectiveId?: Maybe<Uuid_Comparison_Exp>;
  records?: Maybe<Record_Bool_Exp>;
  remark?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  total?: Maybe<Numeric_Comparison_Exp>;
  unit?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

export enum Key_Result_Constraint {
  KeyResultPkey = 'KeyResult_pkey'
}

export type Key_Result_Inc_Input = {
  total?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  objective?: Maybe<Objective_Obj_Rel_Insert_Input>;
  objectiveId?: Maybe<Scalars['uuid']>;
  records?: Maybe<Record_Arr_Rel_Insert_Input>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Max_Fields = {
  __typename?: 'key_result_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  objectiveId?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Min_Fields = {
  __typename?: 'key_result_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  objectiveId?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Mutation_Response = {
  __typename?: 'key_result_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Key_Result>;
};

export type Key_Result_Obj_Rel_Insert_Input = {
  data: Key_Result_Insert_Input;
  on_conflict?: Maybe<Key_Result_On_Conflict>;
};

export type Key_Result_On_Conflict = {
  constraint: Key_Result_Constraint;
  update_columns: Array<Key_Result_Update_Column>;
  where?: Maybe<Key_Result_Bool_Exp>;
};

export type Key_Result_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  objective?: Maybe<Objective_Order_By>;
  objectiveId?: Maybe<Order_By>;
  records_aggregate?: Maybe<Record_Aggregate_Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  total?: Maybe<Order_By>;
  unit?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Key_Result_Select_Column {
  CreatedAt = 'createdAt',
  Id = 'id',
  ObjectiveId = 'objectiveId',
  Remark = 'remark',
  Title = 'title',
  Total = 'total',
  Unit = 'unit',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type Key_Result_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  objectiveId?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  total?: Maybe<Scalars['numeric']>;
  unit?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Stddev_Fields = {
  __typename?: 'key_result_stddev_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Stddev_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Stddev_Pop_Fields = {
  __typename?: 'key_result_stddev_pop_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Stddev_Pop_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Stddev_Samp_Fields = {
  __typename?: 'key_result_stddev_samp_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Stddev_Samp_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Sum_Fields = {
  __typename?: 'key_result_sum_fields';
  total?: Maybe<Scalars['numeric']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Key_Result_Sum_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export enum Key_Result_Update_Column {
  CreatedAt = 'createdAt',
  Id = 'id',
  ObjectiveId = 'objectiveId',
  Remark = 'remark',
  Title = 'title',
  Total = 'total',
  Unit = 'unit',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type Key_Result_Var_Pop_Fields = {
  __typename?: 'key_result_var_pop_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Var_Pop_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Var_Samp_Fields = {
  __typename?: 'key_result_var_samp_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Var_Samp_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Key_Result_Variance_Fields = {
  __typename?: 'key_result_variance_fields';
  total?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
};

export type Key_Result_Variance_Order_By = {
  total?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Mutation_Root = {
  __typename?: 'mutation_root';
  delete_cycle?: Maybe<Cycle_Mutation_Response>;
  delete_cycle_by_pk?: Maybe<Cycle>;
  delete_group?: Maybe<Group_Mutation_Response>;
  delete_group_by_pk?: Maybe<Group>;
  delete_group_cycle?: Maybe<Group_Cycle_Mutation_Response>;
  delete_group_cycle_by_pk?: Maybe<Group_Cycle>;
  delete_key_result?: Maybe<Key_Result_Mutation_Response>;
  delete_key_result_by_pk?: Maybe<Key_Result>;
  delete_objective?: Maybe<Objective_Mutation_Response>;
  delete_objective_by_pk?: Maybe<Objective>;
  delete_record?: Maybe<Record_Mutation_Response>;
  delete_record_by_pk?: Maybe<Record>;
  delete_user?: Maybe<User_Mutation_Response>;
  delete_user_by_pk?: Maybe<User>;
  delete_user_config?: Maybe<User_Config_Mutation_Response>;
  delete_user_config_by_pk?: Maybe<User_Config>;
  insert_cycle?: Maybe<Cycle_Mutation_Response>;
  insert_cycle_one?: Maybe<Cycle>;
  insert_group?: Maybe<Group_Mutation_Response>;
  insert_group_cycle?: Maybe<Group_Cycle_Mutation_Response>;
  insert_group_cycle_one?: Maybe<Group_Cycle>;
  insert_group_one?: Maybe<Group>;
  insert_key_result?: Maybe<Key_Result_Mutation_Response>;
  insert_key_result_one?: Maybe<Key_Result>;
  insert_objective?: Maybe<Objective_Mutation_Response>;
  insert_objective_one?: Maybe<Objective>;
  insert_record?: Maybe<Record_Mutation_Response>;
  insert_record_one?: Maybe<Record>;
  insert_user?: Maybe<User_Mutation_Response>;
  insert_user_config?: Maybe<User_Config_Mutation_Response>;
  insert_user_config_one?: Maybe<User_Config>;
  insert_user_one?: Maybe<User>;
  update_cycle?: Maybe<Cycle_Mutation_Response>;
  update_cycle_by_pk?: Maybe<Cycle>;
  update_group?: Maybe<Group_Mutation_Response>;
  update_group_by_pk?: Maybe<Group>;
  update_group_cycle?: Maybe<Group_Cycle_Mutation_Response>;
  update_group_cycle_by_pk?: Maybe<Group_Cycle>;
  update_key_result?: Maybe<Key_Result_Mutation_Response>;
  update_key_result_by_pk?: Maybe<Key_Result>;
  update_objective?: Maybe<Objective_Mutation_Response>;
  update_objective_by_pk?: Maybe<Objective>;
  update_record?: Maybe<Record_Mutation_Response>;
  update_record_by_pk?: Maybe<Record>;
  update_user?: Maybe<User_Mutation_Response>;
  update_user_by_pk?: Maybe<User>;
  update_user_config?: Maybe<User_Config_Mutation_Response>;
  update_user_config_by_pk?: Maybe<User_Config>;
};


export type Mutation_RootDelete_CycleArgs = {
  where: Cycle_Bool_Exp;
};


export type Mutation_RootDelete_Cycle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_GroupArgs = {
  where: Group_Bool_Exp;
};


export type Mutation_RootDelete_Group_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_Group_CycleArgs = {
  where: Group_Cycle_Bool_Exp;
};


export type Mutation_RootDelete_Group_Cycle_By_PkArgs = {
  cycleId: Scalars['uuid'];
  groupId: Scalars['uuid'];
};


export type Mutation_RootDelete_Key_ResultArgs = {
  where: Key_Result_Bool_Exp;
};


export type Mutation_RootDelete_Key_Result_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_ObjectiveArgs = {
  where: Objective_Bool_Exp;
};


export type Mutation_RootDelete_Objective_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_RecordArgs = {
  where: Record_Bool_Exp;
};


export type Mutation_RootDelete_Record_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


export type Mutation_RootDelete_User_By_PkArgs = {
  auth0_user_id: Scalars['String'];
  id: Scalars['uuid'];
};


export type Mutation_RootDelete_User_ConfigArgs = {
  where: User_Config_Bool_Exp;
};


export type Mutation_RootDelete_User_Config_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type Mutation_RootInsert_CycleArgs = {
  objects: Array<Cycle_Insert_Input>;
  on_conflict?: Maybe<Cycle_On_Conflict>;
};


export type Mutation_RootInsert_Cycle_OneArgs = {
  object: Cycle_Insert_Input;
  on_conflict?: Maybe<Cycle_On_Conflict>;
};


export type Mutation_RootInsert_GroupArgs = {
  objects: Array<Group_Insert_Input>;
  on_conflict?: Maybe<Group_On_Conflict>;
};


export type Mutation_RootInsert_Group_CycleArgs = {
  objects: Array<Group_Cycle_Insert_Input>;
  on_conflict?: Maybe<Group_Cycle_On_Conflict>;
};


export type Mutation_RootInsert_Group_Cycle_OneArgs = {
  object: Group_Cycle_Insert_Input;
  on_conflict?: Maybe<Group_Cycle_On_Conflict>;
};


export type Mutation_RootInsert_Group_OneArgs = {
  object: Group_Insert_Input;
  on_conflict?: Maybe<Group_On_Conflict>;
};


export type Mutation_RootInsert_Key_ResultArgs = {
  objects: Array<Key_Result_Insert_Input>;
  on_conflict?: Maybe<Key_Result_On_Conflict>;
};


export type Mutation_RootInsert_Key_Result_OneArgs = {
  object: Key_Result_Insert_Input;
  on_conflict?: Maybe<Key_Result_On_Conflict>;
};


export type Mutation_RootInsert_ObjectiveArgs = {
  objects: Array<Objective_Insert_Input>;
  on_conflict?: Maybe<Objective_On_Conflict>;
};


export type Mutation_RootInsert_Objective_OneArgs = {
  object: Objective_Insert_Input;
  on_conflict?: Maybe<Objective_On_Conflict>;
};


export type Mutation_RootInsert_RecordArgs = {
  objects: Array<Record_Insert_Input>;
  on_conflict?: Maybe<Record_On_Conflict>;
};


export type Mutation_RootInsert_Record_OneArgs = {
  object: Record_Insert_Input;
  on_conflict?: Maybe<Record_On_Conflict>;
};


export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootInsert_User_ConfigArgs = {
  objects: Array<User_Config_Insert_Input>;
  on_conflict?: Maybe<User_Config_On_Conflict>;
};


export type Mutation_RootInsert_User_Config_OneArgs = {
  object: User_Config_Insert_Input;
  on_conflict?: Maybe<User_Config_On_Conflict>;
};


export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};


export type Mutation_RootUpdate_CycleArgs = {
  _inc?: Maybe<Cycle_Inc_Input>;
  _set?: Maybe<Cycle_Set_Input>;
  where: Cycle_Bool_Exp;
};


export type Mutation_RootUpdate_Cycle_By_PkArgs = {
  _inc?: Maybe<Cycle_Inc_Input>;
  _set?: Maybe<Cycle_Set_Input>;
  pk_columns: Cycle_Pk_Columns_Input;
};


export type Mutation_RootUpdate_GroupArgs = {
  _set?: Maybe<Group_Set_Input>;
  where: Group_Bool_Exp;
};


export type Mutation_RootUpdate_Group_By_PkArgs = {
  _set?: Maybe<Group_Set_Input>;
  pk_columns: Group_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Group_CycleArgs = {
  _set?: Maybe<Group_Cycle_Set_Input>;
  where: Group_Cycle_Bool_Exp;
};


export type Mutation_RootUpdate_Group_Cycle_By_PkArgs = {
  _set?: Maybe<Group_Cycle_Set_Input>;
  pk_columns: Group_Cycle_Pk_Columns_Input;
};


export type Mutation_RootUpdate_Key_ResultArgs = {
  _inc?: Maybe<Key_Result_Inc_Input>;
  _set?: Maybe<Key_Result_Set_Input>;
  where: Key_Result_Bool_Exp;
};


export type Mutation_RootUpdate_Key_Result_By_PkArgs = {
  _inc?: Maybe<Key_Result_Inc_Input>;
  _set?: Maybe<Key_Result_Set_Input>;
  pk_columns: Key_Result_Pk_Columns_Input;
};


export type Mutation_RootUpdate_ObjectiveArgs = {
  _inc?: Maybe<Objective_Inc_Input>;
  _set?: Maybe<Objective_Set_Input>;
  where: Objective_Bool_Exp;
};


export type Mutation_RootUpdate_Objective_By_PkArgs = {
  _inc?: Maybe<Objective_Inc_Input>;
  _set?: Maybe<Objective_Set_Input>;
  pk_columns: Objective_Pk_Columns_Input;
};


export type Mutation_RootUpdate_RecordArgs = {
  _inc?: Maybe<Record_Inc_Input>;
  _set?: Maybe<Record_Set_Input>;
  where: Record_Bool_Exp;
};


export type Mutation_RootUpdate_Record_By_PkArgs = {
  _inc?: Maybe<Record_Inc_Input>;
  _set?: Maybe<Record_Set_Input>;
  pk_columns: Record_Pk_Columns_Input;
};


export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>;
  where: User_Bool_Exp;
};


export type Mutation_RootUpdate_User_By_PkArgs = {
  _set?: Maybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


export type Mutation_RootUpdate_User_ConfigArgs = {
  _set?: Maybe<User_Config_Set_Input>;
  where: User_Config_Bool_Exp;
};


export type Mutation_RootUpdate_User_Config_By_PkArgs = {
  _set?: Maybe<User_Config_Set_Input>;
  pk_columns: User_Config_Pk_Columns_Input;
};


export type Numeric_Comparison_Exp = {
  _eq?: Maybe<Scalars['numeric']>;
  _gt?: Maybe<Scalars['numeric']>;
  _gte?: Maybe<Scalars['numeric']>;
  _in?: Maybe<Array<Scalars['numeric']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['numeric']>;
  _lte?: Maybe<Scalars['numeric']>;
  _neq?: Maybe<Scalars['numeric']>;
  _nin?: Maybe<Array<Scalars['numeric']>>;
};

export type Objective = {
  __typename?: 'objective';
  createdAt: Scalars['timestamptz'];
  cycle: Cycle;
  cycleId: Scalars['uuid'];
  id: Scalars['uuid'];
  keyResults: Array<Key_Result>;
  keyResults_aggregate: Key_Result_Aggregate;
  remark: Scalars['String'];
  title: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
  weight: Scalars['numeric'];
};


export type ObjectiveKeyResultsArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};


export type ObjectiveKeyResults_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};

export type Objective_Aggregate = {
  __typename?: 'objective_aggregate';
  aggregate?: Maybe<Objective_Aggregate_Fields>;
  nodes: Array<Objective>;
};

export type Objective_Aggregate_Fields = {
  __typename?: 'objective_aggregate_fields';
  avg?: Maybe<Objective_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Objective_Max_Fields>;
  min?: Maybe<Objective_Min_Fields>;
  stddev?: Maybe<Objective_Stddev_Fields>;
  stddev_pop?: Maybe<Objective_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Objective_Stddev_Samp_Fields>;
  sum?: Maybe<Objective_Sum_Fields>;
  var_pop?: Maybe<Objective_Var_Pop_Fields>;
  var_samp?: Maybe<Objective_Var_Samp_Fields>;
  variance?: Maybe<Objective_Variance_Fields>;
};


export type Objective_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Objective_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Objective_Aggregate_Order_By = {
  avg?: Maybe<Objective_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Objective_Max_Order_By>;
  min?: Maybe<Objective_Min_Order_By>;
  stddev?: Maybe<Objective_Stddev_Order_By>;
  stddev_pop?: Maybe<Objective_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Objective_Stddev_Samp_Order_By>;
  sum?: Maybe<Objective_Sum_Order_By>;
  var_pop?: Maybe<Objective_Var_Pop_Order_By>;
  var_samp?: Maybe<Objective_Var_Samp_Order_By>;
  variance?: Maybe<Objective_Variance_Order_By>;
};

export type Objective_Arr_Rel_Insert_Input = {
  data: Array<Objective_Insert_Input>;
  on_conflict?: Maybe<Objective_On_Conflict>;
};

export type Objective_Avg_Fields = {
  __typename?: 'objective_avg_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Avg_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Objective_Bool_Exp>>>;
  _not?: Maybe<Objective_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Objective_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  cycle?: Maybe<Cycle_Bool_Exp>;
  cycleId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  keyResults?: Maybe<Key_Result_Bool_Exp>;
  remark?: Maybe<String_Comparison_Exp>;
  title?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  weight?: Maybe<Numeric_Comparison_Exp>;
};

export enum Objective_Constraint {
  ObjectivePkey = 'Objective_pkey'
}

export type Objective_Inc_Input = {
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycle?: Maybe<Cycle_Obj_Rel_Insert_Input>;
  cycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  keyResults?: Maybe<Key_Result_Arr_Rel_Insert_Input>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Max_Fields = {
  __typename?: 'objective_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Objective_Min_Fields = {
  __typename?: 'objective_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Objective_Mutation_Response = {
  __typename?: 'objective_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Objective>;
};

export type Objective_Obj_Rel_Insert_Input = {
  data: Objective_Insert_Input;
  on_conflict?: Maybe<Objective_On_Conflict>;
};

export type Objective_On_Conflict = {
  constraint: Objective_Constraint;
  update_columns: Array<Objective_Update_Column>;
  where?: Maybe<Objective_Bool_Exp>;
};

export type Objective_Order_By = {
  createdAt?: Maybe<Order_By>;
  cycle?: Maybe<Cycle_Order_By>;
  cycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  keyResults_aggregate?: Maybe<Key_Result_Aggregate_Order_By>;
  remark?: Maybe<Order_By>;
  title?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  weight?: Maybe<Order_By>;
};

export type Objective_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Objective_Select_Column {
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  Id = 'id',
  Remark = 'remark',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type Objective_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  cycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  remark?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Stddev_Fields = {
  __typename?: 'objective_stddev_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Stddev_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Stddev_Pop_Fields = {
  __typename?: 'objective_stddev_pop_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Stddev_Pop_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Stddev_Samp_Fields = {
  __typename?: 'objective_stddev_samp_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Stddev_Samp_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Sum_Fields = {
  __typename?: 'objective_sum_fields';
  weight?: Maybe<Scalars['numeric']>;
};

export type Objective_Sum_Order_By = {
  weight?: Maybe<Order_By>;
};

export enum Objective_Update_Column {
  CreatedAt = 'createdAt',
  CycleId = 'cycleId',
  Id = 'id',
  Remark = 'remark',
  Title = 'title',
  UpdatedAt = 'updatedAt',
  Weight = 'weight'
}

export type Objective_Var_Pop_Fields = {
  __typename?: 'objective_var_pop_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Var_Pop_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Var_Samp_Fields = {
  __typename?: 'objective_var_samp_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Var_Samp_Order_By = {
  weight?: Maybe<Order_By>;
};

export type Objective_Variance_Fields = {
  __typename?: 'objective_variance_fields';
  weight?: Maybe<Scalars['Float']>;
};

export type Objective_Variance_Order_By = {
  weight?: Maybe<Order_By>;
};

export enum Order_By {
  Asc = 'asc',
  AscNullsFirst = 'asc_nulls_first',
  AscNullsLast = 'asc_nulls_last',
  Desc = 'desc',
  DescNullsFirst = 'desc_nulls_first',
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  cycle: Array<Cycle>;
  cycle_aggregate: Cycle_Aggregate;
  cycle_by_pk?: Maybe<Cycle>;
  group: Array<Group>;
  group_aggregate: Group_Aggregate;
  group_by_pk?: Maybe<Group>;
  group_cycle: Array<Group_Cycle>;
  group_cycle_aggregate: Group_Cycle_Aggregate;
  group_cycle_by_pk?: Maybe<Group_Cycle>;
  key_result: Array<Key_Result>;
  key_result_aggregate: Key_Result_Aggregate;
  key_result_by_pk?: Maybe<Key_Result>;
  objective: Array<Objective>;
  objective_aggregate: Objective_Aggregate;
  objective_by_pk?: Maybe<Objective>;
  record: Array<Record>;
  record_aggregate: Record_Aggregate;
  record_by_pk?: Maybe<Record>;
  user: Array<User>;
  userConfig: Array<User_Config>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_config_aggregate: User_Config_Aggregate;
  user_config_by_pk?: Maybe<User_Config>;
};


export type Query_RootCycleArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type Query_RootCycle_AggregateArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type Query_RootCycle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Query_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootGroup_CycleArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type Query_RootGroup_Cycle_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type Query_RootGroup_Cycle_By_PkArgs = {
  cycleId: Scalars['uuid'];
  groupId: Scalars['uuid'];
};


export type Query_RootKey_ResultArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};


export type Query_RootKey_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};


export type Query_RootKey_Result_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootObjectiveArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};


export type Query_RootObjective_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};


export type Query_RootObjective_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootRecordArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};


export type Query_RootRecord_AggregateArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};


export type Query_RootRecord_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUserConfigArgs = {
  distinct_on?: Maybe<Array<User_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Config_Order_By>>;
  where?: Maybe<User_Config_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  auth0_user_id: Scalars['String'];
  id: Scalars['uuid'];
};


export type Query_RootUser_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Config_Order_By>>;
  where?: Maybe<User_Config_Bool_Exp>;
};


export type Query_RootUser_Config_By_PkArgs = {
  userId: Scalars['uuid'];
};

export type Record = {
  __typename?: 'record';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  keyResult: Key_Result;
  keyResultId: Scalars['uuid'];
  quantity: Scalars['numeric'];
  remark: Scalars['String'];
  updatedAt: Scalars['timestamptz'];
};

export type Record_Aggregate = {
  __typename?: 'record_aggregate';
  aggregate?: Maybe<Record_Aggregate_Fields>;
  nodes: Array<Record>;
};

export type Record_Aggregate_Fields = {
  __typename?: 'record_aggregate_fields';
  avg?: Maybe<Record_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Record_Max_Fields>;
  min?: Maybe<Record_Min_Fields>;
  stddev?: Maybe<Record_Stddev_Fields>;
  stddev_pop?: Maybe<Record_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Record_Stddev_Samp_Fields>;
  sum?: Maybe<Record_Sum_Fields>;
  var_pop?: Maybe<Record_Var_Pop_Fields>;
  var_samp?: Maybe<Record_Var_Samp_Fields>;
  variance?: Maybe<Record_Variance_Fields>;
};


export type Record_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Record_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type Record_Aggregate_Order_By = {
  avg?: Maybe<Record_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Record_Max_Order_By>;
  min?: Maybe<Record_Min_Order_By>;
  stddev?: Maybe<Record_Stddev_Order_By>;
  stddev_pop?: Maybe<Record_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Record_Stddev_Samp_Order_By>;
  sum?: Maybe<Record_Sum_Order_By>;
  var_pop?: Maybe<Record_Var_Pop_Order_By>;
  var_samp?: Maybe<Record_Var_Samp_Order_By>;
  variance?: Maybe<Record_Variance_Order_By>;
};

export type Record_Arr_Rel_Insert_Input = {
  data: Array<Record_Insert_Input>;
  on_conflict?: Maybe<Record_On_Conflict>;
};

export type Record_Avg_Fields = {
  __typename?: 'record_avg_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Avg_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Record_Bool_Exp>>>;
  _not?: Maybe<Record_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Record_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  keyResult?: Maybe<Key_Result_Bool_Exp>;
  keyResultId?: Maybe<Uuid_Comparison_Exp>;
  quantity?: Maybe<Numeric_Comparison_Exp>;
  remark?: Maybe<String_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
};

export enum Record_Constraint {
  RecordPkey = 'Record_pkey'
}

export type Record_Inc_Input = {
  quantity?: Maybe<Scalars['numeric']>;
};

export type Record_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  keyResult?: Maybe<Key_Result_Obj_Rel_Insert_Input>;
  keyResultId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Record_Max_Fields = {
  __typename?: 'record_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  keyResultId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Record_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  keyResultId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Record_Min_Fields = {
  __typename?: 'record_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  keyResultId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Record_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  keyResultId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Record_Mutation_Response = {
  __typename?: 'record_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<Record>;
};

export type Record_Obj_Rel_Insert_Input = {
  data: Record_Insert_Input;
  on_conflict?: Maybe<Record_On_Conflict>;
};

export type Record_On_Conflict = {
  constraint: Record_Constraint;
  update_columns: Array<Record_Update_Column>;
  where?: Maybe<Record_Bool_Exp>;
};

export type Record_Order_By = {
  createdAt?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  keyResult?: Maybe<Key_Result_Order_By>;
  keyResultId?: Maybe<Order_By>;
  quantity?: Maybe<Order_By>;
  remark?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
};

export type Record_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

export enum Record_Select_Column {
  CreatedAt = 'createdAt',
  Id = 'id',
  KeyResultId = 'keyResultId',
  Quantity = 'quantity',
  Remark = 'remark',
  UpdatedAt = 'updatedAt'
}

export type Record_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  keyResultId?: Maybe<Scalars['uuid']>;
  quantity?: Maybe<Scalars['numeric']>;
  remark?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

export type Record_Stddev_Fields = {
  __typename?: 'record_stddev_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Stddev_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Stddev_Pop_Fields = {
  __typename?: 'record_stddev_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Stddev_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Stddev_Samp_Fields = {
  __typename?: 'record_stddev_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Stddev_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Sum_Fields = {
  __typename?: 'record_sum_fields';
  quantity?: Maybe<Scalars['numeric']>;
};

export type Record_Sum_Order_By = {
  quantity?: Maybe<Order_By>;
};

export enum Record_Update_Column {
  CreatedAt = 'createdAt',
  Id = 'id',
  KeyResultId = 'keyResultId',
  Quantity = 'quantity',
  Remark = 'remark',
  UpdatedAt = 'updatedAt'
}

export type Record_Var_Pop_Fields = {
  __typename?: 'record_var_pop_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Var_Pop_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Var_Samp_Fields = {
  __typename?: 'record_var_samp_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Var_Samp_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type Record_Variance_Fields = {
  __typename?: 'record_variance_fields';
  quantity?: Maybe<Scalars['Float']>;
};

export type Record_Variance_Order_By = {
  quantity?: Maybe<Order_By>;
};

export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  cycle: Array<Cycle>;
  cycle_aggregate: Cycle_Aggregate;
  cycle_by_pk?: Maybe<Cycle>;
  group: Array<Group>;
  group_aggregate: Group_Aggregate;
  group_by_pk?: Maybe<Group>;
  group_cycle: Array<Group_Cycle>;
  group_cycle_aggregate: Group_Cycle_Aggregate;
  group_cycle_by_pk?: Maybe<Group_Cycle>;
  key_result: Array<Key_Result>;
  key_result_aggregate: Key_Result_Aggregate;
  key_result_by_pk?: Maybe<Key_Result>;
  objective: Array<Objective>;
  objective_aggregate: Objective_Aggregate;
  objective_by_pk?: Maybe<Objective>;
  record: Array<Record>;
  record_aggregate: Record_Aggregate;
  record_by_pk?: Maybe<Record>;
  user: Array<User>;
  userConfig: Array<User_Config>;
  user_aggregate: User_Aggregate;
  user_by_pk?: Maybe<User>;
  user_config_aggregate: User_Config_Aggregate;
  user_config_by_pk?: Maybe<User_Config>;
};


export type Subscription_RootCycleArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type Subscription_RootCycle_AggregateArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type Subscription_RootCycle_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroupArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type Subscription_RootGroup_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootGroup_CycleArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type Subscription_RootGroup_Cycle_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Cycle_Order_By>>;
  where?: Maybe<Group_Cycle_Bool_Exp>;
};


export type Subscription_RootGroup_Cycle_By_PkArgs = {
  cycleId: Scalars['uuid'];
  groupId: Scalars['uuid'];
};


export type Subscription_RootKey_ResultArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};


export type Subscription_RootKey_Result_AggregateArgs = {
  distinct_on?: Maybe<Array<Key_Result_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Key_Result_Order_By>>;
  where?: Maybe<Key_Result_Bool_Exp>;
};


export type Subscription_RootKey_Result_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootObjectiveArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};


export type Subscription_RootObjective_AggregateArgs = {
  distinct_on?: Maybe<Array<Objective_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Objective_Order_By>>;
  where?: Maybe<Objective_Bool_Exp>;
};


export type Subscription_RootObjective_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootRecordArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};


export type Subscription_RootRecord_AggregateArgs = {
  distinct_on?: Maybe<Array<Record_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Record_Order_By>>;
  where?: Maybe<Record_Bool_Exp>;
};


export type Subscription_RootRecord_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUserConfigArgs = {
  distinct_on?: Maybe<Array<User_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Config_Order_By>>;
  where?: Maybe<User_Config_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Order_By>>;
  where?: Maybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  auth0_user_id: Scalars['String'];
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Config_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Config_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Config_Order_By>>;
  where?: Maybe<User_Config_Bool_Exp>;
};


export type Subscription_RootUser_Config_By_PkArgs = {
  userId: Scalars['uuid'];
};


export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

export type User = {
  __typename?: 'user';
  auth0_user_id: Scalars['String'];
  avatarURL?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  cycles: Array<Cycle>;
  cycles_aggregate: Cycle_Aggregate;
  email?: Maybe<Scalars['String']>;
  groups: Array<Group>;
  groups_aggregate: Group_Aggregate;
  id: Scalars['uuid'];
  name: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  userConfig?: Maybe<User_Config>;
};


export type UserCyclesArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type UserCycles_AggregateArgs = {
  distinct_on?: Maybe<Array<Cycle_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Cycle_Order_By>>;
  where?: Maybe<Cycle_Bool_Exp>;
};


export type UserGroupsArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};


export type UserGroups_AggregateArgs = {
  distinct_on?: Maybe<Array<Group_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Group_Order_By>>;
  where?: Maybe<Group_Bool_Exp>;
};

export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
};


export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Max_Order_By>;
  min?: Maybe<User_Min_Order_By>;
};

export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  _not?: Maybe<User_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>;
  auth0_user_id?: Maybe<String_Comparison_Exp>;
  avatarURL?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  cycles?: Maybe<Cycle_Bool_Exp>;
  email?: Maybe<String_Comparison_Exp>;
  groups?: Maybe<Group_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  userConfig?: Maybe<User_Config_Bool_Exp>;
};

export type User_Config = {
  __typename?: 'user_config';
  createdAt: Scalars['timestamptz'];
  curSelectedCycleId?: Maybe<Scalars['uuid']>;
  id: Scalars['uuid'];
  updatedAt: Scalars['timestamptz'];
  user: User;
  userId: Scalars['uuid'];
};

export type User_Config_Aggregate = {
  __typename?: 'user_config_aggregate';
  aggregate?: Maybe<User_Config_Aggregate_Fields>;
  nodes: Array<User_Config>;
};

export type User_Config_Aggregate_Fields = {
  __typename?: 'user_config_aggregate_fields';
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<User_Config_Max_Fields>;
  min?: Maybe<User_Config_Min_Fields>;
};


export type User_Config_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Config_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

export type User_Config_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<User_Config_Max_Order_By>;
  min?: Maybe<User_Config_Min_Order_By>;
};

export type User_Config_Arr_Rel_Insert_Input = {
  data: Array<User_Config_Insert_Input>;
  on_conflict?: Maybe<User_Config_On_Conflict>;
};

export type User_Config_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Config_Bool_Exp>>>;
  _not?: Maybe<User_Config_Bool_Exp>;
  _or?: Maybe<Array<Maybe<User_Config_Bool_Exp>>>;
  createdAt?: Maybe<Timestamptz_Comparison_Exp>;
  curSelectedCycleId?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  updatedAt?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<User_Bool_Exp>;
  userId?: Maybe<Uuid_Comparison_Exp>;
};

export enum User_Config_Constraint {
  UserConfigPkey = 'user_config_pkey',
  UserConfigUserIdKey = 'user_config_user_id_key'
}

export type User_Config_Insert_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  curSelectedCycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<User_Obj_Rel_Insert_Input>;
  userId?: Maybe<Scalars['uuid']>;
};

export type User_Config_Max_Fields = {
  __typename?: 'user_config_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  curSelectedCycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export type User_Config_Max_Order_By = {
  createdAt?: Maybe<Order_By>;
  curSelectedCycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type User_Config_Min_Fields = {
  __typename?: 'user_config_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  curSelectedCycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export type User_Config_Min_Order_By = {
  createdAt?: Maybe<Order_By>;
  curSelectedCycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  userId?: Maybe<Order_By>;
};

export type User_Config_Mutation_Response = {
  __typename?: 'user_config_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User_Config>;
};

export type User_Config_Obj_Rel_Insert_Input = {
  data: User_Config_Insert_Input;
  on_conflict?: Maybe<User_Config_On_Conflict>;
};

export type User_Config_On_Conflict = {
  constraint: User_Config_Constraint;
  update_columns: Array<User_Config_Update_Column>;
  where?: Maybe<User_Config_Bool_Exp>;
};

export type User_Config_Order_By = {
  createdAt?: Maybe<Order_By>;
  curSelectedCycleId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  updatedAt?: Maybe<Order_By>;
  user?: Maybe<User_Order_By>;
  userId?: Maybe<Order_By>;
};

export type User_Config_Pk_Columns_Input = {
  userId: Scalars['uuid'];
};

export enum User_Config_Select_Column {
  CreatedAt = 'createdAt',
  CurSelectedCycleId = 'curSelectedCycleId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export type User_Config_Set_Input = {
  createdAt?: Maybe<Scalars['timestamptz']>;
  curSelectedCycleId?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

export enum User_Config_Update_Column {
  CreatedAt = 'createdAt',
  CurSelectedCycleId = 'curSelectedCycleId',
  Id = 'id',
  UpdatedAt = 'updatedAt',
  UserId = 'userId'
}

export enum User_Constraint {
  UserEmailKey = 'User_email_key',
  UserIdKey = 'User_id_key',
  UserAuth0UserIdKey = 'user_auth0_user_id_key',
  UserPkey = 'user_pkey'
}

export type User_Insert_Input = {
  auth0_user_id?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  cycles?: Maybe<Cycle_Arr_Rel_Insert_Input>;
  email?: Maybe<Scalars['String']>;
  groups?: Maybe<Group_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userConfig?: Maybe<User_Config_Obj_Rel_Insert_Input>;
};

export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  auth0_user_id?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type User_Max_Order_By = {
  auth0_user_id?: Maybe<Order_By>;
  avatarURL?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  auth0_user_id?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export type User_Min_Order_By = {
  auth0_user_id?: Maybe<Order_By>;
  avatarURL?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  email?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  affected_rows: Scalars['Int'];
  returning: Array<User>;
};

export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  on_conflict?: Maybe<User_On_Conflict>;
};

export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns: Array<User_Update_Column>;
  where?: Maybe<User_Bool_Exp>;
};

export type User_Order_By = {
  auth0_user_id?: Maybe<Order_By>;
  avatarURL?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  cycles_aggregate?: Maybe<Cycle_Aggregate_Order_By>;
  email?: Maybe<Order_By>;
  groups_aggregate?: Maybe<Group_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  userConfig?: Maybe<User_Config_Order_By>;
};

export type User_Pk_Columns_Input = {
  auth0_user_id: Scalars['String'];
  id: Scalars['uuid'];
};

export enum User_Select_Column {
  Auth0UserId = 'auth0_user_id',
  AvatarUrl = 'avatarURL',
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}

export type User_Set_Input = {
  auth0_user_id?: Maybe<Scalars['String']>;
  avatarURL?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

export enum User_Update_Column {
  Auth0UserId = 'auth0_user_id',
  AvatarUrl = 'avatarURL',
  CreatedAt = 'created_at',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  UpdatedAt = 'updated_at'
}


export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type RecordResFragment = (
  { __typename?: 'record' }
  & Pick<Record, 'id' | 'remark' | 'quantity' | 'createdAt'>
);

export type KeyResultResFragment = (
  { __typename?: 'key_result' }
  & Pick<Key_Result, 'id' | 'title' | 'unit' | 'total' | 'weight' | 'remark'>
  & { records: Array<(
    { __typename?: 'record' }
    & RecordResFragment
  )> }
);

export type ObjectiveResFragment = (
  { __typename?: 'objective' }
  & Pick<Objective, 'id' | 'title' | 'weight' | 'remark'>
  & { keyResults: Array<(
    { __typename?: 'key_result' }
    & KeyResultResFragment
  )> }
);

export type CycleResFragment = (
  { __typename?: 'cycle' }
  & Pick<Cycle, 'id' | 'startAt' | 'endAt' | 'remark' | 'predictScore' | 'title'>
  & { objectives: Array<(
    { __typename?: 'objective' }
    & ObjectiveResFragment
  )> }
);

export type GetCyclesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCyclesQuery = (
  { __typename?: 'query_root' }
  & { cycle: Array<(
    { __typename?: 'cycle' }
    & CycleResFragment
  )> }
);

export type CreateCycleMutationVariables = Exact<{
  object: Cycle_Insert_Input;
}>;


export type CreateCycleMutation = (
  { __typename?: 'mutation_root' }
  & { insert_cycle_one?: Maybe<(
    { __typename?: 'cycle' }
    & Pick<Cycle, 'id'>
  )> }
);

export type CreateKeyResultMutationVariables = Exact<{
  object: Key_Result_Insert_Input;
}>;


export type CreateKeyResultMutation = (
  { __typename?: 'mutation_root' }
  & { insert_key_result_one?: Maybe<(
    { __typename?: 'key_result' }
    & Pick<Key_Result, 'id'>
  )> }
);

export type DeleteCycleMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteCycleMutation = (
  { __typename?: 'mutation_root' }
  & { delete_cycle_by_pk?: Maybe<(
    { __typename?: 'cycle' }
    & Pick<Cycle, 'id'>
  )> }
);

export type UpdateKrMutationVariables = Exact<{
  krSet: Key_Result_Set_Input;
  krId: Scalars['uuid'];
  objId: Scalars['uuid'];
  objSet: Objective_Set_Input;
}>;


export type UpdateKrMutation = (
  { __typename?: 'mutation_root' }
  & { update_key_result_by_pk?: Maybe<(
    { __typename?: 'key_result' }
    & Pick<Key_Result, 'id'>
  )>, update_objective_by_pk?: Maybe<(
    { __typename?: 'objective' }
    & Pick<Objective, 'id'>
  )> }
);

export type AddRecordMutationVariables = Exact<{
  object: Record_Insert_Input;
}>;


export type AddRecordMutation = (
  { __typename?: 'mutation_root' }
  & { insert_record_one?: Maybe<(
    { __typename?: 'record' }
    & Pick<Record, 'id'>
  )> }
);

export type UpdateCycleMutationVariables = Exact<{
  id: Scalars['uuid'];
  set: Cycle_Set_Input;
}>;


export type UpdateCycleMutation = (
  { __typename?: 'mutation_root' }
  & { update_cycle_by_pk?: Maybe<(
    { __typename?: 'cycle' }
    & Pick<Cycle, 'id'>
  )> }
);

export type DeleteKrMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteKrMutation = (
  { __typename?: 'mutation_root' }
  & { delete_key_result_by_pk?: Maybe<(
    { __typename?: 'key_result' }
    & Pick<Key_Result, 'id' | 'objectiveId'>
  )> }
);

export type DeleteObjMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteObjMutation = (
  { __typename?: 'mutation_root' }
  & { delete_objective_by_pk?: Maybe<(
    { __typename?: 'objective' }
    & Pick<Objective, 'id'>
  )> }
);

export type DeleteRecordMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteRecordMutation = (
  { __typename?: 'mutation_root' }
  & { delete_record_by_pk?: Maybe<(
    { __typename?: 'record' }
    & Pick<Record, 'id'>
  )> }
);

export type CreateObjectiveMutationVariables = Exact<{
  object: Objective_Insert_Input;
}>;


export type CreateObjectiveMutation = (
  { __typename?: 'mutation_root' }
  & { insert_objective_one?: Maybe<(
    { __typename?: 'objective' }
    & Pick<Objective, 'id'>
  )> }
);

export type GetObjectivesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetObjectivesQuery = (
  { __typename?: 'query_root' }
  & { objective: Array<(
    { __typename?: 'objective' }
    & ObjectiveResFragment
  )> }
);

export type GetUserQueryVariables = Exact<{
  auth0UserId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'query_root' }
  & { user: Array<(
    { __typename?: 'user' }
    & Pick<User, 'id' | 'name' | 'email'>
    & { userConfig?: Maybe<(
      { __typename?: 'user_config' }
      & Pick<User_Config, 'id' | 'curSelectedCycleId'>
    )> }
  )> }
);

export type ChangeCurCycleIdMutationVariables = Exact<{
  userId: Scalars['uuid'];
  curSelectedCycleId: Scalars['uuid'];
}>;


export type ChangeCurCycleIdMutation = (
  { __typename?: 'mutation_root' }
  & { update_user_config_by_pk?: Maybe<(
    { __typename?: 'user_config' }
    & Pick<User_Config, 'id' | 'curSelectedCycleId'>
  )> }
);
