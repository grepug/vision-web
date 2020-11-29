import * as React from "react";
import { createMyContext } from "../../../lib/createMyContext";
import { KeyResult } from "../models/KeyResult";
import { Objective } from "../models/Objective";
import type { ColumnsType } from "antd/lib/table/interface";
import { getColumnConfig } from "../columnConfig";
import { message } from "antd";
import { Cycle } from "../models/Cycle";
import { OKR } from "../models/OKR";

const initialObjective = new Objective();

function useVision(props: {}) {
  const okr = React.useRef(
    (() => {
      if (typeof window !== "undefined") {
        const jsonString = localStorage.getItem(OKR.LOCAL_STORAGE_KEY);

        if (jsonString) {
          return OKR.fromJSONString(jsonString);
        }
      }

      return new OKR();
    })(),
  );

  const curCycle = React.useRef<Cycle | undefined>(
    okr.current.cycles.find((el) => el.id === okr.current.curCycleId),
  );

  const [key, setKey] = React.useState(0);
  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);
  const [keyResultModalVisible, setKeyResultModalVisible] = React.useState(
    false,
  );
  const [cyclesModalVisible, setCyclesModalVisible] = React.useState(false);
  const [recordsModalVisible, setRecordsModalVisible] = React.useState(false);
  const [settingsModalVisible, setSettingsModalVisible] = React.useState(false);
  const curKeyResult = React.useRef<KeyResult>();

  function forceRender() {
    okr.current.curCycleId = curCycle.current?.id;
    okr.current.sync();

    setTimeout(() => setKey((s) => s + 1), 0);
  }

  function createCycle() {
    const cycle = new Cycle();
    okr.current.cycles.push(cycle);
    curCycle.current = cycle;

    forceRender();
  }

  function switchCycle(index: number) {
    curCycle.current = okr.current.cycles[index];

    forceRender();
  }

  function deleteCycle(cycleId: string, index: number) {
    okr.current.cycles.splice(index, 1);

    if (cycleId === curCycle.current?.id) {
      curCycle.current = okr.current.cycles[0];
    }

    forceRender();
  }

  function mutateCycle(cycle: Cycle | ((cycle: Cycle) => Cycle)) {
    if (!curCycle.current) return;

    if (typeof cycle === "function") {
      cycle = cycle(curCycle.current);
    }
    curCycle.current = cycle;

    forceRender();
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

  function handleAddKR(objective?: Objective) {
    mutateCycle((cycle) => {
      const isExistedObjective = objective != null;

      if (!isExistedObjective) {
        objective = cycle.objectives.length
          ? new Objective()
          : initialObjective;
      }
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
    curCycle,
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
    recordsModalVisible,
    setRecordsModalVisible,
    settingsModalVisible,
    setSettingsModalVisible,
    curKeyResult,
    handleAddKR,
    createCycle,
    okr,
    switchCycle,
    deleteCycle,
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
