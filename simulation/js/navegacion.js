$(document).ready(function () {

    var page = 0

    function myFunction() {
        if(page == 0){
            $(".webViewer").attr('src','html/0_esquemaInicial/index.html');
            $("#numeroPanel").find("p").text("0");
            $("#tituloPanel").find("p").text("Diagrama");
            $("#infoPanel0").css("display", "inline");
            $("#infoPanel1").css("display", "none");
        }

        if(page == 1){
            $(".webViewer").attr('src','html/1_paso1Videos/videos.html');
            $("#numeroPanel").find("p").text("1");
            $("#tituloPanel").find("p").text("Obtención de datos");
            $("#infoPanel0").css("display", "none");
            $("#infoPanel1").css("display", "inline");
            $("#infoPanel2").css("display", "none");
        }

        if(page == 2){
            /* $("#videos").css("display", "none");
            $("#modelo").css("display", "block");
            $("#datos").css("display", "none"); */
            $(".webViewer").attr('src','html/2_paso2Modelo/index.html');
            $("#numeroPanel").find("p").text("2");
            $("#tituloPanel").find("p").text("Simulación");
            $("#infoPanel1").css("display", "none");
            $("#infoPanel2").css("display", "inline");
            $("#infoPanel3").css("display", "none");
        }

        if(page == 3){
            /* $("#modelo").css("display", "none");
            $("#datos").css("display", "block");
            $("#codigo").css("display", "none"); */
            $(".webViewer").attr('src','html/3_paso3Datos/1.html');
            $("#numeroPanel").find("p").text("3");
            $("#tituloPanel").find("p").text("Base de datos");
            $("#infoPanel2").css("display", "none");
            $("#infoPanel3").css("display", "inline");
            $("#infoPanel4").css("display", "none");
        }

        if(page == 4){
            /* $("#datos").css("display", "none");
            $("#codigo").css("display", "block"); */
            $(".webViewer").attr('src','html/4_paso4Compresion/2.html');
            $("#numeroPanel").find("p").text("4");
            $("#tituloPanel").find("p").text("Codificación");
            $("#infoPanel3").css("display", "none");
            $("#infoPanel4").css("display", "inline");
            $("#infoPanel5").css("display", "none");
        }

        if(page == 5){
            /* $("#datos").css("display", "none");
            $("#codigo").css("display", "block"); */
            $(".webViewer").attr('src','html/5_esquemaInvertido/index.html');
            $("#numeroPanel").find("p").text("5");
            $("#tituloPanel").find("p").text("Proceso inverso");
            $("#infoPanel4").css("display", "none");
            $("#infoPanel5").css("display", "inline");
            $("#infoPanel6").css("display", "none");
        }

        if(page == 6){
            /* $("#datos").css("display", "none");
            $("#codigo").css("display", "block"); */
            $(".webViewer").attr('src','html/6_monstruo/index.html');
            $("#numeroPanel").find("p").text("5");
            $("#tituloPanel").find("p").text("Proceso inverso");
            $("#infoPanel5").css("display", "none");
            $("#infoPanel6").css("display", "inline");
        }


    }


    $("#izqPanel").click(function () {
        if(page > 0){
            page--
            myFunction()
        }

        /* $("#enter_screen").fadeOut("slow");
        $("#intro").removeClass("d-flex align-items-center justify-content-center")
        $("#intro").css("display", "none"); */
    });

    $("#derPanel").click(function () {
        if(page < 6){
            page++
            myFunction()
        }

        /* $("#enter_screen").fadeOut("slow");
        $("#intro").removeClass("d-flex align-items-center justify-content-center")
        $("#intro").css("display", "none"); */
    });

});