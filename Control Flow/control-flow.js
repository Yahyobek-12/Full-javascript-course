// Bu tuzilma shartni tekshirish uchun ishlatiladi

// if else

let yosh = 17
if (yosh >= 18) {
    console.log('Siz kattasiz')
} else {
    console.log('Siz hali kichkinasiz')
}

// else if

let ball = 50
if (ball >= 90) {
    console.log('Super natija')
} else if (ball >= 70) {
    console.log('Yaxshi natija')
} else {
    console.log('Koproq mashq qiling')
}

// ============================================

// Swtich

let kun = 3 

switch (kun) {
    case 1:
        console.log('Dushanba');
        break;
    case 2:
        console.log('Seshanba');
        break;
    case 3:
        console.log('Chorshanba');
        break;
    default: 
        console.log('Notogri qiymat')            
}

// ===========================================
 
// try catch bloklarixatolarni ushlash va ularga javob berish uchun ishlatilad
// agar try block ichida kodda xato yuz bersa catch block ishga tushadi

try {
    let num = 10
    let result = num + 10
    console.log(result)
} catch (error) {
    console.log('Hato sodir boldi', error.message)
}

// finaly
// finally bloki, xato yuz berishidan qat'i nazar, try...catch bloklari bajarilgandan so‘ng har doim ishlaydi. Bu blok ko‘pincha manbalarni tozalash yoki oxirgi operatsiyalarni bajarish uchun ishlatiladi

try {
    let num = 10
    let result = num / 0
    console.log(result)
} catch (error) {
    console.log('Error', error)
} finally {
    console.log('bu code har doyim ishlaydi')
}

// throw
// throw operatori yordamida o‘zimiz xato chiqarishimiz mumkin. Bu maxsus xatolarni bildirish yoki dastur ichida muayyan holatlarda xato chiqarish uchun ishlatiladi.

function yoshniTekshir(yosh) {
    if (yosh < 18) {
        throw 'Yosh yetarli emas'
    } else {
        return 'hush kelibsiz'
    }
}

try {
    let natija = yoshniTekshir(16)
    console.log(natija)
} catch (xato) {
    console.log('Hato', xato)
}