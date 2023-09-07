import { EVENTS } from "../events";
import { STATUS } from "../status";

export interface TickInterface<T> {
  Tick(event: EVENTS, blackboard: T): STATUS;
}
