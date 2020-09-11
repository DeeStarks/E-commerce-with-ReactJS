import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import fire from './config/Fire'
import Home from './Home';
import Login from './Login';
import {ProductProvider} from './Context'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       user: false
    }

    this.authListener = this.authListener.bind(this)
  }

  componentDidMount(){
    this.authListener()
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user})
      }else{
        this.setState({user: false})
      }
    })
  }

  render() {
    return (
      <div className="App">
        {/* {this.state.user ? <ProductProvider><Router></Router></ProductProvider> : <Login />} */}
        <Home />
      </div>
    );
  }
}

export default App;