<?php

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require './PHPMailer/src/Exception.php';
    require './PHPMailer/src/PHPMailer.php';
    require './PHPMailer/src/SMTP.php';

    $email_to = $_POST['mailSendTo'];

    //$email_to = "andrea.giugni@netizens.it";

    $email_subject = "Tommy Hilfigher Magic Mirror";

    $imgdata = base64_decode(preg_replace('#^data:image/\w+;base64,#i', '', $_POST['imagebase64']));

    $imgfilepath = "E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/mailImage.jpg";

    file_put_contents($imgfilepath,$imgdata);

    $mail = new PHPMailer(true);                                  // Passing `true` enables exceptions
        $mail->SMTPOptions = array(
            'ssl' => array(
                'verify_peer' => false,
                'verify_peer_name' => false,
                'allow_self_signed' => true
            )
        );
        try {
                                                                  //Server settings
            $mail->SMTPDebug = 2;                                 // Enable verbose debug output
            $mail->isSMTP();                                      // Set mailer to use SMTP
            $mail->Host = 'authsmtp.register.it';                 // Specify main and backup SMTP servers
            $mail->SMTPAuth = true;                               // Enable SMTP authentication
            $mail->Username = 'smtp@per-net.it';                  // SMTP username
            $mail->Password = 'P3r-N3t2018.';                     // SMTP password
            $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
            $mail->Port = 465;                                    // TCP port to connect to

            //Recipients
            $mail->setFrom('claudio.dellavedova@netizens.it', 'Claudio Dellavedova');
            $mail->addAddress($email_to);
            //$mail->addReplyTo('info@example.com', 'Information');
            //$mail->addCC('cc@example.com');
            //$mail->addBCC('bcc@example.com');

            //Attachments
            $mail->addAttachment('E:/Claudio/Progetti/2019/2019-01-19008-THRoadshow/new_web_app/2019-01-19008-throadshow-new_web_app/userimages/mailImage.jpg', 'magicMirror.jpg');    // Optional name

            //Content
            $mail->isHTML(true);                                  // Set email format to HTML
            $mail->Subject = $email_subject;
            $mail->Body    = '<b>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.<b/> Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
            $mail->AltBody = 'Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

            $mail->send();
            echo 'Message has been sent';
        } catch (Exception $e) {
            echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
        }

?>