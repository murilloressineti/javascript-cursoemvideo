function verificar() {
    var data = new Date()
    var ano = data.getFullYear()

    var formulario = document.querySelector('#txtano')
    var res = document.querySelector('#res')

    if (formulario.value.lenght == 0 || Number(formulario.value) > ano) {
        window.alert('Erro! Verifique os dados e tente novamente! ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(formulario.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[1].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 12 ){
                img.setAttribute('src', 'img-menino.png')
            } else if (idade <= 21 ){
                img.setAttribute('src', 'img-jovem-b.png')
            } else if (idade <= 60){
                img.setAttribute('src', 'img-adulto-b.png')
            } else {
                img.setAttribute('src', 'img-idoso.png')
            }
        } else if (fsex[0].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 12 ){
                img.setAttribute('src', 'img-menina.png')
            } else if (idade <= 21 ){
                img.setAttribute('src', 'img-jovem-a.png')
            } else if (idade <= 60){
                img.setAttribute('src', 'img-adulto-a.png')
            } else {
                img.setAttribute('src', 'img-idosa.png')
            }
        }
        res.innerHTML = `Detectamos gênero: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}