import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import React from "react";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={Homepage()}/>
    </Routes>
    </div>
  );
}

export default App;
