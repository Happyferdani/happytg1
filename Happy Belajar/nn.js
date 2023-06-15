let ubaha = document.getElementById("navigasi").addEventListener("mousemove", ubah);
let uba = document.getElementById("navigasi").addEventListener("mouseleave", ube);

function ubah() {
  let gw = (document.getElementById("home").style.backgroundColor = "green");
  let tw = (document.getElementById("profil").style.backgroundColor = "green");
  let rw = (document.getElementById("galery").style.backgroundColor = "green");
  let sw = (document.getElementById("link").style.backgroundColor = "green");
}
function ube() {
  let gw = (document.getElementById("home").style.backgroundColor = "yellow");
  let tw = (document.getElementById("profil").style.backgroundColor = "yellow");
  let rw = (document.getElementById("galery").style.backgroundColor = "yellow");
  let sw = (document.getElementById("link").style.backgroundColor = "yellow");
}
