import { EVENTS } from "./events";
import { STATUS } from "./status";

export type Result = {
  name: string;
  status: STATUS;
  dateTime: string;
  result?: object;
};

export type Blackboard = {
  log: Array<Result>;
};

export abstract class Base {
  name: string;
  currentStatus: STATUS;

  constructor(name: string) {
    this.name = name;
    this.currentStatus = STATUS.INVALID;
  }

  abstract Tick(event: EVENTS, blackboard: Blackboard): STATUS;
  Log(blackboard: Blackboard, name: string, status?: STATUS, result?: any) {
    const dateTime = new Date().toUTCString();

    if (typeof status === "undefined") status = this.currentStatus;

    let _result: Result = {
      name: name,
      status: status,
      dateTime: dateTime,
      result: result,
    };

    blackboard.log.push(_result);
  }
}
