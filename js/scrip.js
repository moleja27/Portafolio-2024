import localStorage from 'localStorage';
let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
//window.onscroll = function () {
// efectoHabilidades();
//}

//funcionalidad del formulario

// Select the form element
const formulario1 = document.querySelector("#formulario1");

// Add an event listener for form submission
formulario1.addEventListener("submit", evento => {
    // Prevent the default form submission behavior
    evento.preventDefault();

    // Create a FormData object to capture the form data
    const formData = new FormData(formulario1);

    // Convert the FormData to a plain object (optional)
    const datosFormulario = {};
    formData.forEach((value, key) => {
        datosFormulario[key] = value;
    });

    // Now you can do something with the form data
    console.log(datosFormulario);

    // For example, store it in localStorage
    localStorage.setItem("formData", JSON.stringify(datosFormulario));

    // Or do something else with the form data (e.g., send it to a server)
});




