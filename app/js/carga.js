fraseAzar();
function fraseAzar(){
    let azar = aleatorio(1,12)
    console.log(azar)
    if(azar===1){
        document.getElementById('F1').style.display = 'block'
        
    }else if(azar===2){
        document.getElementById('F2').style.display = 'block'
    }else if(azar===3){
        document.getElementById('F3').style.display = 'block'
    }else if(azar===4){
        document.getElementById('F4').style.display = 'block'
    }else if (azar===5){
        document.getElementById('F5').style.display = 'block'
    }else if (azar===6){
        document.getElementById('F6').style.display = 'block'
    }else if (azar===7){
        document.getElementById('F7').style.display = 'block'
    }else if (azar===8){
        document.getElementById('F8').style.display = 'block'
    }else if (azar===9){
        document.getElementById('F9').style.display = 'block'
    }else if (azar===10){
        document.getElementById('F10').style.display = 'block'
    }else if (azar===11){
        document.getElementById('F11').style.display = 'block'
    }else if (azar===12){
        document.getElementById('F12').style.display = 'block'
    }else if (azar===13){
        document.getElementById('F13').style.display = 'block'
    }
}        
function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}
window.addEventListener('load', () => {
    setTimeout(function(){
        const content = document.querySelector('#content')
        const contenedor_loader = document.querySelector('.contenedor_loader')
        contenedor_loader.style.visibility = 'hidden'
        contenedor_loader.style.opacity = 0
        setTimeout(function(){
            contenedor_loader.style.display = 'none'
            content.style.display = 'flex'
            content.style.opacity = 100
        },2000)
    },2000)
})

