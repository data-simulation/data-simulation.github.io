$(document).ready(function() {
    if (window.matchMedia("(max-width: 900px)").matches)  
    { 

        var open;
        open = 0;
            
        
        $("#headPanel").click(function () {
            if (open==0) {
                $("#infoPanel").stop(true, false).animate({
                    height: "50vh"
                });
                open = 1;
            } else {
                $("#infoPanel").stop(true, false).animate({
                    height: "0px"
                });
                open = 0;
             }
        });

        $("#controlPanel").hover(function () {}, function () {
            $("#infoPanel").stop(true, false).animate({
                height: "0px"
            }); 
            open = 0;    
        });
        
            
        

    } else { 
        $("#controlPanel").hover(function () {
            $("#infoPanel").stop(true, false).animate({
                height: "50vh"
            });
        }, function () {
            $("#infoPanel").stop(true, false).animate({
                height: "0px"
            });       
        });
    }

    

});