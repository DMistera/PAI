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
        if($_SESSION['zalogowany'] != 1) {
            header("Location: index.php");
        }

        if(isSet($_FILES['zdjecie']['name'])){
            $fileName = $_FILES['zdjecie']['name'];
            $currentDir = getcwd();
            if(move_uploaded_file($_FILES['zdjecie']['tmp_name'],$currentDir."\\".$fileName)){
                echo "Pomyslnie zapisano plik";
            }
        }
    ?>
    <img src="zdjecie.jpg" alt="Zdjecie nie znajduje sie jeszcze na serwerze">
    <form action="user.php" method="POST" enctype='multipart/form-data'>
        <input name="zdjecie" type="file">
        <input type="submit" value="Zatwierdz">
    </form>
    <form action="index.php" method="POST">
		<input type="submit" name="wyloguj" value="Wyloguj">
	</form>
    <a href="index.php">Index</a>
</body>

</html>