import { Cycle, CycleProps } from "./Cycle";

interface OKRProps {
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

  cycles: Cycle[] = [];

  constructor(props?: Partial<OKRProps>) {
    Object.assign(this, props);
  }

  toJSON(): OKRProps {
    return {
      cycles: this.cycles.map((el) => el.toJSON()),
    };
  }

  toJSONString(indent = 2) {
    return JSON.stringify(this.toJSON(), null, indent);
  }
}
