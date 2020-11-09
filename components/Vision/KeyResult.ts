import { KeyResultProps, Record } from "./types";
import { Objective } from "./Objective";

export class KeyResult implements KeyResultProps {
  static createNew(count = 1) {
    return Array.from(Array(count)).map((el) => new KeyResult());
  }

  id = Math.random().toString().slice(-6);
  title = "New Key Result";
  weight = 0;
  unit = "-";
  total = 1;
  remark = "-";
  records: Record[] = [];
  objective = new Objective();

  get current() {
    return this.records.reduce(
      (current, record) => current + record.quantity,
      0
    );
  }

  get score() {
    return (
      ((this.current / this.total) * this.weight * this.objective.weight) /
      10000
    );
  }

  get scoreString() {
    return `${this.score * 100}%`;
  }

  constructor(props?: Partial<KeyResult>) {
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
      total: this.total,
      remark: this.remark,
      current: this.current,
    };
  }

  fromJSON(item: KeyResultProps) {
    Object.assign(this, item);

    return this;
  }
}
