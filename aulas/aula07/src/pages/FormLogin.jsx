import { useForm } from "react-hook-form";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputEmail register={register} error={errors.email} />
        <InputSenha register={register} error={errors.senha} />
        <button type="submit">Entrar</button>
      </form>
    </>
  );
}

export default FormLogin;
