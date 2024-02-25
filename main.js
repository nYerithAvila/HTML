// crear una funcion que se active al dar click//
function muestra_oculta(id) {
    // declarar la fx y pasar por el parametro selector de referencia que se quiere ocultar//
    let div = document.getElementById(id);
    //usar el condicional if //
    if (div.style.display == "none") {
        div.style.display = "flex";
    }
    else {
        div.style.display = "none";
    }
}