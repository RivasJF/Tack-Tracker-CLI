import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJson = path.resolve('./src/Data/index.json')

const readJson=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonAll=async()=>{
    try{
        const res = await readJson()
        const table = res.task.map(task=>({
            id:task.id,
            desciption:task.desciption,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        }))
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonDone=async()=>{
    try{
        const res = await readJsonAll()
        const table = res.filter(task=>task.status=='done')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonTodo=async()=>{
    try{
        const res = await readJsonAll()
        const table = res.filter(task=>task.status=='todo')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonInProgress=async()=>{
    try{
        const res = await readJsonAll()
        const table = res.filter(task=>task.status=='in progress')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

export {readJson,readJsonAll,readJsonInProgress,readJsonDone,readJsonTodo}