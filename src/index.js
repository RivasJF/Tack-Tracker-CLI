const { CrearProducto } = require('./Module/ClassTask.js');
//const { readJson } = require('./Module/readfile.js')

const main = async() => {
    // const lee = await readJson();
    // console.log(lee)
    const a = CrearProducto(1,"Alguno",123.22,true)
    console.log(a)
}

main();