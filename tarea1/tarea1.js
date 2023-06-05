/* 
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN). 
*/


function retornarMayorEdad(arrayEdades) {
    let mayorEdad = 0;
    for(let i = 0; i < arrayEdades.length; i++){
        if(mayorEdad < arrayEdades[i]) {
            mayorEdad = arrayEdades[i];
        }
    }
    return mayorEdad;
}

function retornarMenorEdad(arrayEdades) {
    let menorEdad = arrayEdades[0];
    for(let i = 1; i < arrayEdades.length; i++) {
        if(menorEdad > arrayEdades[i]) {
            menorEdad = arrayEdades[i];
        }
    }
    return menorEdad;
}

function retornarPromedioEdad(arrayEdades) {
    let suma = 0;
    for(let i = 0; i < arrayEdades.length; i++) {
        suma += arrayEdades[i];
    }
    return suma / arrayEdades.length;
}




function crearInputLabel(){
    const $cantidadIntegrantes = document.querySelector("#cantidad-integrantes").value;
    const $nodoInputsLabels = document.querySelector(".input-container");
    for(let i = 0; i < $cantidadIntegrantes; i++){
        const label = document.createElement("label");
        label.className = "titulo-label"; 
        label.textContent = `Edad del ${i + 1} integrante`;
        const input = document.createElement("input");
        input.type = 'number';
        input.className = 'edad';
        $nodoInputsLabels.appendChild(label);
        $nodoInputsLabels.appendChild(input);
    }

    if($cantidadIntegrantes > 0){
        imprimirBotonCalcular();
    }
}

function imprimirBotonCalcular(){
    document.querySelector('#boton-calcular').style.display = 'block';
}

function retornarArrayEdades(){
    const $edades = document.querySelectorAll('.edad');
    let arrayEdades = [];
    for(let i = 0; i < $edades.length; i++){
        arrayEdades[i] = Number($edades[i].value);
    }
    return arrayEdades;
}


function imprimirResultados(arrayEdades){
    document.querySelector("#mayor-edad").textContent = "Mayor edad: " + retornarMayorEdad(arrayEdades);
    document.querySelector("#menor-edad").textContent = "Menor edad: " + retornarMenorEdad(arrayEdades);
    document.querySelector("#promedio-edad").textContent = "Promedio edad: " + retornarPromedioEdad(arrayEdades);
}

function eliminarInformacion(){
    const span = document.querySelectorAll('span');
    for(let i = 0; i < span.length; i++){
        span[i].textContent = "";
    }
}

function eliminarInputsLabels(){
    const $nodoInputsLabels = document.querySelector(".input-container");
    const $inputs = document.querySelectorAll(".edad");
    const $labels = document.querySelectorAll(".titulo-label");

    for(let i = 0; i < $inputs.length; i++){
        $nodoInputsLabels.removeChild($labels[i]);
        $nodoInputsLabels.removeChild($inputs[i]);
    }
}

function eliminarBotonCalcular(){
    document.querySelector('#boton-calcular').style.display = 'none';
}


function reiniciar(){
    eliminarInputsLabels();
    eliminarInformacion();
    eliminarBotonCalcular()
}


document.querySelector("#boton-enviar").onclick = function(){
    reiniciar();
    crearInputLabel();
}

document.querySelector("#boton-calcular").onclick = function() {
    imprimirResultados(retornarArrayEdades());
}

document.querySelector("#boton-resetear").onclick = function() {
    reiniciar();
}