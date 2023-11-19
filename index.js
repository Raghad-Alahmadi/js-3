const MyString = 'I Love JS'
const regex = /JS/
const contains = regex.test(MyString)
console.log(contains)

//

let newString = MyString.replace(regex, 'Kotlin')
console.log(newString)

//

let newReg = MyString.search(/JS/)
console.log(newReg)


//

const str = 'Regular expressions, commonly known as regex, serve as potent tools for pattern matching and text manipulation. They provide a concise and adaptable method for searching, matching, and manipulating strings based on specific patterns. Regex enables the creation of intricate search conditions, incorporating logical operators like and for precise text processing. This proficiency proves invaluable for tasks ranging from straightforward string matching to advanced data extraction and validation. Mastering regex enhances your ability to navigate and manipulate textual data across various programming and scripting languages.'

let MyRegex = str.match(/and/g)
console.log(MyRegex)
console.log(MyRegex.length)




function replace(){
    let searchtext = document.getElementById("search")
    let replacetext = document.getElementById("replace")
    let text = document.getElementById("text").innerHTML
    let newtext = document.getElementById("text")
    let reg = new RegExp(searchtext, 'gi')
    text = text.replace(reg, replacetext)
    newtext.innerHTML = text
}



console.log(1)
console.log(2)

setTimeout(() =>{
    console.log(3)
}, 3000)

console.log(4)
console.log(5)

//

console.log('Start')
function userInfo(name, callback){
    setTimeout(()=>{
        console.log('** User info recived **')
        callback(name)
    }, 3000)
}

let userName = userInfo('Ragahd', name =>{
    console.log(`Your name is ${name}`)
})
console.log('End')

//

console.log('start')

const newUser = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const UserInfo = {
            name: 'Ragahd',
            age: 11
        }
        resolve(UserInfo)
    }, 3000)
})

const addNewUser = UserInfo =>{
    let userAge = UserInfo.age
    let adultAge;

    if ( userAge >= 18){
        adultAge = `${UserInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else{
        adultAge = `${UserInfo.name} is not an Adult`
        return Promise.reject(new Error(adultAge))
    }
}

    newUser
    .then(addNewUser)
    .then( res =>{
        console.log('** User info recived **')
        console.log(res)
    })
    .catch(err =>{
        console.log(err.message)
    })
    console.log('End')

//



let ages = [25,30,32]
let [firstAge, secondAge, thirdAge] = ages
console.log(firstAge, secondAge, thirdAge)

//

let colors = ['red' , 'green']
let [firstColor, secondColor, thirdColor] = colors
console.log(firstColor, secondColor, thirdColor)

//

let colorss = ['red' , 'green', 'black']
let [firstColorr, secondColorr, thirdColorr ='blue'] = colorss
console.log(firstColorr, secondColorr, thirdColorr)

let[,,firstColorrr] = colorss
console.log(firstColorrr)

//

let numbers = [1,2, [3,4]]
let [first, second, [firstValue,secondValue]] = numbers
console.log(first, second,firstValue,secondValue)

//

let firstt = 5, secondd = 7;
[firstt, secondd] = [firstt, firstt]
console.log(firstt, secondd)

//

let colors2= ['red', 'green'];
[colors2[0],colors2[1]] = ['blue','black','white']
console.log(colors2)

//

let student ={
    name: {
        fname : 'Raghad',
        lname : 'Alahmadi'
    } ,

    '@my age': 21,
    gender: true
}
let {name,age,gender} = student
console.log(name,age,gender)

let {age: yourAge, name: yourName} = student
console.log(yourName, yourAge)


let namee = 'Saleh', agee = 23;

({name, age}= student)
console.log(namee,agee)


let {name:{lname: yourLastName}} = student
console.log(yourLastName)

console.log(student['@my age'])


//


let nums = [1,2,3,4,5];
let [firsttt, seconddd, ...others] = nums
console.log(firsttt,seconddd, others[0])


//

let fir = [1,2,3]
let sec = [4,5]
let thir = [ ...fir, ...sec]

console.log(thir)


///


function sum(first, second, ...others){
    console.log(...others)
    return first + second
}

console.log(sum(1,2,6,80,75))


//

let numms = [1,2,3,4,5]

let[one, two, ...otherss] = numms
console.log(...otherss)

//

let num1 = [1,2]
let[onee, twoo, ...othersss] = num1

console.log(onee, twoo, othersss)


//

let studentt ={
    name: 'Raghad',
    age: 21,
    gender: true
}

let {names, ...otherrrr} = studentt
console.log(names,otherrrr)


//


let{namess, nickname = 'unknown'} = studentt
console.log(namess, nickname)