function contar() {
    let i = document.getElementById("inicio")
    let f = document.getElementById("fim")
    let p = document.getElementById("passo")
    let r = document.getElementById("resultado")

    if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
        window.alert('[ERRO] Os valores dos campos não pode ser 0')
    } else{
        r.innerHTML = `contando...</br>`
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(p.value)

        if(inicio < fim){
            for(c = inicio; c <= fim; c+=passo){
                r.innerHTML += `${c} \u{1F449}`
            }
        } else{
            for(c = inicio; c >= fim; c-=passo){
                r.innerHTML += `${c} \u{1F449}`
            }
        }
        r.innerHTML += `\u{1F3C1}`
    }
    
}