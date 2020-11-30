import { ObjectiveProps } from "../types";
import { KeyResult } from "./KeyResult";
import { Objective } from "./Objective";
import moment from "moment";
import { v4 as uuid } from "uuid";
import { useQuery } from "@apollo/client";
import getCyclesGQL from "graphql/getCycles.gql";
import { GetCycles } from "graphql/__generated__/GetCycles";
import { useContext as useLoginCtx } from "components/Login/Context";

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

  static useCycle() {
    const loginCtx = useLoginCtx()!;
    const { data } = useQuery<GetCycles>(getCyclesGQL, {
      client: loginCtx.apolloClient,
    });

    const cycleObjects = data?.cycle.map((el) => {
      const obj = Cycle.fromJSON(el);

      return obj;
    });

    return {
      cycleObjects,
    };
  }

  id = uuid();
  title = "My Cycle";
  startAt: string;
  endAt: string;
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
    return this.objectives.map((el) => el.keyResults).flat();
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

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
