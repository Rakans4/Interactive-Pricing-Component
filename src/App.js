import './App.css';
import { Component } from 'react';
import Card from './components/card';
import Header from './components/header';

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <Card />
      </div>
    );
  }
}

export default App;
