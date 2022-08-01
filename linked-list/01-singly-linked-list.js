var SinglyNode = /** @class */ (function () {
    function SinglyNode(value) {
        this.value = value;
        this.next = null;
    }
    return SinglyNode;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.head = null;
        this.size = 0;
    }
    SinglyLinkedList.prototype.push = function (value) {
        var newNode = new SinglyNode(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return true;
    };
    SinglyLinkedList.prototype.pop = function () {
        if (!this.head)
            return false;
        if (this.size === 1) {
            this.head = null;
            this.size--;
            return true;
        }
        var current = this.head;
        var prevNode = null;
        while (current.next) {
            prevNode = current;
            current = current.next;
        }
        prevNode.next = null;
        this.size--;
        return true;
    };
    return SinglyLinkedList;
}());
var ll = new SinglyLinkedList();
console.log(ll.pop());
console.log(ll.push(10));
console.log(ll.push(20));
console.log(ll);
