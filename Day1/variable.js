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
console.log(challenge.charAt(11))
console.log(challenge.charCodeAt(11))
//15
console.log(challenge.indexOf("a"))
//16
console.log(challenge.lastIndexOf("a"))
//17
let text2 = "You cannot end a sentence with because because because is a conjunction"
console.log(text2.indexOf("because"))
//18
console.log(text2.lastIndexOf("because"))
//19
console.log(text2.search("because"))
//20
let text3 = " 30 Days of JavaScript "
console.log(text3.trim())
//21
console.log(challenge.startsWith("30"))
//22
console.log(challenge.endsWith("JavaScript"))
//23
console.log(challenge.match(/a/g)) //regular expression
//24
let concat1 = "30 Days of"
let concat2 = " JavaScript"
console.log(concat1.concat(concat2))
//25
console.log(challenge.repeat(2))

//// Exercise Level 2
//1
console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
//2
console.log("\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\"")
//3
console.log(+'10' === 10)
//4
console.log(Math.round(parseFloat("9.8")) == 10)
//5
console.log("python".includes("on") && "jargon".includes("on"))
//6
console.log("I hope this course is not full of jargon.".includes("jargon"))
//7
console.log(Math.round(Math.random() * 100))
//8
console.log(Math.round(Math.random() * (100 - 50) + 50))
/* function randomInRange(min, max) {  
    return Math.floor(Math.random() * (max - min) + min); 
}*/
//9
console.log(Math.round(Math.random() * 255))
//10
let string2 = "JavaScript"
console.log(string2[Math.round(Math.random() * string2.length)])
//11
console.log(
    " 1 1 1 1 1 \n 2 1 2 4 8 \n 3 1 3 9 27 \n 4 1 3 16 64 \n 5 1 5 25 125"
)
//12
let text4 = "You cannot end a sentence with because because because is a conjunction"
console.log(text4.indexOf("because because because"))
console.log(text4.lastIndexOf("because"))
console.log(text4.substring(0, 31) + text4.substring(47 + 8, text4.length))

//Exercise Level3
//1
let text5 = "Love is the best thing in this world. Some found their love and some are still looking for their love."
console.log(text5.match(/love/g).length)
//2
let text6 = "You cannot end a sentence with because because because is a conjunction"
console.log(text6.match(/because/g).length)
//3
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence.replaceAll(/%|@|\$|&|#|;/g, ""))
//4
let text7 = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let numbers = text7.match(/[0-9]+/g)
console.log("Anual Sallary: " + ((+numbers[0] + +numbers[2]) * 12 + +numbers[1]) )



