function Person(name, age) {
    this.name = name
    this.age = age
}

Person.prototype.greet = function() {
    console.log('Salom mening ismim' + ' ' + this.name + '\n' + 'mening yoshim' + ' ' + this.age + ' ' + 'da');
}

let developer = new Person('Yahyobek' , 16)
// console.log(developer.greet());

let human = Object.create(developer)
human.job = 'Frontend programmer'
human.greet()

// typeOf operatori = javascript da kodni tipini tekshirish uchun ishlatiladi
console.log(typeof human.job);

