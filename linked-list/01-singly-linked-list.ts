class SinglyNode<T> {
    value: T;
    next: SinglyNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList<T> {
    head: SinglyNode<T> | null;
    size: number;

    constructor() {
        this.head = null;
        this.size = 0;
    }

    push(value: T) {
        const newNode = new SinglyNode<T>(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }
        this.size++;
        return true;
    }

    pop(): boolean {
        if (!this.head) return false;

        if (this.size === 1) {
            this.head = null;
            this.size--;
            return true;
        }

        let current = this.head;
        let prevNode = null;
        while(current.next) {
            prevNode = current;
            current = current.next;
        }
        prevNode.next = null;

        this.size--;
        return true;
    }
}

const ll = new SinglyLinkedList<number>();
console.log(ll.pop());
console.log(ll.push(10));
console.log(ll.push(20));
console.log(ll);