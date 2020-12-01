import { KeyResultProps } from "../types";
import { Record } from "./Record";
import { Objective } from "./Objective";
import { v4 as uuid } from "uuid";

export class KeyResult implements KeyResultProps {
  static createNew(count = 1) {
    return Array.from(Array(count)).map((el) => new KeyResult());
  }

  static fromJSON(props: KeyResultProps) {
    const keyResult = new KeyResult(props);
    keyResult.records = props.records.map(Record.fromJSON);

    return keyResult;
  }

  id = uuid();
  title = "New Key Result";
  weight = 0;
  unit = "-";
  total = 1;
  remark = "";
  records: Record[] = [];
  objective = new Objective();

  get current() {
    return this.records.reduce(
      (current, record) => current + record.quantity,
      0,
    );
  }

  get score() {
    return (
      ((this.current / this.total) * this.weight * this.objective.weight) /
      10_000
    );
  }

  get scoreString() {
    return `${(this.score * 100).toFixed(2)}%`;
  }

  get scorePerQuantity() {
    const weight = (this.objective.weight * this.weight) / 10000;
    return `${((weight / this.total) * 100).toFixed(2)}%`;
  }

  constructor(props?: Partial<KeyResultProps>) {
    Object.assign(this, props);
  }

  isEqual(item?: KeyResult) {
    return this.id === item?.id;
  }

  overrideProps(item: KeyResult) {
    this.title = item.title;
    this.weight = item.weight;
    this.total = item.total;
    this.remark = item.remark;
    this.unit = item.unit;

    if (item.objective instanceof Objective) {
      this.objective.title = item.objective.title;
      this.objective.weight = item.objective.weight;
    } else {
      Object.assign(this.objective, item.objective);
    }
  }

  toJSON(): KeyResultProps {
    return {
      id: this.id,
      title: this.title,
      weight: this.weight,
      unit: this.unit,
      total: this.total,
      remark: this.remark,
      records: this.records.map((el) => el.toJSON()),
    };
  }

  toJSON_data() {
    return {
      ...this.toJSON(),
      records: {
        data: this.records.map((el) => el.toJSON()),
      },
    };
  }
}
