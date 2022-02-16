function media() {
    alert("***** Seja bem vindo(a) ao cálculo de médias *****")

    var nota1 = prompt("Digite a primeira nota: ");
    var nota2 = prompt("Digite a segunda nota: ");
    var nota3 = prompt("Digite a terceira nota: ");
    var nota4 = prompt("Digite a quarta nota: ");
    var nota5 = prompt("Digite a quinta nota: ");

    let soma = parseInt(nota1) + parseInt(nota2)
        + parseInt(nota3) + parseInt(nota4) + parseInt(nota5);

    let media = soma / 5;

    if (media < 5) {
        alert("A média do aluno foi " + media + " e o mesmo está reprovado");
    } else if (media == 5 || media <= 7) {
        alert("A média do aluno foi " + media + " e o mesmo está de recuperação");
    } else{
        alert("A média do aluno foi " + media + " e o mesmo está aprovado");
    }
}

media();