import "./Contador.css";

export function Contador () {

    let numero = 0;
    console.log(numero)

    //incrementar
    function inc () {
        numero = numero+1;
        console.log(numero)
        setNumero()
    }

    //decrementar
    function dec () {
        numero = numero-1;
        console.log(numero)
        setNumero()
    }

    function setNumero() {
        const displayNumero= document.getElementById("displayNumero");
        displayNumero.innerHTML = numero;
    }

    return (
        <div>
            <h1 id="displayNumero">{numero}</h1>
            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
            <button onCanPlay={setNumero}>Atualizar valor</button>
        </div>
    );
}