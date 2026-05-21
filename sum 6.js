function beli(nama){
localStorage.setItem("menu", nama);
window.location="buy.html";
}

function daftar(){
alert("Pembayaran Berhasil, Pesanan Anda Sedang Diproses");
window.location="index.html";
}

function akun(){
alert("Register Akun Berhasil");
window.location="index.html";
}