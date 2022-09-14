// var module = require('./module')
// console.log(module)

// FILE READING
var data = require('./data.json')
// MA: why do we even need fs package if we can access the files like this??
console.log(typeof data);
var fs = require('fs')
// module.myfun('aoa')
fs.readFile('./data.json', 'utf-8', (err, data) => {
    let objData = JSON.parse(data)
    console.log(typeof objData)
    console.log(objData)
});

