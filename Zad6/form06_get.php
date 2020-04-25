<?php
session_start();
if(array_key_exists("message", $_SESSION)) {
    $message = $_SESSION['message'];
    echo "<p>$message</p>";
    $_SESSION['message'] = "";
}
$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
if (!$link) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$sql = "SELECT * FROM pracownicy";
$result = $link->query($sql);
foreach ($result as $v) {
    echo $v["ID_PRAC"] . " " . $v["NAZWISKO"] . "<br/>";
}
print <<<KONIEC
 <a href="form06_post.php">Dodaj</a>
KONIEC;
?>