var cartasHerois = [
    obi_wan = {
        nome: "Obi Wan Kenobi",
        atributos : {
            forca: 8,
            agilidade: 4,
            habilidade_com_armas: 0
        }
    },
    han_solo = {
        nome: "Han solo",
        atributos : {
            forca: 5,
            agilidade: 6,
            habilidade_com_armas: 11
        }
    },
    c3p0 = {
        nome: "C-3PO",
        atributos : {
            forca: 1,
            agilidade: 0,
            habilidade_com_armas: 1
        }
    },
    luke = {
        nome: "Luke Skywalker",
        atributos: {
            forca: 7,
            agilidade: 7,
            habilidade_com_armas: 2 
        }
    }
]
var cartasViloes = [
    death_trooper = {
        nome: "Death Trooper",
        atributos : {
            forca: 6,
            agilidade: 5,
            habilidade_com_armas: 7
        }
    }, 
    purge_clone = {
        nome: "Purge clone",
        atributos : {
            forca: 8,
            agilidade: 5,
            habilidade_com_armas: 7 
        }
    },
    second_sister = {
        nome: "2° irmã",
        atributos : {
            forca: 8,
            agilidade: 7,
            habilidade_com_armas: 5 
        }
    },    
    boba_fett = {
        nome: "Boba Fett",
        atributos : {
        forca: 4,
        agilidade: 4,
        habilidade_com_armas: 10
        }
    },
    stormtrooper = {
        nome: "Stormtrooper",
        atributos : {
            forca: 2,
            agilidade: 4,
            habilidade_com_armas: 5
        }
    },
    darth_vader = {
        nome: "Darth Vader",
        atributos : {
            forca: 10,
            agilidade: 3,
            habilidade_com_armas: 3
        }
    }
]
var cartaMaquina
var cartaPlayer

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 6)
    cartaMaquina = cartasViloes[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 4)
    // while (numeroCartaJogador == numeroCartaMaquina) {
    //     numeroCartaJogador = parseInt(Math.random() * 4)
    // }
    cartaPlayer = cartasHerois[numeroCartaJogador]

    console.log(cartaPlayer)
    console.error(cartaMaquina)

    document.getElementById("btnSortear").disabled = true
    document.getElementById("btnJogar").disabled = false

    exibirOpcoes()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaPlayer.atributos) {
        opcoesTexto += "<input type='radio'name='atributo' value='"+ atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function obtemAtributoSelecionado() {
    var radioSelecionado = document.getElementsByName("atributo");
    for(var i = 0; i<radioSelecionado.length; i++){
        if(radioSelecionado[i].checked){
            return radioSelecionado[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var valorCartaJogador = cartaPlayer.atributos[atributoSelecionado]
    var valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado]
    duelarCartas(valorCartaJogador, valorCartaMaquina)
}
function duelarCartas(valorCartaJogador, valorCartaMaquina) {
    var elementoResultado = document.getElementById("resultado")
    if(valorCartaJogador > valorCartaMaquina){
        elementoResultado.innerHTML = "Você venceu."
    } else if(valorCartaJogador < valorCartaMaquina){
        elementoResultado.innerHTML = "Você perdeu." 
    } else {
        elementoResultado.innerHTML = "Empate."
    }
}