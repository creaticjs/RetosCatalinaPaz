function redondear(){
    var dadoA = parseInt(document.getElementById("dadoA").value); 
    var dadoB = parseInt(document.getElementById("dadoB").value); 
    var dadoC = parseInt(document.getElementById("dadoC").value); 
    var dadoD = parseInt(document.getElementById("dadoD").value); 
    
    if(dadoC>=5){
        if(dadoB>=9){
            if(dadoA>=9)
        }


    }
    document.getElementById("N").innerHTML=`El número entero es: ${dadoA}${dadoB}${dadoC}${dadoD}`; 
    
    

/*  //tener el valor y sumarle 1
    var dia=parseInt(x[0]);// coge el día de la posicion 0 del array
    var mes = x[1].toLowerCase(); //mes en texto  //toLowerCase: pasa todo a minuscula
    var anio= parseInt(x[2]);
    var mes_num; //mes en numero
    var numeroPalabras = x.length;

    if(numeroPalabras>3){
        console.log("Por favor ingrese día, mes y año en diferente formato");
        document.getElementById("mensaje").innerHTML=`Por favor ingrese día, mes y año en diferente formato`;
    }else{

    switch(mes){
        case "enero": 
            mes_num= 1;
            break;
        case "febrero":
            mes_num=2;
            break;
        case "marzo":
            mes_num=3;
            break;
        case "abril":
            mes_num=4;
            break;
        case "mayo":
            mes_num=5;
            break;
        case "junio":
            mes_num=6;
            break;
        case "julio":
            mes_num=7;
            break;
        case "agosto":
            mes_num=8;
            break;
        case "septiembre":
            mes_num=9;
            break;
        case "octubre":
            mes_num=10;
            break;
        case "noviembre":
            mes_num=11;
            break;
        case "diciembre":
            mes_num=12;
            break;
    }
    
    document.getElementById("numeroRedondeado").innerHTML=`El número redondeado es: ${dadoA}${dadoB}${dadoC}${dadoD}`;       
    }*/
}