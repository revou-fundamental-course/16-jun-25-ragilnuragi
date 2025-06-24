function luasSegitiga() {
  const alas = document.getElementById("alas").value;
  const tinggi = document.getElementById("tinggi").value;

  if (alas === "" || tinggi === "") {
    alert("Mohon isi alas dan tinggi");
  } else {
    const luas = (alas * tinggi) / 2;
    document.getElementById("rumusLuas").innerHTML = "L = (Alas * Tinggi) / 2";
    document.getElementById("nilaiLuas").innerHTML = `L = (${alas} * ${tinggi}) / 2`;
    document.getElementById("luasJawaban").innerHTML = luas;
  }
}

function kelilingSegitiga() {
  const sisiA = Number(document.getElementById("sisi-a").value);
  const sisiB = Number(document.getElementById("sisi-b").value);
  const sisiC = Number(document.getElementById("sisi-c").value);

  if (sisiA == "" || sisiB == "" || sisiC == "") {
    alert("Mohon isi sisinya");
  } else {
    const keliling = sisiA + sisiB + sisiC;
    document.getElementById("rumusKeliling").innerHTML = "K = S1 + S2 + S3";
    document.getElementById("nilaiKeliling").innerHTML = `K = ${sisiA} + ${sisiB} + ${sisiC}`;
    document.getElementById("kelilingJawaban").innerHTML = keliling;
  }
}

function luasJajargenjang() {
  const alas = document.getElementById("alasJajargenjang").value;
  const tinggi = document.getElementById("tinggiJajargenjang").value;

  if (alas === "" || tinggi === "") {
    alert("Mohon isi alas dan tinggi");
  } else {
    const luas = alas * tinggi;
    document.getElementById("rumusLuasJajargenjang").innerHTML = "L = Alas * Tinggi";
    document.getElementById("nilaiLuasJajargenjang").innerHTML = `L = (${alas} * ${tinggi})`;
    document.getElementById("luasJawabanJajargenjang").innerHTML = luas;
  }
}

function kelilingJajargenjang() {
  const alas = document.getElementById("panjang-alas").value;
  const miring = document.getElementById("panjang-miring").value;

  if (alas === "" || miring === "") {
    alert("Mohon isi panjang alas dan miring");
  } else {
    const keliling = 2 * alas + 2 * miring;
    document.getElementById("rumusKelilingJajargenjang").innerHTML = "K = 2 * Alas + 2 * Miring";
    document.getElementById("nilaiKelilingJajargenjang").innerHTML = `K = (2 * ${alas}) + (2 * ${miring})`;
    document.getElementById("kelilingJawabanJajargenjang").innerHTML = keliling;
  }
}

function resetForm(formId) {
  document.getElementById(formId).reset();

  if (formId === "luasSegitiga") {
    document.getElementById("luasJawaban").innerHTML = "";
    document.getElementById("nilaiLuas").innerHTML = "";
    document.getElementById("rumusLuas").innerHTML = "";
  } else if (formId === "kelilingSegitiga") {
    document.getElementById("kelilingJawaban").innerHTML = "";
    document.getElementById("nilaiKeliling").innerHTML = "";
    document.getElementById("rumusKeliling").innerHTML = "";
  } else if (formId === "luasJajargenjang") {
    document.getElementById("luasJawabanJajargenjang").innerHTML = "";
    document.getElementById("nilaiLuasJajargenjang").innerHTML = "";
    document.getElementById("rumusLuasJajargenjang").innerHTML = "";
  } else if (formId === "kelilingJajargenjang") {
    document.getElementById("kelilingJawabanJajargenjang").innerHTML = "";
    document.getElementById("nilaiKelilingJajargenjang").innerHTML = "";
    document.getElementById("rumusKelilingJajargenjang").innerHTML = "";
  }
}
