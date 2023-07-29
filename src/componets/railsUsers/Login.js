
// useStateフックをimportする
import React, { useState } from 'react';
import axios from "axios"


export default function Login(props) {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
             //追加
        axios.post("http://35.73.195.40/login",
             {
                 user: {
                     email: email,
                     password: password,
                    
                 }
             },
             { withCredentials: true }
         ).then(response => {
            if (response.data.logged_in) {
                props.handleSuccessfulAuthentication(response.data)
            }
                // 変更
                console.log("login response: ", response)
         }).catch(error => {
             console.log("login responser", error)
         })
         event.preventDefault()
 
    }
    


    return (
        <div  className="signup">
            {/* 追加 */}
             {/* onSubmit、onChangeイベントを追加 */}
            <form onSubmit={handleSubmit} className='users'>
                <div className='signup_body'> 
                <p>ログイン</p>
                
                    <p><lable >Email</lable></p>
                    <p>   
                    <input 
                            type="email"
                            name="email"
                            placeholder="メールアドレス"
                            value={email}
                            onChange={event => setEmail(event.target.value)}

                        />
                    </p>    
                    <p><lable >Password</lable></p>
                        <p>
                        <input 
                            type="password"
                            name="password"
                            placeholder="パスワード"
                            value={password}
                            onChange={event => setPassword(event.target.value)}

                        />
                    </p> 
                    <p><lable >Password_confirmation</lable></p>
              
                    <p>
                    <button className="button "type="submit">ログイン</button>
                    </p>     
                </div>
            </form>    
        </div>
    )
}
