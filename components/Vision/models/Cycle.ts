import { Objective } from "./Objective";

export class Cycle {
  startAt = new Date();
  endAt = new Date();
  objectives: Objective[] = [];

  get score() {
    return this.objectives.reduce((acc, el) => acc + el.score, 0);
  }
}
