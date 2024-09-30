let x = 5 
x += 3
console.log(x)

// =================

let y = 10
y -= 7
console.log(y)

// ================

let a = 3
a *= 3
console.log(a)

// ================
// darajaga ko'paytirish va tayinlash operatori

let b = 2
b **= 2
console.log(b)

// =================================================

let str1 = "Hello";
let str2 = "JavaScript";

// Qo'shish operatori
let combined = str1 + " " + str2;
console.log(combined); // "Hello JavaScript"

// Uzunlik
console.log(combined.length); // 16

// Harf olish
console.log(combined.charAt(6)); // "J"

// Index olish
console.log(combined.indexOf("JavaScript")); // 6

// Katta harflarga o'zgartirish
console.log(combined.toUpperCase()); // "HELLO JAVASCRIPT"

// Kichik harflarga o'zgartirish
console.log(combined.toLowerCase()); // "hello javascript"

// Bo'sh joylarni olib tashlash
let paddedText = "   Extra Spaces   ";
console.log(paddedText.trim()); // "Extra Spaces"

// Qidirish va almashtirish
let newText = combined.replace("JavaScript", "World");
console.log(newText); // "Hello World"

// Bo'lish
let words = combined.split(" ");
console.log(words); // ["Hello", "JavaScript"]

// Birlashtirish
let str3 = " is awesome!";
let finalText = combined.concat(str3);
console.log(finalText); // "Hello JavaScript is awesome!"

// ====================================================================

//  Ternary Operator (? :)

let yourball = 95
let fullBall = 100
let match = yourball >= fullBall ? "Siz imtihondan o'tdingiz" : `Siz imtihondan o'tmadingiz chunki siz to'plagan ball ${yourball} ga teng` 
console.log(match)

// =====================================================================================================================

// practice 

function myFunc (a,b) {
    return a + b
}

const result = myFunc(2,3)
console.log(result)