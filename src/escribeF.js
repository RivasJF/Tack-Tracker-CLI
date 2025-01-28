#!/usr/bin/env node
//import {menu} from './Module/menu.js';
//import './commansCLI.js'
//import { readJson } from './Module/readfile.js';

import fs_promises from "fs/promises";
import path from "path";
import 'colors'

const pathJsonO = path.resolve('./src/Data/Padd.json')
const pathJson = path.resolve('./src/Data/ou.json')

const readJson=async()=>{
    try{
        const res = JSON.parse(await fs_promises.readFile(pathJsonO,'utf-8'))
        const datosmap = (res.productos.map(task=>({
            id:task.id,
            desciption:task.description,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        })))
        return datosmap;
    } catch(err){
        return ("not found".red);
    }
}
// const {writeFile} = require("fs/promises")


const writeJson=async(datas)=>{
    try{
        const esctiro = await fs_promises.writeFile(pathJson,JSON.stringify(datas))
        esctiro
        return "escrito";
    } catch(err){
        return err;
    }
}

const main = async() => {
    const cambio = await readJson()
    const res = {}
    res.productos=cambio
    //console.log(res)
    JSON.stringify(res)
    console.log(res)
    console.log(await writeJson(res))

}

main();