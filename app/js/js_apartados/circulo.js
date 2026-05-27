let cant_actual = 2;
document.getElementById('actual').innerHTML = cant_actual
function cantidad(){
    cant = document.getElementById('cant_num').value
    if(cant==cant_actual){
        document.getElementById('ok_cant').style.display = 'none';
        document.getElementById('error_cant').style.display = 'none';
        document.getElementById('equal_cant').style.display = 'block';
        cant = cant_actual;
        console.log(cant)
    }else if(cant<=0 || cant>10){
        console.log('ERROR')
        document.getElementById('ok_cant').style.display = 'none';
        document.getElementById('error_cant').style.display = 'block';
        document.getElementById('equal_cant').style.display = 'none';
        cant = cant_actual;
        console.log(cant)
    }else{
        document.getElementById('error_cant').style.display = 'none';
        document.getElementById('ok_cant').style.display = 'block';
        document.getElementById('equal_cant').style.display = 'none';
        cant_actual = document.getElementById('cant_num').value
        document.getElementById('actual').innerHTML = cant_actual
    }
}

function general(){
    let radio=document.getElementById("radio").value
    if(radio<=0){
        document.getElementById('result').style.display = 'none';
        document.getElementById('error').style.display = 'block';
    }else{
        document.getElementById('result').style.display = 'flex';
        document.getElementById('error').style.display = 'none';

        const diametro=radio*2;
        const perimetro=(diametro*Math.PI).toFixed(cant_actual);
        const area=((radio*radio)*Math.PI).toFixed(cant_actual);

        if(Number.isInteger(diametro)){
            document.getElementById('Diametro').innerHTML = diametro;
        }else{
            document.getElementById('Diametro').innerHTML = diametro.toFixed(cant_actual);
        }

        document.getElementById('Perimetro').innerHTML = perimetro;
        document.getElementById('Area').innerHTML = area;
    }
}
