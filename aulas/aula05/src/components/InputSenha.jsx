function InputSenha(props) {
    return (
        <>
            <label htmlFor="senha">{props.texto}</label>
            <input 
                type="password" 
                id="senha" 
                name="senha"
                value={props.valor}
                onChange={(evento) => {props.mudaValor(evento.target.value)}}
            />
        </>
    )
}

export default InputSenha