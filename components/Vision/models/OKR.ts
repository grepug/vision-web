import { Cycle, CycleProps } from "./Cycle";

interface OKRProps {
  id: string;
  cycles: CycleProps[];
}

export class OKR implements OKRProps {
  static fromJSONString(str: string) {
    const okrProps = JSON.parse(str) as OKRProps;

    return new OKR({
      ...okrProps,
      cycles: okrProps.cycles.map(Cycle.fromJSON),
    });
  }

  id = Math.random().toString().slice(-6);
  cycles: Cycle[] = [];

  constructor(props?: Partial<OKRProps>) {
    Object.assign(this, props);
  }

  toJSON(): OKRProps {
    return {
      id: this.id,
      cycles: this.cycles.map((el) => el.toJSON()),
    };
  }

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
