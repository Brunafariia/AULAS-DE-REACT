import { useState } from "react";
import "./Cadastro.css";
import { frutas } from "../../data/frutas";

export function Cadastro() {

    const [nome, setNome] = useState(""); //funcao que cria um estado retorna em formato de array
    const [email, setEmail] = useState(""); 
    const [resumo, setResumo] = useState("");

    //esta funcao e chamada a cadafazer que for digitado no campo nome
    function obterNome(evento) {
        // const input = evento.targer;
        // const valor = input.value;
        // SetNome(valor);
        setNome (evento.target.value); // altera o valor do estado "nome"   
    }

    function obterEmail(evento) {
        // const input = evento.targer;
        // const valor = input.value;
        // SetNome(valor);
        setEmail(evento.target.value);
    }

        //const input= evento.targer , const valor= input.value , e SetNome(valor); comentado é a mesma coisa que: 
        // -> setEmail(evento.target.value)

        function obterResumo (evento) {
            // const textarea = evento.target;
            // const valor = textarea.value;
            // setResumo (valor);
            setResumo (evento.target.value);
        }
    // onChange ->
    return (
        <div>
            <strong>Formulário de cadastro</strong>
            <br />
            <input type="text" placeholder="Digite seu nome" onChange={obterNome} />
            <br />
            <input type="text" placeholder="Digite seu e-mail" onChange={obterEmail} />
            <br />
            <textarea placeholder="Digite seu resumo" onChange={obterResumo}></textarea>
            <br />
            <strong>{nome}</strong>
            <br />
            <strong>{email}</strong>
            <br />
            <strong>{resumo}</strong>
        </div>
    );
}

// ------------------------------------Atividade 2:
// No componente Cadastro, crie um novo campo e um no estado para digitação de um resumo, esse resumo deve ser uma descrição do usuário. A medida que o conteúdo for digitado, deve-se mudar o estado do resumo e ser mostrado na tela com as demais informações. Para isso utilize a tag <textarea>, juntamente com o evento onChange do React.
