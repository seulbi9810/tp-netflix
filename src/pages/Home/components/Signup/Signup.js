import React from 'react';
import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Signup.css';

const Signup = () => {

    const onClick = () => {
        // 버튼 클릭 시 실행될 코드
    }

    return (
        <div className='sign'>
            <div className='sign-box'>
                <h1>회원가입</h1>
                <br />
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control type="text" placeholder="아이디" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control type="password" placeholder="비밀번호" />
                    </Form.Group>
                    <br />
                    <Button className="btn-lg" href='/login' type='submit' variant="primary">회원가입</Button>{' '}
                </Form>
                <div>
                    <br />
                    <h4>간편 회원가입</h4>
                    <br />
                    <GoogleLoginButton onClick={() => alert("Hello")} />
                    <InstagramLoginButton onClick={() => alert("Hello")} />
                    <AppleLoginButton onClick={() => alert("Hello")} />
                </div>
            </div>
        </div>
    )
}

export default Signup