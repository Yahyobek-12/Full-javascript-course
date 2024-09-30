// Loops & Iterations

// For tsikli
// Bu tsikl ma'lum bir shartga ko'ra ishlayi va shart bajarilgan paytda to'xtaydi

// for (let i = 0; i < 5; i++) {
//     console.log(i)    
// }

// While tsikli
// while tsikli ma'lum bir shart to'gri bo'lgan vaqtda ishlaydi

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// Do While
// Bu tsikl kamida bir martta ishlaydi va keyin shartni tekshiradi

// let i = 0
// do {
//     console.log(i)
//     i++
// } while (i < 20)

// For of
// For of massivlar bilan ishlaydi

// let arr = [1,2,3]
// for (let value of arr) {
//     console.log(value)
// }

// For in
// For in objectlar bilan ishlaydi

// let obj = {
//     a: 1,
//     b: 2,
//     c: 3
// }
// for (let key in obj) {
//     console.log(key, obj[key])
// }

// Break

// for (let i = 1; i < 10; i++) {
//     if (i === 5) {
//         break
//     }


//     console.log(i)
// }

// Continue

let i = 1
while (i <= 5) {
    if (i === 3) {
        i++
        continue
    }
    console.log(i)  
    i++  
}

for (let i = 1; i <= 5; i ++) {
    if (i === 3) {
        continue
    }
    console.log(i)
}
