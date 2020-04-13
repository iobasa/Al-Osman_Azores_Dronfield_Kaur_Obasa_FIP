<?php 
    require_once '../load.php';
    confirm_logged_in();

    $tbl = 'tbl_content';

    $users = getAll($tbl);
    if(!$users){
        $message = 'Failed to get user list';
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
    <h2>Time to delete some users...</h2>
    <?php echo !empty($message)?$message:'';?>
    <table>
        <thead>
            <tr>
                <th>Myth/Fact ID</th>
                <th>Myth</th>
                <th>Fact title</th>
                <th>Fact Description</th>
            </tr>
        </thead>
        <tbody>
        <?php while($user = $users->fetch(PDO::FETCH_ASSOC)):?>
            <tr>
                <td><?php echo $user["id"];?></td>
                <td><?php echo $user["myth"];?></td>
                <td><?php echo $user["fact_title"];?></td>
                <td><?php echo $user["fact_description"];?></td>
                <td><a href="admin_deletecontent.php?id=<?php echo $user['id'];?>">Delete</a></td>
            </tr>
        <?php endwhile;?>
        </tbody>
    </table>
</body>
</html>