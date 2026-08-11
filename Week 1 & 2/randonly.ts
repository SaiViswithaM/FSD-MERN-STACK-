class Student {
    readonly id: number;
    name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
    }
}

let student = new Student(101, "Sai");
student.display();