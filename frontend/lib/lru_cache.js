import List from './list';

class LRUCache {
  constructor(max) {
    this.map = {};
    this.store = new List();
    this.max = max;
    this.count = 0;
  }

  includes(key) {
    return !!this.map[key];
  }

  get(key) {
    const link = this.map[key];
    this._updateLink(link);
    return link.val;
  }

  insert(key, val) {
    this.count++;
    return this._calc(key, val);
  }

  _calc(key, val) {
    const newLink = this.store.insert(key, val);
    this.map[key] = newLink;

    if (this.count > this.max) {
      this.count = this.max;
      this._eject();
    }

    return newLink.val;
  }

  _updateLink(link) {
    link.prev.next = link.next;
    link.next.prev = link.prev;

    link.prev = this.store.last() || this.store.head;
    link.prev.next = link;

    link.next = this.store.tail;
    this.store.tail.prev = link;
  }

  _eject() {
    const link = this.store.shift();
    delete this.map[link.key];
    return;
  }
}

export default LRUCache;
