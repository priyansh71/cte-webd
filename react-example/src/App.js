import React from 'react';
import Header from "./components/Header";
import { Routes, Route, Link } from 'react-router-dom';
import ToDo from "./components/ToDo";
import "./App.css";

const App = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={
          <div>
            <Link to="/header">Go to Header</Link>
            <Link to="/todo">Go to To-do list</Link>
          </div>
        } />
        <Route path="/header" element={<Header title="To-do" /> } />
        <Route path="/todo" element={<ToDo/> } />
      </Routes>
    </div>

  );
};

export default App;