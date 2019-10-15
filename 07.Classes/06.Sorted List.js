class List {
    constructor() {
        this.numbers = [];
        this.size = 0;
    }

    add(element) {
        this.numbers.push(element);
        this.sortArray(this.numbers);
        this.size++;
    }

    remove(index) {
        if (this.numbers.length > index && index >= 0) {
            this.numbers.splice(index, 1)
            this.size--;
            this.sortArray(this.numbers);
        }
    }

    get(index) {
        return this.numbers[index];
    }

    sortArray(array) {
        return array.sort((a, b) => {return a - b})
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
list.size;
