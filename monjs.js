
$(document).ready(function(){
    $(".table").append('<div id="loupe"></div>');
    $("#loupe").hide();

    /*$('#monTableau').click(function(){
        $("#loupe").show();
    });*/

    $("td").hover(function() {
        $(this).show();
       
    });
     
    
});
