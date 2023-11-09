
function insertionsort(array){
    for (i=0; i<array.length; i++){
        let escolhido = array[i]
        let j = i-1;

        while(j>=0 && array[j]>escolhido){
            array[j+1] = array [j];
            j = j -1 ;
        }
        array[j+1]= escolhido;
    }
}

let vetor = [3, 36, 94, 13, -54, 40, 150]
    insertionsort(vetor)
    console.log(vetor)