<?php
// 이 부분에는 사용자의 회원가입 정보를 데이터베이스에 저장하는 로직을 구현해야 합니다.
// 여기서는 간단한 예시를 사용하겠습니다.

// POST 요청에서 아이디와 비밀번호를 가져옴
$username = $_POST['username'];
$password = $_POST['password'];

// 예시: 데이터베이스에 회원 정보 저장 (여기서는 간단한 파일에 저장하는 예시)
$file = 'users.txt';
$current = file_get_contents($file);
$current .= "$username:$password\n";
file_put_contents($file, $current);

// 회원가입 성공 메시지 반환
echo json_encode(['message' => '회원가입 성공']);
?>