function maiorNumero(){
    var a = document.getElementById("numero1").value;
    var b = document.getElementById("numero2").value;
    var c = document.getElementById("numero3").value;
    var d = document.getElementById("numero4").value;
    var e = document.getElementById("numero5").value;

    
    if(a > b){
        document.write(+a+ " é o maior número")
    } else if(b > c){
        document.write(+b+ " é o maior número")
    } else if(c > d){
        document.write(+c+ " é o maior número")
    } else if(d > e){
        document.write(+d+ " é o maior número")
    } else {
        document.write(+e+ " é o maior número")
    } 

}

maiorNumero();