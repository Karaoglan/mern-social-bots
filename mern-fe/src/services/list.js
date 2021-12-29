export function getList() {
    return fetch('http://localhost:3000')
        .then(data => data.json())
}

export function getHello() {
    return fetch('http://localhost:3000/hello')
        .then(data => data.json())
}