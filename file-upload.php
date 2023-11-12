<?php 
    session_start();
    // Database connection
    require("config/db.php");
    
    if(isset($_POST["submit"])) {
        // Set image placement folder
        $target_dir = "img_dir/";
        // Get file path
        $target_file = $target_dir . basename($_FILES["fileUpload"]["name"]);
        // Get file extension
        $imageExt = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
        // Allowed file types
        $allowd_file_ext = array("jpg", "jpeg", "png");
        

        if (!file_exists($_FILES["fileUpload"]["tmp_name"])) {
           $resMessage = array(
               "status" => "alert-danger",
               "message" => "Select image to upload."
           );
        } else if (!in_array($imageExt, $allowd_file_ext)) {
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "Allowed file formats .jpg, .jpeg and .png."
            );            
        } else if ($_FILES["fileUpload"]["size"] > 2097152) {
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "File is too large. File size should be less than 2 megabytes."
            );
        } else if (file_exists($target_file)) {
            $resMessage = array(
                "status" => "alert-danger",
                "message" => "File already exists."
            );
        } else {
       
        $image = $_FILES["fileUpload"]["tmp_name"];
        $name = $_FILES["fileUpload"]["name"];
        $image = base64_encode(file_get_contents(addslashes($image)));
        $username = $_SESSION["username"];
        $stmt = $connect->prepare($sql);
        $sql = "INSERT INTO images (user_id, filename, file) VALUES ('paolo','$name', '$image')";
                 if($stmt->execute()){
                    $resMessage = array(
                        "status" => "alert-success",
                        "message" => "Image uploaded successfully."
                    );                 
                 }else {

                 }
         
            
        }

    }

?>