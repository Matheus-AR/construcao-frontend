function InputEmail({ register, error }) {
  const regras = {
    required: { value: true, message: "E-mail é obrigatório" },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Formato inválido do email",
    },
  };
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input type="email" {...register("email", regras)} />
      {error && <p>{error.message}</p>}
    </>
  );
}

export default InputEmail;
