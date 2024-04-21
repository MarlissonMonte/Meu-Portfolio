"use strict";

var camposDoFormulario = document.querySelectorAll('[required]');
var formulario = document.querySelector('[data-formulario]');
formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  var listaRespostas = {
    "nome": e.target.elements["nome"].value,
    "email": e.target.elements["email"].value,
    "telefone": e.target.elements["telefone"].value,
    "preferencia_contato": e.target.elements["preferencia_contato"].value
  };
  localStorage.setItem("cadastro", JSON.stringify(listaRespostas));
  window.location.href = './abir-conta-form-2.html';
});
camposDoFormulario.forEach(function (campo) {
  campo.addEventListener("blur", function () {
    return verificaCampo(campo);
  });
  campo.addEventListener("invalid", function (evento) {
    return evento.preventDefault();
  });
});

function verificaCampo(campo) {}
//# sourceMappingURL=validacao.dev.js.map
