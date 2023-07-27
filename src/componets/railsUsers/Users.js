
// useStateフックをimportする
import React, { useState } from 'react';
import axios from "axios"


export default function Users() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    
    const handleSubmit = (event) => {
             //追加
        axios.post("http://35.73.195.40/signup",
             {
                 user: {
                     email: email,
                     password: password,
                     password_confirmation: passwordConfirmation
                 }
             },
             { withCredentials: true }
         ).then(response => {
             console.log("registration res", response)
         }).catch(error => {
             console.log("registration error", error)
         })
         event.preventDefault()
 
    }
    


    return (
        <div>
           <p>新規登録</p>
            {/* 追加 */}
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="メールアドレス"
                    value={email}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="パスワード"
                    value={password}
                />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="確認用パスワード"
                    value={passwordConfirmation}
                />

                <button type="submit">登録</button>
            </form>
        </div>
    )
}
