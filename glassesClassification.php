<?php

    /* exec('python');
    if (exec('echo TEST') == 'TEST'){
        echo 'exec works!';
    } */

    /* $command = escapeshellcmd('/tf_files_bw/label_image.py --graph ./tf_files_bw/retrained_graph.pb --labels ./tf_files_bw/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image ./tf_files/tests/');
    $output = shell_exec($command);
    echo $output; */
    
    // remove the part that we don't need from the provided image and decode it
    $errorThrown = 0;

    $glasses = $_POST['recommendedGlasses'];

    $imgdata = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST['imagebase64']));
    
    $imgfilepath = "E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg";            //Netizens
    //$imgfilepath = "C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg";            //Home

    file_put_contents($imgfilepath,$imgdata);

    $WshShell = new COM("WScript.Shell");

    //Netizens
    switch($glasses){
        case "roundFemale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "roundMale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "squaredFemale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "squaredMale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "ovalFemale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "ovalMale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "triangularFemale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "triangularMale": $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        default:
            $errorThrown = 1;
            echo "glassesClassification: ERROR";
    } 
    $oExec = $WshShell->Run('wmic process where name="python.exe" CALL setpriority "realtime"', 7, false);
    //Home
    /* switch($glasses){
        case "roundFemale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "roundMale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_rmglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "squaredFemale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_sfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "squaredMale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_smglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "ovalFemale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_ofglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "ovalMale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_omglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "triangularFemale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tfglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        case "triangularMale": $oExec = $WshShell->Run("py.exe C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/label_image.py --graph C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/retrained_graph.pb --labels C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/tf_files/tf_files_tmglasses/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesImage.jpg", 7, false);
            break;
        default:
            $errorThrown = 1;
            echo "glassesClassification: ERROR";
    }
    $oExec = $WshShell->Run('wmic process where name="py.exe" CALL setpriority "realtime"', 7, false); */
    //While per ricerca esistenza file output.txt
    //Quando trovato, leggere il contenuto, interpretarlo se necessario e inviare la risposta al client
    if($errorThrown == 0){    
        $outputpath = "E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesOutput.txt";        //Netizens
        //$outputpath = "C:/Progetti/2019/Tommy Hilfigher Roadshow/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/glassesOutput.txt";        //Home
        while(!file_exists($outputpath)){
            
        }
        sleep(1);
        $outputfile = fopen($outputpath, "r") or die("Unable to open file!");
        $string = fgets($outputfile);
        $perc = (float) fgets($outputfile);
        if($string == "hit\r\n"){
            if($perc < 0.75){
                fclose($outputfile);
                unlink($outputpath);
                echo "miss";
            }
            else{
                fclose($outputfile);
                unlink($outputpath);
                echo "hit";
            }
        }
        else{
            fclose($outputfile);
            unlink($outputpath);
            echo "miss";
        }
    }

?>