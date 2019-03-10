var glassesList;
var faceList;
var genderList;
var finalList;
var gender;
var face;
var scanCount = 0;
var first = 0;
var snapCount = 1;

$(document).ready(function(){
    initAll();
    $(".skipBtn").click(function(){
        main();
        $("#widgetScreen").fadeIn(800);
        $("#screen1").fadeOut(800);
        $("#panelSection").fadeIn(800);
        $("#filterPanel").fadeIn(800);
        $("#filterPanel .filterPanelLowerHalf").hide();
    });
    $(".model1").click(function(){
        JEEWIDGET.load("netizens_01");
    });
    $(".model2").click(function(){
        JEEWIDGET.load("netizens_02");
    });
    $(".model3").click(function(){
        JEEWIDGET.load("netizens_03");
    });
    $(".model4").click(function(){
        JEEWIDGET.load("netizens_04");
    });
    $(".model5").click(function(){
        JEEWIDGET.load("netizens_05");
    });
    $(".model6").click(function(){
        JEEWIDGET.load("netizens_06");
    });
    $(".model7").click(function(){
        JEEWIDGET.load("netizens_07");
    });
    $(".model8").click(function(){
        JEEWIDGET.load("netizens_08");
    });
    $(".modelNull").click(function(){
        JEEWIDGET.load("empty");
    });
    $(".resetBtn").click(function(){
        initAll();
    });
    $("#screen1 .screenNavBtn").click(function(){
        $("#screen1").fadeOut(800);
        $("#screen2").fadeIn(800);
        $(".startScanBtn.modified").fadeIn(800);
    });
    $("#screen1 .modified").click(function(){
        $(".scanMask").fadeIn(800);
    });
    $("#screen2 .screenNavBtn").click(function(){
        $("#screen2").fadeOut(800);
        $("#panelSection").fadeIn(800);
        $(".startScanBtn").fadeIn(800);
        $(".scanMask").fadeIn(800);
        $(".scanLine").fadeIn(800);
        $("#panelSection p").fadeIn(800);
    });
    $("#screen2 .modified").click(function(){
        $("#screen2").fadeOut(800);
        $("panelSection").fadeIn(800);
        $("#panelSection p").fadeIn(800);
    })
    $(".startScanBtn").click(function(){
        $("#panelSection").fadeIn(800);
        $(".startScanBtn").fadeOut(800);
        $("#panelSection p").hide();
        $("#scanningPanel").fadeIn(800);
        $(".scanLine").fadeIn(800);
        $(".resetBtn").hide();
        if(scanCount == 0){
            faceClassification();
            genderGuess();
        }
        else if($("#panelSection .removeGlasses").is(":visible")){
            $("#panelSection .removeGlasses").fadeOut(800);
            faceClassification();
        }
        else{
            glassesClassification();
        }
        scanCount++;
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
        $(".startScanBtn").fadeIn(800);
        $(".scanMask").fadeIn(800);
        $("#panelSection p").fadeIn(800);
    });
    $("#hitPanel .screenNavBtn").click(function(){
        $("#missPanel").fadeOut(800);
        $("#filterPanel").fadeIn(800);
        //$("#shutter").fadeIn(150);
        $("#filterPanel .filterPanelUpperHalf").fadeIn(800);
        $("#filterPanel .filterPanelLowerHalf").fadeIn(800);
        $(".resetBtn").fadeOut(800);
        //$("#shutter").fadeOut(150);
        //$(".takePicBtn").fadeOut(800);
        //$(".cameraLogo").fadeOut(800);
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
        $(".filterSlide").on("tap", function(){
            var currentFilter = $(this).attr("slideindex");
            $("#JeeWidgetCanvas").attr("class", "").addClass("filter"+currentFilter);
            $(".filterPanelUpperHalf").fadeOut(800);
        });
        $(".resetBtn").fadeIn(800);
        //$(".deletePicBtn").fadeIn(800);
        $("#filterPanel .screenNavBtn").fadeIn(800);
        $("#filterPanel .filterCarousel").fadeIn(800);
        $(".filterCarousel").slick("slickGoTo", 0, true);
        //$(".triangle").fadeIn(800);
        navigator.mediaDevices.getUserMedia({video: {facingMode: "user", aspectRatio: 0.56}}).then(function(stream){
            document.querySelectorAll(".filterSlide video").forEach(el=>{
                el.srcObject = stream;
            });
        });
    });
    $("#missPanel .screenNavBtn").click(function(){
        $("#missPanel").fadeOut(800);
        $("#filterPanel").fadeIn(800);
        //$("#shutter").fadeIn(150);
        $("#filterPanel .filterPanelUpperHalf").fadeIn(800);
        $("#filterPanel .filterPanelLowerHalf").fadeIn(800);
        $(".resetBtn").fadeOut(800);
        //$("#shutter").fadeOut(150);
        //$(".takePicBtn").fadeOut(800);
        //$(".cameraLogo").fadeOut(800);
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
        $(".filterSlide").on("tap", function(){
            var currentFilter = $(this).attr("slideindex");
            $("#JeeWidgetCanvas").attr("class", "").addClass("filter"+currentFilter);
            $(".filterPanelUpperHalf").fadeOut(800);
        });
        $(".resetBtn").fadeIn(800);
        //$(".deletePicBtn").fadeIn(800);
        $("#filterPanel .screenNavBtn").fadeIn(800);
        $("#filterPanel .filterCarousel").fadeIn(800);
        $(".filterCarousel").slick("slickGoTo", 0, true);
        //$(".triangle").fadeIn(800);
        navigator.mediaDevices.getUserMedia({video: {facingMode: "user", aspectRatio: 0.56}}).then(function(stream){
            document.querySelectorAll(".filterSlide video").forEach(el=>{
                el.srcObject = stream;
            });
        });
    });
    $("#missPanel .retryBtn").click(function(){
        $("#missPanel").fadeOut(800);
        $(".startScanBtn").fadeIn(800);
        $(".scanMask").fadeIn(800);
        $("#panelSection p").fadeIn(800);
    });
    $("#filterPanel .takePicBtn").click(function(){
        $("#panelSection").fadeOut(800);
        $("#widgetScreen").fadeOut(800);
        //JEEWIDGET.pause();
        document.getElementById("mailSectionText").textContent = "FILL IN YOUR E-MAIL ADDRESS AND WE'LL SEND YOUR PHOTO";
        $("#mailSectionText").css("color", "rgb(19, 39, 122)");
        $(".sendMailBtn").show();
        snapCount++;
        $("#mailSection").fadeIn(800);
        snapAndDisplay("JeeWidgetCanvas", "screenshotContainerMail", "prepend", "mailPic");
    });
    $("#filterPanel .deletePicBtn").click(function(){
        JEEWIDGET.resume();
        $("#screenshotContainerMain").empty();
        $("#screenshotContainerMail").empty();
        $("#filter1").empty();
        $("#filter2").empty();
        $("#filter3").empty();
        $("#filter4").empty();
        $("#filter5").empty();
        $("#filter6").empty();
        $(".takePicBtn").hide();
        $(".cameraLogo").hide();
        $(".triangle").hide();
        $(".deletePicBtn").hide();
        $("#filterPanel .screenNavBtn").hide();
        $("#filterPanel .filterPanelUpperHalf").hide();
        $("#filterPanel .filterPanelLowerHalf").hide();
        $("#filterPanel .filterCarousel").hide();
        $("#filterPanel .takePicBtn").show();
        $("#filterPanel .cameraLogo").show();
        snapCount++;
    });
    $("#filterPanel .screenNavBtn").click(function(){
        $("#panelSection").fadeOut(800);
        $("#widgetScreen").fadeOut(800);
        JEEWIDGET.pause();
        document.getElementById("mailSectionText").textContent = "FILL IN YOUR E-MAIL ADDRESS AND WE'LL SEND YOUR PHOTO";
        $("#mailSectionText").css("color", "rgb(19, 39, 122)");
        $(".sendMailBtn").show();
        snapCount++;
        $("#mailSection").fadeIn(800);
    });
    $(".sendMailBtn").click(function(){
        sendMail();
    });
});

