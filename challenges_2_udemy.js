/*Enunciado Ejercicio 2:
Dada una ruta absoluta de un archivo (de un sistema linux o basado en unix)
crear una función que la simplifique
 
Ejemplo:
simplificarRuta("/home/");             // Salida: /home
simplificarRuta("/x/./y/../../z/");    // Salida: /z
simplificarRuta("/../");               // Salida: /
simplificarRuta("/home//pruebas/");    // Salida: /home/pruebas
 
*/

function simplificarRuta(path){
     //search the final string
     const s = path
     const lchar = s.split("..").pop();
     const tamano = lchar.length
       if(lchar.includes('//')) {
        const lchar3 = lchar.replace("//","/")
        let without = lchar3.length - 1
        console.log(`${lchar3.substring(0,without)}`)
       }else{
            if (lchar.includes("/",-1)) {
                console.log(`${lchar}`);
            }else{  
                let without = tamano - 1
                console.log(`${lchar.substring(0,without)}`);
            }
           
        }
      }

const valuesofproof =  ['/home/','/x/./y/../../z/','/../','/home//pruebas/'];
let i =0
while (valuesofproof.length > i ) {
    simplificarRuta(valuesofproof[i])
    i++
}