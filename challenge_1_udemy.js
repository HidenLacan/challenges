/*Enunciado Ejercicio 1:
Dado un array o un objeto de superhéroes de Marvel, haz un programa que pueda
mostrar la información de un superheroe.
 
Y añade una capacidad de buscar la información de varios superhéroes a la vez.
 
Ejemplo:
mostrarInformacionSuperheroe('Iron Man');
 
Salida:
Nombre real: Tony Stark
Poderes: Tecnología avanzada, Movilidad aérea
Equipo: Los vengadores
 
Ejemplo 2: 
mostrarInformacionSuperheroes([array de nombres]]);
 
Salida:
Muestra la información de todos los superheroes
 
*/
// Crear array de objetos de superheroes marvel
const infoSuperheroes = {
    'Iron Man': {
        nombreReal: 'Tony Stark',
        poderes: ['Tecnologia avanzada', 'Movilidad aérea'],
        equipo: 'Los vengadores'
    },
    'Capitán América': {
        nombreReal: 'Steve Rogers',
        poderes: ['Fuerza sobrehumana', 'Agilidad y reflejos sobresalientes'],
        equipo: 'Los vengadores'
    },
    'Thor': {
        nombreReal: 'Thor Odinson',
        poderes: ['Mjolnir', 'Viento y trueno'],
        equipo: 'Los vengadores'
    },
    'Spider-Man': {
        nombreReal: 'Peter Parker',
        poderes: ['Balanceo', 'Telarañas pegajosas', 'Sentido aracnido'],
        equipo: 'Los vengadores'
    },
    'Hulk': {
        nombreReal: 'Bruce Banner',
        poderes: ['Fuerza sobrehumana', 'Invulnerabilidad'],
        equipo: 'Los vengadores'
    }
};
 

function findSuperHero(name){
    const information = infoSuperheroes;
    if (Array.isArray(name)){
        for(let i=0;i < name.length;i++){
            if(name[i] in information){
                namev = name[i]
                const heroe = information[namev];
                console.log(`\n Nombre del heroe: ${namev} Nombre real: ${heroe.nombreReal}\n Poderes: ${heroe.poderes} \n Equipo: ${heroe.equipo}`);
            }else{
                namev = name[i]
                console.log(`Heroe ${namev} no encontrado`)
            } 
        }
    }else{
        
        if(name in information){
            const heroe = information[name];
            console.log(`Nombre del heroe: ${name} Nombre real: ${heroe.nombreReal}`);
        }else{
            console.log(`\n Heroe ${name} no encontrado`)
        }
    }
} 

findSuperHero(['Hulk','Venom'])