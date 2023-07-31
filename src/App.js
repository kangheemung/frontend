import './App.css';
import React, { useState ,useEffect} from 'react';
import axios from "axios";
import { BrowserRouter,Route, Switch} from 'react-router-dom';
import Home from './componets/Home'
import Header from './componets/Header';
import Content from './componets/Content';
import Dashboard  from './componets/Dashboard';
import Posts from'./componets/railsPosts/Posts';
import List from './componets/starwars/List';
import Users from'./componets/railsUsers/Users';


function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("未ログイン")
  const [user, setUser] = useState({})
  // 追加する
  const handleLogin = (data) => {
    setLoggedInStatus("ログインなう")
    setUser(data.user)
  }
  // 追加
  const handleLogout = () => {
        setLoggedInStatus("未ログイン")
        setUser({})}
  // 追加
  useEffect(() => {
    checkLoginStatus()
  })
    // 追加
    const checkLoginStatus = () => {
      axios.get("http://35.73.195.40:8080/logged_in", { withCredentials: true })
       
      .then(response => {

        if (response.data.logged_in && loggedInStatus === "未ログイン") {
          setLoggedInStatus("ログインなう")
          setUser(response.data.user)
        } else if (!response.data.logged_in && loggedInStatus === "ログインなう") {
          setLoggedInStatus("未ログイン")
          setUser({})
        }
        console.log("ログイン状況", response)
      }).catch(error => {
        console.log("ログインエラー", error)
      })
    }
  return (
    <>
        <Header /> 
        <main className="body">
            <Content />
            <BrowserRouter> 
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/users" component={Users}/>
                <Route
                      exact path={"/"}
                      render={props => (
                      <Home 
                      { ...props } 
                       handleLogin={handleLogin}
                       handleLogout={handleLogout} 
                       loggedInStatus={loggedInStatus} 
                       />
                      )}
                 />
                    <Route
                      exact path={"/"}
                      render={props => (
                      <Dashboard { ...props } loggedInStatus={loggedInStatus} />
                            )} 
                        />
              </Switch>
            </BrowserRouter> 
            
            <div className="posts">
              
              <List />
              <Posts />
              
            </div>
        </main>
        <footer></footer>
    </>
  )}

export default App;