import React from 'react'
import Users from './railsUsers/Users'
import Login from './railsUsers/Login'


export default function Home(props) {
        // 追加
        const handleSuccessfulAuthentication = (data) => {
            props.handleLogin(data)
            props.history.push("/dashboard")
        }
           // handleLogoutClickイベントハンドラ
    const handleLogoutClick = () => {
        axios.delete("http://35.73.195.40/logout", { withCredentials: true })
            .then(response => {
                props.handleLogout()
            }).catch(error => console.log("ログアウトエラー", error))
    }
    
    return (
        <div className="signup_body">
            <h1>Home</h1>
             <h2>ログイン状態: {props.loggedInStatus}</h2>
             
               {/* ボタン追加 */}
            <button onClick={handleLogoutClick}>ログアウト</button>
            <Users handleSuccessfulAuthentication={handleSuccessfulAuthentication}/>
            <Login handleSuccessfulAuthentication={handleSuccessfulAuthentication} />      
        </div>
    )
}
