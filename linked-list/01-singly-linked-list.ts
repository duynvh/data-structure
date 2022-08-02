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

    push(value: T): boolean {
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

    shift(): boolean {
        if (!this.head) return false;

        let prevHead = this.head;
        this.head = prevHead.next;
        prevHead.next = null;
        this.size--;
        return true;
    }

    unshift(value: T): boolean {
        const newNode = new SinglyNode<T>(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let prevHead = this.head;
            newNode.next = prevHead;
            this.head = newNode;
        }

        this.size++;
        return true;
    }

    getAtIndex(index: number): SinglyNode<T> {
        if (index > this.size || index < 1) {
            return null;
        }

        if (index === 1) {
            return this.head;
        }

        let counter = 1;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    removeAtIndex(index: number): boolean {
        if (index > this.size || index < 1) {
            return false;
        }

        if (index === 1) {
            return this.shift();
        }

        if (index === this.size) {
            return this.pop();
        }

        let counter = 1;
        let current = this.head;
        let prev = null;
        while (counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = current.next;
        current.next = null;
        this.size--;
        return true;
    }

    insertAtIndex(value: T, index: number): boolean {
        if (index > this.size || index < 1) {
            return false;
        }

        if (index === this.size) {
            return this.push(value);
        }

        const newNode = new SinglyNode(value);
        let counter = 1;
        let current = this.head;
        let prev = null;

        while (counter < index) {
            prev = current;
            current = current.next;
            counter++;
        }

        prev.next = newNode;
        
        newNode.next = current;
        this.size++;
        return true;
    }

    find(value: T): SinglyNode<T> {
        if (!this.head) {
            return null;
        }

        let current = this.head;
        while (current) {
            if (current.value === value) {
                return current;
            }

            current = current.next;
        }

        return null;
    }
}

const ll = new SinglyLinkedList<number>();
console.log(ll.pop());
console.log(ll.push(10));
console.log(ll.push(20));
console.log(ll);