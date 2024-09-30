// Keyed collections

// Map & Set

// 1) Map

let map = new Map()

map.set('key', 'value')
map.set(1, 'one')
map.set({key: 'Yahyobek'}, 'ObjectValue')


// Map dan qiymatni olish
console.log(map.get('key'));

// Kalit mavjudligini tekshirish
console.log(map.has('key'));

// Kalitni o'chirish
map.delete(1)
console.log(map.has(1));

// Map kattaligi
console.log(map.size);

// Map ni tozalash
map.clear()
console.log(map.size);

// =============================================

let cars = [
    { name: 'BMW' },
    { name: 'Mersades' }
];

let newCars = cars.map((car, idx) => {
    return { brand: car.name, id: idx + 1 };
});

console.log(newCars);
