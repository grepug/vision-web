import * as React from "react";
import { createMyContext } from "../../lib/createMyContext";
import { KeyResult } from "./models/KeyResult";
import { Objective } from "./models/Objective";
import type { ColumnsType } from "antd/lib/table/interface";
import { PlusCircleOutlined } from "@ant-design/icons";
import { findLastIndex, uniq } from "./utils";
import { getColumnConfig } from "./columnConfig";
import { Menu, message } from "antd";

const initialObjective = new Objective();

function useVision(props: {}) {
  const [keyResults, setKeyResults] = React.useState<KeyResult[]>([]);
  const [key, setKey] = React.useState(0);
  const [exportModalVisible, setExportModalVisible] = React.useState(false);
  const [importModalVisible, setImportModalVisible] = React.useState(false);
  const [keyResultModalVisible, setKeyResultModalVisible] = React.useState(
    false
  );
  const curKeyResultDetailIndex = React.useRef(-1);

  // console.log(keyResults);

  function forceRender() {
    setTimeout(() => setKey((s) => s + 1), 0);
  }

  const columns: ColumnsType = getColumnConfig({
    handleDelete,
    keyResults,
    onKeyResultEditClick: (index) => {
      curKeyResultDetailIndex.current = index;
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
    setKeyResults((krs) => {
      const index = krs.findIndex((el) => el.isEqual(keyResult));

      krs[index].objective.keyResults = krs[index].objective.keyResults.filter(
        (el) => !el.isEqual(krs[index])
      );

      krs.splice(index, 1);

      return krs;
    });

    forceRender();
  }

  function handleEdit(keyResult: KeyResult) {
    setKeyResults((krs) => {
      const index = krs.findIndex((el) => el.isEqual(keyResult));
      krs[index].overrideProps(keyResult);

      return krs;
    });

    forceRender();
  }

  function handleAddKR(objective?: Objective) {
    const isExistedObjective = objective != null;

    if (!isExistedObjective) {
      objective = objectives.length ? new Objective() : initialObjective;
    }

    const keyResult = new KeyResult();
    keyResult.objective = objective!;
    objective!.linkKeyResults(keyResult);

    setKeyResults((krs) => {
      let insertIndex = krs.length;

      if (isExistedObjective) {
        insertIndex =
          findLastIndex(krs, (el) => el.objective.isEqual(objective)) + 1;
      }

      krs.splice(insertIndex, 0, keyResult);

      return krs;
    });

    forceRender();
  }

  const objectives = uniq(
    keyResults.map((el) => el.objective),
    "id"
  );

  const addKeyResultMenu = (
    <Menu>
      <Menu.Item icon={<PlusCircleOutlined />} onClick={() => handleAddKR()}>
        Create New Objective
      </Menu.Item>
      <Menu.ItemGroup title="Objectives">
        {objectives.map((el) => (
          <Menu.Item key={el.id} onClick={() => handleAddKR(el)}>
            {el.title}
          </Menu.Item>
        ))}
      </Menu.ItemGroup>
    </Menu>
  );

  function handleExportChange(value: string) {
    const objectives = Objective.arrFromJSON(value);

    if (objectives) {
      const keyResults = Objective.arrToKeyResultArr(objectives);

      setKeyResults(keyResults);

      forceRender();

      return;
    }

    message.error("Your JSON string is invalid!");
  }

  return {
    keyResults,
    setKeyResults,
    forceRender,
    addKeyResultMenu,
    columns,
    key,
    exportModalVisible,
    setExportModalVisible,
    importModalVisible,
    setImportModalVisible,
    handleExportChange,
    objectives,
    keyResultModalVisible,
    setKeyResultModalVisible,
    curKeyResultDetailIndex,
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
