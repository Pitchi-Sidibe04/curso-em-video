function contar() {
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')

    if (inicio == ' ' || fim == ' ' || passo == ' ') {
        alert('Preencha todos os campos')
    }
    else if ( passo > fim){
        alert('Dado Invalido')
        res.innerHTML = 'Erro'
    }
    if (inicio < fim){
        // Contagem crescente
        res.innerHTML = 'Contando: <br>'
        var i = inicio

        while (i <= fim){
            res.innerHTML += `${i} \u{1F449} `
            i += passo
        }
        res.innerHTML += '\u{1F3C1}'
    }
    else if (inicio > fim)
    {
        //contagem regressiva
        res.innerHTML = 'Contando: <br>'
        var i = inicio
        
        while (i >= fim){
            res.innerHTML += `${i} \u{1F449} `
            i -= passo
        }
        res.innerHTML += '\u{1F3C1}'
    } else{
        res.innerHTML += 'O inicio e o fim sao iguais, portanto nao ha contagem'
    }
    
}