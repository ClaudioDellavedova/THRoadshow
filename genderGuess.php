<?php

    /* exec('python');
    if (exec('echo TEST') == 'TEST'){
        echo 'exec works!';
    } */

    /* $command = escapeshellcmd('/tf_files_bw/label_image.py --graph ./tf_files_bw/retrained_graph.pb --labels ./tf_files_bw/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image ./tf_files/tests/');
    $output = shell_exec($command);
    echo $output; */
    
    // remove the part that we don't need from the provided image and decode it
    $imgdata = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST['imagebase64']));
    
    $imgfilepath = "E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/genderImage.jpg";

    file_put_contents($imgfilepath,$imgdata);

    $WshShell = new COM("WScript.Shell"); 
    $oExec = $WshShell->Run("python.exe E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_gender/label_image.py --graph E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_gender/retrained_graph.pb --labels E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/tf_files/tf_files_gender/retrained_labels.txt --input_layer Placeholder --output_layer final_result --image E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/genderImage.jpg", 7, false);

    //While per ricerca esistenza file output.txt
    //Quando trovato, leggere il contenuto, interpretarlo se necessario e inviare la risposta al client
    $outputpath = "E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/genderOutput.txt";
    while(!file_exists($outputpath)){

    }
    $outputfile = fopen($outputpath, "r") or die("Unable to open file!");
    $string = fgets($outputfile);
    $perc = (float) fgets($outputfile);
    if($perc < 0.9){
        fclose($outputfile);
        unlink($outputpath);
        echo "undefined";
    }
    else{
        fclose($outputfile);
        unlink($outputpath);
        echo $string;
    }

?>