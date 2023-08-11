let getFormulario = document.getElementById('formulario-exercicio');
let primeiroCampoFormulario = getFormulario.querySelectorAll('input');
let segundoCampoFormulario = getFormulario.querySelectorAll('input');
let buttonSubmit = document.getElementById('button-submit');
let mensagem = buttonSubmit.querySelector('p');


getFormulario.addEventListener('submit', function (e) {
    e.preventDefault();

    let primeiroValor = parseFloat(primeiroCampoFormulario[0].value);
    let segundoValor = parseFloat(segundoCampoFormulario[1].value);

    if (primeiroValor > segundoValor) {
        mensagem.textContent = 'O segundo numero precisa ser maior que o primeiro';
        mensagem.style.marginTop = '8px';
        mensagem.style.color = 'red';
    } else {
        mensagem.textContent = 'Ok! Formulario enviado';
        mensagem.style.marginTop = '8px';
        mensagem.style.color = 'green';
    }
});


