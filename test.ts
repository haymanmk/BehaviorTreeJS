import {
  Blackboard,
  EVENTS,
  PullBackAction,
  PushOutAction,
  STATUS,
  Sequence,
} from "./src";

const sequence = new Sequence("Cylinder Sequence", [
  new PushOutAction("Push out 1"),
  new PullBackAction("Pull back 1"),
  new PushOutAction("Push out 2"),
  new PullBackAction("Pull back 2"),
]);
let blackboard: Blackboard = {
  log: [],
};
let status: STATUS;
const timer = setInterval(() => {
  if (status === STATUS.SUCCESS) {
    console.log(blackboard);
    StopTick();
    return;
  }
  status = sequence.Tick(EVENTS.TICK, blackboard);
}, 1000);

function StopTick() {
  clearInterval(timer);
}
