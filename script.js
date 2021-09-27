var cartasHerois = [
    obi_wan = {
        nome: "Obi Wan Kenobi",
        imagem: "https://sm.ign.com/t/ign_in/gallery/o/obi-wans-g/obi-wans-greatest-moments_55e4.1080.jpg",
        atributos : {
            forca: 8,
            agilidade: 4,
            habilidade_com_armas: 0
        }
    },
    han_solo = {
        nome: "Han solo",
        imagem: "https://s2.glbimg.com/adFNCY28mMYhn6cOebEGMlkE3J0=/620x520/smart/e.glbimg.com/og/ed/f/original/2013/11/09/episode_4_han_solo_2.jpg",
        atributos : {
            forca: 5,
            agilidade: 6,
            habilidade_com_armas: 11
        }
    },
    c3p0 = {
        nome: "C-3PO",
        imagem: "https://static.wikia.nocookie.net/ptstarwars/images/9/94/C3PO_EP3.jpg",
        atributos : {
            forca: 1,
            agilidade: 0,
            habilidade_com_armas: 1
        }
    },
    luke = {
        nome: "Luke Skywalker",
        imagem: "https://img.vixdata.io/pd/jpg-large/pt/sites/default/files/bbr/luke3.png",
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
        imagem: "http://lojalimitededition.vteximg.com.br/arquivos/ids/215801-1140-1710/183058_0.jpg",
        atributos : {
            forca: 6,
            agilidade: 5,
            habilidade_com_armas: 7
        }
    }, 
    purge_clone = {
        nome: "Purge clone",
        imagem: "https://static.wikia.nocookie.net/starwarsjedifallenorder/images/d/d3/Purge_Troopers_%28Electrostaff%29.png",
        atributos : {
            forca: 8,
            agilidade: 5,
            habilidade_com_armas: 7 
        }
    },
    second_sister = {
        nome: "2° irmã",
        imagem: "https://i.pinimg.com/originals/b1/bd/05/b1bd0517f32f5374e3a9f613a6767e96.jpg",
        atributos : {
            forca: 8,
            agilidade: 7,
            habilidade_com_armas: 5 
        }
    },    
    boba_fett = {
        nome: "Boba Fett",
        imagem: "https://uploads.jovemnerd.com.br/wp-content/uploads/2021/06/the-book-of-boba-fett-terminadas-gravacoes.jpg",
        atributos : {
        forca: 4,
        agilidade: 4,
        habilidade_com_armas: 10
        }
    },
    stormtrooper = {
        nome: "Stormtrooper",
        imagem: "https://images.hdqwalls.com/wallpapers/stormtrooper-art-4k-uq.jpg",
        atributos : {
            forca: 2,
            agilidade: 4,
            habilidade_com_armas: 5
        }
    },
    darth_vader = {
        nome: "Darth Vader",
        imagem: "https://cdna.artstation.com/p/assets/images/images/035/178/548/large/eollyn-art-darth-vader-done-lq.jpg",
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

    exibirCartaJogador()
}

function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""

    for (var atributo in cartaPlayer.atributos) {
        opcoesTexto += "<input type='radio'name='atributo' value='"+ atributo + "'>" + atributo
    }
    opcoes.innerHTML = opcoesTexto
}

function exibirCartaJogador(){
    var divCartaPlayer = document.getElementById("carta-jogador")
    divCartaPlayer.style.backgroundImage = `url(${cartaPlayer.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for (var atributo in cartaPlayer.atributos) {
        opcoesTexto += "<input type='radio'name='atributo' value='"+ atributo + "'>" + atributo + ": " + cartaPlayer.atributos[atributo] + "<br>"
    }
    var nome = `<p class="carta-subtitle">${cartaPlayer.nome}</p>`
    divCartaPlayer.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
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
        htmlResultado = "<p class='resultado-final'>Venceu</p>"
    } else if(valorCartaJogador < valorCartaMaquina){
        htmlResultado= "<p class='resultado-final'>Perdeu</p>" 
    } else if(valorCartaJogador == valorCartaMaquina){
        htmlResultado= "<p class='resultado-final'>Empatou</p>"
    }
    elementoResultado.innerHTML = htmlResultado
    document.getElementById("btnSortear").disabled = false
    exibirCartaMaquina()
    document.getElementById("btnJogar").disabled = true
}
function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina")
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">'
    var tagHTML = "<div id='opcoes' class='carta-status'>"
    var opcoesTexto = ""
    for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p input type='text'name='atributo' value='"+ atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + "</p>"
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>"
}