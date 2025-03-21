function gerar(){
    var n1 = Number(document.getElementById('num').value)
    var n2 = 1
    var result
    var res = document.getElementById('res')
     res.innerHTML = ' Tabuada </br>'

    if(n1 == ' '){
        alert('Preencha o campo')
    }
    while(n2 <= 12){
       result = n1 * n2
       res.innerHTML += (`${n1} x ${n2} = ${result} <br>`)
       n2 += 1
    }
}
