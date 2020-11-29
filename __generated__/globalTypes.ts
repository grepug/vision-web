/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * unique or primary key constraints on table "cycle"
 */
export enum cycle_constraint {
  Cycle_pkey = "Cycle_pkey",
}

/**
 * update columns of table "cycle"
 */
export enum cycle_update_column {
  createdAt = "createdAt",
  endAt = "endAt",
  id = "id",
  predict_score = "predict_score",
  remark = "remark",
  startAt = "startAt",
  title = "title",
  updatedAt = "updatedAt",
  userId = "userId",
}

/**
 * unique or primary key constraints on table "group"
 */
export enum group_constraint {
  Group_pkey = "Group_pkey",
}

/**
 * update columns of table "group"
 */
export enum group_update_column {
  created_at = "created_at",
  creator_user_id = "creator_user_id",
  id = "id",
  updated_at = "updated_at",
}

/**
 * unique or primary key constraints on table "key_result"
 */
export enum key_result_constraint {
  KeyResult_pkey = "KeyResult_pkey",
}

/**
 * update columns of table "key_result"
 */
export enum key_result_update_column {
  created_at = "created_at",
  id = "id",
  objective_id = "objective_id",
  remark = "remark",
  title = "title",
  total = "total",
  unit = "unit",
  updated_at = "updated_at",
  weight = "weight",
}

/**
 * unique or primary key constraints on table "objective"
 */
export enum objective_constraint {
  Objective_pkey = "Objective_pkey",
}

/**
 * update columns of table "objective"
 */
export enum objective_update_column {
  created_at = "created_at",
  cycle_id = "cycle_id",
  id = "id",
  remark = "remark",
  title = "title",
  updated_at = "updated_at",
  weight = "weight",
}

/**
 * unique or primary key constraints on table "record"
 */
export enum record_constraint {
  Record_pkey = "Record_pkey",
}

/**
 * update columns of table "record"
 */
export enum record_update_column {
  createdAt = "createdAt",
  id = "id",
  key_result_id = "key_result_id",
  quantity = "quantity",
  remark = "remark",
  updatedAt = "updatedAt",
}

/**
 * unique or primary key constraints on table "user"
 */
export enum user_constraint {
  User_email_key = "User_email_key",
  User_id_key = "User_id_key",
  user_auth0_user_id_key = "user_auth0_user_id_key",
  user_pkey = "user_pkey",
}

/**
 * update columns of table "user"
 */
export enum user_update_column {
  auth0_user_id = "auth0_user_id",
  created_at = "created_at",
  email = "email",
  id = "id",
  name = "name",
  updated_at = "updated_at",
}

/**
 * expression to compare columns of type String. All fields are combined with logical 'AND'.
 */
export interface String_comparison_exp {
  _eq?: string | null;
  _gt?: string | null;
  _gte?: string | null;
  _ilike?: string | null;
  _in?: string[] | null;
  _is_null?: boolean | null;
  _like?: string | null;
  _lt?: string | null;
  _lte?: string | null;
  _neq?: string | null;
  _nilike?: string | null;
  _nin?: string[] | null;
  _nlike?: string | null;
  _nsimilar?: string | null;
  _similar?: string | null;
}

/**
 * input type for inserting array relation for remote table "cycle"
 */
