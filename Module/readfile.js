
const pathfile ="Data/index.json";
const fs = require('fs')

module.exports = readtFile=()=>{
    const data = JSON.parse(fs.readFileSync(pathfile,{encoding:'utf-8',flag:'r'}))
    return data
}

