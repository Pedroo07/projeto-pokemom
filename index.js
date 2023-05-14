const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemTrocartema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroAtivo) {
        body.classList.remove("modo-escuro");
        imagemTrocartema.setAttribute("src", "./img/sun.png")
    }
    else {
        body.classList.add("modo-escuro");
        imagemTrocartema.setAttribute("src", "./img/moon.png");
    }

});
