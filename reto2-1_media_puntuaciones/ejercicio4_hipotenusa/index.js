function hipotenusa(){
    var catetoa = parseInt(document.getElementById("catetoa").value);
    var catetob = parseInt(document.getElementById("catetob").value);
    

    var hipotenusa=Math.sqrt((Math.pow(catetoa,2))+(Math.pow(catetob,2)));

    document.getElementById("hipotenusa").innerHTML=hipotenusa;       

}