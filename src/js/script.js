// 1. Seleciona os elementos
const btnModoEscuro = document.getElementById('btn-modoescuro');
const body = document.body;

// 2. Carrega a preferência salva no navegador ao iniciar
// (Se já estava escuro antes, mantém escuro)
if (localStorage.getItem('darkMode') === 'true') {
  body.classList.add('dark-mode');
  body.classList.remove('light-mode');
} else {
  body.classList.add('light-mode');
  body.classList.remove('dark-mode');
}

// 3. Adiciona o evento de clique para alternar as cores
btnModoEscuro.addEventListener('click', () => {
  // Alterna (liga/desliga) as classes
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');
  
  // Verifica se ficou escuro e salva a preferência
  const isDark = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDark);
});