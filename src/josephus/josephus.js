const LinkedList = require('../lib/linkedList');
const tester = new LinkedList;
tester.insertAtHead('D');
tester.insertAtHead('C');
tester.insertAtHead('B');
tester.insertAtHead('A');


function josephus(list, m) {
    let node = list.head;
    const tail = list.find((node) => !node.next);
    tail.next = list.head;

    while (node.next != node) {
        for (let i = 1; i < m; i++) {
            node = node.next;
            console.log(node);
        }
        if (node.next === list.head) {
            list.head = list.head.next;
        }
        node.next = node.next.next;
        node = node.next;
        console.log(node);
    }
    return node.value;
}
console.log(josephus(tester, 3));

module.exports = josephus;
