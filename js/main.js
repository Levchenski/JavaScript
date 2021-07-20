let newobj = document.querySelectorAll('.newobj');
let is = document.querySelector('[name="range"]').value;
let bis = document.querySelector('[name="range"]');
let em = document.querySelector('[type="email"]');

let a = 0;
let b = 0;

let o = a || b;

let mesagge = (o) ? 'ok' : 'No';

console.log(mesagge);
