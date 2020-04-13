<?php 
    require_once '../load.php';
    confirm_logged_in();

    $users = getContent();
    // $users = $pdo->prepare($user);
    // $users->execute();


    if(!$users){
        $message = 'Failed to get user list';
    }


    if (isset($_POST['submit'])) {
        $content = array(
            'id' => $_POST['id'],
            'myth' => $_POST['myth'],
            'fact_title' => $_POST['fact_title'],
            'fact_description' => $_POST['fact_description']
        );
    
    
        $message = updateContent($content);
    }

    if(isset($_GET['id'])){
        $id = $_GET['id'];
        $delete_result = deleteContent($id);

        if($delete_result){
            $message = 'Failed to delete user';
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Delete User</title>
</head>
<body>
    <h2>Edit or delete content from the site!</h2>
    <?php echo !empty($message)?$message:'';?>
    <table>
        <thead>
            <tr>
                <th>Myth/Fact ID</th>
                <th>Myth</th>
                <th>Fact title</th>
                <th>Fact Description</th>
                <th>Link1</th>
                <th>Link2</th>
                <th>Video embed links</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
        <?php while($row = $users->fetch(PDO::FETCH_ASSOC)):?>
            <tr>
                <td><?php echo $row["id"];?></td>
                <td><?php echo $row["myth"];?></td>

                <td><?php echo $row["fact_title"];?></td>

                <td><?php echo $row["fact_description"];?></td>

                <td><?php echo $row["link1"];?></td>

                <td><?php echo $row["link2"];?></td>

                <td><?php echo $row["video_id"];?></td>
                
                <td><a href="admin_editcontent.php?id=<?php echo $row['id'];?>">Edit</a></td>
                
                <td><a href="admin_contentlist.php?id=<?php echo $row['id'];?>">Delete</a></td>
            </tr>
        <?php endwhile;?>
        </tbody>
    </table>
</body>
</html>