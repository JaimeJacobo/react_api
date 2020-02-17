import React, {Component} from 'react';
import Contact from './components/Contact'
import ContactList from './components/ContactList'
import './App.css';

class App extends Component {



  renderState(){
    return(
      <div>
        <Contact name="Jaime" image="" online />
        <Contact name="Jaime" image="" online />
        <Contact name="Jaime" image="" online />          
      </div>
    )
  }
  


  render(){
    return (
      <div id="App" className="App">
        <ContactList />
      </div>
    );    
  }

}

export default App;
