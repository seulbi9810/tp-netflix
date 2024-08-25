<?php
    header('Content-Type:text/plain; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // client가 보낸 json은 파일로 받기에 이를 읽어들여야 함
    $jsonData= file_get_contents('php://input');

    // json parsing ---> associate array
    $data= json_decode($jsonData, true);  //두번째 파라미터 true : 연관배열 변환 여부
    $userid= $data['userid'];
    $password= $data['password'];

    $db = mysqli_connect('localhost','sharar','a1s2d3f!','sharar');
    mysqli_query($db, 'set names utf8');

    $sql = "SELECT * FROM netflix WHERE userid = '$userid' AND password = '$password'";
    $result = mysqli_query($db, $sql);
    $conut= mysqli_num_rows($result);
    
    if($conut > 0){
        $board= mysqli_fetch_array($result, MYSQLI_ASSOC);
        $userid = $board['userid'];

        echo $userid;
    }else echo "실패";
    if($result) {
       echo "200"; 
    } else {
        echo "203";
    }

    mysqli_close($db);
?>