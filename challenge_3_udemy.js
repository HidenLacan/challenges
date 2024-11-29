/*Enunciado Ejercicio 3:
Dadas dos fechas, crea una función que me proporcione la diferencia de dias
entre ellas
 
Ejemplo:
diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
 
*/
function diferenciaDeDias(day1,day2){
    const day11 = new Date(day1);
    const day22 = new Date(day2);
    if (day22 > day11) {
        console.log(day22.getDate() - day11.getDate())
    } else {
        console.log(day11.getDate() - day22.getDate())
    }
}

diferenciaDeDias('Dec 1, 2023', 'Dec 24, 2023');  // Salida: 23
