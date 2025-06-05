// Lista de jogadores

let xJogadores = [50, 50, 50, 50]; // Posições iniciais no eixo X

let yJogadores = [100, 200, 300, 400]; // Posições fixas no eixo Y

let jogadores = ["👩‍🦽‍➡️", "🧜‍♂️", "🚜", "🚜"]; // Emojis representando os jogadores

let velocidade = [2, 3, 2.5, 3.5]; // Velocidades de cada jogador

let chegadaX = 450; // Posição de chegada no eixo X

function setup() {

  createCanvas(500, 500);

  textSize(32);

  textAlign(CENTER,center);

}

function draw() {

  ativaJogo();

  moveJogadores();

  criaChegada();

  verificaGanhador();

}

// Função para alterar o fundo dependendo do foco

function ativaJogo() {

  if (focused) {

    background("black");

  } else {

    background("black");

  }

}

// Função para mover os jogadores

function moveJogadores() {

  for (let i = 0; i < xJogadores.length; i++) {

    // Apenas move se o jogador ainda não cruzou a linha de chegada

    if (xJogadores[i] < chegadaX) {

      xJogadores[i] += velocidade[i];

    }

    // Desenha o emoji do jogador na sua posição

    text(jogadores[i], xJogadores[i], yJogadores[i]);

  }

}

// Função para desenhar a linha de chegada

function criaChegada() {

  stroke(255);

  line(chegadaX, 0, chegadaX, height);

  noStroke();

  fill(255);

  textSize(16);

  text("Chegada", chegadaX + 30, 20);

}

// Função para verificar se algum jogador venceu

function verificaGanhador() {

  for (let i = 0; i < xJogadores.length; i++) {

    if (xJogadores[i] >= chegadaX) {

      fill(255);

      textSize(24);

      text(`Vencedor: ${jogadores[i]}!`, width / 2, height / 2);

      noLoop(); // Para o loop de desenho ao vencer

      break;

    }

  }

}

