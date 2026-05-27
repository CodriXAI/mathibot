/*Default*/
let cant_actual = 2;
document.getElementById('actual').innerHTML = cant_actual
function cantidad(){
    cant = document.getElementById('cant_num').value
    if(cant===cant_actual){
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
function mostrarTriangulo(){
    document.getElementById('ok_cant').style.display = 'none';
    document.getElementById('error_cant').style.display = 'none';
    document.getElementById('equal_cant').style.display = 'none';
    let op=document.getElementById('op').value;
    console.log('Valor del select: '+op);
    if(op==='Equi'){
        document.getElementById('equilatero').style.display = 'block';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'none';
    }else if(op==='Esca'){
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'block';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'none';
    }else if(op==='Iso'){
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'block';
        document.getElementById('rectangulo').style.display = 'none';
    }else{
        document.getElementById('equilatero').style.display = 'none';
        document.getElementById('escaleno').style.display = 'none';
        document.getElementById('isoseles').style.display = 'none';
        document.getElementById('rectangulo').style.display = 'block';
    }
}

function calculosEqui(){
    let lado = Number(document.getElementById('input_Lado_Equi').value)
    let alt = Number(Math.sqrt((lado/2)**2+(lado**2)));
    
    if(lado<=0){
        document.getElementById('show_equi').style.display='none'
        document.getElementById('error_equi').style.display='block'
    }else{
        document.getElementById('show_equi').style.display='block'
        document.getElementById('error_equi').style.display='none'

        let per = lado*3
        let area = ((lado*alt)/2)

        if(Number.isInteger(per)){
            document.getElementById('perimetro_Equi').innerHTML = (lado*3);
        }else{
            document.getElementById('perimetro_Equi').innerHTML = (lado*3).toFixed(cant_actual);
        }
        
        if(Number.isInteger(area)){
            document.getElementById('area_Equi').innerHTML = ((lado*alt)/2);
        }else{
            document.getElementById('area_Equi').innerHTML = ((lado*alt)/2).toFixed(cant_actual);
        }
        
        if(Number.isInteger(alt)){
            document.getElementById('altura_Equi').innerHTML = alt;
        }else{
            document.getElementById('altura_Equi').innerHTML = alt.toFixed(cant_actual);
        }
        
        
    }
    
}

function calculosEsca(){
    let base = Number(document.getElementById('input_Base_Esca').value)
    let ladoA = Number(document.getElementById('input_LadoA_Esca').value)
    let ladoB = Number(document.getElementById('input_LadoB_Esca').value)
    let S = (base+ladoA+ladoB)/2
    let alt = Number(Math.sqrt(S*(S-base)*(S-ladoA)*(S-ladoB))*(2/base));
    let per = ladoA+ladoB+base;
    let area = ((base*alt) / 2)
    
    if(ladoA===ladoB || ladoA===base || ladoB===base || ladoA<=0 || ladoB<=0 || base<=0 || alt<=0){
        document.getElementById('show_esca').style.display = 'none'
        document.getElementById('error_esca').style.display = 'block'
    }else{
        document.getElementById('show_esca').style.display = 'block'
        document.getElementById('error_esca').style.display = 'none'

        if(Number.isInteger(per)){
            document.getElementById('per_Esca').innerHTML = (ladoA + ladoB + base)
        }else{
            document.getElementById('per_Esca').innerHTML = (ladoA + ladoB + base).toFixed(cant_actual)
        }

        if(Number.isInteger(alt)){
            document.getElementById('altura_Esca').innerHTML = alt;
        }else{
            document.getElementById('altura_Esca').innerHTML = alt.toFixed(cant_actual);
        }
        
        if(Number.isInteger(area)){
            document.getElementById('area_Esca').innerHTML = (base*alt) / 2;
        }else{
            document.getElementById('area_Esca').innerHTML = ((base*alt) / 2).toFixed(cant_actual);
        }
    }
}

function calculosIso(){
    let lado = Number(document.getElementById('input_Lado_Iso').value)
    let base = Number(document.getElementById('input_Base_Iso').value)
    let alt = Number(Math.sqrt((base/2)**2+(lado**2)));
    let per = Number(((lado*2) + base));
    let area = Number(((base*alt) / 2));

    if(lado<=0 || base<=0 || lado==base){
        document.getElementById('show_iso').style.display='none'
        document.getElementById('error_iso').style.display='block'
    }else{
        document.getElementById('show_iso').style.display='block'
        document.getElementById('error_iso').style.display='none'

        if(Number.isInteger(alt)){
            document.getElementById('altura_Iso').innerHTML = alt;
        }else{
            document.getElementById('altura_Iso').innerHTML = alt.toFixed(cant_actual);
        }

        if(Number.isInteger(per)){
            document.getElementById('per_Iso').innerHTML = ((lado*2) + base)
        }else{
            document.getElementById('per_Iso').innerHTML = ((lado*2) + base).toFixed(cant_actual)
        }

        if(Number.isInteger(area)){
            document.getElementById('area_Iso').innerHTML = ((base*alt) / 2); 
        }else{
            document.getElementById('area_Iso').innerHTML = ((base*alt) / 2).toFixed(cant_actual);
        }
    }
}

function calculosRect(){
    let catetoAd = Number(document.getElementById('input_catA_Rect').value)
    let catetoOp = Number(document.getElementById('input_catB_Rect').value)
    let hipo = Number(document.getElementById('input_hipo_Rect').value)
    let alt = Number(((catetoAd*catetoOp)/hipo))
    let per = Number((catetoAd + catetoOp + hipo))
    let area = Number(((catetoAd*catetoOp)/2))
    
    if(catetoAd<=0 || catetoOp<=0 || hipo<=0){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'
    }else if(catetoAd>hipo || catetoOp>hipo){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'

    }else if(catetoAd==catetoOp && catetoAd==hipo){
        document.getElementById('show_rect').style.display = 'none'
        document.getElementById('error_rect').style.display = 'block'
    }
    else{
        document.getElementById('show_rect').style.display = 'block'
        document.getElementById('error_rect').style.display = 'none'

        if(Number.isInteger(alt)){
            document.getElementById('altura_rect').innerHTML = ((catetoAd*catetoOp)/hipo);
        }else{
            document.getElementById('altura_rect').innerHTML = ((catetoAd*catetoOp)/hipo).toFixed(cant_actual);
        }

        if(Number.isInteger(per)){
            document.getElementById('per_rect').innerHTML = (catetoAd + catetoOp + hipo);
        }else{
            document.getElementById('per_rect').innerHTML = (catetoAd + catetoOp + hipo).toFixed(cant_actual);
        }

        if(Number.isInteger(area)){
            document.getElementById('area_rect').innerHTML = ((catetoAd*catetoOp)/2);
        }else{
            document.getElementById('area_rect').innerHTML = ((catetoAd*catetoOp)/2).toFixed(cant_actual);
        }
    }
}

