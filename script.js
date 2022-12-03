$(function() { // Function to run the js when DOM is ready
    $(".toggle").on("click", function(){ // To make the menu bar shown up when click on toggle //
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active");
        }
    })

    $("#submit").on("click", function(){ // To make the menu bar shown up when click on toggle //
        $("#results").addClass("active");
    })

});