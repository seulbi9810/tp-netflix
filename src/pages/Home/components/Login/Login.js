import React, { useRef } from 'react';
import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Login.css';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const useridRef= useRef(null)
    const passwordRef= useRef(null)
    const loginNavigate= useNavigate()

    const submitPost= (event)=>{
        event.preventDefault()
    
        const userid= useridRef.current.value
        const password = passwordRef.current.value
 
    
        const data= JSON.stringify({
            userid,
            password
        })

        fetch('http://sharar.dothome.co.kr/Netflix/Netflix/backend/login.php',{
            method:'POST',
            headers: {
                "Content-Type":'application/json'
            },
            body: data
        })
        .then(res=>res.text())
        .then(text=> {
             if(text === '200') {
                alert('로그인 되었습니다.')
                loginNavigate('/')
             }else alert('로그인에 실패했습니다')
           
        }
        )
        .catch(error=>alert('에러:'+error))
    }


   
    return (
        <div className='login'>
            <div className='login-box'>
                <h1>로그인</h1>
                <br />
                <Form onSubmit={submitPost}>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control ref={useridRef} type="text" placeholder="아이디" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Control ref={passwordRef} type="password" placeholder="비밀번호" />
                    </Form.Group>
                    <br/>
                    <Button onClick={()=>loginNavigate('/')} className="btn-lg" type='submit' variant="primary">로그인</Button>{' '}
                    <Button onClick={()=>loginNavigate('/signup')} className="btn-lg" type='submit' variant="primary">회원가입</Button>{' '}

                </Form>
                <div>
                    <br />
                    <h4>간편 로그인</h4>
                    <br />
                    <GoogleLoginButton onClick={() => alert("Google login clicked")} />
                    <InstagramLoginButton onClick={() => alert("Instagram login clicked")} />
                    <AppleLoginButton onClick={() => alert("Apple login clicked")} />
                </div>
            </div>
        </div>
    )
}

export default Login