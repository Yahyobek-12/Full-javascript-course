// closure - o'zi nima
// closure javascriptda ma'lumotlarni (yashirin o'zgaruvchilarni) yaratish uchun juda foydali, chunki u
// tashqi koddan himoyalangan o'zgaruvchilarni saqlab turadi

function tashqiFunktsiya() {
    let yashirinOzgaruvchi = 10

    function yashirinFunktsiya() {
        console.log(yashirinOzgaruvchi)
    }

    return yashirinFunktsiya
}

let funktsiya = tashqiFunktsiya()
funktsiya()