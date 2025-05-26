const form = document.getElementById('pedidoForm');
const msgSucesso = document.getElementById('msg-sucesso');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const pedido = form.pedido.value.trim();

  if(nome && email && pedido) {
    // Simula envio do pedido (aqui você pode integrar backend se quiser)
    msgSucesso.textContent = `Obrigado pelo pedido, ${nome}! Entraremos em contato via email.`;
    form.reset();

    // Apaga a mensagem após 5 segundos
    setTimeout(() => {
      msgSucesso.textContent = '';
    }, 5000);
  } else {
    msgSucesso.textContent = 'Por favor, preencha todos os campos corretamente.';
    msgSucesso.style.color = 'red';
  }
});
