/*

    vistoTutor: Boolean,
    vistoOrientadora: Boolean,
    vistoJefeEstudios: Boolean,
    vistoConvivencia: Boolean


*/
var incidencia_current="";
var link = window.location.href;
var listaCamposValidos = ["vistoTutor", "vistoOrientadora", "vistoJefeEstudios", "vistoConvivencia"];


function realiza() {
    $.getJSON( getLink(), function (data) {
    var items = [];
    $.each(data, function (key, val) {
        if(listaCamposValidos.includes(key)){
            if(val == true){
                items.push("<label>" + key + "</label><input id='" + key + "' onchange='update(\""+ key +"\")' type='checkbox'  name='" + key + "' checked></input>")
            } else {
                items.push("<label>" + key + "</label><input id='" + key + "' onclick='update(\""+ key +"\")' type='checkbox'  name='" + key + "'></input>")
            }
            items.push("<br>");
            
        }
    });
    incidencia_current=data;
    
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
}
//ARREGLAR UPDATE
function update(nombreCampo) {
    var nombre = document.getElementById(nombreCampo).checked;
    alert(incidencia_current[nombreCampo]);
    if (nombre == true) {
        incidencia_current[nombreCampo] = true;
    } else {
        incidencia_current[nombreCampo] = false;
    } 

    //alert(document.getElementById(nombreCampo).id + " " + document.getElementById(nombreCampo).value);
    //alert(incidencia_current[nombreCampo]);
    
    //alert(incidencia_current[nombreCampo]);

    $.ajax({
      type: "PUT",
      url: getLink(),
      data: incidencia_current,
      success: function (msg) {
        location.reload;
      }
    });
}

function getLink() {
    var array = link.split("?");
    var nuestraID = array[1];
    var tipo = array[2];

    if(tipo == "G"){
        return "http://localhost:3000/minionsG/" + nuestraID;
    } else {
        return "http://localhost:3000/minionsL/" + nuestraID;
    }

}