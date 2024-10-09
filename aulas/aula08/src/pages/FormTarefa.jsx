import { useContext, useState } from "react";
import { TarefaContext } from "../contexts/TarefaContext";

function FormTarefa() {
  const [tarefa, setTarefa] = useState("");
  const { incluir } = useContext(TarefaContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tarefa) {
        incluir(tarefa);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tarefa..."
        value={tarefa}
        onChange={(event) => setTarefa(event.target.value)}
      />
      <button type="submit">Adicionar</button>
    </form>
  );
}

export default FormTarefa;
