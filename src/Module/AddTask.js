const { CrearProducto } = require('./ClassTask.js');
const {readJson} = require('./readfile.js');
const { writeJson } = require('./writefile.js');



const principal = async()=>{
    const TraeObject = await readJson();
    //console.log(TraeObject)

    const a = CrearProducto(3,"OtroMas",23.3,false)
    JSON.stringify(a)
    TraeObject.productos.push(a);

    // console.log('////////////////////////////////////////////////////')
    // const valor1 = TraeObject.productos.find((task)=>task.id==0);

    const Mod = JSON.stringify(TraeObject)
    const escribeJson = await writeJson(Mod)
    console.log(escribeJson)


    const TraeNEWObject = await readJson();
    console.log(TraeNEWObject)
}

principal();