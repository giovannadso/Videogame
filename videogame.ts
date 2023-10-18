class VideoGame {
    nome: string;
    genero: string;
    numeroJogadores: number;
    plataforma: [string];
    preco: number;
  
    constructor(nome: string, genero: string, numeroJogadores: number, plataforma: [string], preco: number) {
      this.nome = nome;
      this.genero = genero;
      this.numeroJogadores = numeroJogadores;
      this.plataforma = plataforma;
      this.preco = preco;
    }
  
    exibirDetalhes(): void {
      console.log(`Nome: ${this.nome}`);
      console.log(`Gênero: ${this.genero}`);
      console.log(`Número de Jogadores: ${this.numeroJogadores}`);
      console.log(`Plataforma(s): ${this.plataforma.join(', ')}`);
      console.log(`Preço: $${this.preco.toFixed(2)}`);
    }
  
    aplicarDesconto():number{
        let desconto = this.preco * 10 / 100;
        let total = this.preco - desconto;
        return total;
    }
    
  
    adicionarPlataforma(novaPlataforma: string): [string] {
        this.plataforma.push(novaPlataforma);
        return this.plataforma
    }
  
    estimarTempoJogo(): string {
      if(this.genero === "ação"){
        return "Cerca de 12h para ser concluído!";
      }
      return "Cerca de 5h para concluir!";
    }
}
  
  // Exemplo de uso da classe VideoGame:
  const game = new VideoGame('GTA', 'ação', 1, ["ps"], 500);
  const resultado = game.aplicarDesconto();
  console.log(resultado);
  game.adicionarPlataforma ('Xbox');
  console.log (game.plataforma);
  const tempoEstimado = game.estimarTempoJogo();
  console.log(tempoEstimado);
