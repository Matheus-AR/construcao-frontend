function InputEmail(props) {
    return (
        <>
            <label htmlFor="email">{props.texto}</label>
            <input 
                type="email" 
                id="email" 
                name="email"
                value={props.valor} 
                onChange={(evento) => {props.mudaValor(evento.target.value)}}
            />
        </>
    )
}

export default InputEmail