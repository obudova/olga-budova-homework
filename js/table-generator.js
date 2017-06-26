
var counter = 0;

$("#generate-table").click(function (e) { 
    e.preventDefault();
    generateTable();
});

function generateTable(){
    var isDark = false;
    var rows = $('#table tbody tr');
    if(rows.length%2!=0){
        var isDark = true
    }
    var content = ` <tr` + (isDark ? ` class = "dark"` : ``)+`>
                        <td>`+counter+`</td>
                        <td>Olga</td>
                        <td>Budova</td>
                        <td>Lorem</td>
                    </tr>`
    $('table tbody').append(content);
    counter++;
}
$('#remove-table').click(function(){
    $('#table tbody tr:last-child').remove();
});