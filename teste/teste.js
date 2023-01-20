const container = document.querySelector(".container");
const male = document.querySelector("#male-gender");
const female = document.querySelector("#female-gender");
const sexo = document.querySelectorAll('.genderradio')
const button = document.querySelector(".button");
const image = document.querySelector("#res");
let result = document.querySelector(".result");
let genero = ''

button.addEventListener("click", (e) => {
  const birthYear = Number(document.querySelector("#birth-year").value)
  const age = 2023 - birthYear
  container.style.height = "400px";
  if (sexo[0].checked) {
      genero = "homem";
      if (birthYear > 1900 && birthYear <= 1960) {
      } else if (birthYear > 1960 && birthYear <= 1990) {
        image.setAttribute("src", "../assets/images/adultomasc.png");
      } else if (birthYear > 1990 && birthYear <= 2010) {
        image.setAttribute("src", "../assets/images/jovemmasc.png");
      } else if (birthYear > 2010 && birthYear <= 2023) {
        image.setAttribute("src", "../assets/images/bebemasc.png");
      } else {
        result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
      }
  } else {
      genero = "mulher";
      if (birthYear > 1900 && birthYear <= 1960) {
        image.setAttribute("src", ".nutriçao.jpg");
      } else if (birthYear > 1960 && birthYear <= 1990) {
        image.setAttribute("src", "../assets/images/adultofem.png");
      } else if (birthYear > 1990 && birthYear <= 2010) {
        image.setAttribute("src", "../assets/images/jovemfem.png");
      } else if (birthYear > 2010 && birthYear <= 2023) {
        image.setAttribute("src", "../assets/images/bebefem.png");
      } else {
        result.innerHTML = "Desculpe, mas não conseguimos calcular sua idade.";
      }
  }
  result.innerHTML = `Detectamos um ${genero} com ${age} anos de idade.`;
  result.appendChild(image);
});
