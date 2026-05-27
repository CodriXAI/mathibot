/*Default*/
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
    let lado_p=document.getElementById("lado").value
    if(lado_p<=0){
        document.getElementById('results').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        cant=cant_actual;
    }else{
        document.getElementById('results').style.display = 'flex';
        document.getElementById('error').style.display = 'none';
        const per=lado_p*4;
        if(Number.isInteger(per)){
            document.getElementById('Resultado').innerHTML = per
        }else{
            document.getElementById('Resultado').innerHTML = per.toFixed(cant_actual);
        }
        
        let lado_a=document.getElementById("lado").value

        const area=lado_a*lado_a;
        if(Number.isInteger(area)){
            document.getElementById('Resultado2').innerHTML = area   
        }else{
            document.getElementById('Resultado2').innerHTML = area.toFixed(cant_actual);
        }
        
    }
    
}
function seleccion(){
    let eleccion=document.getElementById('op').value
    console.log(eleccion)
    document.getElementById("medida").innerHTML = eleccion;
    document.getElementById("medida2").innerHTML = eleccion;
}




