/* let var1 = "var1"
let var2 = true
let var3
let var4 = null
console.log(typeof var1)
console.log(typeof var2)
console.log(typeof var3)
console.log(typeof var4)
let myAge =  21
let yourAge = 45
console.log("I am", myAge, "years old.")
console.log("You are", yourAge, "years old.") */

//DAY 2

const PI = Math.PI
console.log(PI)
const paragraph = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki.\
I am a teacher and I love teaching. I teach HTML, CSS, JavaScript, React, Redux, \
Node.js, Python, Data Analysis and D3.js for anyone who is interested to learn. \
In the end of 2019, I was thinking to expand my teaching and to reach \
to global audience and I started a Python challenge from November 20 - December 19.\
It was one of the most rewarding and inspiring experience.\
Now, we are in 2020. I am enjoying preparing the 30DaysOfJavaScript challenge and \
I hope you are enjoying too."

console.log(paragraph)

//Template literals

console.log('The sum of 2 and 3 is 5')

let a = 2
let b = 3

console.log(`The sum of ${a} and ${b} is ${a + b}`) // Nije navodnik nego ovaj ` iznad tab

console.log(`${a} is grater than ${b}: ${ a > b}`)

let string = "30 days od coding"
console.log(string.split(" "))

//Day 2 training

//1
let challenge = "30 Days of JavaScript"
//2
console.log(challenge)
//3
console.log(challenge.length)
//4
console.log(challenge.toUpperCase())
//5
console.log(challenge.toLowerCase())
//6
console.log(challenge.substring(2, 21))
//7
console.log(challenge.replace('Days of JavaScript', ''))
//8
console.log(challenge.includes("Script"))
//9
console.log(challenge.split())
//10
console.log(challenge.split(" "))
//11
let text = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(text.split(", "))
//12
console.log(challenge.replace("JavaScript", "Python"))
//13
console.log(challenge.charAt(15))
//14
console.log(challenge.indexOf("J"))
console.log(challenge.charCodeAt(11))

