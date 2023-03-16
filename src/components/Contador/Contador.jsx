//---------------------------------- Atividade 1:
// Faça uma melhoria do contador desenvolvido em aula. Crie novas opões de incrementação e decrementarão mudando o estado do contador. Crie as seguintes opções: +10, +100, *3, /2, -50, -5. Para isso utilize botões para cada novo recurso. Para acionar as funções, utilize o evento onClick do React.

import React, { useState } from "react";
import "./Contador.css";

export function Contador() {
    const [numero, setNumero] = useState(0);

    return (
        <div className="contador">
            <h1 id="displayNumero">{numero}</h1>
            <div className="contador-container">
                <button onClick={() => {setNumero(numero + 1);}}> +1</button>
                <button onClick={() => { setNumero(numero + 10);}}> +10</button>
                <button onClick={() => { setNumero(numero + 100);}}> +100</button>
                <button onClick={() => {setNumero(numero * 3);}}> x3</button>
                <button onClick={() => {setNumero(numero / 2);}}> /2</button>
                <button onClick={() => {setNumero(numero - 50);}}> -50</button>
                <button onClick={() => {setNumero(numero - 5);}}> -5</button>
                <button onClick={() => {setNumero(0);}}> Reset</button>
            </div>
        </div>
    );
}



// -------------------------OUTRA OPCAO DE FAZER A ATIVIDADE 1 ABAIXO

// import { useState } from "react"; // useState -> Uma função
// import "./Contador.css";

// export function Contador() {
//     // destruct (desestruturação)
//     const [numero, setNumero] = useState(0);

//     // Incrementar
//     function inc() {
//         const novoNumero = numero + 1;
//         setNumero(novoNumero);
//     }

//     // Decrementar
//     function dec() {
//         const novoNumero = numero - 1;
//         setNumero(novoNumero);
//     }

//     function mais10() {
//         const novoNumero = numero + 10;
//         setNumero(novoNumero)
//     }

//     function mais100() {
//         setNumero(numero + 100);
//     }

//     function vezes3() {
//         setNumero(numero * 3);
//     }

//     function metade() {
//         setNumero(numero / 2);
//     }

//     function menos50() {
//         setNumero(numero - 50);
//     }

//     function menos5() {
//         setNumero(numero - 5);
//     }

//     function zerar() {
//         setNumero(0);
//     }

//     return (
//         <div className="contador">
//             <h1>{numero}</h1>

//             <div>
//                 <button onClick={inc}>+1</button>
//                 <button onClick={dec}>-1</button>
//                 <button onClick={mais10}>+10</button>
//                 <button onClick={mais100}>+100</button>
//                 <button onClick={vezes3}>*3</button>
//                 <button onClick={metade}>/2</button>
//                 <button onClick={menos50}>-50</button>
//                 <button onClick={menos5}>-5</button>
//                 <button onClick={zerar}>0</button>
//             </div>
//         </div>
//     );
// }
    //----------------------------------------------------------------

    // import { useState } from "react";

    //useState é uma função que cria um estado
    //Um estado é uma variável especial que sincroniza as mudanças da página
    //indice 0 => estado
    //indice 1 => função que muda o estado
    // export function Contador() {
    // const array = useState(0);
    //     // let numero = array[0];
    //     // let setNumero = array[1];

    //     //destruct (desestruturacao)
    //     const [numero, setNumero]  = useState(0);
    //     function inc() {
    //         const novoNumero = numero + 1;
    //         setNumero(novoNumero);
    //     }

    //     function dec() {
    //         const novoNumero = numero -1;
    //         setNumero(novoNumero);
    //     }

    //     return (
    //         <div>
    //             <h1>{numero}</h1>
    //             <button onClick={inc}>+1</button>
    //             <button onClick={dec}>-1</button>
    //         </div>
    //     );
    // }   


    // ------------------------------------------------------------
    // import "./Contador.css";

    // export function Contador () {

    //     let numero = 0;
    //     console.log(numero)

    //     //incrementar
    //     function inc () {
    //         numero = numero+1;
    //         console.log(numero)
    //         setNumero()
    //     }

    //     //decrementar
    //     function dec () {
    //         numero = numero-1;
    //         console.log(numero)
    //         setNumero()
    //     }

    //     function setNumero() {
    //         const displayNumero= document.getElementById("displayNumero");
    //         displayNumero.innerHTML = numero;
    //     }

    //     return (
    //         <div>
    //             <h1 id="displayNumero">{numero}</h1>
    //             <button onClick={inc}>+1</button>
    //             <button onClick={dec}>-1</button>
    //             <button onCanPlay={setNumero}>Atualizar valor</button>
    //         </div>
    //     );
    // }

    //----------------------------------------------------------------
    // outra obs se fazer
    // {/* <button onClick={() => {setNumero(numero + 1);}}>+1</button> */ }