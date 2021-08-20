const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const alerta = document.querySelector('.alerta');

const regex = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{8,}$/,
    //Al menos un dígito, (?=.*?[0-9])
    //Al menos una letra minúscula en inglés, (?=.*?[a-z])
    //Al menos una letra mayúscula en inglés ,(?=.*?[A-Z])
    //Al menos un personaje especial, (?=.*?[#?!@$%^&*-])
    //Mínimo ocho de longitud .{8,}(con los anclajes)
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^[5-9]\d{3}-?\d{4}$/, 
	cedula: /^[1-9]-\d{4}-\d{4}$/,
	numeros: /^[1-9]{1,5}$/ //Numeros del 1 al 9, de 1 a 5 digitos.
}

const validaciones = {
	inputNombre: false,
	inputApellidos: false,
	inputEmail: false,
	inputPassword: false,
	inputPassword2: false

}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "inputNombre":
            validarCampo(regex.nombre, e.target);
            break;
        case "inputApellidos":
            validarCampo(regex.nombre, e.target);
            break;
        case "inputTel":
            validarCampo(regex.telefono, e.target);
            break;
        case "inputEmail":
            validarCampo(regex.correo, e.target);
            break;
        case "inputPassword":
            validarCampo(regex.password, e.target);
            break;
        case "inputPassword2":
            if(
                document.getElementById('inputPassword').value
                ==
                document.getElementById('inputPassword2').value
            ){
                document.getElementById(e.target.name).classList.add('is-valid');
                document.getElementById(e.target.name).classList.remove('is-invalid');
				validaciones[e.target.name] = true;
            } else {
                document.getElementById(e.target.name).classList.add('is-invalid');
                document.getElementById(e.target.name).classList.remove('is-valid');
                validaciones[e.target.name] = false;
            }
            break;
        

    }
}

const validarCampo = (exp, input) => {
    if (exp.test(input.value)) {
		console.log("Valido")
        document.getElementById(input.name).classList.add('is-valid');
        document.getElementById(input.name).classList.remove('is-invalid');
        validaciones[input.name] = true;
    } else {
		console.log("invalido")
        document.getElementById(input.name).classList.add('is-invalid');
        document.getElementById(input.name).classList.remove('is-valid');
        validaciones[input.name] = false;
    }
};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	
    if(validaciones.inputApellidos === false || validaciones.inputEmail === false || 
        validaciones.inputNombre === false || validaciones.inputPassword === false || 
        validaciones.inputPassword2 === false) {
            alert("Faltan datos!")
    }else{
        alert("Registro exitoso!")
    }

});

