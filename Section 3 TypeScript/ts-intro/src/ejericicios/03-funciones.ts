


/*
    ===== Código de TypeScript =====
*/
//Crear funciones nirmalmente
// function sumar(a: number, b: number): number {
//     return (a + b);
// }

// const resultado = sumar(10, 30.5);
// console.log(resultado);
// //crear funciones con const y flecha
// const sumarFlecha = (a:number, b:number): number =>{
//     return(a+b)
// }
// const resultado2 = sumarFlecha(10, 30.5);
// console.log(resultado);

//los parametros opcionales tienen que ir de ultimos o los obligatorios
//despues de este deben tener un valor predefinido, siempre marcar las
//clase de los inputs y los outputs

// function multiplicar( numero: number, otroNumero?: number, base:number = 2): number{
//     return numero * base;
// }

// const resultadom = multiplicar(5 , 10);
// console.log(resultadom)
interface PersonajeOr{
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}

function curar(personaje: PersonajeOr,  curarx: number){

    personaje.pv += curarx;
}

const nuevoPersonaje: PersonajeOr = {
    nombre: 'Strinder',
    pv: 50,
    mostrarHp(){
        console.log('Puntos de vida:', this.pv)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarHp()



