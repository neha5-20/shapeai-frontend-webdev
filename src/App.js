import React from 'react';
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
             <Route path='/' exact component={Home}/>
             <Route path='/about' exact component={About}/>
             <Route path='/gallery' exact component={Gallery}/>
             <Route path='/contact' exact component={Contact}/>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
