


/*
    ===== Código de TypeScript =====
*/

let habilidades = ['Bash', 'Counter', 'Healing', 100];

// habilidades.push('1')
// siempre ponerles tipo a los arreglos
interface Personaje{
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje:Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = "Pueblo paleta"

console.table( personaje );