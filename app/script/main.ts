const btn_submit = document.getElementById(
  "form_btn_email"
) as HTMLButtonElement;
const input_email = document.getElementById(
  "form_input_email"
) as HTMLInputElement;
const result = document.getElementById("result") as HTMLDivElement;

/* Função que verifica o email está com os campos corretor */
const validarEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/* Carrega o elemento html dentro da div result */
const carregarSucesso = (email: string) => {
  result.innerHTML = "";

  let email_item = document.createElement("div");
  email_item.classList.add("sucesso_mensagem");

  email_item.innerHTML = `
    <div class="sucesso_container">
        <div class="sucesso_container_fluid">
            <img src="../assets/images/icon-success.svg" alt="sucesso ao logar" class="icon_sucesso">
            <h1 class="title_sucesso">Thanks for subscribing!</h1>
            <span class="mensagem_sucesso">
                A confirmation email has been sent to
                <strong>${email}</strong>. Please open it and click the button inside to confirm
                your subscription. 
            </span>
            <button type="submit" class="btn_submit" id="form_btn_sucesso">
               Dismiss message
            </button>
        </div>
    </div>`;

  result.appendChild(email_item);
};

/* Chama a função quando o botão e clicado */
btn_submit.addEventListener("click", (event) => {
  event.preventDefault();

  const email = input_email.value;

  // Verifica se o email está preenchido corretamente
  if (email.trim() !== "" && validarEmail(email)) {
    carregarSucesso(email);
  } else {
    // Se o campo de email não estiver preenchido, exibe uma mensagem de erro
    let email_input = document.getElementById(
      "form_input_email"
    ) as HTMLDivElement;
    email_input.classList.add("erro_input");

    let label_input = document.getElementById(
      "input_error"
    ) as HTMLLabelElement;
    label_input.innerHTML = "Valide email required";
  }
});
