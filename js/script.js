// Buat perhitungan luas segitiga
function luasSegitiga() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const errorLuas = document.getElementById("errorLuas");

  // buat validasi apakah nilai kosong atau tidak
  if (alas === "" || tinggi === "") {
    // jika iya maka ada pesan error
    errorLuas.innerText = "Mohon isi semua nilai alas dan tinggi!";
  } else {
    // jika tidak maka akan menghitung luas
    const luas = (alas * tinggi) / 2;
    document.getElementById("rumusLuas").innerHTML = "L = (Alas * Tinggi) / 2";
    document.getElementById("nilaiLuas").innerHTML = `L = (${alas} * ${tinggi}) / 2`;
    document.getElementById("luasJawaban").innerHTML = luas;
    errorLuas.innerText = "";
  }
}

// Buat perhitungan keliling segitiga
function kelilingSegitiga() {
  const sisiA = Number(document.getElementById("sisi-a").value);
  const sisiB = Number(document.getElementById("sisi-b").value);
  const sisiC = Number(document.getElementById("sisi-c").value);
  const errorKeliling = document.getElementById("errorKeliling");

  // buat validasi apakah nilai kosong atau tidak
  if (sisiA == "" || sisiB == "" || sisiC == "") {
    // jika iya maka ada pesan error
    errorKeliling.innerText = "Mohon isi semua sisi segitiga!";
  } else {
    // jika tidak maka akan menghitung keliling
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById("rumusKeliling").innerHTML = "K = S1 + S2 + S3";
    document.getElementById("nilaiKeliling").innerHTML = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
    document.getElementById("kelilingJawaban").innerHTML = keliling;
    errorKeliling.innerText = "";
  }
}

// reset nilai pada luas dan keliling
function resetForm(formId) {
  document.getElementById(formId).reset();

  if (formId === "luas-segitiga") {
    // validasi jika ingin reset luas segitiga
    document.getElementById("luasJawaban").innerHTML = "";
    document.getElementById("nilaiLuas").innerHTML = "";
    document.getElementById("rumusLuas").innerHTML = "";
    document.getElementById("errorLuas").innerText = "";
  } else if (formId === "keliling-segitiga") {
    // validasi jika ingin reset keliling segitiga
    document.getElementById("kelilingJawaban").innerHTML = "";
    document.getElementById("nilaiKeliling").innerHTML = "";
    document.getElementById("rumusKeliling").innerHTML = "";
    document.getElementById("errorKeliling").innerText = "";
  }
}
