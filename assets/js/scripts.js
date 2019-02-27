var glassesList;
var faceList;
var genderList;
var finalList;
var gender;
var face;

$(document).ready(function(){
    initAll();
    $(".resetBtn").click(function(){
        initAll();
    });
    $("#screen1 .screenNavBtn").click(function(){
        main();
        $("#screen1").fadeOut(800);
        $("#screen2").fadeIn(800);
    });
    $("#screen2 .screenNavBtn").click(function(){
        $("#screen2").fadeOut(800);
        $("#widgetScreen").fadeIn(800);
        $("#panelSection").fadeIn(800);
        setTimeout(function(){
            $("#scanningPanel").fadeIn(800);
            $(".resetBtn").fadeOut(800);
            faceClassification();
            genderGuess();
        }, 3000);
    });
    $("#genderSelectionPanel .maleButton").click(function(){
        $("#genderSelectionPanel").fadeOut(800);
        genderCallback("male\r\n");
    });
    $("#genderSelectionPanel .femaleButton").click(function(){
        $("#genderSelectionPanel").fadeOut(800);
        genderCallback("female\r\n");
    });
    $("#recommendedGlassesPanel .tellMeButton").click(function(){
        $("#recommendedGlassesPanel").fadeOut(800);
        $("#recommendedGlasses").remove();
        setTimeout(glassesClassification(), 2000);
    });
    $("#hitPanel .screenNavBtn").click(function(){
        $("#hitPanel").fadeOut(800);
        $("#filterPanel").fadeIn(800);
    });
    $("#missPanel .screenNavBtn").click(function(){
        $("#missPanel").fadeOut(800);
        $("#filterPanel").fadeIn(800);
    });
    $("#missPanel .retryBtn").click(function(){
        $("#missPanel").fadeOut(800);
        glassesClassification();
    });
    $("#filterPanel .takePicBtn").click(function(){
        $("#shutter").fadeIn(150);
        $("#screenshotContainerMain").show();
        $("#shutter").fadeOut(150);
        $(".filterPanelUpperHalf").fadeOut(800);
        $(".takePicBtn").fadeOut(800);
        $(".deletePicBtn").fadeIn(800);
        $("#filterPanel .screenNavBtn").fadeIn(800);
        $("#filterPanel .filterPanelUpperHalf").show();
        $("#filterPanel .filterCarousel").show();
        snapAndDisplay("screenshotContainerMain", "prepend", "screenshotMain1");
        snapAndDisplay("screenshotContainerMain", "prepend", "screenshotMain2");
        snapAndDisplay("screenshotContainerMain", "prepend", "screenshotMain3");
        snapAndDisplay("screenshotContainerMain", "prepend", "screenshotMain4");
        snapAndDisplay("screenshotContainerMail", "prepend", "screenshotMail1");
        snapAndDisplay("screenshotContainerMail", "prepend", "screenshotMail2");
        snapAndDisplay("screenshotContainerMail", "prepend", "screenshotMail3");
        snapAndDisplay("screenshotContainerMail", "prepend", "screenshotMail4");
        snapAndDisplay("filter1", "append", "screenshot1");
        snapAndDisplay("filter2", "append", "screenshot2");
        snapAndDisplay("filter3", "append", "screenshot3");
        snapAndDisplay("filter4", "append", "screenshot4");
        Caman("#screenshot1", function () {
            this.brightness(0).render();
        });
        Caman("#screenshotMain1", function () {
            this.brightness(0).render();
        });
        Caman("#screenshotMail1", function () {
            this.brightness(0).render();
        });
        Caman("#screenshot2", function () {
            this.sepia(50).render();
        });
        Caman("#screenshotMain2", function () {
            this.sepia(50).render();
        });
        Caman("#screenshotMail2", function () {
            this.sepia(50).render();
        });
        Caman("#screenshot3", function () {
            this.contrast(30).render();
        });
        Caman("#screenshotMain3", function () {
            this.contrast(30).render();
        });
        Caman("#screenshotMail3", function () {
            this.contrast(30).render();
        });
        Caman("#screenshot4", function () {
            this.hue(50).render();
        });
        Caman("#screenshotMain4", function () {
            this.hue(50).render();
        });
        Caman("#screenshotMail4", function () {
            this.hue(50).render();
        });
        $('.filterCarousel').slick({
            centerMode: true,
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        });
    });
    $(".filterCarousel").on("afterChange", function(event, slick, currentSlide){
        var currentFilter = $(".filterCarousel").slick("slickCurrentSlide");
        switch(currentFilter){
            case 0:
                $("#screenshotMain1").css("z-index", 10);
                $("#screenshotMain2").css("z-index", 9);
                $("#screenshotMain3").css("z-index", 9);
                $("#screenshotMain4").css("z-index", 9);
                $("#screenshotMail1").css("z-index", 10);
                $("#screenshotMail2").css("z-index", 9);
                $("#screenshotMail3").css("z-index", 9);
                $("#screenshotMail4").css("z-index", 9);
                $(".filterPanelUpperHalf").fadeOut(800);
                break;
            case 1:
                $("#screenshotMain1").css("z-index", 9);
                $("#screenshotMain2").css("z-index", 10);
                $("#screenshotMain3").css("z-index", 9);
                $("#screenshotMain4").css("z-index", 9);
                $("#screenshotMail1").css("z-index", 9);
                $("#screenshotMail2").css("z-index", 10);
                $("#screenshotMail3").css("z-index", 9);
                $("#screenshotMail4").css("z-index", 9);
                $(".filterPanelUpperHalf").fadeOut(800);
                break;
            case 2:
                $("#screenshotMain1").css("z-index", 9);
                $("#screenshotMain2").css("z-index", 9);
                $("#screenshotMain3").css("z-index", 10);
                $("#screenshotMain4").css("z-index", 9);
                $("#screenshotMail1").css("z-index", 9);
                $("#screenshotMail2").css("z-index", 9);
                $("#screenshotMail3").css("z-index", 10);
                $("#screenshotMail4").css("z-index", 9);
                $(".filterPanelUpperHalf").fadeOut(800);
                break;
            case 3:
                $("#screenshotMain1").css("z-index", 9);
                $("#screenshotMain2").css("z-index", 9);
                $("#screenshotMain3").css("z-index", 9);
                $("#screenshotMain4").css("z-index", 10);
                $("#screenshotMail1").css("z-index", 9);
                $("#screenshotMail2").css("z-index", 9);
                $("#screenshotMail3").css("z-index", 9);
                $("#screenshotMail4").css("z-index", 10);
                $(".filterPanelUpperHalf").fadeOut(800);
                break;
            default:
                console.log("applyFilter: ERROR");
        }
    });
    $("#filterPanel .deletePicBtn").click(function(){
        $("#screenshotContainerMain").empty();
        $("#screenshotContainerMail").empty();
        $("#filter1").empty();
        $("#filter2").empty();
        $("#filter3").empty();
        $("#filter4").empty();
        $('.filterCarousel').slick('unslick');
        $(".takePicBtn").fadeIn(800);
        $(".deletePicBtn").fadeOut(800);
        $("#filterPanel .screenNavBtn").fadeOut(800);
        $("#filterPanel .filterPanelUpperHalf").fadeOut(800);
        $("#filterPanel .filterCarousel").fadeOut(800);
    });
    $("#filterPanel .screenNavBtn").click(function(){
        $("#panelSection").fadeOut(800);
        $("#widgetScreen").fadeOut(800);
        $("#mailSection").fadeIn(800);
    });
    $(".sendMailBtn").click(function(){
        sendMail();
    });
});

