function area(){
    var lado_a = parseInt(document.getElementById("lado_a").value);
    var lado_b= parseInt(document.getElementById("lado_b").value);
    var lado_c = parseInt(document.getElementById("lado_c").value);

    var p=(lado_a+lado_b+lado_c)/2;
    var area=Math.sqrt(p*(p-lado_a)*(p-lado_b)*(p-lado_c));

    document.getElementById("area").innerHTML=area;       

}