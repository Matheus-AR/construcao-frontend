import { useState } from "react"
import Botao from "../components/Botao"
import InputEmail from "../components/InputEmail"
import InputSenha from "../components/InputSenha"

function FormLogin(props) {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const efetuarLogin = (evento) => {
        evento.preventDefault()
        // chamada ao backend
        props.navegaPara("/home")
    }

    return (
        <form onSubmit={efetuarLogin}>
            <InputEmail texto="E-mail" valor={email} mudaValor={setEmail} />
            <InputSenha texto="Senha" valor={senha} mudaValor={setSenha} />
            <Botao texto="Entrar" />
        </form>
    )
}

export default FormLogin