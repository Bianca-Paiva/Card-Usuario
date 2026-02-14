const botaoTema = document.getElementById("btn-tema");
const body = document.body;

// Verifica se já existe tema salvo
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo) {
    body.setAttribute("data-theme", temaSalvo);
}

// Alterna tema ao clicar
botaoTema.addEventListener("click", () => {
    const temaAtual = body.getAttribute("data-theme");

    if (temaAtual === "dark") {
        body.removeAttribute("data-theme");
        localStorage.setItem("tema", "light");
    } else {
        body.setAttribute("data-theme", "dark");
        localStorage.setItem("tema", "dark");
    }
});