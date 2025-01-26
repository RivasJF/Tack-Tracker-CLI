const inquirer = require('inquirer');
//require('colors')

inquirer.prompt({
    name:'opcion',
    message:'¿Nombre?',
    default:'azul'
})
.then(answer=>{
    console.log('Answer:',answer)
})

// const main = async () => {
//     //console.clear()
//     console.log('Hola'.green)

//     const opt = inq.promtpt(cuestion)
//     console.log(opt)
// }

// main()