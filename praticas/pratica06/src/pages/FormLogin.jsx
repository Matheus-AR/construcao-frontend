import { useState } from "react";

import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Botao from "../components/Botao";

function FormLogin(props) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <form>
            <InputEmail valor={email} mudaValor={(event) => setEmail(event.target.value)} />
            <InputSenha valor={senha} mudaValor={(event) => setSenha(event.target.value)} />
            <Botao texto="Entrar" navegaPara={props.navegaPara} />
        </form>
    )
}

export default FormLogin;