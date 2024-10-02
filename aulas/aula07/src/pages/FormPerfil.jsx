import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import InputNome from "../components/InputNome";

function FormPerfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputNome register={register} error={errors.nome} />
        <InputEmail register={register} error={errors.email} />
        <InputSenha register={register} error={errors.senha} />
        <button type="submit">Salvar</button>
      </form>
    </>
  );
}

export default FormPerfil;
