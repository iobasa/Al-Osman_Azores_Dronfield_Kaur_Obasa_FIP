<?php 
    require_once '../load.php';
    confirm_logged_in();

    $id = $_GET['id'];
    // $id = mysql_insert_id($_GET['id']);
    
    $user = getSingleContent($id);
    if(!$user){
        $message = 'Failed to get user list';
    }

    if (isset($_POST['submit'])) {
            $id = trim($_POST['id']);
            $myth = trim($_POST['myth']);
            $f_title = trim($_POST['fact_title']);
            $f_desc = trim($_POST['fact_description']);
            $link1 = trim($_POST['link1']);
    $link2 = trim($_POST['link2']);
    $video = trim($_POST['video_id']);
    
    
        $message = editContent($id, $myth, $f_title, $f_desc, $link1, $link2, $video);
    }

    // if(isset($_POST['submit']) && isset($_GET['id'])){
    //     $id = $_GET['id'];
    //     $p_title = trim($_POST['page_title']);
    //     $title = trim($_POST['title']);
    //     $desc = trim($_POST['description']); 

    //     $message = editUser($id, $p_title, $title, $desc);
    // }

    




?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit User</title>
</head>
<body>
    <h2>Edit User</h2>
    <?php echo !empty($message)? $message : '';?>
    <form action="admin_editcontent.php" method="post">
        <?php while($myth = $user->fetch(PDO::FETCH_ASSOC)): ?>

            <label>Myth/Fact id:</label>
            <input type="text" name="id" value="<?php echo $myth['id'];?>"  readonly><br><br>

            <label>Myth:</label>
            <input type="text" name="myth" value="<?php echo $myth['myth'];?>"><br><br>

            <label>FACT title:</label>
            <input type="text" name="fact_title" value="<?php echo $myth['fact_title'];?>"><br><br>

            <label>Fact Description:</label>
            <textarea name="fact_description" cols="50" rows="20"><?php echo $myth['fact_description'];?></textarea><br><br>

            <label>Link 1:</label>
            <input type="text" name="link1" value="<?php echo $myth['link1'];?>"><br><br>

            <label>Link 2:</label>
            <input type="text" name="link2" value="<?php echo $myth['link2'];?>"><br><br>

            <label>Video:</label>
            <input type="text" name="video_id" value="<?php echo $myth['video_id'];?>"><br><br>


            <button type="submit" name="submit">Edit Content</button><br><br><br>


        <?php endwhile;?>
    </form>
</body>
</html>
