var button1 = document.getElementById("button1");
var customer = document.getElementById("customer");
var XML = new XMLHttpRequest;
button1.addEventListener("click", loadCustomer);

function  loadCustomer() {
    XML.onload = function () {
        if (XML.readyState == 4 && XML.status == 200) {
            var data = JSON.parse(XML.responseText);
                customer.innerHTML = "name: " + data.name + "<br>" + "company: " + data.company + "<br>" + "phone: " + data.phone + "<br>" + "id: " + data.id;
            }    
    }
    XML.open('get','customer.json')
    XML.send();
}

