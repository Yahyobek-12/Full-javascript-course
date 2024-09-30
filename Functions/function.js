// Function declaration
// Deklaratsion funksiyalar JavaScript kodida mustaqil bo'lib, kodning har qanday qismida ishlatilishi mumkin, chunki ular kodni ishga tushirishdan oldin hosil qilinadi.

function greeting() {
    console.log("Hello World")
}

greeting()

// =====================================

// Function expression
// Funksiya ifodasi o'zgaruvchiga tayinlanadi va o'zgaruvchi orqali chaqiriladi. Funksiya ifodasi faqat e'lon qilinganidan keyin chaqirilishi mumkin.

const sayHello = () => {
    console.log('Hello')
}

sayHello()

// =====================================

// Anonymous Function
// Anonim funksiyalar nomsiz bo'ladi va ko'pincha yuqoridagi kabi ifodaviy funksiyalarda yoki callback funksiyalar sifatida ishlatiladi.

setTimeout(function() {
    console.log("This is an Anonymous function")
}, 1000)

// ====================================

// Arrow function
// Arrow funksiyalar qisqa yozilish uchun mo'ljallangan va ular this kalit so'zini o'zgacha tutadi. Bu funksiyalar funksiya ifodasi sifatida ishlatiladi.

const add = (a,b) => a + b
console.log(add(3, 2))

// Callback function
// Bu funksiya boshqa bir funksiyaga argument sifatida uzatiladi va o'sha funksiyaning ichida bajariladi.

function processArray (arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i])
    }
}

processArray([1,2,4], function(number) {
    console.log(number * 2)
})

// =====================================

// Async function
// Asinxron funksiyalar async kalit so'zi bilan boshlanadi va ular await orqali boshqa asinxron funksiyalarni kutadi.

async function fetchData() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        let data = await response.json()
        console.log(data)
        console.log('Success')
    } catch (error) {
        console.log('Error', error)
    }
}

// Mini Practice ===================

async function getData() {
    return "Hello from async functiom"
}

getData().then(result => console.log(result))

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function example() {
    console.log("Start");

    await delay(2000)
    console.log('2 seconds later')

    await delay(1000)
    console.log('1 seconds later')

}

example()

async function getUserData() {
    let user = await fetchUser();
    let posts = await fetchPosts(user.id);
    let comments = await fetchComments(posts[0].id);
    return comments;
}

getUserData().then(comments => console.log(comments));

// Har bir operatsiya await bilan kutiladi va u bajarilmaguncha kod boshqa qadamga o'tmaydi.

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

fetchData().then(result => {
    console.log(result)
})