const fs = require('fs')
const pathfile ="Data/index.json";
const readFileJson = require("./readfile.js")

writeJson=()=>{
    const data = readtFile()
    data.valor=23
    return fs.writeFileSync(pathfile,JSON.stringify(data))
}

writeJson()

console.log(readtFile())