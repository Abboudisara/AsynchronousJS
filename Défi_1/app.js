var XML = new XMLHttpRequest();
var Myoutput = document.getElementById("output");
var Mybutton = document.getElementById("button");
Mybutton.addEventListener("click", function () {
    if (XML.readyState == 4 && XML.status == 200) {
        document.getElementById("output").textContent = XML.responseText;
    }
    XML.open("GET", "data.txt", true);
    XML.send();
});








