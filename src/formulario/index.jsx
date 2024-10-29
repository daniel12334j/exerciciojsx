import { useEffect, useState } from "react";
import styles from "./Form.module.css"


const Formulario = (props) => {

    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [resultado, setResultado] = useState('');


    useEffect(() => {
        const resultado = altura / (peso * peso);
        if(resultado < 18.5){
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Abaixo do peso`)
        }else if(resultado <= 24.9){
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Peso normal`)
        }else if(resultado <= 29.9){
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Sobrepeso`)
        }else if(resultado <= 34.9){
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Obesidade grau I `)
        }else if(resultado <= 39.9){
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Obesidade grau II `)
        }else{
            setResultado(`Seu imc é: ${resultado.toFixed(2)} . Obesidade grau III `)
        }
        
    },[altura, peso])

    return (
        <header >
        
        <form className={styles.formulario} >
            <div className={styles.divInput}>
            <label htmlFor="peso">Peso</label>
                <input className={styles.input} type="number" id="peso" placeholder="Exemplo:60" onChange={e => setAltura(e.target.value)}/>
            </div>

            <div className={styles.divInput}>
                
            <label htmlFor="altura">Altura</label>
                <input className={styles.input} type="number" id="altura"  placeholder="Exemplo:1.75" onChange={e => setPeso(e.target.value)}/>
            </div>

        </form>
        <p className={styles.resultado}>{resultado}</p>
        </header>
    )
}

export default Formulario;