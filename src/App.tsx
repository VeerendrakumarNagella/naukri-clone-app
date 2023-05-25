import React, { FC, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App: FC = () => {
  const [auth, setauth] = useState(false);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header auth={auth} />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </BrowserRouter>

      {/* <Header auth={auth} /> */}
      {/* <Login />
      <Register /> */}
    </div>
  );
};

export default App;
