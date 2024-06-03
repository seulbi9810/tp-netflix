<?php
    header('Content-Type: application/json; charset=utf-8');
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    // OPTIONS 요청에 대한 응답 처리
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        exit(0);
    }

    $jsonData = file_get_contents('php://input');
    $data = json_decode($jsonData, true);

    if ($data) {
        $userid = $data['userid'];
        $password = $data['password'];

        $db = mysqli_connect('localhost', 'sharar', 'a1s2d3f!', 'sharar');
        mysqli_query($db, 'set names utf8');

        $sql = "INSERT INTO netflix(userid, password) VALUES('$userid', '$password')";
        $result = mysqli_query($db, $sql);

        mysqli_close($db);

        if ($result) {
            echo json_encode(["message" => "회원가입이 완료되었습니다. 로그인 해주세요 \n계정: " . $userid]);
        } else {
            echo json_encode(["error" => "회원가입에 실패했습니다."]);
        }
    } else {
        echo json_encode(["error" => "유효하지 않은 데이터입니다."]);
    }
?>