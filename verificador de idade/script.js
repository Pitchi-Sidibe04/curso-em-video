function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('textano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO!]Verifique novamento os dados inseridos')
    } else{
        var gen = document.getElementsByName('radgen')
        idade = ano - Number(fano.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(gen[0].checked){
            sexo = 'Homem'
            if(idade >= 0 && idade <= 12){
                //crianca
                img.setAttribute('src', 'img/crianca_homem.png')
            }
            else if(idade < 21){
                // jovem
                img.setAttribute('src', 'img/jovem_homem.png')
            } 
            else if(idade < 50){
                 //Adulto
                 img.setAttribute('src', 'img/adulto_homem.png')
            }  
            else{
                //idoso
                img.setAttribute('src', 'img/idoso_homem.png')
            }
        }
        else{
            sexo = 'Mulher'
            if(idade >= 0 && idade <= 12){
                //crianca
                img.setAttribute('src', 'img/crianca_mulher.png')
            }
            else if(idade < 21){
                // jovem
                img.setAttribute('src', 'img/jovem_mulher.png')
            } 
            else if(idade < 50){
                 //Adulto
                 img.setAttribute('src', 'img/adulto_mulher.png')
            }  
            else{
                //idoso
                img.setAttribute('src', 'img/idoso_mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${sexo} de ${idade} anos`
        img.style.display = 'block';
        img.style.margin = 'auto';
        res.appendChild(img)
    }

}