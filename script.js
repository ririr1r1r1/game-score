function appendToTable() {
    var formObject = document.getElementById("sampleForm");
    var tableObject = document.getElementById("sampleTable");
    var tr = "<tr>";
    tr += "<td>" + formObject.formName.value + "</td>";
    tr += "<td>" + formObject.formlevel.value + "</td>";
    tr += "<td>" + formObject.formComent.value + "</td>";
    tr += "<td>" + getCurrentDate() + "</td>";
    tr += "<td><button onclick='deleteRow(this)'>削除</button></td>";
    tr += "</tr>";
    tableObject.insertAdjacentHTML("beforeend", tr);
}

function deleteRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function getCurrentDate() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return year + "-" + month + "-" + day;
}
