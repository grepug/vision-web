import * as React from "react";
import { Modal, Input, Typography, message, Button, Divider } from "antd";
import { useContext } from "../Contexts/CycleContext";
import { OKR } from "../models/OKR";
import { TextAlignRight } from "../Styles/TextAlignRight";
import { VerticalSpace } from "../Styles/VerticalSpace";
import {
  CreateCycleVariables,
  CreateCycle_insert_cycle,
} from "graphql/__generated__/createCycle";
import { Cycle } from "../models/Cycle";
import { Objective } from "../models/Objective";
import {
  objective_arr_rel_insert_input,
  key_result_arr_rel_insert_input,
  record_arr_rel_insert_input,
} from "__generated__/globalTypes";
import { KeyResult } from "../models/KeyResult";
import { Record } from "../models/Record";
import createCyclesGql from "graphql/createCycles.gql";
import { useContext as useLoginCtx } from "components/Login/Context";

export function SettingsModal() {
  const ctx = useContext()!;
  const loginCtx = useLoginCtx()!;
  const [importedValue, setImportedValue] = React.useState<string>();

  function handleCopy() {
    function copy() {
      var copyText = document.querySelector<HTMLInputElement>("#copy-input");
      copyText?.select();

      return document.execCommand("copy");
    }

    copy();

    message.success("copied!");
  }

  function handleImport() {
    // try {
    //   if (importedValue) {
    //     ctx.okr.current = OKR.fromJSONString(importedValue);
    //     const variables = transformCycleToVariable(
    //       ctx.okr.current.cycles,
    //       loginCtx.user!.id,
    //     );
    //     loginCtx.apolloClient.mutate<
    //       CreateCycle_insert_cycle,
    //       CreateCycleVariables
    //     >({
    //       mutation: createCyclesGql,
    //       variables,
    //     });
    //     ctx.forceRender();
    //     setImportedValue(undefined);
    //     message.success("Restored!");
    //   }
    // } catch (e) {
    //   console.log(e);
    //   message.error("Invalid Imported JSON!");
    // }
  }

  function handleCancel() {
    ctx.setSettingsModalVisible(false);
  }

  return (
    <Modal
      visible={ctx.settingsModalVisible}
      width="800px"
      title="Settings"
      onCancel={handleCancel}
      footer={null}
    >
      <Typography.Title level={3}>Import</Typography.Title>
      <VerticalSpace />
      <Input.TextArea
        id="copy-import"
        value={importedValue}
        onChange={(e) => setImportedValue(e.target.value)}
      />
      <VerticalSpace />
      <TextAlignRight>
        <Button onClick={handleImport}>Restore</Button>
      </TextAlignRight>
      <Divider />
      <Typography.Title level={3}>Export</Typography.Title>
      <VerticalSpace />
      {/* <Input.TextArea
        id="copy-input"
        value={ctx.okr.current.toJSONString(undefined)}
      /> */}
      <VerticalSpace />
      <TextAlignRight>
        <Button onClick={handleCopy}>Copy</Button>
      </TextAlignRight>
    </Modal>
  );
}

function transformCycleToVariable(
  cycles: Cycle[],
  userId: string,
): CreateCycleVariables {
  return {
    objects: cycles.map((el) => ({
      ...el,
      userId,
      objectives: transformObjective(el.objectives),
    })),
  };

  function transformObjective(
    objectives: Objective[],
  ): objective_arr_rel_insert_input {
    return {
      data: objectives.map((el) => ({
        ...el,
        keyResults: transformKeyResults(el.keyResults),
      })),
    };
  }

  function transformKeyResults(
    krs: KeyResult[],
  ): key_result_arr_rel_insert_input {
    return {
      data: krs.map((el) => ({
        ...el,
        objective: undefined,
        records: transformRecords(el.records),
      })),
    };
  }

  function transformRecords(records: Record[]): record_arr_rel_insert_input {
    return {
      data: records,
    };
  }
}
