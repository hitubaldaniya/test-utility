import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = 'white ';
      document.body.style.color = 'black';
      showAlert('Dark mode has been enabled', 'success');
    } else {
      setMode("dark");
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert('Light mode has been enabled', 'success');
    }
  }

  return (
    <>
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces, " showAlert={showAlert} />} />
          <Route exact path="/about" element={<About />} />
      </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
