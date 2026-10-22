let UserName: string = "shwetha"
console.log(UserName);

let age: number = 32;
console.log(age);

let employeed: boolean = false;
console.log(employeed);

function concat(a: string, b?: string): string {
    return a + (b ?? " ");
}
console.log(concat("Shwetha"));

function sum(a: number, b: number): number {
    return a + b;
}
console.log(sum(1, 10));


let mul = (a: number, b: number) => a * b;
console.log(mul(2, 3));