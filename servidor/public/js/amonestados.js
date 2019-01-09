document.addEventListener("DOMContentLoaded",cargar,false);
function cargar() {
    document.getElementById("selectorAlumnos").addEventListener("change", nose);
}

function nose() {
    var todos = document.getElementsByClassName("alumno");
    for (let index = 0; index < todos.length; index++) {
        todos[index].style.order = 0;
    }
    var valorAlumno = document.getElementById("selectorAlumnos").value;
    document.getElementById(valorAlumno).style.order = -1;

}
