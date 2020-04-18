<?php
    if(array_key_exists("zalogowanyImie", $_SESSION)) {
        $_SESSION['zalogowany'] = 1;
        header("Location: user.php");
    }
    else {
        header("Location: index.php");
    }
?>