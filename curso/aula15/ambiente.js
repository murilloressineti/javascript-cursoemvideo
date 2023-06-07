let num = [2, 8, 7, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O valor de num é ${num.length}`)

let pos = num.indexOf(15)
if (pos==-1){       //Para o JS quando o valor não é encontrado é dado o valor -1
    console.log(`O valor não foi encontrado`)
}else{
    console.log(`O valor 8 está na posição ${pos+1}`)
}
