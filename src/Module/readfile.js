import fs_promises from "fs/promises";
import path from "path";
import 'colors'


const pathJson = path.resolve('./src/Data/index.json')
const pathG = 'C:\\Users\\Linux\\Desktop\\TaskCLI\\Tack-Tracker-CLI\\src\\Data\\index.json'



const readJson=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathG,'utf-8'))
        return res;
    } catch(err){
        return ("not found".red);
    }
}
// const principal =async()=>{
//     console.log(pathJson)
//     const lee = await readJson();
//     console.log(lee);
// }
// principal();

export {readJson}