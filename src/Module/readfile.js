
const {readFile} = require("fs/promises")
const path = require('path');

const pathJson = path.resolve('./Data/index.json')
const pathG = 'C:/Users/jonat/Desktop/Task Tracker CLI/src/Data/ou.json'
const pathH = 'C:/Users/jonat/Desktop/Task Tracker CLI/src/Data/index.txt'



const readJson=async()=>{
    try{
        const res = JSON.parse(await readFile(pathG,'utf-8'))
        return res;
    } catch(err){
        return "not found";
    }
}

// const principal =async()=>{
//     // const lee = await readJson();
//     // console.log(lee);
//     // console.log(pathG)
//     // console.log(pathJson)
//     const erc = await writeJson();
//     console.log(erc)
// }

// principal();


module.exports={
    readJson
}


