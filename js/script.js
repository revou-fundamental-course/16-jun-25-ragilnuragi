function luasSegitiga() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;
  const errorLuas = document.getElementById("errorLuas");

  if (alas === "" || tinggi === "") {
    errorLuas.innerText = "Mohon isi semua nilai alas dan tinggi!";
  } else {
    const luas = (alas * tinggi) / 2;
    document.getElementById("rumusLuas").innerHTML = "L = (Alas * Tinggi) / 2";
    document.getElementById("nilaiLuas").innerHTML = `L = (${alas} * ${tinggi}) / 2`;
    document.getElementById("luasJawaban").innerHTML = luas;
    errorLuas.innerText = "";
  }
}

function kelilingSegitiga() {
  const sisiA = Number(document.getElementById("sisi-a").value);
  const sisiB = Number(document.getElementById("sisi-b").value);
  const sisiC = Number(document.getElementById("sisi-c").value);
  const errorKeliling = document.getElementById("errorKeliling");

  if (sisiA == "" || sisiB == "" || sisiC == "") {
    errorKeliling.innerText = "Mohon isi semua sisi segitiga!";
  } else {
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById("rumusKeliling").innerHTML = "K = S1 + S2 + S3";
    document.getElementById("nilaiKeliling").innerHTML = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
    document.getElementById("kelilingJawaban").innerHTML = keliling;
    errorKeliling.innerText = "";
  }
}

function resetForm(formId) {
  document.getElementById(formId).reset();

  if (formId === "luasSegitiga") {
    document.getElementById("luasJawaban").innerHTML = "";
    document.getElementById("nilaiLuas").innerHTML = "";
    document.getElementById("rumusLuas").innerHTML = "";
    document.getElementById("errorLuas").innerText = "";
  } else if (formId === "kelilingSegitiga") {
    document.getElementById("kelilingJawaban").innerHTML = "";
    document.getElementById("nilaiKeliling").innerHTML = "";
    document.getElementById("rumusKeliling").innerHTML = "";
    document.getElementById("errorKeliling").innerText = "";
  }
}
