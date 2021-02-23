import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Recommended from "./Recommended";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="yt__body">
        <Sidebar />
        <Recommended />
      </div>
    </div>
  );
}

export default App;
