/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCycles
// ====================================================

export interface GetCycles_cycle_objectives_keyResults_records {
  __typename: "record";
  id: any;
  remark: string;
  quantity: any;
  createdAt: any;
}

export interface GetCycles_cycle_objectives_keyResults {
  __typename: "key_result";
  id: any;
  title: string;
  unit: string;
  total: any;
  weight: any;
  remark: string;
  /**
   * An array relationship
   */
  records: GetCycles_cycle_objectives_keyResults_records[];
}

export interface GetCycles_cycle_objectives {
  __typename: "objective";
  id: any;
  title: string;
  weight: any;
  remark: string;
  /**
   * An array relationship
   */
  keyResults: GetCycles_cycle_objectives_keyResults[];
}

export interface GetCycles_cycle {
  __typename: "cycle";
  id: any;
  startAt: any;
  endAt: any;
  remark: string;
  predict_score: any | null;
  title: string;
  /**
   * An array relationship
   */
  objectives: GetCycles_cycle_objectives[];
}

export interface GetCycles {
  /**
   * fetch data from the table: "cycle"
   */
  cycle: GetCycles_cycle[];
}
