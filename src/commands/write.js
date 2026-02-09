import fs_promises from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import 'colors'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pathJson = path.join(__dirname, '..', 'Data', 'index.json');


const writeJson=async(datas)=>{
    try{
        fs_promises.writeFile(pathJson,JSON.stringify(datas))
        return "escrito";
    } catch(err){
        return err;
    }
}

export {writeJson}
