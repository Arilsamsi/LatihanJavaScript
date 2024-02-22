function namaSiswa(namaDepan, namaBelakang){
    return namaDepan + namaBelakang
}

function alamat(){
    return "Limboto"
}

console.log(namaSiswa("Aril", "Samsi"));
console.log(alamat());

function tambah(x, y){
    return x + y
}

nilaix = Number(prompt("Input X"));
nilaiy = Number(prompt("Input Y"));

console.log(tambah(nilaix, nilaiy));

function luasSegitiga(alas, tinggi){
    return 1/2 * alas * tinggi
}

NilaiAlas = Number(prompt("Masukan Nilai Alas"));
NilaiTinggi = Number(prompt("Masukan Nilai Tinggi"));

console.log(luasSegitiga(NilaiAlas, NilaiTinggi));
window.alert(luasSegitiga(NilaiAlas, NilaiTinggi));

function cek(nilai){
    return nilai % 2 == 0 ? "Genap" : "Ganjil"
}

nilai = Number(prompt("Masukan Nilai Anda"))

window.alert(cek(nilai));