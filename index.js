const openBtn = document.querySelector(".menuIcon");
const navMobile = document.querySelector(".navMobile");
const navlogo = document.querySelector(".logo");
const closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  navMobile.style.display = "none";
  navlogo.style.position = "relative";
});

openBtn.addEventListener("click", () => {
  navMobile.style.display = "flex";
  navlogo.style.position = "fixed";
});
//any function with new keyword returns an object
const HumanFactory = function () {
  this.name = "tee";
  this.jump = function () {
    console.log("i am jumping");
  };
};
const doyin = new HumanFactory();
const ruth = new HumanFactory();
ruth.age = 26;
ruth.online = "true";
console.log(doyin);
console.log(ruth);

function User(myName, myAge) {
  this.name = myName;
  this.smart = true;
  this.sleep = function () {
    console.log("i am sleeping");
  };
}
const firstUser = new User("Ammie", 24);
console.log(firstUser);

//CLASSES
class animals {
  constructor() {
    (this.name = "pet"), (this.age = 3), (this.Alive = true);
  }
}
const dog = new animals();
console.log(dog);
