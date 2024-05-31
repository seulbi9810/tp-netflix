<?php
    header('Content-Type:text/plain; charset=utf-8');

    // POST 요청에서 아이디와 비밀번호를 가져옴
    $userid = $_POST['userid'];
    $password = $_POST['password'];

    // MySQL DB와 연결
    $db= mysqli_connect('localhost','sharar','a1s2d3f!','sharar');
    mysqli_query($db, 'set names utf8');

     // 'netflix'테이블에 값을 저장하는 쿼리문
    $sql="INSERT INTO netflix(userid, password) VALUES('$userid','$password')";
    $result= mysqli_query($db, $sql);

   
    // 회원가입 성공 메시지 반환
    if($result){
        echo "<h2>회원가입 완료 되었습니다. 축하합니다~ </h2>";

    }else{
        echo "<h2>회원가입 중에 오류가 발생했습니다. 다시 시도해주시기 바랍니다.</h2>";
    }
   
?>


<!-- <?php
// header('Content-Type: application/json; charset=utf-8');

// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     // POST 요청에서 아이디와 비밀번호를 가져옴
//     $userid = $_POST['userid'];
//     $password = $_POST['password'];

//     // MySQL DB와 연결
//     $db= mysqli_connect('localhost','sharar','a1s2d3f!','sharar');
//     mysqli_query($db, 'set names utf8');
    
//     // 이후 요청을 처리한 결과를 반환합니다.
//     $response = array();
//     // 여기에 필요한 응답 내용을 추가하세요
//     $response['message'] = '회원가입이 성공적으로 완료되었습니다.';
//     echo json_encode($response);
// } else {
//     // POST 요청이 아닌 경우에는 오류 응답을 반환합니다.
//     http_response_code(405); // Method Not Allowed
//     echo json_encode(array("error" => "POST 메서드만 허용됩니다."));
// }
?> -->

