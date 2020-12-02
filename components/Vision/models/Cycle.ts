import { ObjectiveProps } from "../types";
import { KeyResult } from "./KeyResult";
import { Objective } from "./Objective";
import moment from "moment";
import { v4 as uuid } from "uuid";

export interface CycleProps {
  id: string;
  title: string;
  startAt: string;
  endAt: string;
  remark: string;
  objectives: ObjectiveProps[];
}

export class Cycle implements CycleProps {
  static fromJSON(props: CycleProps) {
    return new Cycle({
      ...props,
      objectives: props.objectives.map(Objective.fromJSON),
    });
  }

  static fromJSONString(str: string) {
    const cycleProps = JSON.parse(str) as CycleProps;

    return Cycle.fromJSON(cycleProps);
  }

  id = uuid();
  title = "My Cycle";
  startAt = new Date().toISOString();
  endAt = new Date(Date.now() + 24 * 3600 * 30).toISOString();
  remark = "";
  objectives: Objective[] = [];

  get startAtMoment() {
    return moment(this.startAt);
  }

  get endAtMoment() {
    return moment(this.endAt);
  }

  get totaldays() {
    return this.endAtMoment.diff(this.startAtMoment, "days");
  }

  get daysLeft() {
    return this.endAtMoment.diff(moment(), "days");
  }

  get score() {
    return this.objectives.reduce((acc, el) => acc + el.score, 0);
  }

  get scorePercentage() {
    return (this.score * 100).toFixed(4);
  }

  get scoreString() {
    return `${(this.score * 100).toFixed(2)}%`;
  }

  get renderingKeyResults() {
    return this.objectives
      .sort((x, y) => y.weight - x.weight)
      .map((el) => el.keyResults.sort((x, y) => y.weight - x.weight))
      .flat();
  }

  get keyResultCount() {
    return this.objectives.reduce((acc, el) => acc + el.keyResults.length, 0);
  }

  constructor(props?: Partial<CycleProps>) {
    Object.assign(this, props);
  }

  findIndexByKeyResult(keyResult: KeyResult) {
    return this.objectives.findIndex((el) =>
      el.keyResults.some((el) => el.isEqual(keyResult)),
    );
  }

  deleteObjective(obj: Objective) {
    const index = this.objectives.findIndex((el) => el.isEqual(obj));

    if (index > -1) {
      this.objectives.splice(index, 1);
    }
  }

  toJSON(): CycleProps {
    return {
      id: this.id,
      title: this.title,
      startAt: this.startAt,
      endAt: this.endAt,
      remark: this.remark,
      objectives: this.objectives.map((el) => el.toJSON()),
    };
  }

  toJSON_data() {
    return {
      ...this.toJSON(),
      objectives: { data: this.objectives.map((el) => el.toJSON_Data()) },
    };
  }

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
