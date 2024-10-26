import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Formulario from "../pages/Formulario";
import { obterContato } from "../services/ContatoService";

function Editar() {
  const { id } = useParams();
  const [contato, setContato] = useState({});
  const [erro, setErro] = useState("");

  const carregar = async () => {
    const resultado = await obterContato(id);
    if (resultado.sucesso) {
      setContato(resultado.dados);
      setErro("");
    } else {
      setErro(resultado.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Editar Contato</h2>
        <Formulario dados={contato} trataEnviar={() => {}} />
      </Conteudo>
    </>
  );
}

export default Editar;
