class ArrayClass {
    constructor() {
        this.newArray = [];
    }
    insert(value) {
        this.newArray.push(value);
    }
    remove(removeIndex) {
        this.newArray.splice(removeIndex, 1);
    }
    print() {
        console.log(this.newArray);
    }
    indexOf(value) {
        return this.newArray.indexOf(value);
    }
}
