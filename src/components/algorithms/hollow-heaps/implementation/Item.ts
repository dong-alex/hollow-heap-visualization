import { HollowNode } from "./HollowNode";

export class Item {
  public val: number;
  public node: HollowNode | null;

  public constructor(data: number) {
    this.val = data;
    this.node = null;
  }
}
