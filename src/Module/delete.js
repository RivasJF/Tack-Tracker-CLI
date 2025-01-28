#!/usr/bin/env node
//import {menu} from './Module/menu.js';
//import './commansCLI.js'
//import { readJson } from './Module/readfile.js';

import { readJson } from "./Module/readfile.js";


const main = async() => {
    const datos = await readJson()
    const datosmap = (datos.map(task=>({
            id:task.id,
            desciption:task.description,
            status:task.status,
            createdAt:task.createdAt,
            updrade:task.updrade,
        })))
    console.table(datosmap)
    //eliminar por id
    datosmap.splice(1,1)
    console.table(datosmap)


    //ordenar id
    var ind = 0;
    for (const key of datosmap) {
        if (key.id!=ind) {
            key.id=ind
        }
        ind++;
    }
    


    console.table(datosmap)
}

main();