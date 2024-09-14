function Link(props) {
    const trataClique = (event) => {
        event.preventDefault();
        props.navegaPara(event.target.getAttribute("href"));
    }
    return (
        <a href={props.rota} onClick={trataClique}>{props.texto}</a>
    )
}

export default Link;