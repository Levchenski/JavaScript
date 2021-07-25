
function Obj(name, age, city, region, sex, number, admin) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.region = region;
    this.sex = sex;
    this.number = number;
    this.admin = admin;
}

let Sergey = new Obj('Sergey', 23, 'St.petersburg', 'RU', 'M', '+79214312887', true);
console.log(Sergey);

function usNew(params) {
    console.log(new.target);
}

new usNew();