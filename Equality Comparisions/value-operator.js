// Bo'sh tenglik
// bu operator ikki qiymatni taqqoslashda ishlatiladi `(==)` lekin ularni tipini e'tiborsiz qoldiradi

console.log(5 == '5') // bu yerda ham ularnining string yoki number ekanligiga qaramayabdi

// =============================
// qat'iy tenglik `(===)` bu operator esa ularning tipiga ham e'tibor beradi

console.log(10 === '10') // bizga false qaytdi chunki ular teng emas sababi biri sting yana biri esa number tipida

// =============================    
// bo'sh teng emas `(!=)` bu operator ikki tipni bitta umumiy tipga aylantirib keyin ularni teng emasligini tekshiradi
console.log(5 != '5') // bizga teng emasligini qaytardi

// =============================
// qat'iy teng emaslik `(!==)` bu operator 2 ta qiymatni taqqoslaganda ularning qiymati va tipi bir xil bo'lmasa true qaytaradi
console.log(7 !== '7')
z