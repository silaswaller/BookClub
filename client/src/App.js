import React from "react";
import './App.css';
import AllBooks from "./components/AllBooks";
import OneBook from "./components/OneBook";
import NewBook from "./components/NewBook";
import EditBook from "./components/EditBook";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <nav>
        <div>
          <h1 id="websiteTitle">QUEER BOOK CLUB</h1>
        </div>
        <div id="links">
          <p className="link"><Link to={"/"} style={{ textDecoration: 'none', color: 'black' }}>HOME</Link></p>
          <p className="link"><Link to={"/new"} style={{ textDecoration: 'none', color: 'black' }}>ADD BOOK</Link></p>
        </div>
      </nav>
      <div className="App">
        <Routes>
          <Route element={<AllBooks/>} path="/" />
          <Route element={<NewBook/>} path="/new" />
          <Route element={<OneBook/>} path="/book/:id" />
          <Route element={<EditBook/>} path="/book/edit/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
