import List from './list';

class Cache {
  constructor(max) {
    this.map = {};
    this.store = new List();
    this.max = max;
    this.count = 0;
  }

  insert(key, val) {
    if (this.map[key]) {
      const link = this.map[key];
      this._updateLink(link);
      return link.val;
    } else {
      return this._calc(key, val);
    }
  }

  _calc(key, val) {
    const newLink = this.store.insert(key, val);
    this.map[key] = newLink;

    if (this.count > this.max) {
      this._eject();
    }

    return newLink.val;
  }

  _updateLink(link) {
    link.prev.next = link.next;
    link.next.prev = link.prev;

    link.prev = this.store.last();
    link.next = this.store.last().next;
    this.store.last().next = link;
  }

  _eject() {
    const link = this.store.shift();
    delete this.map[link.key];
    return;
  }
}

export default Cache;
