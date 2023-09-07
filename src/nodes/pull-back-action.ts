import { Action, STATUS } from "../base-classes";

export class PullBackAction extends Action {
  count: number = 0;
  constructor(name: string) {
    super(name);
  }

  Start(): STATUS {
    this.count = 0;
    console.log(`${this.name} Start`);
    return STATUS.RUNNING;
  }

  Stop(): void {
    console.log(`${this.name} Stop`);
  }

  Update(): STATUS {
    this.count++;

    if (this.count >= 3) {
      return STATUS.SUCCESS;
    }

    return STATUS.RUNNING;
  }
}
