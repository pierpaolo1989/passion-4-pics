<?php
    // Enter your host name, database username, password, and database name.
    // If you have not set database password on localhost then set empty.
//  $con = mysqli_connect("31.170.166.166","u433487074_pippi1989","Pierpaolo1989NA?","u433487074_p4p");

    $hostname = "localhost";
    $username = "root";
    $password = "";

    try {
        $connect = new PDO("mysql:host=$hostname;dbname=LoginSystem", $username, $password);
        // set the PDO error mode to exception
        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //echo "Database connected successfully";
    } catch(PDOException $e) {
        echo "Database connection failed: " . $e->getMessage();
    }

?>