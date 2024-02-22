data = [1, 4, 6, 7, 90, 44, 54, 78, 12, 10]

totalGanjil = 0
totalGenap = 0

for(d of data){
    d % 2 == 0 ? totalGanjil = totalGanjil + d : totalGenap = totalGenap + d
}

console.log("Total Bill Ganjil :" + totalGanjil)
console.log("Total Bill Genap :" + totalGenap)