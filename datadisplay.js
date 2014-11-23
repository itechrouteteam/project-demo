$(document).ready(function (){
  $.ajax({
  url: "http://localhost/learnPHP/welcome.php",
  dataType: 'json',
  success: function( data ) {
    console.log(data);
    if(data.status==="SUCCESS")
    {
        $('#status').html(data.status);
       for (var val in data.data) {
        $('#data').append(data.data[val]+"<br>");
        }
        $('#error').html(data.error);
    }
  }
    });
});