import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJson = path.resolve('./src/Data/index.json')


const readJson=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.productos.map(task=>({
            id:task.id,
            descipcion:task.description,
            status:task.status,
        }))
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonDone=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.productos.map(task=>({
            id:task.id,
            descipcion:task.description,
            status:task.status,
        })).filter(task=>task.status=='done')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonTodo=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.productos.map(task=>({
            id:task.id,
            descipcion:task.description,
            status:task.status,
        })).filter(task=>task.status=='todo')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

const readJsonInProgress=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJson,'utf-8'))
        const table = res.productos.map(task=>({
            id:task.id,
            descipcion:task.description,
            status:task.status,
        })).filter(task=>task.status=='in_progress')
        return table;
    } catch(err){
        return ("not found".red);
    }
}

export {readJson,readJsonInProgress,readJsonDone,readJsonTodo}