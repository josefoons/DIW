window.addEventListener("load", cargar, false);
function cargar() {
    fechaHoy();
}

function showDiv(elem) {
  if (elem.value == "leve") {
    document.getElementById('leve').style.display = "block";
    document.getElementById('grave').style.display = "none";
    document.getElementById("requerido_Grave").required = false;
    document.getElementById("requerido_Leve").required = true;
  } else {
    if (elem.value == "grave") {
      document.getElementById('leve').style.display = "none";
      document.getElementById('grave').style.display = "block";
      document.getElementById("requerido_Grave").required = true;
      document.getElementById("requerido_Leve").required = false;
    }
  }
}

function fechaHoy() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  
  if(dd<10) {
      dd = '0'+dd
  } 
  
  if(mm<10) {
      mm = '0'+mm
  } 
  
  today = dd + '/' + mm + '/' + yyyy;
  document.getElementById("fechaFirma").value = today;
}