/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/


// BOTON AGREGAR
function crearInputLabel(){
    const $nodo = document.querySelector(`.salarios`);
    const $label = document.createElement('label');
    const $input = document.createElement('input');
    $label.textContent = "Integrante " + contadorClick;
    $label.id = `label${contadorClick}`;
    $input.id = `input${contadorClick}`;
    $input.className = 'salario';
    $input.type = 'number';
    $nodo.appendChild($label);
    $nodo.appendChild($input);
}

function mostrarBotonCalcular () {
    document.querySelector("#boton-calcular").style.display = "block";
}



// BOTON QUITAR
function eliminarInputLabel(){
    document.querySelector(`#label${contadorClick}`).remove();
    document.querySelector(`#input${contadorClick}`).remove();
}

function eliminarBotonCalcular () {
    document.querySelector("#boton-calcular").style.display = "none";
}



// BOTON CALCULAR
function retornarArraySalario(){
    const $salarios = document.querySelectorAll(`.salario`);
    let arraySalario = [];

    for(let i = 0; i < $salarios.length; i++){
        if(($salarios[i].value) != ""){
            arraySalario.push(Number($salarios[i].value));
        }
    }

    return arraySalario;
}

function retornarMayorSalarioAnual(arraySalario) {
    let mayorSalario = 0;
    for(let i = 0; i < arraySalario.length; i++){
        if(mayorSalario < arraySalario[i]) {
            mayorSalario = arraySalario[i];
        }
    }
    return mayorSalario;
}

function retornarMenorSalarioAnual(arraySalario) {
    let menorSalario = arraySalario[0];
    for(let i = 1; i < arraySalario.length; i++) {
        if(menorSalario > arraySalario[i]) {
            menorSalario = arraySalario[i];
        }
    }
    return menorSalario;
}

function retornarPromedioSalarioAnual(arraySalario) {
    let suma = 0;
    for(let i = 0; i < arraySalario.length; i++) {
        suma += arraySalario[i];
    }
    return suma / arraySalario.length;
}



let contadorClick = 0;

// BOTON AGREGAR
document.querySelector("#boton-agregar").onclick = function () {
    contadorClick++;
    crearInputLabel();
    mostrarBotonCalcular()
    
}

// BOTON QUITAR
document.querySelector("#boton-quitar").onclick = function () {
    if(contadorClick > 1){
        eliminarInputLabel();
        contadorClick--;
    }else if(contadorClick == 1){
        eliminarInputLabel();
        eliminarBotonCalcular();
        contadorClick--;
    }
}

// BOTON CALCULAR
document.querySelector("#boton-calcular").onclick = function () {
    const arraySalario = retornarArraySalario();
    document.querySelector(`#mayor-salario`).textContent = "Mayor salario anual: " + retornarMayorSalarioAnual(arraySalario);
    document.querySelector(`#menor-salario`).textContent = "Menor salario anual: " + retornarMenorSalarioAnual(arraySalario);
    document.querySelector(`#promedio-salario-anual`).textContent = "Salario promedio anual: " + retornarPromedioSalarioAnual(arraySalario);
    document.querySelector(`#promedio-salario-mensual`).textContent = "Salario promedio mensual: " + (retornarPromedioSalarioAnual(arraySalario) / 12);
}
