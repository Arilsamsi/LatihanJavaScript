data = [1, 4, 5, 93, 7, 16, 36, 49]

dataGanjl = []
dataGenap = []

for(d of data){
    if(d % 2 != 0){
        dataGanjl.push(d)
    }else{
        dataGenap.push(d)
    }
    d % 2 == 0 ? dataGenap.push(d) : dataGanjl.push(d)
}

console.log(dataGanjl)
console.log(dataGenap)