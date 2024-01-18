let hewan = {
    nama: 'kucing',
    suara: function(){
        return 'Meong'
    }
}

console.log(hewan.nama);
console.log(hewan.suara());

let kalkulator = {
    tambah: function(x,y){
        return x + y;
    },
    pangkat: function(x,y){
        return x ** y;
    }
}

console.log(kalkulator.tambah(7,1))