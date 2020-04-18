<?php session_start(); ?>

<!DOCTYPE html>
<html>

<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>

<body>
    <?php
        require("funkcje.php");
        if(isSet($_POST["czas"])) {
            setcookie("nazwa", $_POST["czas"], time() + $_POST["czas"], "/");
            echo "Poprawnie stworzono ciasteczko";
        }
    ?>
    <a href="index.php">Wstecz</a>
</body>

</html>