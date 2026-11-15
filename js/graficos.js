const canvas = document.getElementById("graficoProdutos");

const contexto = canvas.getContext("2d");

const categorias = [
    { nome: "Diagnóstico", quantidade: 8 },
    { nome: "Tratamento", quantidade: 5 },
    { nome: "Acessórios", quantidade: 3 }
];

let progresso = 0;

if (contexto) {

    function animarGrafico() {

        contexto.clearRect(0, 0, canvas.width, canvas.height);

        contexto.font = "bold 22px Arial";
        contexto.fillStyle = "#1677A8";
        contexto.fillText("Produtos por categoria", 30, 35);

        categorias.forEach(function(categoria, indice) {

            const y = 80 + indice * 85;

            contexto.font = "16px Arial";
            contexto.fillStyle = "#333333";
            contexto.fillText(categoria.nome, 30, y);

            const larguraBarra = categoria.quantidade * 40 * progresso;

            contexto.fillStyle = "#1677A8";
            contexto.fillRect(
                180,
                y - 20,
                larguraBarra,
                30
            );

            contexto.fillStyle = "#333333";
            contexto.fillText(
                categoria.quantidade + " produtos",
                515,
                y
            );

        });

        progresso += 0.02;

        if (progresso < 1) {
            requestAnimationFrame(animarGrafico);
        }

    }

    animarGrafico();

    console.log("Animação do gráfico iniciada!");

} else {
    console.log("Não foi possível carregar o Canvas 2D.");
}
