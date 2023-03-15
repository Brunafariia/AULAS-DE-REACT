import "./ChecarNumero.css";

export function ChecarNumero(props) {
    if (props.numero % 2 === 0) {
      return <h1>O número {props.numero} é par.</h1>;
    } else {
      return <h1>O número {props.numero} é ímpar.</h1>;
    }

//   return props.numero % 2 === 0 ? (
//     <h1>O número {props.numero} é par.</h1>
//   ) : (
//     <h1>O número {props.numero} é ímpar.</h1>
//   );
}

// OUTRO MODO DE FAZER

// export function Impar({ numero }) {

//     return (
//         <p>
//             {(numero % 2 == 0) ? "Impar" : "Par"}
//         </p>
//     );
// }