import React from 'react';
import Display from "./components/Snacks";
import Header from './components/header/navbar';
import './components/css/Scrollbar.css';
import {BrowserRouter,Route} from 'react-router-dom';
import Cart from './components/cart'
import Card from './components/mentors/Webmentor'
import Home from "./components/Home"
import ML from './components/mentors/mlmentors';
import Android from './components/mentors/androidmentor';
import Connections from './components/mentors/connections';
import 'bootstrap/dist/css/bootstrap.min.css';
import Chat from './components/Chat.js/chatting'
function App() {
 
  return (
     <BrowserRouter>
    <div className="container-fluid">
      <Header />
     
      <br/>
      <Route path="/" exact component={Home} />
      <Route path="/snackers" component={Display} />
      <Route path="/cart" component={Cart} />
      <Route path="/web" component={Card} />
      <Route path="/ml" component={ML} />
      <Route path="/android" component={Android} />
      <Route path="/connect" component={Connections} />
      <Route path="/chat" component={Chat}/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
