// Functions

async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10)
        }, 2000)
    })
}

fetchData().then(result => {
    console.log(result)
})