

function calcular(){
    var radio =document.getElementById("radio").value;
    var perimetro = 2* Math.PI * radio;
    var area = Math.PI * (Math.pow(radio, 2));
    var diametro = 2* radio;
    
    document.getElementById("resultadoPerimetro").innerHTML=`El perimetro es: ${perimetro}`;
    document.getElementById("resultadoArea").innerHTML=`El área es: ${area}`;
    document.getElementById("resultadoDiametro").innerHTML= `El Diámetro es: ${diametro}`;      
}