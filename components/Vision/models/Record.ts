import { RecordProps } from "../types";
import moment from "moment";
import uuid from "uuid";

export class Record implements RecordProps {
  static fromJSON(props: RecordProps) {
    return new Record(props);
  }

  id = uuid.v4();
  createdAt = moment().toISOString();
  quantity: number;
  remark = "No Remark";

  get recordDate() {
    return moment(this.createdAt);
  }

  get formattedRecordDate() {
    return this.recordDate.format("YYYY/MM/DD HH:mm:ss");
  }

  constructor(props?: Partial<RecordProps>) {
    Object.assign(this, props);
  }

  toJSON(): RecordProps {
    return {
      createdAt: this.createdAt,
      quantity: this.quantity,
      remark: this.remark,
    };
  }
}
