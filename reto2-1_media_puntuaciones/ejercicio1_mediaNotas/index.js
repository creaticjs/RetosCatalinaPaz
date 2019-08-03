function media(){
    var nota1 = parseInt(document.getElementById("nota1").value);
    var nota2 = parseInt(document.getElementById("nota2").value);
    var nota3 = parseInt(document.getElementById("nota3").value);
    var nota4 = parseInt(document.getElementById("nota4").value);
   
    console.log("Entra");
    
    var resultado=(nota1 + nota2 + nota3 + nota4)/4;

    document.getElementById("resultado").innerHTML=resultado;
    
        var letra_puntuacion=0;
        
        if (resultado>=90 && resultado <=100) {
            letra_puntuacion = "A";
        } else if (resultado>=80 && resultado<=89) {
            letra_puntuacion = "B";
        } else if (resultado >=70 && resultado<=79) {
            letra_puntuacion = "C";
        } else if (resultado >=60 && resultado<=69) {
            letra_puntuacion = "D";
        } else if (resultado >=0 && resultado<=59) {
            letra_puntuacion = "E";
        } 
    
    document.getElementById("letra_puntuacion").innerHTML=letra_puntuacion;
        

}