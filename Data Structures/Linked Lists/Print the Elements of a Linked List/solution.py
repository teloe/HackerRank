# https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list/problem

def printLinkedList(head):
    if head is not None:
        print(head.data)
        print_list(head.next)
