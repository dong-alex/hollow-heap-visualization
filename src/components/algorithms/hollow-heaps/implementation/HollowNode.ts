// base heap node for hollow heaps - two -parent hollow heaps
import { Item } from "./Item";

export class HollowNode {
  public item: Item | null;
  public key: number;
  public rank: number;
  public child: HollowNode | null;
  public next: HollowNode | null;
  public ep: HollowNode | null;

  public constructor() {
    this.item = null;
    this.key = 0;
    this.rank = 0;
    this.child = null;
    this.next = null;
    this.ep = null;
  }
}
