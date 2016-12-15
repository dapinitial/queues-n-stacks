const Node = require('./node.js');
const Stack =  module.exports = function(maxSize) {
  this.top = null;
  this.maxSize = maxSize || null;
};

Stack.prototype.push = function(val) {
  // a node should be create with val and prev node
  // no return value here
  this.top = new Node(val, this.top);
  this.size += 1;
};

Stack.prototype.pop = function() {
  // remove the node assigned to the top of the Stack
  // assign previous node to the top
  // return value here of node removed
  let temp = this.top;
  this.top = temp.prev;
  this.currSize -= 1;
  return temp.val;
};

Stack.prototype.peek = function() {
  // return value of the top node
  if(this.top) {
    return this.top.val;
  }
  return null;
};
