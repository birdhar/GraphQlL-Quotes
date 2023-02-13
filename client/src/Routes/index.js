import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Authentication/Login/Login";
import Signup from "../Authentication/Signup/Signup";
import ParticleBackground from "../particle/Particle";
import Profile from "../profile/Profile";

function index() {
  return (
    <div>
      {/* <Login /> */}
      {/* <Signup /> */}
      <Profile />
    </div>
  );
}

export default index;
