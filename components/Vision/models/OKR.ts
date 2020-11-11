import { Cycle, CycleProps } from "./Cycle";

interface OKRProps {
  id: string;
  cycles: CycleProps[];
  curCycleId?: string;
}

export class OKR implements OKRProps {
  static LOCAL_STORAGE_KEY = "local";

  static fromJSONString(str: string) {
    const okrProps = JSON.parse(str) as OKRProps;

    return new OKR({
      ...okrProps,
      cycles: okrProps.cycles.map(Cycle.fromJSON),
    });
  }

  id = Math.random().toString().slice(-6);
  cycles: Cycle[] = [];
  curCycleId?: string;

  get renderingList() {
    return this.cycles.map((el) => ({
      score: el.score,
      title: el.title,
      startAt: el.startAtString,
    }));
  }

  constructor(props?: Partial<OKRProps>) {
    Object.assign(this, props);
  }

  toJSON(): OKRProps {
    return {
      id: this.id,
      curCycleId: this.curCycleId,
      cycles: this.cycles.map((el) => el.toJSON()),
    };
  }

  toJSONString(indent?: number) {
    if (indent) {
      return JSON.stringify(this.toJSON(), null, indent);
    }
    return JSON.stringify(this.toJSON());
  }

  sync() {
    const jsonString = this.toJSONString();

    localStorage.setItem(OKR.LOCAL_STORAGE_KEY, jsonString);
  }
}
