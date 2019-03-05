// Script to log new time and add it to the time report
function log(){
    var nr = document.getElementById("input_projnr").value;
    var h = document.getElementById("input_hrs").value;
    var m = document.getElementById("input_min").value;
    var d = document.getElementById("input_date").value;
    var newRow = document.getElementById('report_table').insertRow();
    newRow.insertCell(0).innerHTML= nr;
    newRow.insertCell(1).innerHTML= h;
    newRow.insertCell(2).innerHTML= d;
}