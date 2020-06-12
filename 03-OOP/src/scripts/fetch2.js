const urls = [
    'https://jsonplaceholder.typicode.com/users',

]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
}).catch(() => console.log('error')) 