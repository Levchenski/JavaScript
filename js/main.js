let newobj = document.querySelectorAll('.newobj');

let is = document.querySelector('[name="range"]').value;

newobj[0].textContent = is;
newobj.addEventListener("click", () => {
   console.log(newobj[0]);
});

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
let clon = Object.assign({}, user);
let soc = Symbol.for('id');
let daa = Symbol.for('id');
let o = Symbol.keyFor(soc);
console.log(user[orId]);
console.log(soc === daa);
console.log(clon[orId]);
console.log(o);