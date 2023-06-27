let bilangan1 = document.getElementById("bilangan1");
let hail = document.getElementById("hasil");
function hs() {
  if (bilangan1.value % 400 == 0) {
    hail.innerHTML = "Tahun " + bilangan1.value + " adalah tahun kabisat";
  }
  if (bilangan1.value % 100 == 0) {
    hail.innerHTML = "Tahun " + bilangan1.value + " bukan tahun kabisat";
  }
  if (bilangan1.value % 4 == 0) {
    hail.innerHTML = "Tahun " + bilangan1.value + " adalah tahun kabisat";
  } else {
    hail.innerHTML = "Tahun " + bilangan1.value + " bukan tahun kabisat";
  }
}
