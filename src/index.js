#!/usr/bin/env node
//import {menu} from './Module/menu.js';
//import './commansCLI.js'
//import { readJson } from './Module/readfile.js';

import { readJson } from "./Module/readfile.js";


const main = async() => {
    const datos = await readJson()
    // const datosmap = (datos.productos.map(task=>({
    //         id:task.id,
    //         desciption:task.description,
    //         status:task.status,
    //         createdAt:task.createdAt,
    //         updrade:task.updrade,
    //     })))
    //eliminar por id
    // const idDel = 0;
    // for (const key of datosmap) {
    //     if (key.id==idDel) {
    //         return key
    //     }
    // }
    console.log(datos.productos)
    console.log(datos.productos[0])

    ///ordenar id
    // var ind = 0;
    // for (const key of datosmap) {
    //     if (key.id!=ind) {
    //         key.id=ind
    //     }
    //     ind++;
    // }
    // for (const key of datosmap) {
    //     console.log(key.keys())
    // }
    


    //console.log(datosmap)
}

main();