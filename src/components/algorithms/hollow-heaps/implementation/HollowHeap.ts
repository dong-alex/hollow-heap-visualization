import { Item } from "./Item";
import { HollowNode } from "./HollowNode";

export class HollowHeap {
  root: HollowNode | null;
  size: number;
  maxRank: number;
  A: (HollowNode | null)[];

  constructor() {
    this.root = null;
    this.size = 0;
    this.A = Array(128).fill(null);
    this.maxRank = 0;

    this.makeNode = this.makeNode.bind(this);
    this.addChild = this.addChild.bind(this);
    this.link = this.link.bind(this);
    this.meld = this.meld.bind(this);
    this.insertIntoHeap = this.insertIntoHeap.bind(this);
    this.findMin = this.findMin.bind(this);
    this.deleteMin = this.deleteMin.bind(this);
    this.delete = this.delete.bind(this);
  }

  private makeNode(e: Item, k: number) {
    const newNode = new HollowNode();
    newNode.item = e;
    newNode.key = k;

    e.node = newNode;
    return newNode;
  }

  private addChild(v: HollowNode, w: HollowNode) {
    v.next = w.child;
    w.child = v;
    return;
  }

  private link(v: HollowNode, w: HollowNode) {
    if (v.key >= w.key) {
      this.addChild(v, w);
      return w;
    } else {
      this.addChild(w, v);
      return v;
    }
  }

  private meld(h1: HollowNode, h2: HollowNode) {
    if (h1 === null) {
      return h2;
    }
    if (h2 === null) {
      return h1;
    }
    return this.link(h1, h2);
  }

  private insertIntoHeap(item: Item, key: number, root: HollowNode) {
    return this.meld(this.makeNode(item, key), root);
  }

  private findMin(root: HollowNode | null): Item | null {
    if (!root) {
      return null;
    }
    return root.item;
  }

  private deleteMin(root: HollowNode) {
    // minimum is always root item and should always exist
    if (!root.item) {
      return;
    }

    return this.delete(root.item, root);
  }

  private delete(e: Item, h: HollowNode | null) {
    // hollow node
    e.node.item = null;
    e.node = null;

    // non-minimum deletion
    if (h.item !== null) return h;
    // server ties
    this.maxRank = 0;

    h.next = null;
    while (h) {
      let w: HollowNode | null = h.child;
      let v: HollowNode | null = h;
      h = h.next;

      while (w !== null) {
        let u: HollowNode | null = w;
        w = w.next;

        // u = w and w is the next node ( u -> w)
        if (u.item === null) {
          if (u.ep === null) {
            u.next = h;
            h = u;
          } else {
            if (u.ep === v) {
              w = null;
            } else {
              u.next = null;
            }

            u.ep = null;
          }
        } else {
          while (this.A[u.rank] !== null) {
            u = this.link(u, this.A[u.rank]);
            this.A[u.rank] = null;
            u.rank++;
          }
          this.A[u.rank] = u;
          if (u.rank > this.maxRank) {
            this.maxRank = u.rank;
          }
        }
      }

      v = null;
    }

    for (let i = 0; i <= this.maxRank; i++) {
      if (this.A[i]) {
        if (h) {
          h = this.link(h, this.A[i]);
        } else {
          h = this.A[i];
        }

        this.A[i] = null;
      }
    }

    return h;
  }

  private decreaseKey(e: Item, k: number, h: HollowNode) {
    let u: HollowNode = e.node;

    if (u === h) {
      u.key = k;
      return h;
    }

    let v: HollowNode = this.makeNode(e, k);

    u.item = null;
    if (u.rank > 2) {
      v.rank = u.rank - 2;
    }

    v.child = u;
    u.ep = v;

    return this.link(v, h);
  }

  insert(value: number, key: number): Item {
    const item = new Item(value);
    this.root = this.insertIntoHeap(item, key, this.root);
    this.size++;
    return item;
  }

  getMinimum(): Item | null {
    return this.findMin(this.root);
  }

  deleteMinimum(): void {
    this.root = this.deleteMin(this.root);
    this.size--;
  }

  deleteItem(item: Item): void {
    this.root = this.delete(item, this.root);
    this.size--;
  }

  reduceKey(item: Item, newKey: number) {
    this.root = this.decreaseKey(item, newKey, this.root);
  }
}
