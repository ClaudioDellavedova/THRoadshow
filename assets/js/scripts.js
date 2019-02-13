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

function faceClassification(){
    var canvas = document.getElementById("JeeWidgetCanvas");
    var img64 = canvas.toDataURL("faceImage/jpg");
    $.ajax({
        type: "POST",
        url: "faceClassification.php",
        data: { imagebase64: img64 },
        success: faceCallback,
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

function genderGuess(){
    var canvas = document.getElementById("JeeWidgetCanvas");
    var img64 = canvas.toDataURL("genderImage/jpg");
    $.ajax({
        type: "POST",
        url: "genderGuess.php",
        data: { imagebase64: img64 },
        success: genderCallback,
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function faceCallback(response){
    //do something with the response
    console.log(response);
}

function genderCallback(response){
    //do something with the response
    console.log(response);
}