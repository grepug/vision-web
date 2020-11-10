import { RecordProps } from "../types";
import moment from "moment";

export class Record implements RecordProps {
  static fromJSON(props: RecordProps) {
    return new Record(props);
  }

  recordDateString = moment().toISOString();
  quantity: number;
  remark = "No Remark";

  get recordDate() {
    return moment(this.recordDateString);
  }

  get formattedRecordDate() {
    return this.recordDate.format("YYYY/MM/DD HH:mm:ss");
  }

  constructor(props?: Partial<RecordProps>) {
    Object.assign(this, props);
  }

  toJSON(): RecordProps {
    return {
      recordDateString: this.recordDateString,
      quantity: this.quantity,
      remark: this.remark,
    };
  }
}
