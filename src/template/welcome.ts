export const welcome_template = (name: string): string => {
  return `<div
    style="
      background-color: rgb(44, 44, 44);
      padding: 20px;
      margin: 0px;
      padding: 0px;
      font-family: sans-serif;
    "
  >
    <div
      style="
        color: #cfcfcf;
        display: flex;
        flex-direction: column;
        width: 500px;
        margin: 0 auto;
        padding: 20px;
      "
    >
      <h1>Bem vindo ${name}</h1>
      <p>Você já pode fazer login em nossa plataforma.</p>

      <a
        href="#"
        style="
          width: 200px;
          background-color: #cfcfcf;
          text-align: center;
          padding: 10px;
          border-radius: 8px;
          color: black;
          text-decoration: none;
        "
        >Clique aqui para entrar</a
      >

      <div style="margin: 40px auto 5px; font-size: 14px">
        Todos os direitos reservados.
      </div>
    </div>
  </div>`;
};