function initAll(){
    main();
    $("#JeeWidgetCanvas").attr("class", "").addClass("filter0");
    if($("#filterPanel .filterCarousel").is(":visible")){
        snapCount++;
    }
    $("#filterPanel .filterPanelUpperHalf").fadeOut(800);
    glassesList = ["roundFemale", "roundMale", "squaredFemale", "squaredMale", "ovalFemale", "ovalMale", "triangularFemale", "triangularMale"];
    faceList = [];
    genderList = [];
    finalList = [];
    face = null;
    gender = null;
    $("#recommendedGlasses").remove();
    $(".removeGlasses").hide();
    $(".visual-section").hide();
    $("#widgetScreen").fadeIn(800);
    document.getElementById("mailTextBox").value = "";
    $("#screen1").fadeIn(1000);
    $("#screenshotContainerMain").empty();
    $("#screenshotContainerMail").empty();
    $("#filter1").empty();
    $("#filter2").empty();
    $("#filter3").empty();
    $("#filter4").empty();
    $("#filter5").empty();
    $("#filter6").empty();
    $(".takePicBtn").fadeIn(800);
    $(".cameraLogo").fadeIn(800);
    $(".triangle").fadeOut(800);
    $(".deletePicBtn").fadeOut(800);
    $("#filterPanel .screenNavBtn").fadeOut(800);
    //$("#filterPanel .filterCarousel").fadeOut(800);
    $("#filterPanel .takePicBtn").fadeIn(800);
    $("#filterPanel .cameraLogo").fadeIn(800);
    scanCount = 0;
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
    $(".resetBtn").hide();
    $("#scanningPanel").fadeIn(800);
    $(".scanLine").fadeIn(800);
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
            $("#scanningPanel").fadeOut(800);
            $(".scanLine").fadeOut(800);
            $(".startScanBtn").fadeIn(800);
            $(".scanMask").fadeIn(800);
            $("#panelSection p").fadeIn(800);
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
    finalList = matchLists(faceList, genderList);
    if(finalList.length != 0){
        $(".removeGlasses").fadeOut(800);
        displayRecommendedGlasses();
        $(".scanMask").fadeOut(800);
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
        $(".scanLine").fadeOut(800);
        $(".scanMask").fadeOut(800);
    }
    else if(glassesResponse == "hit"){
        $(".resetBtn").fadeIn(800);
        $("#missPanel").fadeOut(800);
        $("#hitPanel").fadeIn(800);
        $("#scanningPanel").fadeOut(800);
        $(".scanLine").fadeOut(800);
        $(".scanMask").fadeOut(800);
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
        $(".scanLine").fadeOut(800);
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

function snapAndDisplay(canvas, container, mode, id){
    var screenshot = new Image();
    screenshot.id = id;
    var tempCanvas = document.getElementById(canvas);
    screenshot.src = tempCanvas.toDataURL();
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

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function sendMail(){
    var img64;
    var mailAddress = document.getElementById("mailTextBox").value;
    if(validateEmail(mailAddress)){
        document.getElementById("mailSectionText").textContent = "THANK YOU, WE SENT YOUR PHOTO!";
        $("#mailSectionText").css("color", "rgb(19, 39, 122)");
        img64 = document.getElementById("mailPic").src;
        $.ajax({
            type: "POST",
            url: "emailSender.php",
            data: { imagebase64: img64, mailSendTo: mailAddress},
            success: mailCallback,
            error: function( jqXhr, textStatus, errorThrown ){
                console.log( errorThrown );
            }
        });
    }
    else{
        document.getElementById("mailSectionText").textContent = "THIS ISN'T A VALID E-MAIL ADDRESS";
        $("#mailSectionText").css("color", "red");
    }
}

function mailCallback(mailResponse){
    setTimeout(function(){
        initAll();
    }, 5000);
    $(".sendMailBtn").fadeOut(100);
    console.log(mailResponse);
}