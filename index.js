let num1 = 8
let num2 = 2
document.getElementById("num1-el").textcontent = num1
document.getElementById("num2-el").textcontent = num2
let sumEl = document.getElementById("sum-el")
function add(){
let result = mun1 + num2
sumEl.textContent = "sum: " + result
}
function Subtract(){
let result = mun1 - num2
sumEl.textContent = "sum: " + result
}
function Multiply(){
let result = mun1 * num2
sumEl.textContent = "sum: " + result
}
function Divide(){
let result = mun1 / num2
sumEl.textContent = "sum: " + result
}



Objects and Functions
==================================================
Create a person that contains three keys:name,age, and country
create a function logdata(),--->this is used to craete aString format  

let person = {
name:"per",
age: 35,
country:"norwat"
}
function logdata(){
console.log(person.name + " is " +  person.age + "years old and linves in" + person.country)
}
logdata()

-----> If else
====================================
if(age < 6)
{
console.log("free")
}
else if (age < 18 ){
console.log("child discount")
}
else if ( age < 27 )
console.log("student discount")
}
else if(age < 67){
console.log("full prize")
}
else {
console.log("senior citizen discount")
}


----->Loops and Arrays
=======================================
let largecountries = ["china", "india", "usa", "Indonesia", "pakistan"]
for(let i = 0; i < largecountries.length: i++){
console.log("-" + largecountries[i])
}

----->pop, unshift, push, shiftchallenge
======================================
let largecountries = ["canada", "India","usa","indonesia","monaco"]
largecountries.pop()
largecountries.push("pakisthan")
largecountries.shift()
console.log(largecountries)

output
=======
["canada", "India","usa","indonesia", "pakisthan"]

shift  ------   output
=========
 ["India","usa","indonesia", "pakisthan"] //canada is removed

unshift :  means removed "canada" will be included in the same place
=======

logical operators
==================
let dayOfMonth = 13
let weekday = "friday"
logical AND operater ----> &&
if ( dayOfMonth ===13 && weekday ==="friday"){
console.log("Ok")
}

























































