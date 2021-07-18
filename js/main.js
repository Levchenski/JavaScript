let itemOne = document.getElementsByClassName('item')[0];
let newobj = document.querySelectorAll('.newobj');

function obj(name, age, city) {
   this.name = name;
   this.age = age;
   this.city = city;
}
const id0 = new obj('Sergey', 23, "St.Petersburg");

let orId = Symbol("id");

id0[orId] = 25;



console.log(id0);


const user = {
   name: "jorg",
   age: 20,
   [orId]: id0,
}

console.log(user);

for (key in user) {
   console.log(user[key]);
}
console.log(user[orId]);

let clon = Object.assign({}, user);

let soc = Symbol.for('id');
let daa = Symbol.for('id');

console.log(soc === daa);

console.log(clon[orId]);

let o = Symbol.keyFor(soc);
console.log(o);