function contar() {
    let inicio = document.querySelector('#txti')
    let fim = document.querySelector('#txtf')
    let passo = document.querySelector('#txtp')
    let res = document.querySelector('#res')

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        res.innerHTML('Impossível contar')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0){
            window.alert('Passo inválido. Considerando passo 1')
            p = 1
        }

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for(let c = i; c >= f; c -= p)
                res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += '\u{1F3C1}'
    }
}