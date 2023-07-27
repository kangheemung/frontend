import './App.css';
import React from 'react'


import { BrowserRouter,Route, Switch } from 'react-router-dom';

import Button from './Button';
import Home from './componets/Home'
import Header from './componets/Header';
import Content from './componets/Content';
import Dashbord from './componets/Dashbord';
import Posts from'./componets/railsPosts/Posts';
import List from './componets/starwars/List';
import Users from'./componets/railsUsers/Users';

function App() {
  return (
    <>
        <Header /> 
        <main className="body">
            <Content />
    
           
            <BrowserRouter> 
                <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Dashbord" component={Dashbord} />
                <Route path="/users" component={Users}/>
      

                </Switch>
            </BrowserRouter> 
            
            <div className="posts">
              <List />
              <Posts />
              
            </div>
        </main>
        <footer></footer>
    </>
  )
}
export default App;