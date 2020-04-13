<?php


function addContent($myth, $fact, $fact_desc, $link1, $link2, $video){
    //DEBUG code remove it later

    // var_dump($content);
    // exit;

        // 1.Connect to the DB
        $pdo = Database::getInstance()->getConnection();


        //optional
        //if the upload file is a image, convert it to WebP

        //4. Insert into DB (tbl_movies as well as tbl_mov_category)
        $insert_content_query = 'INSERT INTO tbl_content(myth, fact_title, fact_description, link1, link2, video_id) VALUES (:myth, :fact_title, :fact_description, :link1, :link2, :video_id)';

    $insert_content = $pdo->prepare($insert_content_query);
    $insert_content_result = $insert_content->execute(
        array(
            ':myth'=>$myth,
            ':fact_title'=>$fact,
            ':fact_description'=>$fact_desc,
            ':link1'=>$link1,
            ':link2'=>$link2,
            ':video_id'=>$video
        )
        );

        if($insert_content_result){
            redirect_to('index_admin.php');
        }else{
            return 'The user did not go through';
        }
    
}


function getSingleContent($id)
{
    //TODO: refer the function above to finish this one

    // 
    $pdo = Database::getInstance()->getConnection();
    $get_content_query = "SELECT * FROM tbl_content WHERE id = $id;";

    $results = $pdo->query($get_content_query);

    if ($results) {
        return $results;
    } else {
        return 'There was a problem';
    }
}

function getAllContent(){
    $pdo = Database::getInstance()->getConnection();

    $get_allcontent_query = 'SELECT * FROM tbl_content';
    $get_allcontent_set = $pdo->prepare($get_allcontent_query);
    $get_allcontent_result = $get_allcontent_set->execute();

    $allcontent = array();

    if ($get_allcontent_result) {
        while($content = $get_allcontent_set->fetch(PDO::FETCH_ASSOC)) {
            $currentcontent = array();

            $currentcontent["id"] = $content["id"];
            $currentcontent["myth"] = $content["myth"];
            $currentcontent["fact_title"] = $content["fact_title"];
            $currentcontent["fact_description"] = $content["fact_description"];

            $allcontent[] = $currentcontent;
        }

        return json_encode($allcontent);
    }else{
        return "There was an issue retreiving allcontents";
    }
    
    }

function getContent()
{
    $pdo = Database::getInstance()->getConnection();

    //TODO: run the proper SQL query to fetch the content based on $id
    $query_content = 'SELECT * FROM `tbl_content`';


    //TODO: return the content data if the above query went through
    $get_content = $pdo->prepare($query_content);
    $fetch_content = $get_content->execute();

    // echo $get_content_id->debugDumpParams();
    if ($fetch_content && $get_content->rowCount()) {
        return $get_content;
    } else {
        return false;
    }
}



function updateContent($content){
    //DEBUG code remove it later

    //  var_dump($content);
    //  exit;
        // 1.Connect to the DB
        $pdo = Database::getInstance()->getConnection();
        //optional
        //if the upload file is a image, convert it to WebP

        //4. Insert into DB (tbl_movies as well as tbl_mov_genre)
        $insert_content_query = 'UPDATE tbl_content SET myth = :myth, fact_title = :fact_title, fact_description = :fact_description WHERE id = :id';
    $insert_content = $pdo->prepare($insert_content_query);
    $insert_content_result = $insert_content->execute(
        array(
    ':id'=>$content['id'],
    ':myth'=>$content['myth'],
 ':fact_title'=>$content['fact_title'],':fact_description'=>$content['fact_description']
        )
        );

        //5. if all of above works, redirect content to index.php
        redirect_to('index_admin.php');

    
}

function editContent($id, $myth, $f_title, $f_desc, $link1, $link2, $video){

    // var_dump($id, $p_title, $title, $desc);
    // exit;
    //TODO: set up database connection
    $pdo = Database::getInstance()->getConnection();

    //TODO: Run the proper SQL query to update tbl_content with proper values
    $update_content_query = 'UPDATE tbl_content SET myth = :myth, fact_title = :fact_title,';
    $update_content_query .= ' fact_description = :fact_desc, link1 = :link1, link2 = :link2, video_id = :video WHERE id = :id';
    $update_content_set = $pdo->prepare($update_content_query);
    $update_content_result = $update_content_set->execute(
        array(
            ':myth'=>$myth,
            ':fact_title'=>$f_title,
            ':fact_desc'=>$f_desc,
            ':link1'=>$link1,
            ':link2'=>$link2,
            ':video'=>$video,
            ':id'=>$id
        )
    );

    // echo $update_content_set->debugDumpParams();
    // exit;

    //TODO: if everything goes well, redirect content to index.php
    // Otherwise, return some error message...
    if($update_content_result){
        redirect_to('index_admin.php');
    }else{
        return 'Guess you got canned...';
    }
}

function deleteContent($id){
    $pdo = Database::getInstance()->getConnection();
    $delete_content_query = 'DELETE FROM tbl_content WHERE id = :id';
    $delete_content_set = $pdo->prepare($delete_content_query);
    $delete_content_result = $delete_content_set->execute(
        array(
            ':id'=>$id
        )
    );

    //If everything went through, redirect to admin_deletecontent.php
    //Otherwise, return false
    if($delete_content_result && $delete_content_set->rowCount() > 0){
        redirect_to('admin_contentlist.php');
    }else{
        return false;
    }
}