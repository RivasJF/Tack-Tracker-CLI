
const {writeFile} = require("fs/promises")

const pathG = 'C:/Users/jonat/Desktop/Task Tracker CLI/src/Data/ou.json'
const pathH = 'C:/Users/jonat/Desktop/Task Tracker CLI/src/Data/index.txt'
const pathJ = 'C:/Users/jonat/Desktop/Task Tracker CLI/src/Data/Padd.json'

const writeJson=async(add)=>{
    try{
        await writeFile(pathG,add)
        return "escrito";
    } catch(err){
        return "no escrito";
    }
}

// const principal =async()=>{
//     const a = 2
//     const erc = await writeJson(b);
//     console.log(erc)
// }
// principal()

module.exports = {
    writeJson
}