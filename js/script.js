$(document).ready(function(){
    $("#mobileMenuBtn").on("click", function(e){
        e.preventDefault();
        $("#mobileNavMenu").stop(true, true).slideToggle(250);
    });
});