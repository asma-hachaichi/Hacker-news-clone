import React from "react";
import NavBar from "./Components/navbar.js";
import Footer from "./Components/footer.js";
import Login from "./Components/login.js";
import NewStories from "./Components/newStories.js";
import TopStories from "./Components/topStories.js";
import UnknownUser from "./Components/unknownUser.js";
import ForgotPassword from "./Components/forgotPassword.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<><NewStories/></>} />
          <Route exact path="/newest" element={<><NewStories/></>} />
          <Route exact path="/top" element={<><TopStories/></>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/forgot" element={<ForgotPassword/>} />
          <Route exact path="/x" element={<UnknownUser/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
