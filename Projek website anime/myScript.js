alert("Selamat Datang")
var nama = prompt("Masukkan nama anda:");
var namalain = confirm("apa benar nama anda " + nama +" ?");
if(namalain === true) {
    alert("Hai " + nama);
}   else{
    var namaganti = prompt("Ganti nama anda:");
    alert("Nama berhasil di ganti");
}  
