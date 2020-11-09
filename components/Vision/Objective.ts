import { KeyResult } from "./KeyResult";
import { ObjectiveProps } from "./types";

let count = 0;

export class Objective implements ObjectiveProps {
  static arrToJSON(items: Objective[]) {
    return JSON.stringify(
      items.map((el) => el.toJSON()),
      null,
      2
    );
  }

  static arrFromJSON(jsonString: string): Objective[] | null {
    try {
      return JSON.parse(jsonString).map((el) => new Objective().fromJSON(el));
    } catch (e) {
      return null;
    }
  }

  static arrToKeyResultArr(items: Objective[]) {
    let keyResults: KeyResult[] = [];

    items.forEach((el) => {
      keyResults = keyResults.concat(el.keyResults);
    });

    return keyResults;
  }

  id = Math.random().toString().slice(-6);
  title = `New Objective ${count++}`;
  weight = 0;
  remark = "";
  keyResults: KeyResult[] = [];

  get sortedKeyResults() {
    return this.keyResults.sort((a, b) => a.weight - b.weight);
  }

  constructor(props?: Partial<Objective>) {
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

  toJSON(): ObjectiveProps {
    return {
      id: this.id,
      title: this.title,
      weight: this.weight,
      remark: this.remark,
      keyResults: this.keyResults.map((el) => el.toJSON()),
    };
  }

  fromJSON(props: ObjectiveProps) {
    Object.assign(this, props);

    this.keyResults = props.keyResults.map((el) => {
      const keyResult = new KeyResult().fromJSON(el);
      keyResult.objective = this;

      this.keyResults.push(keyResult);

      return keyResult;
    });

    return this;
  }
}
