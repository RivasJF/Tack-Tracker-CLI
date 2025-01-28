
import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJson = path.resolve('./src/Data/ou.json')


const writeJson=async(datas)=>{
    try{
        const sub = {}
        sub.tasks=datas
        fs_promises.writeFile(pathJson,JSON.stringify(sub))
        return "escrito";
    } catch(err){
        return err;
    }
}

export {writeJson}
