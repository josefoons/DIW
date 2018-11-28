function realiza() {
    $.getJSON("http://localhost:3000/minionsG/5bfec45d5db3db12e6fcd3a5", function (data) {
    var items = [];
    $.each(data, function (key, val) {
        //Hacer un if para lo que yo quiera
        items.push("<label id='labelTag'>" + key + "</label><input id='" + key + "' name='" + key + "'value='" + val + "'></input><br>");
    });
    $("<div/>", {
        html: items.join("")
    }).appendTo("#lista");
});
}