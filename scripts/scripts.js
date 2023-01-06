function entrar() {
    var nome = document.getElementById("name").value;
    alert(`Seja bem-vinda, sr(a), ${nome}!`);
}

function validarDados() {
    var name = document.getElementById("name").value;
    var senha = document.getElementById("senha").value;

    if (
        name == "" ||
        senha == ""
      ) {
        alert('Preencha todos os campos.');
      } else {
        entrar(), limpar();
      }
}

function limpar() {
    document.getElementById("name").value = null;
    document.getElementById("senha").value = null;
}

function limparReset() {
    document.getElementById("email").value = null;
}

function redefinir() {
    var email = document.getElementById("email").value;
    alert(`As instruções foram enviadas para o e-mail: ${email}`);
}

function validarReset() {
    var email = document.getElementById("email").value;

    if (
        email == ""
    ) {
        alert('Preencha o campo.');
    } else {
        redefinir(), limparReset();
    }
}