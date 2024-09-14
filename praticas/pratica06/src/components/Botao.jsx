function Botao(props) {
    return (
        <button onClick={(event) => props.navegaPara("/home")}>{props.texto}</button>
    )
}

export default Botao;