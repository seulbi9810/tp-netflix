<?php
session_start();

// 데이터베이스 연결 설정
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

// 데이터베이스 연결
$conn = new mysqli($servername, $username, $password, $dbname);

// 연결 확인
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// 로그인 처리
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
    $result = $conn->query($sql);

    if ($result->num_rows == 1) {
        // 로그인 성공
        $_SESSION['login_user'] = $username;
        header("location: welcome.php"); // 로그인 후 이동할 페이지
    } else {
        $error = "아이디 또는 비밀번호가 잘못되었습니다.";
    }
}
?>

<?php
// 이 부분에는 사용자 인증 및 세션 처리 로직을 구현해야 합니다.
// 여기서는 간단한 예시를 사용하겠습니다.

// POST 요청에서 아이디와 비밀번호를 가져옴
$username = $_POST['username'];
$password = $_POST['password'];

// 예시: 사용자가 "admin" 아이디와 "password" 비밀번호를 입력했다고 가정
if ($username === 'admin' && $password === 'password') {
    // 로그인 성공 메시지 반환
    echo json_encode(['message' => '로그인 성공']);
} else {
    // 로그인 실패 메시지 반환
    echo json_encode(['message' => '아이디 또는 비밀번호가 잘못되었습니다.']);
}
?>