let valores = [8, 4, 5, 6, 2, 3]
valores.sort()

for(let pos = 0; pos < valores.length; pos++ ){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

let quantidade = [5, 9, 8, 4, 1, 3]
quantidade.sort()

for(let pos in quantidade){
    console.log(`A posição ${pos} tem o valor ${quantidade[pos]}`)
}
