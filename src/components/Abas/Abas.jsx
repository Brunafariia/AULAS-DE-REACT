import { useState } from "react";
import "./Abas.css";

//useState é um hook 

export function Abas() {
    // let aba = "home"; // home, perfil, ajuda
    const [aba,setAba] =useState("home");

    function irParaHome() { // definindo estado da aba ativa p/ home
    }

    function irParaPerfil() { // definindo estado da aba ativa p/ perfil
        setAba("perfil");
    }

    function irParaAjuda() { // definindo estado da aba ativa p/ ajuda
        setAba("ajuda");
    }

    let conteudoAba; // conter o layout da aba selecionada

    if (aba === "home") {
        conteudoAba = <div>HOME</div>;
    } else if (aba === "perfil") {
        conteudoAba = <div>PERFIL</div>;
    } else if (aba === "ajuda") {
        conteudoAba = <div>AJUDA</div>;
    }

    console.log("Componente recontuiu!");
    // if (aba === "home") {
    //     return (
    //         <div>
    //             <button>Home</button>
    //             <button>Perfil</button>
    //             <button>Ajuda</button>
    //             <hr />
    //             <div>HOME</div>
    //         </div>
    //     );
    // } else if (aba === "perfil") {
    //     return (
    //         <div>
    //             <button>Home</button>
    //             <button>Perfil</button>
    //             <button>Ajuda</button>
    //             <hr />
    //             <div>PERFIL</div>
    //         </div>
    //     );
    // } else if (aba === "ajuda") {
    return (
        <div>
            <button onClick={irParaHome}>Home</button>
            <button onClick={irParaPerfil}>Perfil</button>
            <button onClick={irParaAjuda}>Ajuda</button>
            <hr />
            <div>AJUDA</div>
        </div>
    );
}
