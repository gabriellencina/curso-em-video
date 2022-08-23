function tabuada(){
    let numero = document.querySelector('input#num')
    let tabuada = document.getElementById('tab')

    if(numero.value.length == 0){
        window.alert('[Erro] por favor digite um número')
    } else{
            tabuada.innerHTML = ''
            let n = Number(numero.value)
            for(let c = 0;c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
        } 
    }
}
