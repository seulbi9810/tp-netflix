import React, { useState } from 'react';
import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate(); // useNavigate 사용

    const onClick = () => {
        // 버튼 클릭 시 실행될 코드
    }
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/backend/login.php', { username, password });
            // 로그인 성공 시 처리
            console.log(response.data);
        } catch (error) {
            // 로그인 실패 시 처리
            setError('아이디 또는 비밀번호가 잘못되었습니다.');
        }
    }

    const handleNavigate = (path) => {
        navigate(path);
      };

    return (
        <div className='login'>
            <div className='login-box'>
                <h1>로그인</h1>
                <br />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="아이디" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="비밀번호" />
                    </Form.Group>
                    <br/>
                    <Button onClick={() => handleNavigate('/')} className="btn-lg" type='submit' variant="primary">로그인</Button>{' '}
                    <Button onClick={() => handleNavigate('/signup')} className="btn-lg" type='submit' variant="primary">회원가입</Button>{' '}
                </Form>
                {error && <div>{error}</div>}
                <div>
                    <br />
                    <h4>간편 로그인</h4>
                    <br />
                    <GoogleLoginButton onClick={() => alert("Hello")} />
                    <InstagramLoginButton onClick={() => alert("Hello")} />
                    <AppleLoginButton onClick={() => alert("Hello")} />
                </div>
            </div>
        </div>
    )
}

export default Login