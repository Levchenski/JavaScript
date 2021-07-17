let itemOne = document.getElementsByClassName('item')[0];
let newobj = document.querySelectorAll('.newobj');

let cvn = document.getElementsByTagName('canvas')[0];

newobj[0].prepend(cvn);
let ctx = cvn.getContext("2d");
let x, y, w, h;
x = 100;
y = 50;
w = 50;
h = 50;
ctx.fillStyle = 'red';
ctx.fillRect(x, y, w, h);
ctx.fillStyle = "blue";
ctx.fillRect(0, y, w, h);
ctx.clearRect(0, 0, 400, 200);
ctx.strokeStyle = "green";
ctx.lineWidth = "10";
ctx.rect(50, 20, 200, 100);
ctx.stroke();
ctx.fillStyle = "blue";
ctx.fill();

let range = document.querySelector('[type="range"]');
console.log(range);

function calc() {
   this.read = function () {
      this.a = +prompt('a', 0);
      this.b = +prompt('b', 0);
   };
   this.sum = function () {
      return this.a + this.b;
   };
}

let clacul = new calc();

clacul.read();
console.log('result = ' + clacul.sum());
