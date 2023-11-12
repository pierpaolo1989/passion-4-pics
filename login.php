<!DOCTYPE html>
<html>
<head>
   <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="generator" content="Mobirise v5.2.0, mobirise.com">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1">
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23ffffff%22></rect><path fill=%22%23bd10e0%22 d=%22M18.22 54.78L12.77 54.78L12.77 66.39Q12.44 66.50 11.90 66.63Q11.36 66.77 10.72 66.77L10.72 66.77Q8.34 66.77 8.34 64.77L8.34 64.77L8.34 36.04Q8.34 35.18 8.77 34.72Q9.20 34.26 10.12 33.99L10.12 33.99Q11.69 33.50 13.93 33.29Q16.17 33.07 18.28 33.07L18.28 33.07Q25.13 33.07 28.29 35.96Q31.45 38.85 31.45 43.76L31.45 43.76Q31.45 48.78 28.21 51.78Q24.97 54.78 18.22 54.78L18.22 54.78ZM12.71 51.11L17.95 51.11Q22.27 51.11 24.65 49.33Q27.02 47.54 27.02 43.82L27.02 43.82Q27.02 40.14 24.73 38.44Q22.43 36.74 18.17 36.74L18.17 36.74Q16.71 36.74 15.28 36.88Q13.85 37.01 12.71 37.23L12.71 37.23L12.71 51.11ZM35.88 54.45L51.59 33.61Q52.08 33.50 52.70 33.42Q53.32 33.34 53.81 33.34L53.81 33.34Q54.94 33.34 55.86 33.88Q56.78 34.42 56.78 35.99L56.78 35.99L56.78 54.89L62.18 54.89Q62.34 55.16 62.50 55.62Q62.66 56.08 62.66 56.67L62.66 56.67Q62.66 58.51 60.99 58.51L60.99 58.51L56.78 58.51L56.78 66.61Q56.51 66.71 55.99 66.82Q55.48 66.93 54.89 66.93L54.89 66.93Q52.57 66.93 52.57 65.04L52.57 65.04L52.57 58.51L36.96 58.51Q36.42 58.23 36.01 57.56Q35.61 56.88 35.61 55.97L35.61 55.97Q35.61 55.48 35.69 55.13Q35.77 54.78 35.88 54.45L35.88 54.45ZM52.62 54.89L52.73 37.88L52.62 37.88L40.63 54.89L52.62 54.89ZM78.43 54.78L72.98 54.78L72.98 66.39Q72.65 66.50 72.11 66.63Q71.57 66.77 70.92 66.77L70.92 66.77Q68.55 66.77 68.55 64.77L68.55 64.77L68.55 36.04Q68.55 35.18 68.98 34.72Q69.41 34.26 70.33 33.99L70.33 33.99Q71.90 33.50 74.14 33.29Q76.38 33.07 78.48 33.07L78.48 33.07Q85.34 33.07 88.50 35.96Q91.66 38.85 91.66 43.76L91.66 43.76Q91.66 48.78 88.42 51.78Q85.18 54.78 78.43 54.78L78.43 54.78ZM72.92 51.11L78.16 51.11Q82.48 51.11 84.86 49.33Q87.23 47.54 87.23 43.82L87.23 43.82Q87.23 40.14 84.94 38.44Q82.64 36.74 78.38 36.74L78.38 36.74Q76.92 36.74 75.49 36.88Q74.06 37.01 72.92 37.23L72.92 37.23L72.92 51.11Z%22></path></svg>" />
    <meta name="description" content="Contents for amateur photographers">
    <meta name="keywords" content="Photo, presets, courses, repost, galleries">
    <meta name="author" content="Pierpaolo Di Dato">
    <title>Login</title>
    <link rel="stylesheet" href="assets/tether/tether.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-grid.min.css">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap-reboot.min.css">
    <link rel="stylesheet" href="assets/dropdown/css/style.css">
    <link rel="stylesheet" href="assets/socicon/css/styles.css">
    <link rel="stylesheet" href="assets/theme/css/style.css">
    <link rel="preload" as="style" href="assets/mobirise/css/mbr-additional.css">
    <link rel="stylesheet" href="assets/mobirise/css/mbr-additional.css" type="text/css">
    <link rel="stylesheet" href="style.css" type = "text/css" />
    <style>
    .back {
  background: #e2e2e2;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
}

.div-center {
  width: 500px;
  height: 500px;
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  max-width: 100%;
  max-height: 100%;
  overflow: auto;
  padding: 1em 2em;
  border-bottom: 2px solid #ccc;
  display: table;
}

