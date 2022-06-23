import "./App.css";
import Create from "./components/create";
import Update from "./components/update";
import Read from "./components/read";
import Navbar  from "./components/navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2 className="main-header text-3xl py-8">React Crud Operations</h2>
      <Navbar/>
    
      <Routes>
        <Route path="/create" element={<Create />} />
        <Route path="/read" element={<Read />} />
        <Route path="/Update/:idList" element={<Update />} />
      </Routes>
 
    </div>
  );
}

export default App;
