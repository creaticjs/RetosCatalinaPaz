function hora_12(){
    var hora_24 = document.getElementById("hora_24").value; //string
    var x=hora_24.split(":"); //split divide una cadena en un array
    var hora=parseInt(x[0]);// coge solo la hora, la posicion 0 del array
    var minutos = parseInt(x[1]);

    var hora2= ((hora +11)%12 +1);//formula para cambiar la hora en formao de 24 a formato 12
    var am_pm; //si hora >12 =pm

    if(hora>=12){
        am_pm= "pm";
    } else{
        am_pm= "am";
    }
    console.log(hora2+":"+minutos+" "+am_pm); //var hora_12=;
    

    document.getElementById("resultado").innerHTML=`La hora es: ${hora2}:${minutos} ${am_pm}`;       

}