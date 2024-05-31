<<<<<<< HEAD
// import React, { useState } from 'react';
// import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
// import { Button } from 'react-bootstrap';
// import Form from 'react-bootstrap/Form';
// import './Signup.css';


// const Signup = () => {
//     const [userid, setUserId] = useState('');
//     const [password, setPassword] = useState('');

//     const submitPost = (event) => {
//         event.preventDefault();
//     }
//         const data = JSON.stringify({
//             userid,
//             password,
//         });

//         fetch('../../../../backend/sign.php', {
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json'
//             },
//             body: data
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('서버 응답이 실패하였습니다.');
//             }
//             return response.json(); // JSON으로 파싱하지 않음
//         })
//         .then(json => {
//             alert('응답결과: ' + json.message);
//             // 추가적인 처리 가능
//         })
//         .catch(error => {
//             console.error('에러:', error);
//             alert('에러: ' + error.message);
//         });

//     return (
//         <div className='sign'>
//             <div className='sign-box'>
//                 <h1>회원가입</h1>
//                 <br />
//                 <Form onSubmit={submitPost}>
//                     <Form.Group className="mb-3" controlId="formGroupEmail">
//                         <Form.Control
//                             type="text"
//                             placeholder="아이디"
//                             value={userid}
//                             onChange={(e) => setUserId(e.target.value)}
//                         />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formGroupPassword">
//                         <Form.Control
//                             type="password"
//                             placeholder="비밀번호"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                         />
//                     </Form.Group>
//                     <br />
//                     <Button className="btn-lg" type='submit' variant="primary">회원가입</Button>{' '}
//                 </Form>
//                 <div>
//                     <br />
//                     <h4>간편 회원가입</h4>
//                     <br />
//                     <GoogleLoginButton onClick={() => alert("Google login clicked")} />
//                     <InstagramLoginButton onClick={() => alert("Instagram login clicked")} />
//                     <AppleLoginButton onClick={() => alert("Apple login clicked")} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

import React, { useRef } from 'react';
import { AppleLoginButton, GoogleLoginButton, InstagramLoginButton } from "react-social-login-buttons";
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import './Signup.css';

const Signup = () => {

    const userid= useRef(null) 
    const password= useRef(null) 

    const submitPost = (event) => {
        event.preventDefault();

        const data = JSON.stringify({
            userid,
            password,
        });

        fetch('/backend/sign.php', {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: data
        })
        .then( (response)=>{ return response.text() } )
        .then( (text)=> alert('응답결과:' +text) )
        .catch( (error)=> alert('에러 : ' + error)) 
    };


    return (
        <div className='sign'>
            <div className='sign-box'>
                <h1>회원가입</h1>
                <br />
                <Form onSubmit={submitPost}>
                    <input placeholder='아이디' ref={userid}></input>
                    <input placeholder='비밀번호' ref={password}></input>
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

