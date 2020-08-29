import React from 'react';
import MainContainer from "./components/MainContainer/MainContainer";
import "./App.css"
// import "./components/CreateNewTodo/CreateNewTodo"

import LogInPage from "./components/LogInPage/LogInPage"
// import CreateNewTodo from './components/CreateNewTodo/CreateNewTodo';

const App=()=>{
  
  return (
    <div id="background">
      <MainContainer/>
      <LogInPage/>
    </div>
  );
}

export default App;
