export class Record {
  startAt = new Date();
  endAt = new Date();
  quantity: number;
  remark: string;

  get duration() {
    return this.endAt.getTime() - this.startAt.getTime();
  }
}
