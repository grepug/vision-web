/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { cycle_insert_input } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: createCycle
// ====================================================

export interface createCycle_insert_cycle_returning_objectives_key_results_records {
  __typename: "record";
  id: any;
}

export interface createCycle_insert_cycle_returning_objectives_key_results {
  __typename: "key_result";
  id: any;
  /**
   * An array relationship
   */
  records: createCycle_insert_cycle_returning_objectives_key_results_records[];
}

export interface createCycle_insert_cycle_returning_objectives {
  __typename: "objective";
  id: any;
  /**
   * An array relationship
   */
  key_results: createCycle_insert_cycle_returning_objectives_key_results[];
}

export interface createCycle_insert_cycle_returning {
  __typename: "cycle";
  title: string;
  startAt: any;
  endAt: any;
  /**
   * An array relationship
   */
  objectives: createCycle_insert_cycle_returning_objectives[];
}

export interface createCycle_insert_cycle {
  __typename: "cycle_mutation_response";
  /**
   * data of the affected rows by the mutation
   */
  returning: createCycle_insert_cycle_returning[];
}

export interface createCycle {
  /**
   * insert data into the table: "cycle"
   */
  insert_cycle: createCycle_insert_cycle | null;
}

export interface createCycleVariables {
  objects?: cycle_insert_input[] | null;
}
