$(document).ready(function(){
    $(".visual-section").hide();
    $("#screen0").fadeIn(1000);
    $(".screen0btn0").click(function(){
        $("#screen0").fadeOut(800);
        $("#screen1").fadeIn(800);
    });
    $(".screen1btn0").click(function(){
        $("#screen1").fadeOut(800);
    });
});

function getCanvasAsImg(){
    var canvas = document.getElementById('JeeWidgetCanvas');
    var img64 = canvas.toDataURL("image/jpg");
    $.ajax({
        type: "POST",
        url: "pyRunner.php",
        data: { imagebase64: img64 },
        success: callbackFunc,
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
    /*
    link.href = img64;
    link.download = 'tfInput.jpg';
    document.body.appendChild(link);
    link.click();
    */
}

function runPyScript(input){
    $.ajax({
        type: "POST",
        url: "_pyRunner.php",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response){
    //do something with the response
    console.log(response);
}