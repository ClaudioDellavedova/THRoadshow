var glassesList = [roundFemale, roundMale, squaredFemale, squaredMale, ovalFemale, ovalMale, triangularFemale, triangularMale];
var faceList = [];
var genderList = [];
var finalList = [];
var gender;
var face;

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

function genderSlice(glassesList, gender){
    switch(gender){
        case "male":
            for(var i = 0; i < glassesList.length; i += 2) glassesList.splice(i, 1);
            break;
        case "female":
            for(var i = 1; i < glassesList.length; i += 2) glassesList.splice(i, 1);
            break;
        case "undefined":
            $(".viisual-section").hide();
            $(".screenGenderSelecton").fadeIn(800);
        default:
            console.log("genderSlice: ERROR");
    }
    return glassesList;
}

function faceSlice(glassesList, face){
    switch(face){
        case "round":
            glassesList.slice(0, glassesList.length/4);
            break;
        case "squared":
            glassesList.slice(glassesList.length/4, glassesList.length/2);
            break;
        case "oval":
            glassesList.slice(glassesList.length/2, 3*glassesList.length/4);
            break;
        case "triangular":
            glassesList.slice(3*glassesList.length/4);
            break;
        default:
            console.log("faceSlice: ERROR");
    }
    return glassesList;
}

function faceCallback(response){
    //do something with the response
    face = response;
    console.log(response);
    faceList = faceSlice(glassesList, face);
}

function genderCallback(response){
    //do something with the response
    gender = response;
    console.log(response);
    genderList = genderSlice(glassesList, gender);
}

function matchLists(faceList, genderList){
    while(faceList.length == 0 || genderList.lenght == 0){

    }

}