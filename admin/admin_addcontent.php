<?php

require_once '../load.php';
confirm_logged_in();

//TODO: 
// 1. refer how we built the add user page
// 2. check database and find out how the form looks like
// 3. build the form

if(isset($_POST['submit'])){
    $myth = trim($_POST['myth']);
    $fact = trim($_POST['fact_title']);
    $fact_desc = trim($_POST['fact_description']);
    $link1 = trim($_POST['link1']);
    $link2 = trim($_POST['link2']);
    $video = trim($_POST['video_id']);

    if(empty($myth) || empty($fact) || empty($fact_desc)){
        $message = 'Please fill the required fields';
    }else{
        $message = addContent($myth, $fact, $fact_desc, $link1, $link2, $video);
    }
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Movie</title>
</head>
<body>
    
    <?php echo !empty($message)?$message:'';?>
    <form action="admin_addcontent.php" method="post" enctype="multipart/form-data">

            <label>Myth:</label>
            <input type="text" name="myth" value=""><br><br>

            <label>FACT title:</label>
            <input type="text" name="fact_title" value=""><br><br>

            <label>Fact Description:</label>
            <textarea name="fact_description" cols="50" rows="20"></textarea><br><br>

            <label>Link1:</label>
            <input type="text" name="link1" value=""><br><br>
            
            <label>Link2:</label>
            <input type="text" name="link2" value=""><br><br>

            <label>Video Embededed:</label>
            <input type="text" name="video_id" value=""><br><br>

            <button type="submit" name="submit">Add Content</button><br><br><br>

    </form>

</body>
</html>