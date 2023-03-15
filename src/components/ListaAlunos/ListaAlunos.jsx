import "./ListaAlunos.css";

const alunos = [
    { matricula: 5451, nome: "Gabriel", dataDeNascimento: "20/07/1999", media: "6.0", telefone: "(99)99999-9999" },
    { matricula: 2554, nome: "Bruna", dataDeNascimento: "10/03/1995", media: "8.0", telefone: "(99)99999-9999" },
    { matricula: 3689, nome: "Almir", dataDeNascimento: "15/08/2000", media: "8.0", telefone: "(99)99999-9999" },
    { matricula: 4408, nome: "Jessica", dataDeNascimento: "05/12/2002", media: "5.0", telefone: "(99)99999-9999" },
    { matricula: 5421, nome: "Danilo", dataDeNascimento: "22/10/2002", media: "5.0", telefone: "(99)99999-9999" },
];


export function ListaAlunos() {
    const alunosCards = alunos.map((elemento) => {
        // Operador ternário
        let classCard =
            elemento.media >= 7 ? "aluno-card aprovado" : "aluno-card reprovado";

        return (
            <div key={elemento.matricula} className={classCard}>
                <small>Nº {elemento.matricula}</small>
                <h3>{elemento.nome}</h3>
                <p>{elemento.dataNascimento}</p>
                <p>{elemento.telefone}</p>
                {/* {elemento.media >= 7 && <p>Média: {elemento.media}</p>}
                  {elemento.media < 7 && <p>Continue se esforçando!</p>} */}
                {elemento.media >= 7 ? <p> Média: {elemento.media}</p> : <p>Continue se esforçando!</p>}
            </div>
        );
    });

    return <div>{alunosCards}</div>;
}

// export function ListaAlunos() {
//     return (
//         <div className="cards">
//             {alunos.map((aluno) => {
//                 return (
//                     <div className="card" style={(aluno.nota < 7) ? { borderColor: "red" } : { borderColor: "green" }}>

//                         <h2>Nome: {aluno.cod}</h2>
//                         <h2>Nome: {aluno.nome}</h2>
//                         <h3>Data de nascimento: {aluno.dataNascimento}</h3>
//                         <h3>Contato: {aluno.telefone}</h3>

//                         {(aluno.nota >= 7) ? <h3>Nota: {aluno.nota}</h3> : <p><b>Quem sabe da próxima vez...</b></p>}
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }



