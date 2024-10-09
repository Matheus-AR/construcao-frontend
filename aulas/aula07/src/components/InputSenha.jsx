function InputSenha({ register, error }) {
  const regras = {
    required: "Senha é obrigatória",
    minLength: { value: 6, message: "Senha deve ter 6 caracteres" },
  };
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input type="password" {...register("senha", regras)} />
      {error && <p>{error.message}</p>}
    </>
  );
}

export default InputSenha;
