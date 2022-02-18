function maiorIdade(){

    let idade = document.getElementById("age").value;        

    if(idade < 18){
        alert("A sua idade é " +idade+ " e você NÃO está apto à comprar bebida alcoólica!")
    } else{
        alert("A sua idade é " +idade+ " e você está apto à comprar bebida alcoólica!")
    }

}

maiorIdade();