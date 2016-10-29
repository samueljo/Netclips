import Link from './link';

class List {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  first() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.head.next;
    }
  }

  last() {
    if (this.isEmpty()) {
      return undefined;
    } else {
      return this.tail.prev;
    }
  }

  isEmpty() {
    return this.head.next === this.tail;
  }

  find(key) {
    let currentLink = this.head.next;
    if (currentLink !== this.tail) {
      if (currentLink.key === key) {
        return currentLink;
      } else {
        currentLink = currentLink.next;
      }
    } else {
      return undefined;
    }
  }

  insert(key, val) {
    const link = this.find(key);

    if (link) {
      link.val = val;
      return link;
    } else {
      return this._createLink(key, val, this.tail.prev, this.tail);
    }
  }

  shift() {
    const link = this.first();
    if (link) {
      return this._updateList(link);
    } else {
      return undefined;
    }
  }

  _createLink(key, val, prevLink, nextLink) {
    const link = new Link(key, val);
    link.prev = prevLink;
    link.next = nextLink;
    prevLink.next = link;
    nextLink.prev = link;
    return link;
  }

  _updateList(link) {
    link.prev.next = link.next;
    link.next.prev = link.prev;
    return link;
  }
}

export default List;
