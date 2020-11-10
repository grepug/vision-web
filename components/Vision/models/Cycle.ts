import { ObjectiveProps } from "../types";
import { KeyResult } from "./KeyResult";
import { Objective } from "./Objective";

interface CycleProps {
  startAt: string;
  endAt: string;
  remark: string;
  objectives: ObjectiveProps[];
}

export class Cycle implements CycleProps {
  static fromJSONString(str: string) {
    const cycleProps = JSON.parse(str) as CycleProps;

    return new Cycle({
      ...cycleProps,
      objectives: cycleProps.objectives.map(Objective.fromJSONString),
    });
  }

  startAt: string;
  endAt: string;
  remark: string;
  objectives: Objective[] = [];

  get score() {
    return this.objectives.reduce((acc, el) => acc + el.score, 0);
  }

  get renderingKeyResults() {
    return this.objectives.map((el) => el.keyResults).flat();
  }

  constructor(props?: Partial<Cycle>) {
    Object.assign(this, props);
  }

  findIndexByKeyResult(keyResult: KeyResult) {
    return this.objectives.findIndex((el) =>
      el.keyResults.some((el) => el.isEqual(keyResult))
    );
  }

  toJSON(): CycleProps {
    return {
      startAt: this.startAt,
      endAt: this.endAt,
      remark: this.remark,
      objectives: this.objectives.map((el) => el.toJSON()),
    };
  }

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