function initAll(){
    glassesList = ["roundFemale", "roundMale", "squaredFemale", "squaredMale", "ovalFemale", "ovalMale", "triangularFemale", "triangularMale"];
    faceList = [];
    genderList = [];
    finalList = [];
    face = null;
    gender = null;
    $("#recommendedGlasses").remove();
    $("#filterPanel .deletePicBtn").click();
    $(".removeGlasses").hide();
    $(".visual-section").hide();
    document.getElementById("mailTextBox").value = "";
    $("#screen1").fadeIn(1000);
}

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
    $(".resetBtn").fadeOut(800);
    $("#scanningPanel").fadeIn(800);
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
            $(".removeGlasses").fadeIn(800);
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
    if(faceList.length == 0) setTimeout(function(){faceClassification();}, 6000);
    finalList = matchLists(faceList, genderList);
    if(finalList.length != 0){
        $(".removeGlasses").fadeOut(800);
        displayRecommendedGlasses();
    }
}

function genderCallback(genderResponse){
    //do something with the response
    gender = genderResponse;
    console.log(genderResponse);
    genderList = genderSlice(glassesList, gender);
    console.log(genderList);
    if(genderList.length == 0) $("#genderSelectionPanel").fadeIn(800);
    finalList = matchLists(faceList, genderList);
    if(finalList.length != 0){
        $(".removeGlasses").fadeOut(800);
        displayRecommendedGlasses();
    }
}