div.content {
  display: table-cell;
  vertical-align: middle;
}
    </style>
</head>
<body>
<?php
    require('config/db.php');
    session_start();
    // When form submitted, check and create user session.
    if (isset($_POST['username'])) {
        $username = stripslashes($_REQUEST['username']);    // removes backslashes
        $password = stripslashes($_REQUEST['password']);
        $query = "SELECT * FROM users WHERE username = :username AND password = :password";  
        $statement = $connect->prepare($query);  
        $statement->execute(  
                  array(  
                        'username'     =>     $username,  
                        'password'     =>     md5($password)  
                  )  
                );  
                $count = $statement->rowCount(); 
                if($count > 0)  
                {  
                     $_SESSION["username"] = $username;  
            // Redirect to user dashboard page
            header("Location: ./dashboard.php");
        } else {
            echo "<div class='form'>
                  <h3>Incorrect Username/password.</h3><br/>
                  <p class='link'>Click here to <a href='login.php'>Login</a> again.</p>
                  </div>";
        }
    } else {
?>
<section class="menu menu3 cid-spaizPbfoR" once="menu" id="menu3-7">

<nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
    <div class="container">
        <div class="navbar-brand">
            <span class="navbar-logo">
                <a href="index.html">
                    <img src="logo.png" alt="passion4pics" style="height: 3rem;">
                </a>
            </span>
            <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7"
                    href="index.html">passion4pics</a></span>
        </div>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
            data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false"
            aria-label="Toggle navigation">
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li class="nav-item"><a class="nav-link link text-black display-4" href="#">
                        About us</a></li>
                <li class="nav-item"><a class="nav-link link text-black display-4"
                        href="presets.html">Presets</a></li>
                <li class="nav-item"><a class="nav-link link text-black display-4" href="filters.html"
                        target="_blank">Filters</a>
                </li>
            </ul>
            <div class="icons-menu">
                <a class="iconfont-wrapper"
                    href="https://www.facebook.com/_passion4pics-110868584418609/about/?ref=page_internal"
                    target="_blank">
                    <span class="p-2 mbr-iconfont socicon-facebook socicon"></span>
                </a>
                <a class="iconfont-wrapper" href="https://www.instagram.com/_passion4pics/" target="_blank">
                    <span class="p-2 mbr-iconfont socicon-instagram socicon"></span>
                </a>

            </div>

        </div>
    </div>
</nav>
</section>



  <div class="back">


<div class="div-center">


  <div class="content">


    <h3>Login</h3>
    <hr />
    <form method = "post" name = "login"> 
      <div class="form-group">
        <label for="exampleInputEmail1">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Username" name = "username" autofocus = "true">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Password" name = "password">
      </div>
      <button type="submit" class="btn btn-primary" name = "submit">Login</button>
      <hr />
      <button type="button" class="btn btn-link" onclick="window.location.href='registration.php';">Signup</button>
      <button type="button" class="btn btn-link">Reset Password</button>

    </form>

  </div>


  </span>
</div>


<!--<div class = "container col-lg-6 offset-lg-3">
    <form class="form-group" method="post" name="login">
        <h1 class="login-title">Login</h1>
        <div class = "form-group">
        <input type="text" class="login-input form-control" name="username" placeholder="Username" autofocus="true"/>
</div>
<div class="form-group">
        <input type="password" class="login-input form-control" name="password" placeholder="Password"/>
        </div>
        
        <input type="submit" value="Login" name="submit" class="login-button btn btn-primary"/>
        <p class="link"><a href="registration.php">New Registration</a></p>
      </div>
  </section>
  <section class="footer7 cid-spaiEcN4DU" once="footers" id="footer7-1">
        <div class="container">
            <div class="media-container-row align-center mbr-white">
                <div class="col-12">
                    <p class="mbr-text mb-0 mbr-fonts-style display-7">
                        © Copyright 2021 passion4pics - All Rights Reserved<br>
                        <a href="mailto:info@passion4pics.net">Email: info@passion4pics.net</a>
                    </p>
                </div>
            </div>
        </div>

<?php
    }
?>
    <script>
    function validate() {
        var $valid = true;
        document.getElementById("user_info").innerHTML = "";
        document.getElementById("password_info").innerHTML = "";
        
        var userName = document.getElementById("user_name").value;
        var password = document.getElementById("password").value;
        if(userName == "") 
        {
            document.getElementById("user_info").innerHTML = "required";
        	$valid = false;
        }
        if(password == "") 
        {
        	document.getElementById("password_info").innerHTML = "required";
            $valid = false;
        }
        return $valid;
    }
    </script>
</body>
</html>