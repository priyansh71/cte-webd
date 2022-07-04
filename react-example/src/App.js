import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import "./App.css";
// import Todo from "./components/ToDo";
import List from './components/List';

const App = () => {

  return (
    <div>
      <Header title="Hello" />
      <List />
      {/* <Todo /> */}
    </div>

  );
};

export default App;