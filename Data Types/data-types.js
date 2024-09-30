// Ma'lumot turlari

// 1) string
/* String matn yoki belgilar ketma-ketligini ifodalaydi. Uni qo'shtirnoq yoki birtirnoq ichiga yozib ishlatish mumkin. */

let greeting = "Salom Yahyobek!"
let singleQuote = 'Bu bir satrli matn'

// ================================================================================================================

// 2) number
/* Number raqamli qiymatlarni ifodalaydi. JavaScript-da butun sonlar va o'nlik kasrlar bir xil data turi bo'lib, Number sifatida ifodalanadi. */

let age = 16 // butun son
let height = 1.75 // o'nlik kasr

// ================================================================================================================

// 3) bigInt
/* BigInt juda katta raqamlarni ifodalash uchun ishlatiladi. Bu yangi data turidir va juda katta yoki juda kichik sonlarni hisoblashda qo'llaniladi. BigInt raqamlar oxiriga n harfi qo'shish orqali yaratiladi. */

let largeNumber = 1234567890123456789012345678901234567890n
console.log(typeof largeNumber)

// ================================================================================================================

// 4) boolean
/* Boolean faqat ikkita qiymatga ega bo'lishi mumkin: true yoki false. Bu mantiqiy qiymatlarni ifodalaydi. */

let isStudent = true
let isMarried = false

// ================================================================================================================

// 5) null
/* null qiymati ifodalaydi va bu qiymat ma'lum bir o'zgaruvchining bo'sh yoki hech qanday qiymatga ega emasligini bildiradi. */

let nullVar = null
console.log(nullVar)

// ================================================================================================================

// 6) undefined
/* undefined qiymati o'zgaruvchi e'lon qilingan, lekin unga hech qanday qiymat berilmagan holatni bildiradi. */

let undefinedVar
console.log(undefinedVar)

// ================================================================================================================

// 7) symbol
/* Symbol noyob va o'zgarmas qiymatlarni yaratish uchun ishlatiladi. Har bir Symbol qiymati noyob bo'lib, bir-biriga teng bo'lmaydi. */

let sym1 = Symbol('unique')
let sym2 = Symbol('unique')
console.log(sym1 === sym2)

// ================================================================================================================

// 8) object
/* Object bu bir-biriga bog'liq ma'lumotlarni to'plamni ifodalaydi. Ular kalit-va-qiymat juftliklari (key-value pairs) tarzida tashkil etilgan. Ob'ektlar ma'lumotlarni tashkil etishda juda qulay. */

const person = {
    name: 'yahyobek',
    age: 16,
    job: 'developer'
}
console.log(person)

// ================================================================================================================

// 9) array
/* Array ro'yxat yoki ketma-ketlikni ifodalaydi. Ular tartiblangan qiymatlar to'plamidir va indekslar orqali mavjud qiymatlarga murojaat qilish mumkin. Indekslar 0-dan boshlanadi. */

let cars = ['bmw', 'mers', 'mclaren']
console.log(cars.reverse())


