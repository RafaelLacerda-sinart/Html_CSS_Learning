// ===============================
// SCRIPT PRINCIPAL DA PÁGINA
// ===============================

// Espera o HTML carregar completamente antes de executar o JS
document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------------
    // 1️⃣ Selecionando todos os botões da página
    // ---------------------------------------

    // querySelectorAll pega TODOS os elementos que combinam com o seletor
    // Aqui estamos pegando todos os botões que estão dentro da classe .card
    const botoes = document.querySelectorAll(".card button");

    // ---------------------------------------
    // 2️⃣ Percorrendo cada botão encontrado
    // ---------------------------------------

    // forEach percorre cada item da lista
    botoes.forEach(function (botao, index) {

        // Adiciona um evento de clique para cada botão
        botao.addEventListener("click", function () {

            // ---------------------------------------
            // 3️⃣ Ação ao clicar no botão
            // ---------------------------------------

            // Mostra um alerta diferente para cada card
            alert("Você clicou no Card " + (index + 1));

            // ---------------------------------------
            // 4️⃣ Redirecionamento
            // ---------------------------------------

            // Se for o primeiro botão (Card 1)
            if (index === 0) {

                // Redireciona para outra página
                window.location.href = "case1.html";
            }

        });

    });

    // ---------------------------------------
    // 5️⃣ Alterando o título via DOM
    // ---------------------------------------

    // Seleciona o título principal pelo ID
    const topo = document.getElementById("topo");

    // Quando o mouse passar por cima do header
    topo.addEventListener("mouseover", function () {

        // Muda a cor de fundo dinamicamente
        topo.style.backgroundColor = "#333";
        topo.style.color = "white";

    });

    // Quando o mouse sair do header
    topo.addEventListener("mouseout", function () {

        // Volta ao normal
        topo.style.backgroundColor = "";
        topo.style.color = "";

    });

});
