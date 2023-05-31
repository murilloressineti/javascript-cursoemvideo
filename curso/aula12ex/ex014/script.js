
function carregar() {
    var msg = window.document.querySelector('#msg')
    var img = window.document.querySelector('#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora < 12){
        img.src = 'img-manha.png'
        document.body.style.background = '#C09E6B'
    } else if (hora < 18){
        img.src = 'img-tarde.png'
        document.body.style.background = '#724C6C'
    } else {
        img.src = 'img-noite.png'
        document.body.style.background = '#273C5C'
    }
}