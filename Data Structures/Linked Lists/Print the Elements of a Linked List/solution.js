// https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

'use strict';

function printLinkedList(head) {
  if (head === null) {
    return; 
  }
  console.log(head.data);
  return printLinkedList(head.next); 
}

printLinkedList();
