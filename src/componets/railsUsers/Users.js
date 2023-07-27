
// useStateフックをimportする
import React, { useState } from 'react';
import axios from "axios"


export default function Users() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    
    const handleSubmit = (event) => {
             //追加
        axios.post("http://35.73.195.40/users/signup",
             {
                 user: {
                    name:name,
                     email: email,
                     password: password,
                     password_confirmation: passwordConfirmation
                 }
             },
             { withCredentials: true }
         ).then(response => {
             console.log("users res", response)
         }).catch(error => {
             console.log("users error", error)
         })
         event.preventDefault()
 
    }
    


    return (
        <div  className="signup">
            {/* 追加 */}
            <form onSubmit={handleSubmit}className='users'>
                <div className='signup_body'>
                    <p>新規登録</p>      
                    <p><lable >Name:</lable></p>
                    <p>
                    <input 
                            type="name"
                            name="name"
                            placeholder="name"
                            value={name}
                            onChange={event => setName(event.target.value)}

                        />
                    </p>
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
                        <input
                            type="password"
                            name="password_confirmation"
                            placeholder="確認用パスワード"
                            value={passwordConfirmation}
                            onChange={event => setPasswordConfirmation(event.target.value)}
                        />
                    </p>  
                    <p>
                    <button className="button "type="submit">登録</button>
                    </p>     
                </div>
            </form>    
        </div>
    )
}
