let neg = document.getElementById("negara");
let ucap = document.getElementById("ucapan");
let time = new Date();
let jam = time.getHours();
let menit = time.getMinutes();
let puk = document.getElementById("pukul");
function pilih() {
  if (neg.value == "Malaysia") {
    if (0 < jam <= 12) {
      ucap.innerHTML = "Selamat Pagi";
    }
    if (12 < jam <= 15) {
      ucap.innerHTML = "Selamat Siang";
    }
    if (15 < jam <= 24) {
      ucap.innerHTML = "Selamat Malam";
    } else {
      ucap.innerHTML = "jam salah";
    }
  } else if (neg.value == "Indonesia") {
    if (0 < jam <= 12) {
      ucap.innerHTML = "Selamat Pagi";
    }
    if (12 < jam <= 15) {
      ucap.innerHTML = "Selamat Siang";
    }
    if (15 < jam <= 24) {
      ucap.innerHTML = "Selamat Malam";
    } else {
      ucap.innerHTML = "jam salah";
    }
  } else {
    if (0 < jam <= 12) {
      ucap.innerHTML = "Good Morning";
    }
    if (12 < jam <= 15) {
      ucap.innerHTML = "Good Afternoon";
    }
    if (15 < jam <= 24) {
      ucap.innerHTML = "Good Evening";
    } else {
      ucap.innerHTML = "jam salah";
    }
  }
  puk.innerHTML = "Sekarang Pukul " + jam + ":" + time.getMinutes();
}
