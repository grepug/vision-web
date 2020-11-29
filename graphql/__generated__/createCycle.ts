/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { cycle_insert_input } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateCycle
// ====================================================

export interface CreateCycle_insert_cycle {
  __typename: "cycle_mutation_response";
  /**
   * number of affected rows by the mutation
   */
  affected_rows: number;
}

export interface CreateCycle {
  /**
   * insert data into the table: "cycle"
   */
  insert_cycle: CreateCycle_insert_cycle | null;
}

export interface CreateCycleVariables {
  objects: cycle_insert_input[];
}
