import * as React from "react";
import { createMyContext } from "../../lib/createMyContext";
import { KeyResult } from "./models/KeyResult";
import { Objective } from "./models/Objective";
import type { ColumnsType } from "antd/lib/table/interface";
import { getColumnConfig } from "./columnConfig";
import { message } from "antd";
import { Cycle } from "./models/Cycle";

const initialObjective = new Objective();

function useVision(_: {}) {
  const [cycle, setCycle] = React.useState(new Cycle());
  const [key, setKey] = React.useState(0);
  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);
  const [keyResultModalVisible, setKeyResultModalVisible] = React.useState(
    false
  );
  const [cyclesModalVisible, setCyclesModalVisible] = React.useState(false);
  const curKeyResultDetail = React.useRef<KeyResult>();

  function forceRender() {
    setTimeout(() => setKey((s) => s + 1), 0);
  }

  function mutateCycle(cycle: Parameters<typeof setCycle>[0]) {
    setCycle(cycle);
    forceRender();
  }

  const columns: ColumnsType = getColumnConfig({
    cycle,
    handleDelete,
    onKeyResultEditClick: (kr) => {
      curKeyResultDetail.current = kr;
      setKeyResultModalVisible(true);
    },
  }).map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave: handleEdit,
      }),
    };
  });

  function handleDelete(keyResult: KeyResult) {
    mutateCycle((cycle) => {
      const index = cycle.findIndexByKeyResult(keyResult);
      cycle.objectives[index].deleteKeyResult(keyResult);

      return cycle;
    });
  }

  function handleEdit(keyResult: KeyResult) {
    mutateCycle((cycle) => {
      const index = cycle.findIndexByKeyResult(keyResult);
      cycle.objectives[index].editKeyResult(keyResult);

      return cycle;
    });
  }

  function handleAddKR(objective?: Objective) {
    const isExistedObjective = objective != null;

    if (!isExistedObjective) {
      objective = cycle.objectives.length ? new Objective() : initialObjective;
    }

    mutateCycle((cycle) => {
      const keyResult = new KeyResult();
      keyResult.objective = objective!;
      objective!.linkKeyResults(keyResult);

      if (!isExistedObjective) {
        cycle.objectives.push(objective!);
      }

      return cycle;
    });
  }

  function handleImportChange(value: string) {
    try {
      mutateCycle(Cycle.fromJSONString(value));
    } catch {
      message.error("Your JSON string is invalid!");
    }
  }

  return {
    cycle,
    mutateCycle,
    forceRender,
    columns,
    key,
    exportModalVisible,
    setExportModalVisible,
    importModalVisible,
    setImportModalVisible,
    handleImportChange,
    keyResultModalVisible,
    setKeyResultModalVisible,
    cyclesModalVisible,
    setCyclesModalVisible,
    curKeyResultDetail,
    handleAddKR,
  };
}

export const {
  Provider,
  useContext,
  Context: { Consumer },
} = createMyContext<
  Parameters<typeof useVision>[0],
  ReturnType<typeof useVision>
>(useVision);
