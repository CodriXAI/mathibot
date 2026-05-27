generarNum();
function generarNum(){
    const num1 = aleatorio(600,1000);
    const num2 = aleatorio(1,500);

    operacion = Number(num1-num2);

    console.log(operacion)

    document.getElementById('N1').innerHTML = num1;
    document.getElementById('N2').innerHTML = num2;
}

function aleatorio(inferior, superior) {
    var numPosibilidades = superior - inferior;
    var aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}

function comprobar(){
    const valor = document.getElementById('resul_usuario').value;
    if(valor==this.operacion){
        document.getElementById('ok').style.display = 'block'
        document.getElementById('error').style.display = 'none'
    }else{
        document.getElementById('ok').style.display = 'none'
        document.getElementById('error').style.display = 'block'
        document.getElementById('true_valor').innerHTML = this.operacion;
    }
}

function refresh(){
    window.location.reload();
}
