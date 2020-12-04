import * as React from "react";
import { createMyContext } from "../../../lib/createMyContext";
import { KeyResult } from "../models/KeyResult";
import { Objective } from "../models/Objective";
import type { ColumnsType } from "antd/lib/table/interface";
import { getColumnConfig } from "../columnConfig";
import { message } from "antd";
import { Cycle } from "../models/Cycle";
import { useCycle } from "../models/useCycle";

function useVision(_: {}) {
  const {
    key,
    cycle,
    curCycle,
    curCycleId,
    forceRender,
    handleChangeCurSelectedCycle,
    handleCreateObjective,
    handleCreateKR,
    handleDeleteCycle,
    handleCreateCycle,
    handleUpdateKR,
    handleUpdateCycle,
    handleDeleteKR,
    handleAddRecord,
    handleDeleteRecord,
  } = useCycle();

  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);
  const [keyResultModalVisible, setKeyResultModalVisible] = React.useState(
    false,
  );
  const [cyclesModalVisible, setCyclesModalVisible] = React.useState(false);
  const [recordsModalVisible, setRecordsModalVisible] = React.useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = React.useState(false);
  const curKeyResult = React.useRef<KeyResult>();

  async function createCycle() {
    const newCycle = await handleCreateCycle();
    const index = cycle.findIndex((el) => el.id === newCycle.id);

    switchCycle(index);
  }

  function switchCycle(index: number) {
    const cycleId = cycle?.[index].id;

    if (cycleId) {
      handleChangeCurSelectedCycle(cycleId);
    }
  }

  function deleteCycle(cycleId: string, index: number) {
    handleDeleteCycle(cycleId, index);
  }

  function mutateCycle(cycle: Cycle | ((cycle: Cycle) => Cycle)) {}

  const columns: ColumnsType = getColumnConfig({
    handleDelete,
    onKeyResultEditClick: (kr, type) => {
      curKeyResult.current = kr;

      if (type === "remark") {
        setKeyResultModalVisible(true);
      }

      if (type === "records") {
        setRecordsModalVisible(true);
      }
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
    handleDeleteKR(keyResult, keyResult.objective.keyResults.length === 1);
  }

  function handleEdit(keyResult: KeyResult) {
    handleUpdateKR(keyResult);
  }

  function handleAddKR(objective: Objective) {
    handleCreateKR(objective.id);
  }

  function handleImportChange(value: string) {
    try {
      mutateCycle(Cycle.fromJSONString(value));
    } catch {
      message.error("Your JSON string is invalid!");
    }
  }

  return {
    cycleObjects: cycle,
    curCycle,
    curCycleId,
    mutateCycle,
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
    recordsModalVisible,
    setRecordsModalVisible,
    settingsModalVisible,
    setSettingsModalVisible,
    curKeyResult,
    handleAddKR,
    createCycle,
    switchCycle,
    deleteCycle,
    handleCreateObjective,
    forceRender,
    handleUpdateCycle,
    handleAddRecord,
    handleUpdateKR,
    handleDeleteRecord,
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