function glassesCallback(glassesResponse){
    console.log(glassesResponse);
    if(glassesResponse == "glassesClassification: ERROR") setTimeout(function(){glassesClassification();}, 1000);
    else if(glassesResponse == "miss"){
        $(".resetBtn").fadeIn(800);
        $("#hitPanel").fadeOut(800);
        $("#missPanel").fadeIn(800);
        $("#scanningPanel").fadeOut(800);

    }
    else if(glassesResponse == "hit"){
        $(".resetBtn").fadeIn(800);
        $("#missPanel").fadeOut(800);
        $("#hitPanel").fadeIn(800);
        $("#scanningPanel").fadeOut(800);
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
        $("#scanningPanel").fadeOut(800);
    }
    console.log(tempFinalList);
    return tempFinalList;
}

function displayRecommendedGlasses(){
    $(".resetBtn").fadeIn(800);
    $("#recommendedGlassesPanel").fadeIn(800);
    switch(finalList[0]){
        case "roundFemale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='roundFemale'></div>");
            break;
        case "roundMale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='roundMale'></div>");
            break;
        case "squaredFemale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='squaredFemale'></div>");
            break;
        case "squaredMale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='squaredMale'></div>");
            break;
        case "ovalFemale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='ovalFemale'></div>");
            break;
        case "ovalMale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='ovalMale'></div>");
            break;
        case "triangularFemale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='triangularFemale'></div>");
            break;
        case "triangularMale": $("#recommendedGlassesPanel").append("<div id='recommendedGlasses' class='triangularMale'></div>");
            break;
        default:
            console.log("displayRecommendedGlasses: ERROR");
    }
}

function snapAndDisplay(container, mode, id){
    var screenshot = new Image();
    screenshot.id = id;
    var canvas = document.getElementById("JeeWidgetCanvas");
    screenshot.src = canvas.toDataURL();
    switch(mode){
        case "append":
            document.getElementById(container).append(screenshot);
            break;
        case "prepend":
            document.getElementById(container).prepend(screenshot);
            break;
        default:
            console.log("snapAndDisplay: ERROR");
    }
}

function sendMail(){
    var mailCanvas;
    var mailAddress = document.getElementById("mailTextBox").value;
    if($("#screenshotMail4").css("z-index") == 10){
        mailCanvas = document.getElementById("screenshotMail4");
    }else if($("#screenshotMail3").css("z-index") == 10){
        mailCanvas = document.getElementById("screenshotMail3");
    }else if($("#screenshotMail2").css("z-index") == 10){
        mailCanvas = document.getElementById("screenshotMail2");
    }else{
        mailCanvas = document.getElementById("screenshotMail1");
    }
    var img64 = mailCanvas.toDataURL("mailImage/jpg");
    $.ajax({
        type: "POST",
        url: "mailSender.php",
        data: { imagebase64: img64, mailSendTo: mailAddress},
        success: mailCallback,
        error: function( jqXhr, textStatus, errorThrown ){
            console.log( errorThrown );
        }
    });
}

function mailCallback(mailResponse){
    console.log(mailResponse);
}