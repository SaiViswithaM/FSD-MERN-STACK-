class Student {
    name: string;
    marks: number;

    constructor(name: string, marks: number) {
        this.name = name;
        this.marks = marks;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

let s1 = new Student("Sai", 95);
s1.display();