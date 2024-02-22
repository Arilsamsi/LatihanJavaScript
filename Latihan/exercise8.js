function simpan(nomSimpan){
    saldo = 0;
    saldo = saldo + nomSimpan
    return saldo
}
function tarik(nomTarik){
    return nomTarik
}
function cekSaldo(){

}

nomSimpan = Number(prompt("Masukan Nominal Simpan : Rp. " ))
nomTarik = Number(prompt("Masukan Nominal Tarik : Rp. " ))

console.log(`Simpan : ${simpan(nomSimpan)}`);
console.log(`Tarik : ${tarik(nomTarik)}`);
console.log(`Saldo : ${simpan(nomSimpan) - tarik(nomTarik)}`);