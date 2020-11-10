import * as React from "react";
import { Form, Input, InputNumber } from "antd";
import { EditableContext } from "./EditableContext";

export const getEditableCell = (props: { forceRender: () => void }) =>
  function EditableCell({
    title,
    editable,
    useTextArea,
    children,
    dataIndex,
    record,
    handleSave,
    ...restProps
  }) {
    const [editing, setEditing] = React.useState(false);
    const inputRef = React.useRef(null);
    const form = React.useContext(EditableContext);

    React.useEffect(() => {
      if (editing) {
        // @ts-ignore
        inputRef.current.focus();
      }
    }, [editing]);

    const toggleEdit = () => {
      setEditing(!editing);
      form.setFieldsValue({
        [dataIndex]: record[dataIndex],
      });
    };

    const save = async (e) => {
      try {
        const values = await form.validateFields();
        toggleEdit();
        handleSave({ ...record, ...values });

        props.forceRender();
      } catch (errInfo) {
        console.log("Save failed:", errInfo);
      }
    };

    let childNode = children;

    if (editable) {
      const initialValue = get(record, dataIndex);

      childNode = editing ? (
        <Form.Item
          initialValue={initialValue}
          style={{
            margin: 0,
          }}
          name={dataIndex}
          rules={[
            {
              required: true,
              message: `${title} is required.`,
            },
          ]}
        >
          {isNaN(initialValue) ? (
            <Input ref={inputRef as any} onPressEnter={save} onBlur={save} />
          ) : (
            <InputNumber
              ref={inputRef as any}
              onPressEnter={save}
              onBlur={save}
            />
          )}
        </Form.Item>
      ) : (
        <div
          className="editable-cell-value-wrap"
          style={{
            paddingRight: 24,
          }}
          onClick={toggleEdit}
        >
          {children}
        </div>
      );
    }

    return <td {...restProps}>{childNode}</td>;
  };

function get(obj: any, path: string[] | string) {
  path = Array.isArray(path) ? path : [path];

  let res: any;

  for (const p of path) {
    res = res ? res[p] : obj[p];
  }

  return res;
}
