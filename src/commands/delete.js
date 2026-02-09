import { readJson } from "./read.js"
import { writeJson } from "./write.js";
import 'colors'


const DeleteTask = async(id) => {
    const datos = await readJson()
    if(!datos.task[id]){
        console.log("not found".red);
        return;
    }
    datos.task.splice(id,1)

    // //ordenar id
    var ind = 0;
    for (const key of datos.task) {
        if (key.id!=ind) {
            key.id=ind
        }
        ind++;
    }
    const result = await writeJson(datos)
    if(result == 'escrito'){
        console.log("deleted".red)
    }else{
        console.log("error".red)
    }
}

export { DeleteTask }