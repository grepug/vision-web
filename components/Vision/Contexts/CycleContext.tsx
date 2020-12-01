import * as React from "react";
import { createMyContext } from "../../../lib/createMyContext";
import { KeyResult } from "../models/KeyResult";
import { Objective } from "../models/Objective";
import type { ColumnsType } from "antd/lib/table/interface";
import { getColumnConfig } from "../columnConfig";
import { message } from "antd";
import { Cycle } from "../models/Cycle";
import { useLoginCtx } from "components/Login/Context";
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

  function createCycle() {
    const cycle = new Cycle();
    const data = cycle.toJSON_data();
  }

  function switchCycle(index: number) {
    const cycleId = cycle?.[index].id;

    if (cycleId) {
      handleChangeCurSelectedCycle(cycleId);
    }
  }

  function deleteCycle(cycleId: string, index: number) {
    // okr.current.cycles.splice(index, 1);
    // if (cycleId === curCycle.current?.id) {
    //   curCycle.current = okr.current.cycles[0];
    // }
  }

  function mutateCycle(cycle: Cycle | ((cycle: Cycle) => Cycle)) {
    // if (!curCycle.current) return;
    // if (typeof cycle === "function") {
    //   cycle = cycle(curCycle.current);
    // }
    // curCycle.current = cycle;
  }

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
    mutateCycle((cycle) => {
      const index = cycle.findIndexByKeyResult(keyResult);
      const objective = cycle.objectives[index];
      objective.deleteKeyResult(keyResult);

      if (objective.keyResults.length === 0) {
        cycle.deleteObjective(objective);
      }

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
