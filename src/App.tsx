import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import React from "react";
import Footer from "./components/Footer";
import SignInPage from "./pages/SignInPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={Homepage()}/>
      <Route path="/signIn" element={SignInPage()}/>
      <Route path="/signup" element={SignupPage()}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
