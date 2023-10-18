var VideoGame = /** @class */ (function () {
    function VideoGame(nome, genero, numeroJogadores, plataforma, preco) {
        this.nome = nome;
        this.genero = genero;
        this.numeroJogadores = numeroJogadores;
        this.plataforma = plataforma;
        this.preco = preco;
    }
    VideoGame.prototype.exibirDetalhes = function () {
        console.log("Nome: ".concat(this.nome));
        console.log("G\u00EAnero: ".concat(this.genero));
        console.log("N\u00FAmero de Jogadores: ".concat(this.numeroJogadores));
        console.log("Plataforma(s): ".concat(this.plataforma.join(', ')));
        console.log("Pre\u00E7o: $".concat(this.preco.toFixed(2)));
    };
    VideoGame.prototype.aplicarDesconto = function () {
        var desconto = this.preco * 10 / 100;
        var total = this.preco - desconto;
        return total;
    };
    VideoGame.prototype.adicionarPlataforma = function (novaPlataforma) {
        this.plataforma.push(novaPlataforma);
        return this.plataforma;
    };
    VideoGame.prototype.estimarTempoJogo = function () {
        if (this.genero === "ação") {
            return "Cerca de 12h para ser concluído!";
        }
        return "Cerca de 5h para concluir!";
    };
    return VideoGame;
}());
// Exemplo de uso da classe VideoGame:
var game = new VideoGame('GTA', 'ação', 1, ["ps"], 500);
var resultado = game.aplicarDesconto();
console.log(resultado);
game.adicionarPlataforma('Xbox');
console.log(game.plataforma);
var tempoEstimado = game.estimarTempoJogo();
console.log(tempoEstimado);
