function fecha_numeros(){
    var fecha_extensa = document.getElementById("fecha_extensa").value; //string
    var x=fecha_extensa.split(" "); //split divide una cadena en un array
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
    
    document.getElementById("resultado").innerHTML=`La fecha es: ${dia} ${mes_num} ${anio}`;       
    }
}