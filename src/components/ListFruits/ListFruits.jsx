// Atividade 3: Crie um novo componente chamados ListFruits. Internamente, ele deve conter um vetor de frutas, cada frutas deve ter nome e uma imagem (utilize links de imagens da internet). O vetor deve conter no mínimo três frutas. O componente vai ser formado por um campo de busca e uma lista de resultados. A medida que for digitado o nome da fruta no campo de busca, deve-se mostrar a imagem da frutas como resultado na lista.
// OBS1: A lista pode sim conter mais de um resultado uma vez que existe nomes de frutas parecidos (Ex. Maça, Maracujá).
// OBS2: Crie uma a pasta data na raiz (src) do projeto. Esta pasta deve conter o array de frutas que será utilizado na atividade.
// OBS3: Para importar o array de frutas no componente utilize a sintaxe:
// import { frutas } from "../../data/frutas.js";
// OBS4: Para criar a lista de resultados utilize um estado de array que é vazio inicialmente.
// Ex: const [resultados, setResultados] = useState([ ]);
// OBS5:Para essa atividade utilize os recursos:
import "./ListFruits.css";
import { frutas } from "../../data/frutas";
import { useState } from "react";


export function ListFruits() {

    const [resultados, setResultados] = useState([]);

    function filtrarFrutas(evento) {
        const valor = evento.target.value;
        let busca = [];
        for (let fruta of frutas) {
            // Procura o indice da substring dentro do nome da fruta (-1 se não existir)
            let nomeFrutaMinusculo = fruta.nome.toLowerCase();
            let valorMinusculo = valor.toLowerCase();
            let indice = nomeFrutaMinusculo.indexOf(valorMinusculo);
            // Verificar se a fruta faz parte dos resultados
            if (indice != -1) {
                busca.push(fruta);
            }
        }
        setResultados(busca);
    }

    return (
        <div className="frutas">
            <input type="text" placeholder="Digite o nome de uma fruta..." onChange={filtrarFrutas} />
            <br />

            <ul>
                {resultados.map(fruta => (
                    <li>
                        <img src={fruta.imagem} />
                    </li>
                ))}
            </ul>
        </div>
    );5
}


//push é um metodo de um array que insere em outro
