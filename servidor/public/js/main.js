function onSubmit(form) {

  var data = JSON.stringify($(form).serializeArray()); //  <-----------
  console.log(data);
  return false; //don't submit
}

function showDiv(elem){
  if(elem.value == "leve") {
    document.getElementById('leve').style.display = "block";
    document.getElementById('grave').style.display = "none";
  } else {
    if(elem.value == "grave") {
      document.getElementById('leve').style.display = "none";
      document.getElementById('grave').style.display = "block";
    }
  }
}