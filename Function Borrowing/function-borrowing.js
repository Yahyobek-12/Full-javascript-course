// Function Borrowing — bu JavaScript'da bir obyektning metodini boshqa obyekt tomonidan ishlatishga imkon beradigan texnikadir. Bu jarayonda bir obyekt boshqa obyektning funksiyasini vaqtincha "qarz oladi" va uni o'zining kontekstida chaqiradi. Buni amalga oshirish uchun JavaScript'da call(), apply(), yoki bind() metodlaridan foydalaniladi.

// Function Borrowing qanday ishlaydi? Faraz qilaylik, bizda ikki obyekt bor: person1 va person2. person1da biror metod mavjud bo'lsa, biz person2 obyektidan bu metodni chaqirishimiz mumkin.

// Call orqali funtion borrowing ni amalga oshirdik

const person1 = {
    name: 'Yahyobek',
    greet: function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const person2 = {
    name: 'Sardor'
}

person1.greet.call(person2)

console.log(person2)

// apply bilan function borrowing
// apply ham call bilan bir xil ishlaydi faqat argumentlarni [massiv sifatida qabul qiladi]

let person3 = {
    name: 'Oyatillo',
    introduce: function(age, occupation) {
        console.log(`I am ${this.name} I am ${age} years old and I am a ${occupation}`)
    }
}

let person4 = {
    name: 'Yusufjon'
}

person3.introduce.apply(person4, [11, "Matematik"])

// bind() metodidan foydalanilganda, funksiya boshqa obyektga "qarz berilgan" holatda bog'lanadi, lekin chaqirilmaydi. U yangi funksiyani qaytaradi, va uni keyinroq chaqirish mumkin.

const person5 = {
    name: "Ozodbek",
    greet: function() {
        console.log(`I am ${this.name}`)
    }
}

const person6 = {
    name: 'Zuhra'
}

const greetAhmed = person5.greet.bind(person6) // funktsiya qaytadi lekin chaqirilmaydi
greetAhmed() // i am zuhra

// practice ==========================================================================================

// using call()

const Yahyobek = {
    name: 'Yahyobek',
    greet: function() {
        console.log(`Hello my name is ${this.name}`)
    }
}

const Sardor = {
    name: 'Sardor'
}

let newResult = Yahyobek.greet.call(Sardor)
console.log(newResult)

// using apply()

const oyatillo = {
    name: 'oyatillo',
    introduce: function(age, occupation) {
        console.log(`I am ${this.name} i am ${age} years old i am a ${occupation}`)
    }
}

const Yusufjon = {
    name: 'yusufjon'
}

const result = oyatillo.introduce.apply(Yusufjon, [11, "Teacher"])
console.log(result)

// using bing()

const ozodbek = {
    name: 'ozodbek',
    greet: function() {
        console.log(`Hello My name is ${this.name}`)
    }
}

const zuhra = {
    name: 'zuhra'
}

const resultNew = ozodbek.greet.bind(zuhra)
resultNew()