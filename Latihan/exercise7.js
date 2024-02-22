data = [1, -1, 2, -2, 3, -3, 4, -4]
function positif(data){
    dataPositif = []
    for(data of data){
        if(data > 0 ){
            dataPositif.push(data)
        }
    }
    return dataPositif
}
function negatif(data){
    dataNegatif = []
    for(data of data){
        if(data < 0){
            dataNegatif.push(data)
        }
    }
    return dataNegatif
}

console.log(positif(data))
console.log(negatif(data))