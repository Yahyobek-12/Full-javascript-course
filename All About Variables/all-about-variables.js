// JavaScriptda o'zgaruvchilarni e'lon qilish usullari quyidagilar:

// var:
/* Eski usulda o'zgaruvchilarni e'lon qilish uchun ishlatiladi.
Funksiya darajasida ko'rinadi (function scope), ya'ni funksiya ichida e'lon qilingan var o'zgaruvchisi butun funksiya bo'ylab ko'rinadi.
Qayta e'lon qilinishi mumkin va yangi qiymatni olish uchun qayta aniqlanishi mumkin.
Hoisting deb nomlangan xususiyatga ega, ya'ni o'zgaruvchi e'lon qilinishidan oldin ham foydalanilishi mumkin. */

var x = 10
console.log(x)

// ======================================================

// let:
/* ES6 (ECMAScript 2015) dan beri mavjud.
Blok darajasida ko'rinadi (block scope), ya'ni {} blok ichida e'lon qilingan let o'zgaruvchisi faqat shu blok ichida ko'rinadi.
Qayta e'lon qilinishi mumkin emas, lekin yangi qiymat olish uchun qayta aniqlanishi mumkin. */

let y = 20 
y = 15 // qayta e'lon qilish mumkin emas lekin yangi qiymat olish uchun qayta aniqlash mumkin
console.log(y)

// ======================================================

// const:
/* ES6 dan beri mavjud.
Blok darajasida ko'rinadi (block scope).
O'zgaruvchi qayta e'lon qilinishi va qayta aniqlanishi mumkin emas. E'lon qilinayotganda qiymati berilishi kerak va bu qiymat o'zgarmaydi.
Murakkab turdagi o'zgaruvchilar (masalan, massivlar yoki obyektlar) ichidagi elementlarni o'zgartirish mumkin. */

const z = 30 
// z = 40 // const bilan yaratilgan o'zgaruvchilar qayta e'lon qilinishi va qayta aniqlanishi mumkin emas
console.log(z)

const arr = [1, 2, 3]
arr.push(4) // objectlar va massivlarni ichidagi o'zgaruvchilarni o'zgartirish mumkin
console.log(arr)

// ================================================================================================================

// JavaScriptda o'zgaruvchi nomlash qoidalari quyidagicha:

// Rezerv qilingan so'zlardan foydalanmaslik:
/* JavaScriptda rezerv qilingan so'zlar (reserved words) va kalit so'zlar (keywords) o'zgaruvchi nomi sifatida ishlatilmasligi kerak. */

// javascriptda shunday qilib o'zgaruvchilarni nomlash mumkin
var _salom = 'salom'
var $pul = 'pul'
var yahyobekErgashboyev = 'camelCase nomlash usuli'

// lekin bunday qilib nomlash mumkin emas bularning barchasi hato
// var 1hello = '1hello'
// var function = 'function'
// var var = 'var'

// ================================================================================================================

// JavaScriptda o'zgaruvchilarning ko'rinishi (scope) ularning qaerda e'lon qilinganiga va qaysi usul bilan e'lon qilinganiga bog'liq. JavaScriptda uchta asosiy ko'rinish turi mavjud:

// 1) Global scope
/* O'zgaruvchi funksiya yoki blok tashqarisida e'lon qilingan bo'lsa, global ko'rinishga ega bo'ladi.
Bunday o'zgaruvchi butun dastur bo'ylab mavjud bo'ladi. */

var globalVar = 'i am a global variable'

function test() {
    console.log(globalVar) // Global scope
}

test()

// ======================================================

// 2) Function scope
/* var bilan e'lon qilingan o'zgaruvchilar funksiya darajasida ko'rinishga ega.
O'zgaruvchi faqat o'sha funksiya ichida ko'rinadi. */

function myFuntion() {
    var functionVar = 'i am a function scope variable'
    console.log(functionVar) // Function scope
}

myFuntion()
// console.log(functionVar) // function scope faqat funktsiyani ichida ko'rinadi funcktsiya tashqarisida chaqirilsa ERROR qaytaradi shuning uchun ham function scope deyiladi

// ======================================================

// 3) Block scope
/* let va const bilan e'lon qilingan o'zgaruvchilar blok darajasida ko'rinishga ega.
O'zgaruvchi faqat {} blok ichida ko'rinadi. */

if (true) {
    let blockVar = 'i am a block scope variable'
    const anotherBlockVar = 'i am a another block scope variable'
    console.log(blockVar)
    console.log(anotherBlockVar)
}

// console.log(blockVar) // const va let block scope doirasida ishlagani uchun bizga ERROR qaytaradi, const va let o'z block doirasida ishlaydi
// console.log(anotherBlockVar) // const va let block scope doirasida ishlagani uchun bizga ERROR qaytaradi, const va let o'z block doirasida ishlaydi

// const va let ning qiymatini ularni e'lon qilishdan oldin ishlatib bo'lmaydi

console.log(yahyo)
const yahyo = 'yahyobek'