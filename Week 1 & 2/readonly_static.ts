class College {
    readonly collegeCode: number = 101;
    static collegeName: string = "SVECW";

    display(): void {
        console.log("College Code:", this.collegeCode);
        console.log("College Name:", College.collegeName);
    }
}

let c1 = new College();
c1.display();