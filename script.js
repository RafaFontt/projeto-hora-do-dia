function carregar () {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#B89EC1'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#5CBBFF'
    } else if (hora >18 && hora <= 24) {
        //BOA NOITE!
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#434252'
    } else {
        msg.innerHTML = '[ERRO] Horário inválido'
        img.src = 'imagens/erro.png'
        document.body.style.background = '#545252'
    }
}

// tarde #AHD2F0
// manha #B89EC1
// noite #1D0D4F
// erro  #545252