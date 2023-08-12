import './CampoTexto.css'


const CampoTexto = (props) => {

// const placeholderModificada = `${props.placeholder}...`

// let valor = 'Guilherme Silveira'

   
    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
       
    }

    return (
        <div className="campo-texto">
            <label>
                {props.label}
                </label>
            <input value={props.valor} onChange={aoDigitado} required={props.obrigatorio} placeholder={props.placeholder}/>
        </div>
    )
}

export default CampoTexto