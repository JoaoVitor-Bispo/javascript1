vetor = [1,5,2,3,6,11]
/*
for (var i = 0;i != vetor.length; i++) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}
*/
for (var i in vetor) {
    console.log(`A posição ${i} tem o valor ${vetor[i]}`)
}