import { useContext, useState } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function FormTarefa() {
  const [tarefa, setTarefa] = useState("");
  const { incluir } = useContext(TarefaContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa) {
      incluir(tarefa);
      setTarefa("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Adicione uma nova tarefa" value={tarefa} onChange={(event) => setTarefa(event.target.value)} />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
