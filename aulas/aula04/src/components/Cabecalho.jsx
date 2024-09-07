import InputPesquisar from "./InputPesquisar"
import Logo from "./Logo"
import Titulo from "./Titulo"

function Cabecalho() {
    const urlLogo = "https://www.svgrepo.com/show/489120/school.svg"
    const urlIcone = "https://www.svgrepo.com/show/507851/search-square.svg"
    const textoLogo = "Logo da Aplicação"
    const textoIcone = "Icone Pesquisar"
    return (
        <header>
            <Logo imagem={urlLogo} texto={textoLogo} />
            <Titulo texto="Aluno Online" />
            <InputPesquisar />
            <Logo imagem={urlIcone} texto={textoIcone} />
        </header>
    )
}

export default Cabecalho