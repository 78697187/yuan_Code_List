 // 单链表
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node('head');
  }

  find(item) {
    let currentNode = this.head;
    while(currentNode !== null && currentNode.value !== item){
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // value为要插入的数据， item：数据要插入到这个节点后面
  insert(value, item) {
    const newNode = new Node(value);
    const cur = this.find(item);
    newNode.next = cur.next;
    cur.next = newNode;
  }

  findPre(item) {
    let cur = this.head;
    while(cur.next !== null && cur.next.value !== item) {
      cur = cur.next;
    }
    return cur;
  }

  remove(item) {
    const preNode = this.findPre(item);
    if(preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }
}