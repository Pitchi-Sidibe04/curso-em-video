function carregar(){

    var msg = document.getElementById('msg')
    var text = document.getElementById('text')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são <strong> ${hora}  horas </strong>.`
    if(hora >= 0 && hora < 13 ){
        // Bom dia
        img.src = "img/bom_dia.png"
        document.body.style.background = '#e2cd9f'
        text.innerHTML = 'Bom Dia!'
    }
    else if(hora >= 13 && hora < 18){
            // Boa tarde
            img.src = "img/boa_tarde.png"
            text.innerHTML = 'Bom Tarde!'
            document.body.style.background = '#b9846f'
        } else 
        {
        // Boa noite
        img.src = "img/boa_noite.png"
        text.innerHTML = 'Boa Noite!'
        document.body.style.background = '#515154'
    }

} 