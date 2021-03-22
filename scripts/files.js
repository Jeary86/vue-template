'use strict';

const fs = require('fs');


let components = []
const files = fs.readdirSync('./src/assets/')
files.forEach(function (item) {
    if (item != '.DS_Store'){
        components.push(item)
    }
})

let str = JSON.stringify(components)


fs.writeFile('./src/loadFiles.json', str, function (err) {
    if (err) {
        res.status(500).send('Server is error...')
    }
})

