function Link(props) {
    const aoClicar = (evento) => {
        evento.preventDefault()
        props.navegaPara(evento.target.getAttribute("href"))
    }
    return (
        <a href={props.rota} onClick={aoClicar}>{props.texto}</a>
    )
}

export default Link