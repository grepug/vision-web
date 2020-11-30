import { KeyResult } from "./KeyResult";
import { ObjectiveProps } from "../types";
import { v4 as uuid } from "uuid";

let count = 0;

export class Objective implements ObjectiveProps {
  static fromJSON(props: ObjectiveProps) {
    const objective = new Objective(props);

    objective.keyResults = props.keyResults.map((el) => {
      const keyResult = KeyResult.fromJSON(el);
      keyResult.objective = objective;

      // objective.keyResults.push(keyResult);

      return keyResult;
    });

    return objective;
  }

  static arrToKeyResultArr(items: Objective[]) {
    let keyResults: KeyResult[] = [];

    items.forEach((el) => {
      keyResults = keyResults.concat(el.keyResults);
    });

    return keyResults;
  }

  id = uuid();
  title = `New Objective ${count++}`;
  weight = 0;
  remark = "";
  keyResults: KeyResult[] = [];

  get sortedKeyResults() {
    return this.keyResults.sort((a, b) => a.weight - b.weight);
  }

  get score() {
    return this.keyResults.reduce((acc, el) => acc + el.score, 0);
  }

  constructor(props?: Partial<ObjectiveProps>) {
    Object.assign(this, props);
  }

  isEqual(item?: Objective) {
    return this.id === item?.id;
  }

  linkKeyResults(krs: KeyResult | KeyResult[]) {
    if (!Array.isArray(krs)) {
      krs = [krs];
    }

    for (const kr of krs) {
      const isNoDuplicate = !this.keyResults.some((el) => el.isEqual(kr));

      if (isNoDuplicate) {
        this.keyResults.push(kr);
      }
    }
  }

  deleteKeyResult(kr: KeyResult) {
    const index = this.keyResults.findIndex((el) => el.isEqual(kr));

    if (index > -1) {
      this.keyResults.splice(index, 1);
    }
  }

  editKeyResult(kr: KeyResult) {
    const index = this.keyResults.findIndex((el) => el.isEqual(kr));
    this.keyResults[index].overrideProps(kr);
  }

  toJSON(): ObjectiveProps {
    return {
      id: this.id,
      title: this.title,
      weight: this.weight,
      remark: this.remark,
      keyResults: this.keyResults.map((el) => el.toJSON()),
    };
  }
}
