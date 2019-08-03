function Energia(){
    var masa = parseInt(document.getElementById("masa").value);
    
   var c=2.997925*(Math.pow(10,10));
    var energia=(c*(Math.pow(masa,2)));

    document.getElementById("energia").innerHTML=energia;       

}