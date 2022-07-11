


/*
    ===== Código de TypeScript =====
*/


/*
    ===== Código de TypeScript =====
*/

interface Reproductor{
    volumen: number;
    segundo: number;
    cancion: string;
    detalles : Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Seheran',
        anio: 2015,
    }
}

const {volumen, segundo, cancion, detalles} = reproductor
const {autor} = detalles
console.log("El volumen actual es: ", reproductor.volumen )
console.log("El segundo actual es: ", reproductor.segundo )
console.log("La canción actual es: ", reproductor.cancion )
console.log("El autor es: ", reproductor.detalles.autor )


console.log("El volumen actual es: ", volumen )
console.log("El segundo actual es: ", segundo )
console.log("La canción actual es: ", cancion )
console.log("El autor es: ", autor )

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [pos1, , pos3 ] = dbz;

console.log('Personaje 1:', pos1);
console.log('Personaje 2:', dbz[1]);
console.log('Personaje 3:', pos3);
