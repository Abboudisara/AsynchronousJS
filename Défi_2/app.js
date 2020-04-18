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
};

var http = new XMLHttpRequest;
var button2 = document.getElementById('button2');
var customers = document.getElementById('cutomers');
button2.addEventListener('click', function loadCustomers(){
    http.onload = function (){
        if (http.readyState == 4 && http.status == 200){
            var cust = JSON.parse(http.response);
            var output = " ";
            for (let i = 0 ; i < cust.length; i++){
                output +="<ul>"+
               " <li> name:" +cust[i].name + "</li> " +
               " <li> company:" +cust[i].company + "</li>" +
               " <li> phone:" +cust[i].phone + "</li>" +
               " <li>id:" +cust[i].id + "</li> " +

               " </ul>";
            }
            document.getElementById("customers").innerHTML=output;
        }
        if (http.status == 404) {
            console.log("ERROR 404")

            }
    }
    http.open('get', 'customers.json', true);
    http.send();
})