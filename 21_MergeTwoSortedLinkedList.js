class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

var mergeTwoLists = function (l1, l2) {
    let answer = new ListNode()
    let head = answer

    while(l1 !== null && l2 !== null) {
        if(l1.val < l2.val) {
            answer.next = new ListNode(l1.val)
            l1 = l1.next
        } else {
            answer.next = new ListNode(l2.val)
            l2 = l2.next
        }

        answer = answer.next
        
    }
    if(l1 !== null) {
        answer.next = l1
    }
    if(l2 !== null) {
        answer.next = l2
    }

    return head.next
};