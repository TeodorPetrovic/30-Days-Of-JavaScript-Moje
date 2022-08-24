//Exercise Level 1
//1
let firstName = "Teodor"
let lastName = "Petrovic"
let country = "Serbia"
let city = "Belgrade"
let age = 23
let isMarried = false
const now = new Date()
let year = now.getFullYear()
console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof country)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)
//2
console.log("10" === 10)
//3
console.log(parseInt("9,8") == 10)
//4
console.log()
console.log()
console.log()

console.log()
console.log()
console.log()
//5 //6
//7
console.log(now.getFullYear())

//Exercise 2
/* let base = prompt('Enter base', 'number goes here')
console.log(base)
let height = prompt('Enter height', 'height goes here')
console.log(height)
let area = 0.5 * base * height
alert(`The area of the triangle is ${area}.`)
//console.log(`The area of the triangle is ${area}.`) */

//10
let firstName2 = 'Asabeneh'
let lastName2 = 'Yetayeh'

firstName2.length > lastName2 
    ? console.log(`Your first name, ${firstName2} is longer than your family name, ${lastName2}`)
    : console.log(`Your first name, ${firstName2} is shorter than your family name, ${lastName2}`)