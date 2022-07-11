


/*
    ===== Código de TypeScript =====
*/


/*
    ===== Código de TypeScript =====
*/

export interface Producto{
    desc: string,
    precio: number
}

const tableta: Producto = {
    desc: 'iPad Air',
    precio: 350
} 

const telefono: Producto = {
    desc: 'Nokia 1',
    precio: 150
} 

export function calculaISV(productos: Producto[] ): number[]{

    let total: number = 0;

    productos.forEach( ({precio}) => {
        total += precio;
    })

    return [total, total * 0.15];
}

const articulos = [telefono, tableta ];

const [total, isv] = calculaISV(articulos);

console.log('El total es:', total)
console.log('El ISV es:', isv)

