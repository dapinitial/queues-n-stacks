const stack = require('./stack');
const assert = require('assert');

describe('stack module', function() {
  describe('.push()', function() {
    it('should add a new node to the top of the stack', function() {
      let st = new Stack();
      st.push(25);
      assert(st.top.val).to.equal(25);
      assert(st.top.prev).to.equal(null);
    });
    it('should throw error when maxSize exceeded', function() {
      let st = new Stack();
      st.push(25);
      expect(st.push(24)).to.equal(Error);
    });
  });
});
