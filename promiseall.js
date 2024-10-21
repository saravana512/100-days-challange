// Fetch API

// (async () => {
//     const get = await fetch('https://jsonplaceholder.typicode.com/todos');
//     console.log(await get.json())

// })()

// Promise all

const arr = [
    'https://jsonplaceholder.typicode.com/todos/1',
    'https://jsonplaceholder.typicode.com/todos/2',
    'https://jsonplaceholder.typicode.com/todos/3'
]

const data = (arr) => {
    const resolvedLength = [];
    return new Promise((resolve, reject) =>{
        arr.forEach(e =>{
            fetch(e).then(res =>{
                return res.json()                
            }).then( res =>{
                console.log(arr.length, resolvedLength.length, "arr.length === resolvedLength")
                if(arr.length === resolvedLength.length+1){
                    resolvedLength.push([res])
                    resolve(resolvedLength)
                } else {
                    resolvedLength.push([res])
                }
            }).catch(err => {
                reject(err)
            })
        })
    })
}


data(arr).then(e => {
    console.log(e)
})