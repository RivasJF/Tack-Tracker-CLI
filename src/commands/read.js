import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJson = path.resolve('./src/Data/index.json')


const readJson=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.task
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonAll=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.task.map(task=>({
            id:task.id,
            desciption:task.description,
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
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.task.map(task=>({
            id:task.id,
            desciption:task.description,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        })).filter(task=>task.status=='done')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonTodo=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.task.map(task=>({
            id:task.id,
            desciption:task.description,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        })).filter(task=>task.status=='todo')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonInProgress=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.task.map(task=>({
            id:task.id,
            desciption:task.description,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        })).filter(task=>task.status=='in_progress')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

export {readJsonAll,readJsonInProgress,readJsonDone,readJsonTodo}