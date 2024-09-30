function myName(parametr) {
    console.log(parametr)
}
myName('argument')

// bir nechta parametrlar

const moreParams = (a,b) => {
    return a * b
}
const result = moreParams(2,2)
console.log(result)

/// funkisya parametrlarni rest operatorlari bilan uzatish

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0)
}
const resultSum = sum(1,2,3,4,5)
console.log(resultSum)

// practice rest operation
function myFullName (...fullName) {
    return fullName.join(' ')
}
const resultName = myFullName('Yahyobek', 'Ergashboyev')
console.log(resultName)

// =========================================================

function myFunction() {
    console.log(arguments[1])
}

myFunction('salom', 'yahyobek')


function sumAll() {
    let sum = 0
    for(let i = 0; arguments.length; i++) {
        sum += arguments[i] 
    }
    return sum
}

console.log(sumAll(10,20,30,40))
