


/*
    ===== Código de TypeScript =====
*/


/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe{
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => String;
}

interface Direccion{
    calle: string;
    pais: string;
    ciudad: string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main st',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ', ' + this.direccion.ciudad + ', ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion)