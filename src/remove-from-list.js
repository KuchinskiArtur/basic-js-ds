const { NotImplementedError } = require('../extensions/index.js');

function removeKFromList(l, k) {
  if (l.value === k) {
    l = l.next;
  }

  let current = l;

  while(current && current.next) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = {
  removeKFromList
};
