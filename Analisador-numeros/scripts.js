let num = document.getElementById("numero")
let list = document.getElementById("lista")
let resultado = document.getElementById("res")
let valores = []
let soma = 0
let media = 0

function adicionar(){
    let n = Number(num.value)
    if(n.value == 0 || n < 1 || n > 100 || valores.indexOf(n) != -1){
        window.alert("Valor digitado inválido ou número já existente")
    } else{
        resultado.innerHTML = ""
        valores.push(n)
        soma += n
        let salvar = document.createElement("option")
        list.appendChild(salvar)
        salvar.innerHTML += `O valor ${n} foi adicionado`
    }
    num.value = ""
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        window.alert("Antes de finalizar, adicione valores")
    } else{
        resultado.innerHTML = ""
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]

        for(let pos in valores){
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / total
        
        resultado.innerHTML += `<p>O numero total de valores cadastrados é ${total}</p>`
        resultado.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        resultado.innerHTML += `<p>O maior valor é ${maior}</p>`
        resultado.innerHTML += `<p>O menor valor é ${menor}</p>`
        resultado.innerHTML += `<p>A média dos valores é ${media}`
        
    
    }
}