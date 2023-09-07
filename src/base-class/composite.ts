import { Action } from "./action";
import { Base } from "./base";

export abstract class Composite extends Base {
  childrenStorage: Array<Action | Composite>;
  currentNodeNum: number;

  constructor(name: string, childrenStorage: Array<Action | Composite>) {
    super(name);
    this.currentNodeNum = 0;
    this.childrenStorage = childrenStorage;
  }
}
