
function ganti() {
  let jenis = document.getElementById("bhs").value;
  let tulisan = document.getElementById("perubahan");
  console.log(jenis);
  switch (jenis) {
    case "tebal":
      tulisan.style.fontWeight = "bold";
      break;
    case "miring":
      tulisan.style.fontStyle = "italic";
      break;
    case "bingkai":
      tulisan.style.border = "3px solid black";
      break;
    case "gaya1":
      tulisan.style.fontFamily = "Arial";
      tulisan.style.fontSize = "32px";
      tulisan.style.backgroundColor = "yellow";
      break;
    case "gaya2":
      tulisan.style.fontFamily = "verdana";
      tulisan.style.fontSize = "32px";
      tulisan.style.backgroundColor = "blue";
      break;
    case "gaya3":
      tulisan.style.fontFamily = "sans-serif";
      tulisan.style.fontSize = "32px";
      tulisan.style.backgroundColor = "aqua";
      break;
  }
  }
