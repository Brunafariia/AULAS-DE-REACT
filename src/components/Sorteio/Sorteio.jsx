// 1) Crie um componente de <Sorteio>, ao clicar no botão deve gerar um
// número aleatório. Use o esquema Math.floor(Math.random() * 100). 
// 	- Caso o número gerado seja par, mostrar em verde.
// 	- Caso o número gerado seja ímpar, mostrar em amarelo.

import { useState } from "react";
import "./Sorteio.css";

export function Sorteio() {
    // Estado = mémoria do componente
    const [numero, setNumero] = useState(0);

    function gerarNumero() { //ever handler (sempre manipulador)
        let numeroSorteado = Math.floor(Math.random() * 100);
        // chama uma atualização do componente
        // re-renderização = s
        setNumero(numeroSorteado);
    }

    // console.log("Componente recontruiu" + new Date().toTimeString());
    // console.log("Valor do estado" + numero);
    //pra nao repetir numero

    // let h3Class;

    // if (numero % 2 === 0) {
    //     h3Class = "par";
    // } else {
    //     h3Class = "impar";
    // }
// pode ser assim como no exemplo acima ou usar apenas => <h3 className={numero % 2 === 0 ? "par" : "impar"}>{numero}</h3>   (é a mesma coisa)

    return (
        <div>
            <h3 className={numero % 2 === 0 ? "par" : "impar"}>{numero}</h3>
            <button onClick={gerarNumero}>Gerar</button>
        </div>
    );
}
