class Student {
    static collegeName: string = "SVECW";

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Name:", this.name);
        console.log("College:", Student.collegeName);
    }
}

let s1 = new Student("Sai");
s1.display();