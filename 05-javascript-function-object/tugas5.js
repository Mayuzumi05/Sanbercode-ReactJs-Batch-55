//soal nomor 1
function cetakFunction(nama) {
    return "Hallo nama saya " + nama
}

console.log(cetakFunction("Himawan Alan Novianto"))

//soal nomor 2
function myFunction(angka1, angka2) {
    return angka1 + angka2
}

let angka1 = 20
let angka2 = 7
let output = myFunction(angka1, angka2)

console.log(output)

//soal nomor 3
const Hello = () => {

    return "Hello"

}

Hello()

//soal nomor 4
let obj = {
    nama : "john",   
    umur : 22,
    bahasa : "indonesia"
}

console.log(obj.bahasa)

//soal nomor 5
let arrayDaftarPeserta = ["John Doe", "laki-laki", "baca buku" , 1992]

let objDaftarPeserta = {
    nama : arrayDaftarPeserta[0],
    "jenis kelamin" : arrayDaftarPeserta[1],
    hobi : arrayDaftarPeserta[2],
    "tahun lahir" : arrayDaftarPeserta[3]
}

console.log(objDaftarPeserta)

//soal nomor 6
var buah = [
    {nama: "Nanas", warna: "Kuning", adaBijinya: false, harga: 9000},
    {nama: "Jeruk", warna: "Oranye", adaBijinya: true, harga: 8000},
    {nama: "Semangka", warna: "Hijau & Merah", adaBijinya: true, harga: 10000},
    {nama: "Pisang", warna: "Kuning", adaBijinya: false, harga: 5000}
]

var filter = buah.filter(function(item){
    return item.adaBijinya == false
})

console.log(filter)

//soal nomor 7
let phone = {
    name: "Galaxy Fold 5",
    brand: "Samsung",
    year: 2023
}

const {name, brand, year} = phone

console.log(name, brand, year)

//soal nomor 8
let dataBukuTambahan= {
    penulis: "john doe",
    tahunTerbit: 2020
}
  
let buku = {
    nama: "pemograman dasar",
    jumlahHalaman: 172
}

let objOutput = {...dataBukuTambahan, ...buku}

console.log(objOutput)

