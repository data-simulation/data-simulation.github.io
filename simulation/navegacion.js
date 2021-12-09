$(document).ready(function () {

    var page = 1

    function myFunction() {
        if(page == 1){
            $("#videos").css("display", "block");
            $("#modelo").css("display", "none");
            $("#numeroPanel").find("p").text("1");
        }

        if(page == 2){
            $("#videos").css("display", "none");
            $("#modelo").css("display", "block");
            $("#datos").css("display", "none");
            $("#numeroPanel").find("p").text("2");
        }

        if(page == 3){
            $("#modelo").css("display", "none");
            $("#datos").css("display", "block");
            $("#codigo").css("display", "none");
            $("#numeroPanel").find("p").text("3");
        }

        if(page == 4){
            $("#datos").css("display", "none");
            $("#codigo").css("display", "block");
            $("#numeroPanel").find("p").text("4");
        }


    }


    $("#izqPanel").click(function () {
        if(page > 1){
            page--
            myFunction()
        }

        /* $("#enter_screen").fadeOut("slow");
        $("#intro").removeClass("d-flex align-items-center justify-content-center")
        $("#intro").css("display", "none"); */
    });

    $("#derPanel").click(function () {
        if(page < 4){
            page++
            myFunction()
        }

        /* $("#enter_screen").fadeOut("slow");
        $("#intro").removeClass("d-flex align-items-center justify-content-center")
        $("#intro").css("display", "none"); */
    });

});