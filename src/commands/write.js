
import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJson = path.resolve('./src/Data/index.json')


const writeJson=async(datas)=>{
    try{
        fs_promises.writeFile(pathJson,JSON.stringify(datas))
        return "escrito";
    } catch(err){
        return err;
    }
}

export {writeJson}
