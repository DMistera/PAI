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
		echo "<h1>Nasz system</h1>";

		if(isSet($_POST["wyloguj"])) {
			$_SESSION['zalogowany'] = 0;
		}

		if(isSet($_POST["zaloguj"])) {
			$login = test_input($_POST["login"]);
			$haslo = $_POST["haslo"];
			if(checkOsoba($login, $haslo, $osoba1) ) {
				$_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
			}
			else if(checkOsoba($login, $haslo, $osoba2) ) {
				$_SESSION["zalogowanyImie"] = $osoba2->imieNazwisko;
			}
			require("logowanie.php");
		}

		if(isSet($_COOKIE["nazwa"])) {
			$ciasteczko = $_COOKIE['nazwa'];
			echo "Ciasteczko na wartość $ciasteczko";
		}
	?>
	<form action="index.php" method="POST">
		<fieldset>
			<label for="login">Login:</label>
			<input type="text" id="login" name="login"><br>
			<label for="haslo">Hasło:</label>
			<input type="password" id="haslo" name="haslo"><br>
			<input type="submit" name="zaloguj" value="Zaloguj">
		</fieldset>
	</form>
	<form action="cookie.php" method="POST">
		<fieldset>
			<input type="number" name="czas"><br>
			<input type="submit" name="utworzCookie" value="Utworz Cookie">
		</fieldset>
	</form>

	<a href="user.php">User</a>
</body>

</html>