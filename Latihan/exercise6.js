function persegi(sisi){
    luas = sisi * sisi
    keliling = 4 * sisi
    return `Luas Persegi = ${luas} dan keliling persegi = ${keliling}`
}
function lingkaran(p){
    luas = 22/7 * r * r
    keliling = 2 * 22/7 * r
    return `Luas Lingkaran = ${luas} dan keliling lingkaran = ${keliling}`
}
function segiTiga(a, t){
    luas = 1/2 * a * t 
    keliling = Math.sqrt(Math.pow(1/2*a),2) + Math.pow(t, 2) *2 + a
    return `Luas Segitiga =  ${luas} dan keliling segitiga = ${keliling}`
}

console.log(persegi(7))
console.log(segiTiga(8,3))