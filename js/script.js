function luasSegitiga() {
  let alas = document.getElementById("alas").value;
  let tinggi = document.getElementById("tinggi").value;
  if (alas == "" || tinggi == "") {
    alert("Mohon isi alas dan tinggi");
  } else {
    let luas = (alas * tinggi) / 2;
    document.getElementById("rumusLuas").innerHTML = "L = (Alas * Tinggi) / 2";
    document.getElementById("nilaiLuas").innerHTML = `L = (${alas} * ${tinggi}) / 2`;
    document.getElementById("luasJawaban").innerHTML = luas;
  }
}

function kelilingSegitiga() {
  let sisiA = Number(document.getElementById("sisi-a").value);
  let sisiB = Number(document.getElementById("sisi-b").value);
  let sisiC = Number(document.getElementById("sisi-c").value);
  if (sisiA == "" || sisiB == "" || sisiC == "") {
    alert("Mohon isi sisinya");
  } else {
    let keliling = sisiA + sisiB + sisiC;
    document.getElementById("rumusKeliling").innerHTML = "K = S1 + S2 + S3";
    document.getElementById("nilaiKeliling").innerHTML = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
    document.getElementById("kelilingJawaban").innerHTML = keliling;
  }
}

function resetLuas() {
  document.getElementById("luasSegitiga").reset();
  document.getElementById("luasJawaban").innerHTML = "";
}

function resetKeliling() {
  document.getElementById("kelilingSegitiga").reset();
  document.getElementById("kelilingJawaban").innerHTML = "";
}
