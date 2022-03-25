"use strict";
// export {}; // this tells ts that it is a module and hence variables are local scoped. w/o export it assumes it as script file with global scope with other scripts
let val = "hi";
console.log(val);
let ary = ["hi", "hello"];
ary.push(...["ban", "hi"]);
ary = ["g", "gd"]; // but not [3, 6, 5]
function fun(value) {
    return value * 3;
}
console.log(fun(3));
let boole;
boole = NaN;
console.log("hello there");
let math = 4;
let b; // any type by default
b = "hi";
console.log(b);
b = 4;
let fff; // function signature
fff = function (objet) {
    return `${objet.name} is in class ${objet.cls}`;
};
console.log(fff({ name: "he", cls: 44 }));
//////////////////////////////////////
const myUnchangingUser = {
    name: "Fatma",
};
// When "as const" is applied to the object, then it becomes
// a object literal which doesn't change instead of a
// mutable object which can.
//   myUnchangingUser.name = "Raîssa";  // ERROR
// "as const" is a great tool for fixtured DATA and       -> value of variable becomes constant
// "as const" also
// works with arrays:
let exampleUsers = [{ name: "Brian" }, { name: "Fahrooq" }];
//   exampleUsers = [{ name: "Josh" }, { name: "Fahrooq" }];    // gives error as name changed to JOSH
////////////////////////////////////////
let form = document.querySelector('form'); // type is HTMLFormElement
// console.log(form.method);       will give error as form value may be null 
// so - 1. form = document.querrselector('form')!;  --  means we gurantee that form element is present
//  or if(form){console.log(form.method)} 
let div = document.querySelector('.container'); // type element as can't infer from class name but from tag name    
// or div = document.querySelector('.container') as HTMLDivElement; 
//////////////////////////////////////////////////////////
// now change in tsconfig file change - "target": es6 i.e we will write in this 
// and change module to ES2015
// do tsc --init to produce a cofig file for ts
// change rootDirec: to directory in which files will be compiled
// change ourDirec: to directory to directory in which compiled js files will go 
// add property - "include: ["src"]" in tsconfig file at last => only files in src folder will be compiled to .js files 
///////////////////////////////////////////////////////  
//classes 
class Man {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    } // with private members you don't have to write constructor, just pass them
    speak() { console.log("I am speaking!", this.name, this.age); }
}
// person has firstname additional to persInterafce interface
class Person {
    //of persInterface i.e string it helps in telling relationship
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello() {
        return 10;
    }
    sayHi() { return "hi"; }
}
let Josh = new Person("josh", "singh");
Josh.sayHello();
Josh.sayHi();
let benz;
benz = {
    name: "mercedez benz classic",
    // model: 4
};
let crux = {
    name: "crux delux super byke" // no error for model i.e makes name? and model?
};
//  Required<type>   --- similar to Partial<type> except makes all required
//////////////////////////////////////// 
// generics 
// generics are similar to c++ templates, i.e multiple types share common function/class etc 
//and we specify which type we are using while declaration
function uid(obj) {
    let uidno = Math.floor(Math.random() * 10) + 1;
    // console.log(obj.age);          // ERROR: dont know if property "age" exists
    return Object.assign(Object.assign({}, obj), { uidno }); // we only know that returned object has uidno property not name or age as we passed type:object             
}
let newobject = uid({ name: "shaun", age: 53 });
console.log(newobject.uidno); // fine 
// console.log(obj.age);          // ERROR: dont know if property "age" exists
// so use generics 
function newuid(obj) {
    let uidno = Math.floor(Math.random() * 10) + 1;
    return Object.assign(Object.assign({}, obj), { uidno });
}
let anotherobject = newuid({ name: "shaun", age: 53 });
console.log(anotherobject.age); // works fine
// but here 
let someobject = newuid("shaun"); // works !!!! but but we want only object to be T so 
function finaluid(obj) {
    // do same here works only with that object
}
// now 
let newstorage = {
    name: "Adults",
    qty: 5,
    data: "they are old"
};
let anotherstorage = {
    name: "Child",
    qty: 4,
    data: 243
};
