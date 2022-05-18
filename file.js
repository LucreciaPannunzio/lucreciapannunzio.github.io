const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.querySelector('#email');
    
    const validacion = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;

    if (!email.value.match(validacion)) {
        const span = document.querySelector('#error-mail');
        span.textContent = "El mail ingresado no es válido";
    } else {
        form.submit();
    }
})


const sendForm = () => {
    alert("Formulario enviado!");
}


//Excursión 7 lagos
