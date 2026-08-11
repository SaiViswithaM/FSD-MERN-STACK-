class Student {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display() {
        console.log(this.id);
        console.log(this.name);
    }
}

let s = new Student(101, "Sai");
s.display();