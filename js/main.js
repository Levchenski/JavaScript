function o(n, a, c) {
    this.n = n;
    this.a = a;
    this.c = c;
    return !new.target ? new o(n, a, c) : false;
}

let arr = [
    o('Sergey', 23, 'St.Petersburg'),
    o('Sasha', 16, 'Moscow'),
    o('Viktor', 19, 'Volgograd')
];


let s = arr.find(i => i.n == 'Sergey');
console.log(s);