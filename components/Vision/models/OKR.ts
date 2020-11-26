import { Cycle, CycleProps } from "./Cycle";
import { v4 as uuid } from "uuid";

interface OKRProps {
  id: string;
  cycles: CycleProps[];
  curCycleId?: string;
}

export class OKR implements OKRProps {
  static LOCAL_STORAGE_KEY = "local";
  static hardCodedID = "fd7b03c3-3b34-4d8b-a106-b3be1da2f8fa";

  static fromJSONString(str: string) {
    const okrProps = JSON.parse(str) as OKRProps;

    return new OKR({
      ...okrProps,
      cycles: okrProps.cycles.map(Cycle.fromJSON),
    });
  }

  id = uuid();
  cycles: Cycle[] = [];
  curCycleId?: string;

  get renderingList() {
    return this.cycles.map((el) => ({
      score: el.score,
      title: el.title,
      startAt: el.startAt,
    }));
  }

  constructor(props?: Partial<OKRProps>) {
    Object.assign(this, props);
  }

  toJSON(): OKRProps {
    return {
      id: OKR.hardCodedID,
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
