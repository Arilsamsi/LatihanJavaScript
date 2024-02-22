konfir = true
arr = []
while(konfir == true){
    data = prompt("Input Data Anda: ");
    arr.push(data);
    konfir = confirm('Anda Ingin Mengisi Lagi');
}

console.log(arr)