class Box<T> {

    value: T;

    constructor(value: T) {
        this.value = value;
    }

    display(): void {
        console.log(this.value);
    }
}

let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello TypeScript");
let booleanBox = new Box<boolean>(true);

numberBox.display();
stringBox.display();
booleanBox.display();