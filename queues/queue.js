const Node = require('./node.js');

const Queue =  module.exports = function() {
  this.front = null;
  this.back = null;
};

Queue.prototype.enqueue = function(val) {
  if(!this.back) {
    this.back = new Node(val);
    this.front = this.back;
    return;
  }
  this.back.prev = new Node(val);
  this.back = this.back.prev;
  // create a new node using val as node.val
  // and assign the back.prev to new node
  // assign the new node to the back of the Q
};

Queue.prototype.dequeue = function() {
  if(this.front) {
    let temp = this.front;
    if(this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = temp.prev;
    }
    return temp.val;
  }
  return null;
};

Queue.prototype.peek = function() {
  // return value of the top node
  if(this.top) {
    return this.top.val;
  }
  return null;
};
