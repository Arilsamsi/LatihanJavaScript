// array single dimensi
let data = [1, 2, 10, 9, 40];

console.log(data);

// array multi dimensi
let multi = [
    [1, 3, 5],
    [2, 4, 6],
    [7, 8, 9]
];

console.log(multi);

// Untuk Mengakses angka 6
console.log(multi[1][2]);

// Untuk Mengakses angka 3
console.log(multi[0][1]);

// Untuk Mengakses angka 8
console.log(multi[2][1]);

let new_arr = [
    ['Aril', 17],
    ['Mule', 25],
    ['Kai', 79],
    ['Artan', 69]
];
new_arr.push(['Uta', 38]);
new_arr.pop();
new_arr[2] = ['Dikdik', 56];
delete new_arr[1];
new_arr[1] = ['Toyik', 82];

console.log(new_arr);