export interface cycle_arr_rel_insert_input {
  data: cycle_insert_input[];
  on_conflict?: cycle_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "cycle". All fields are combined with a logical 'AND'.
 */
export interface cycle_bool_exp {
  _and?: (cycle_bool_exp | null)[] | null;
  _not?: cycle_bool_exp | null;
  _or?: (cycle_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  endAt?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  objectives?: objective_bool_exp | null;
  predict_score?: numeric_comparison_exp | null;
  remark?: String_comparison_exp | null;
  startAt?: timestamptz_comparison_exp | null;
  title?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
  user?: user_bool_exp | null;
  userId?: uuid_comparison_exp | null;
}

/**
 * input type for inserting data into table "cycle"
 */
export interface cycle_insert_input {
  createdAt?: any | null;
  endAt?: any | null;
  id?: any | null;
  objectives?: objective_arr_rel_insert_input | null;
  predict_score?: any | null;
  remark?: string | null;
  startAt?: any | null;
  title?: string | null;
  updatedAt?: any | null;
  user?: user_obj_rel_insert_input | null;
  userId?: any | null;
}

/**
 * input type for inserting object relation for remote table "cycle"
 */
export interface cycle_obj_rel_insert_input {
  data: cycle_insert_input;
  on_conflict?: cycle_on_conflict | null;
}

/**
 * on conflict condition type for table "cycle"
 */
export interface cycle_on_conflict {
  constraint: cycle_constraint;
  update_columns: cycle_update_column[];
  where?: cycle_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "group"
 */
export interface group_arr_rel_insert_input {
  data: group_insert_input[];
  on_conflict?: group_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "group". All fields are combined with a logical 'AND'.
 */
export interface group_bool_exp {
  _and?: (group_bool_exp | null)[] | null;
  _not?: group_bool_exp | null;
  _or?: (group_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  creator?: user_bool_exp | null;
  creator_user_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "group"
 */
export interface group_insert_input {
  created_at?: any | null;
  creator?: user_obj_rel_insert_input | null;
  creator_user_id?: any | null;
  id?: any | null;
  updated_at?: any | null;
}

/**
 * on conflict condition type for table "group"
 */
export interface group_on_conflict {
  constraint: group_constraint;
  update_columns: group_update_column[];
  where?: group_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "key_result"
 */
export interface key_result_arr_rel_insert_input {
  data: key_result_insert_input[];
  on_conflict?: key_result_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "key_result". All fields are combined with a logical 'AND'.
 */
export interface key_result_bool_exp {
  _and?: (key_result_bool_exp | null)[] | null;
  _not?: key_result_bool_exp | null;
  _or?: (key_result_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  objective?: objective_bool_exp | null;
  objective_id?: uuid_comparison_exp | null;
  records?: record_bool_exp | null;
  remark?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  total?: numeric_comparison_exp | null;
  unit?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  weight?: numeric_comparison_exp | null;
}

/**
 * input type for inserting data into table "key_result"
 */
export interface key_result_insert_input {
  created_at?: any | null;
  id?: any | null;
  objective?: objective_obj_rel_insert_input | null;
  objective_id?: any | null;
  records?: record_arr_rel_insert_input | null;
  remark?: string | null;
  title?: string | null;
  total?: any | null;
  unit?: string | null;
  updated_at?: any | null;
  weight?: any | null;
}

/**
 * input type for inserting object relation for remote table "key_result"
 */
export interface key_result_obj_rel_insert_input {
  data: key_result_insert_input;
  on_conflict?: key_result_on_conflict | null;
}

/**
 * on conflict condition type for table "key_result"
 */
export interface key_result_on_conflict {
  constraint: key_result_constraint;
  update_columns: key_result_update_column[];
  where?: key_result_bool_exp | null;
}

/**
 * expression to compare columns of type numeric. All fields are combined with logical 'AND'.
 */
export interface numeric_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * input type for inserting array relation for remote table "objective"
 */
export interface objective_arr_rel_insert_input {
  data: objective_insert_input[];
  on_conflict?: objective_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "objective". All fields are combined with a logical 'AND'.
 */
export interface objective_bool_exp {
  _and?: (objective_bool_exp | null)[] | null;
  _not?: objective_bool_exp | null;
  _or?: (objective_bool_exp | null)[] | null;
  created_at?: timestamptz_comparison_exp | null;
  cycle?: cycle_bool_exp | null;
  cycle_id?: uuid_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  keyResults?: key_result_bool_exp | null;
  remark?: String_comparison_exp | null;
  title?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
  weight?: numeric_comparison_exp | null;
}

/**
 * input type for inserting data into table "objective"
 */
export interface objective_insert_input {
  created_at?: any | null;
  cycle?: cycle_obj_rel_insert_input | null;
  cycle_id?: any | null;
  id?: any | null;
  keyResults?: key_result_arr_rel_insert_input | null;
  remark?: string | null;
  title?: string | null;
  updated_at?: any | null;
  weight?: any | null;
}

/**
 * input type for inserting object relation for remote table "objective"
 */
export interface objective_obj_rel_insert_input {
  data: objective_insert_input;
  on_conflict?: objective_on_conflict | null;
}

/**
 * on conflict condition type for table "objective"
 */
export interface objective_on_conflict {
  constraint: objective_constraint;
  update_columns: objective_update_column[];
  where?: objective_bool_exp | null;
}

/**
 * input type for inserting array relation for remote table "record"
 */
export interface record_arr_rel_insert_input {
  data: record_insert_input[];
  on_conflict?: record_on_conflict | null;
}

/**
 * Boolean expression to filter rows from the table "record". All fields are combined with a logical 'AND'.
 */
export interface record_bool_exp {
  _and?: (record_bool_exp | null)[] | null;
  _not?: record_bool_exp | null;
  _or?: (record_bool_exp | null)[] | null;
  createdAt?: timestamptz_comparison_exp | null;
  id?: uuid_comparison_exp | null;
  keyResult?: key_result_bool_exp | null;
  key_result_id?: uuid_comparison_exp | null;
  quantity?: numeric_comparison_exp | null;
  remark?: String_comparison_exp | null;
  updatedAt?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "record"
 */
export interface record_insert_input {
  createdAt?: any | null;
  id?: any | null;
  keyResult?: key_result_obj_rel_insert_input | null;
  key_result_id?: any | null;
  quantity?: any | null;
  remark?: string | null;
  updatedAt?: any | null;
}

/**
 * on conflict condition type for table "record"
 */
export interface record_on_conflict {
  constraint: record_constraint;
  update_columns: record_update_column[];
  where?: record_bool_exp | null;
}

/**
 * expression to compare columns of type timestamptz. All fields are combined with logical 'AND'.
 */
export interface timestamptz_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

/**
 * Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'.
 */
export interface user_bool_exp {
  _and?: (user_bool_exp | null)[] | null;
  _not?: user_bool_exp | null;
  _or?: (user_bool_exp | null)[] | null;
  auth0_user_id?: String_comparison_exp | null;
  created_at?: timestamptz_comparison_exp | null;
  cycles?: cycle_bool_exp | null;
  email?: String_comparison_exp | null;
  groups?: group_bool_exp | null;
  id?: uuid_comparison_exp | null;
  name?: String_comparison_exp | null;
  updated_at?: timestamptz_comparison_exp | null;
}

/**
 * input type for inserting data into table "user"
 */
export interface user_insert_input {
  auth0_user_id?: string | null;
  created_at?: any | null;
  cycles?: cycle_arr_rel_insert_input | null;
  email?: string | null;
  groups?: group_arr_rel_insert_input | null;
  id?: any | null;
  name?: string | null;
  updated_at?: any | null;
}

/**
 * input type for inserting object relation for remote table "user"
 */
export interface user_obj_rel_insert_input {
  data: user_insert_input;
  on_conflict?: user_on_conflict | null;
}

/**
 * on conflict condition type for table "user"
 */
export interface user_on_conflict {
  constraint: user_constraint;
  update_columns: user_update_column[];
  where?: user_bool_exp | null;
}

/**
 * expression to compare columns of type uuid. All fields are combined with logical 'AND'.
 */
export interface uuid_comparison_exp {
  _eq?: any | null;
  _gt?: any | null;
  _gte?: any | null;
  _in?: any[] | null;
  _is_null?: boolean | null;
  _lt?: any | null;
  _lte?: any | null;
  _neq?: any | null;
  _nin?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
