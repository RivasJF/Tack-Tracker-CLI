import { readJson } from "./read.js"
import { writeJson } from "./write.js";
import 'colors'


const DeleteTask = async(id) => {
    const datos = await readJson()
    datos.task.splice(id,1)

    // //ordenar id
    var ind = 0;
    for (const key of datos.task) {
        if (key.id!=ind) {
            key.id=ind
        }
        ind++;
    }
    //console.log(datos)
    console.log((await writeJson(datos)).red)
}

export { DeleteTask }