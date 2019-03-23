import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import WeatherForm from './WeatherForm';
import logo from './logo.svg';
import './App.css';

const Header = () => (
  <header className="App-header">
    <h1>Image as a Service</h1>
    <h4>Create dynamic images easily</h4>
  </header>
)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Container className="App-container">
          <WeatherForm/>
        </Container>
      </div>
    );
  }
}

export default App;
