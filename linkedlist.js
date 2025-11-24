class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let temp = this.head;
        while (temp.next) temp = temp.next;
        temp.next = newNode;
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let temp = this.head;
        while (temp.next && temp.next.value !== value) {
            temp = temp.next;
        }
        if (temp.next) temp.next = temp.next.next;
    }

    search(value) {
        let temp = this.head;
        while (temp) {
            if (temp.value === value) return true;
            temp = temp.next;
        }
        return false;
    }

    toHTML() {
        let temp = this.head;
        let html = "";

        while (temp) {
            html += `<span class="node">${temp.value}</span> → `;
            temp = temp.next;
        }

        return html + "null";
    }
}
