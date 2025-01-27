import inquirer from "inquirer";
import { readJson } from "./readfile.js";
import 'colors'


const preguntas = {
        name:'select',
        message:'¿Que quieres hacer?',
        type: 'list',
        choices: [{
            name:'a) List Task',
            value:1,
        },{
            name:'b) Edit Task',
            value:2
        },{
            name:'c) Organizace Task',
            value:3
        },{
            name:'d) Exit',
            value:4
        }]
}

async function opera1(num) {
    const res = await readJson()
    console.table(res.productos.map(task=>({
        id:task.id,
        descipcion:task.description,
        status:task.status,
    })))//.filter(task=>task.status=='done')) //---filtrar segun valores
    console.log('Acccionar = ' + num)
}

const menu = async()=>{
    console.clear()
    console.log('#########################################\n'.blue)
    console.log('               WELCOME!\n'.blue)
    console.log('#########################################\n'.blue)
    const Preguntar = await inquirer.prompt(preguntas).then(({select})=>{return select})
    switch (Preguntar) {
        case 1:
            opera1(Preguntar)
            break;
        case 2: 
            console.log('Acccionar = ' + Preguntar)
            break;
        case 3: 
            console.log('Acccionar = ' + Preguntar)
            break;
        case 4: 
            console.log('Acccionar = ' + Preguntar)
        break;
    }
}

export {menu};

