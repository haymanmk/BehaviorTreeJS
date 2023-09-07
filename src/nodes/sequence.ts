import { Action, Composite, EVENTS, STATUS } from "../base-class";
import { Blackboard } from "../base-class/base";

export class Sequence extends Composite {
  constructor(name: string, childrenStorage: Array<Action | Composite>) {
    super(name, childrenStorage);
  }

  Tick(event: EVENTS, blackboard: Blackboard): STATUS {
    if (this.currentStatus !== STATUS.RUNNING) {
      this.currentNodeNum = 0;
      this.currentStatus = STATUS.RUNNING;
      this.Log(blackboard, this.name);
    }

    const child = this.childrenStorage[this.currentNodeNum];
    const childStatus = child.Tick(event, blackboard);

    if (childStatus !== STATUS.SUCCESS) {
      if (childStatus === STATUS.FAILURE) this.Log(blackboard, this.name);
      return this.currentStatus;
    }

    if (++this.currentNodeNum >= this.childrenStorage.length) {
      this.currentStatus = STATUS.SUCCESS;
      this.Log(blackboard, this.name);
    }

    return this.currentStatus;
  }
}
