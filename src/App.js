import React, { useState } from "react";
import "./App.css";
import Quiz from "./Quiz";
import QuizStart from "./QuizStart";
import {BrowserRouter as Router,Route} from 'react-router-dom'


function App() {
  
  return (
    <Router>
      <Route path="/" component={QuizStart} exact></Route>;
      <Route path="/Quiz" component={Quiz} exact></Route>;
    </Router>
  );
}

export default App;
