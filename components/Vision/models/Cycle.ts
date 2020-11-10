import { ObjectiveProps } from "../types";
import { KeyResult } from "./KeyResult";
import { Objective } from "./Objective";

export interface CycleProps {
  id: string;
  title: string;
  startAtString: string;
  endAtString: string;
  remark: string;
  objectives: ObjectiveProps[];
}

export class Cycle implements CycleProps {
  static fromJSON(props: CycleProps) {
    return new Cycle({
      ...props,
      objectives: props.objectives.map(Objective.fromJSONString),
    });
  }

  static fromJSONString(str: string) {
    const cycleProps = JSON.parse(str) as CycleProps;

    return Cycle.fromJSON(cycleProps);
  }

  id = Math.random().toString().slice(-6);
  title = "My Cycle";
  startAtString: string;
  endAtString: string;
  remark: string;
  objectives: Objective[] = [];

  get score() {
    return this.objectives.reduce((acc, el) => acc + el.score, 0);
  }

  get renderingKeyResults() {
    return this.objectives.map((el) => el.keyResults).flat();
  }

  constructor(props?: Partial<CycleProps>) {
    Object.assign(this, props);
  }

  findIndexByKeyResult(keyResult: KeyResult) {
    return this.objectives.findIndex((el) =>
      el.keyResults.some((el) => el.isEqual(keyResult))
    );
  }

  toJSON(): CycleProps {
    return {
      id: this.id,
      title: this.title,
      startAtString: this.startAtString,
      endAtString: this.endAtString,
      remark: this.remark,
      objectives: this.objectives.map((el) => el.toJSON()),
    };
  }

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
