import React, { useRef } from 'react';
import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Signup.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const userRef = useRef(null);
    const passwordRef = useRef(null);
    const loginNavigate = useNavigate();

    const submitPost = (event) => {
        event.preventDefault();

        const userid = userRef.current.value;
        const password = passwordRef.current.value;

        const data = JSON.stringify({
            userid,
            password,
        });

        console.log('Sending data:', data); // 디버깅을 위해 콘솔에 출력

        fetch('http://sharar.dothome.co.kr/Netflix/Netflix/backend/sign.php', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: data
        })
        .then(res => {
            console.log('Response:', res); // 응답 디버깅
            return res.text();
        })
        .then(text => {
            console.log('Response text:', text); // 응답 텍스트 디버깅
            alert(text);
            loginNavigate('/login');
        })
        .catch(error => {
            console.error('Fetch error:', error); // 에러 디버깅
            alert('에러:' + error);
        });
    };

    return (
        <div className='sign'>
            <div className='sign-box'>
                <h1>회원가입</h1>
                <br />
                <Form onSubmit={submitPost}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control ref={userRef} type="text" placeholder="아이디" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="비밀번호" />
                    </Form.Group>
                    <br />
                    <Button className="btn-lg" type='submit' variant="primary">회원가입</Button>{' '}
                </Form>
                <div>
                    <br />
                    <h4>간편 회원가입</h4>
                    <br />
                    <GoogleLoginButton onClick={() => alert("Google login clicked")} />
                    <InstagramLoginButton onClick={() => alert("Instagram login clicked")} />
                    <AppleLoginButton onClick={() => alert("Apple login clicked")} />
                </div>
            </div>
        </div>
    );
};

export default Signup;