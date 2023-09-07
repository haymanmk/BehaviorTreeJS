import { Base, Blackboard } from "./base";
import { EVENTS } from "./events";
import { STATUS } from "./status";

export abstract class Action extends Base {
  result?: object;

  constructor(name: string) {
    super(name);
  }

  get nodeName() {
    return this.name;
  }

  abstract Update(): STATUS;
  abstract Start(): STATUS;
  abstract Stop(): void;

  Tick(event: EVENTS, blackboard: Blackboard): STATUS {
    if (this.currentStatus !== STATUS.RUNNING) {
      this.currentStatus = this.Start();
      this.Log(blackboard, this.name);
    }
    this.currentStatus = this.Update();
    if (this.currentStatus !== STATUS.RUNNING) {
      this.Stop();
      this.Log(blackboard, this.name, this.currentStatus, this?.result);
    }
    return this.currentStatus;
  }
}
