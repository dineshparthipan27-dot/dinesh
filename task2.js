//task1
let a1 ="Dinesh"  //string
let b1 =22        //number
let c1  =true;    //boolean
let d1            //undefined
let e1 =prompt()  //null

//Values
console.log(a1);
console.log(b1);
console.log(c1);
console.log(d1);
console.log(e1);
//typeof
console.log(typeof a1);
console.log(typeof b1);
console.log(typeof c1);
console.log(typeof d1);
console.log(typeof e1);

//task2
let colors =["red","green","blue","yellow","black"];
//first element
console.log(colors[0]);

//last element using length
console.log(colors[colors.length - 1]);

//third element
console.log(colors[2]);

//total elements
console.log( colors.length);

//task3   

let student ={
  name: "Parthipan",
  skills: ["HTML","CSS","JS"],
  experience: "3 year",
  location: "SALEM"
};
console.log(student.name);

console.log(student.skills[0]);

student.role ="Frontend Developer";

console.log(student);

//Task4
let a = 10;
let b = 3;
// Add
console.log(a + b);
// Sub
console.log(a - b);
// Multip
console.log(a * b);
// Divi
console.log(a / b);
// Modulus
console.log(a % b);
// Exponent
console.log(a ** b);

//task5
let c =5;
let postvalue  =c++; 
let prevalue =++c;  

console.log(c);
console.log(postvalue);
console.log(prevalue);

let d =2;
b =d++;

console.log(d);

//task6
let num =3;
num**=4;

console.log(num);

//task7

console.log(5 == "5");      // true
console.log(5 === "5");     // false
console.log(0 == false);    // true
console.log(0 === false);   // false

//task8
let username ="vijay";
let password ="69";

if (username ==="vijay" && password === "69") {
  console.log("Login success");
} else {
  console.log("Login failed");
}

//task9
let role ="arun";

if (role ==="arun" || role === "manager"){
  console.log("Access granted");
} else {
  console.log("Access denied");
}

//tast10
let din =false;

if (!din){
  console.log("User is nOT logged in");
} else {
  console.log("User is logged in");
}

//task11

let age =17;

let result =age <= 18? "Eligible" : "Not eligible";

console.log(result);

let number =17;

let output = age >=18 ? "Eligible" : "Not eligible";

console.log(output);

//task12

let user = {
  name:"gokul",
  age: 22,
  isLoggedIn: true,
  skills: ["JS","React"]
};
console.log(user.name);
console.log(user.skills[0]);

console.log( user.age >=18);

if (user.isLoggedIn && user.age >=18) {
  console.log("Access allowed");
} else {
  console.log("Access denied");
}
// login 
console.log(user.isLoggedIn ?"User is logged in":"user is not logged in");
// age
user.age++;
console.log(user.age);
//skill
user.skills.push("Node.js");
console.log( user.skills);
// user
console.log( user);









