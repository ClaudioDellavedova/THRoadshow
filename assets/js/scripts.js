var glassesList = ["roundFemale", "roundMale", "squaredFemale", "squaredMale", "ovalFemale", "ovalMale", "triangularFemale", "triangularMale"];
var swiperGlasses;
var faceList = [];
var genderList = [];
var finalList = [];
var gender;
var face;

$(document).ready(function(){
    swiperGlasses = new Swiper('#swiper-filters', {
        direction: 'horizontal',
        loop: true,
        longSwipesRatio: 0.1,
        allowSlidePrev: true
    });
    $(".visual-section").hide();
    $("#screen1").fadeIn(1000);
    $("#screen1 .screenNavBtn").click(function(){
        $("#screen1").fadeOut(800);
        $("#screen2").fadeIn(800);
    });
    $("#screen2 .screenNavBtn").click(function(){
        $("#screen2").fadeOut(800);
        $("#widgetScreen").fadeIn(800);
        setTimeout(function(){
            $(".scanningPanel").fadeIn(800);
            //faceClassification();
            //genderGuess();
        }, 3000);
    });
    //setTimeout(function(){var canvas = document.body.appendChild(JEEWIDGET.capture_image(15, function(){console.log("callback")}, false))}, 30000);
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

function glassesClassification(){
    var canvas = document.getElementById("JeeWidgetCanvas");
    var img64 = canvas.toDataURL("glassesImage/jpg");
    $.ajax({
        type: "POST",
        url: "glassesClassification.php",
        data: { recommendedGlasses: finalList[0],
                imagebase64: img64 },
        success: glassesCallback,
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function genderSlice(genderGlassesList, paramGender){
    var genderGlassesListTemp = [];
    for(var i = 0; i < genderGlassesList.length; i++) genderGlassesListTemp.push(genderGlassesList[i]);
    console.log(genderGlassesListTemp);
    switch(paramGender){
        case "male\r\n":
            for(var i = genderGlassesListTemp.length - 2; i >= 0; i -= 2) genderGlassesListTemp.splice(i, 1);
            break;
        case "female\r\n":
            for(var i = genderGlassesListTemp.length - 1; i >= 0; i -= 2) genderGlassesListTemp.splice(i, 1);
            break;
        case "undefined":
            genderGlassesListTemp = [];
            /* $(".visual-section").hide();
            $(".screenGenderSelecton").fadeIn(800); */
            break;
        default:
            console.log("genderSlice: ERROR");
    }
    return genderGlassesListTemp;
}

function faceSlice(faceGlassesList, paramFace){
    var faceGlassesListTemp = [];
    for(var i = 0; i < faceGlassesList.length; i++) faceGlassesListTemp.push(faceGlassesList[i]);
    var quaterLen = faceGlassesList.length/4;
    console.log(faceGlassesListTemp);
    switch(paramFace){
        case "round\r\n":
            faceGlassesListTemp = faceGlassesListTemp.splice(0, quaterLen);
            break;
        case "squared\r\n":
            faceGlassesListTemp = faceGlassesListTemp.splice(quaterLen, quaterLen);
            break;
        case "oval\r\n":
            faceGlassesListTemp = faceGlassesListTemp.splice((2 * quaterLen), quaterLen);
            break;
        case "triangular\r\n":
            faceGlassesListTemp = faceGlassesListTemp.splice((3 * quaterLen), quaterLen);
            break;
        case "glasses\r\n":
            faceGlassesListTemp = [];
            console.log("Please remove your glasses");
            break;
        default:
            console.log("faceSlice: ERROR");
    }
    return faceGlassesListTemp;
}

function faceCallback(faceResponse){
    //do something with the response
    face = faceResponse;
    console.log(faceResponse);
    faceList = faceSlice(glassesList, face);
    console.log(faceList);
    if(faceList.length == 0) setTimeout(function(){faceClassification();}, 2000);
    finalList = matchLists(faceList, genderList);
    if(finalList.length != 0){
        displayRecommendedGlasses();
    }
}

function genderCallback(genderResponse){
    //do something with the response
    gender = genderResponse;
    console.log(genderResponse);
    genderList = genderSlice(glassesList, gender);
    console.log(genderList);
    if(genderList.length == 0) setTimeout(function(){genderGuess()}, 2000);
    finalList = matchLists(faceList, genderList);
    if(finalList.length != 0){
        displayRecommendedGlasses();
    }
}

function glassesCallback(glassesResponse){
    console.log(glassesResponse);
    if(glassesResponse == "ERROR") setTimeout(function(){glassesClassification();}, 2000);
    else if(glassesResponse == "miss"){
        $("hitPanel").fadeOut(800);
        $("missPanel").fadeIn(800);
    }
    else{
        $("missPanel").fadeOut(800);
        $("hitPanel").fadeIn(800);
    }
}

function matchLists(paramFaceList, paramGenderList){
    var tempFinalList = [];
    if(paramFaceList.length != 0 && paramGenderList.length != 0){
        for(var i = 0; i < paramFaceList.length; i++){
            for(var j = 0; j < paramGenderList.length; j++){
                if(paramFaceList[i] == paramGenderList[j]){
                    tempFinalList.push(paramFaceList[i]);
                }
            }
        }
        $(".scanningPanel").fadeOut(800);
    }
    console.log(tempFinalList);
    return tempFinalList;
}

function displayRecommendedGlasses(){
    $(".recommendedGlassesPanel").fadeIn(800);
    switch(finalList[0]){
        case "roundFemale": $(".recommendedGlassesPanel").append("<div class='roundFemale'></div>");
            break;
        case "roundMale": $(".recommendedGlassesPanel").append("<div class='roundMale'></div>");
            break;
        case "squaredFemale": $(".recommendedGlassesPanel").append("<div class='squaredFemale'></div>");
            break;
        case "squaredMale": $(".recommendedGlassesPanel").append("<div class='squaredMale'></div>");
            break;
        case "ovalFemale": $(".recommendedGlassesPanel").append("<div class='ovalFemale'></div>");
            break;
        case "ovalMale": $(".recommendedGlassesPanel").append("<div class='ovalMale'></div>");
            break;
        case "triangularFemale": $(".recommendedGlassesPanel").append("<div class='triangularFemale'></div>");
            break;
        case "triangularMale": $(".recommendedGlassesPanel").append("<div class='triangularMale'></div>");
            break;
        default:
            console.log("displayRecommendedGlasses: ERROR");
    }
}