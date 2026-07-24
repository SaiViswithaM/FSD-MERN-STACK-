class Student {
    constructor(
        public id: number,
        public name: string,
        public marks: number
    ) {}

    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

let s = new Student(101, "Sai", 95);
s.display();