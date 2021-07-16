function typeWrite(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = " ";
  textoArray.forEach(function (letra, i) {
    setTimeout(function () {
      elemento.innerHTML += letra;
    }, 100 * i);
  });
}
const titulo = document.querySelector(".titulo-principal");
typeWrite(titulo);

const forms = document.querySelectorAll('form');

forms.forEach( (form, element) => {
    const emails = document.querySelectorAll('input');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (emails[element].value != ''){
            localStorage.setItem("email", emails[element].value)
            console.log(localStorage.getItem("email"));
            alert("E-mail cadastrado com sucesso!");
        } else{
            alert("Insira um e-mail válido.");
        }  
    });
});