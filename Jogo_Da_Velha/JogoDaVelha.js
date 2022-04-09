const player1 = 'X'
const player2 = 'O'

var playTime = player1
var gameOver = false

atualizaJogada()
inicializarQuadrado()

function atualizaJogada() {
  if (gameOver) {
    return
  }

  if (playTime == player1) {
    var player = window.document.querySelectorAll('div#jogador img')[0]
    player.setAttribute('src', 'imagens/x.jpg')
  } else {
    var player = window.document.querySelectorAll('div#jogador img')[0]
    player.setAttribute('src', 'imagens/bolinha.jpg')
  }
}

function inicializarQuadrado() {
  var quadrados = window.document.getElementsByClassName('quadrado')
  for (var i = 0; i < quadrados.length; i++) {
    quadrados[i].addEventListener('click', function () {
      if (gameOver) {
        return
      }

      if (this.getElementsByTagName('img').length == 0) {
        if (playTime == player1) {
          this.innerHTML = "<img src='imagens/x.jpg'>"
          this.setAttribute('jogada', player1)
          playTime = player2
        } else {
          this.innerHTML = "<img src='imagens/bolinha.jpg'>"
          this.setAttribute('jogada', player2)
          playTime = player1
        }
        atualizaJogada()
        verificarVencedor()
      }
    })
  }
}
function verificarVencedor() {
  var a1 = document.getElementById('a1').getAttribute('jogada')
  var a2 = document.getElementById('a2').getAttribute('jogada')
  var a3 = document.getElementById('a3').getAttribute('jogada')

  var b1 = document.getElementById('b1').getAttribute('jogada')
  var b2 = document.getElementById('b2').getAttribute('jogada')
  var b3 = document.getElementById('b3').getAttribute('jogada')

  var c1 = document.getElementById('c1').getAttribute('jogada')
  var c2 = document.getElementById('c2').getAttribute('jogada')
  var c3 = document.getElementById('c3').getAttribute('jogada')

  var vencedor = ''

  if (
    (a1 == b1 && a1 == c1 && a1 != '') ||
    (a1 == a2 && a1 == a3 && a1 != '') ||
    (a1 == b2 && a1 == c3 && a1 != '')
  ) {
    vencedor = a1
  } else if (
    (b2 == b1 && b2 == b3 && b2 != '') ||
    (b2 == a2 && b2 == c2 && b2 != '') ||
    (b2 == a3 && b2 == c1 && b2 != '')
  ) {
    vencedor = b2
  } else if (
    (c3 == c2 && c3 == c1 && c3 != '') ||
    (c3 == a3 && c3 == b3 && c3 != '')
  ) {
    vencedor = c3
  }
  if (vencedor != '' | vencedor == 'b2' || vencedor == 'c3') {
    gameOver = true
    alert("O ganhador foi o: '" + vencedor + "'")
  }
}

/* var j = window.document.getElementById('a1')
j.addEventListener('click', click)

function click() {
  j.innerText = 'selected!'
  j.style.background = 'red'
} */
