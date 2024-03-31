import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import EmployeeList from "./pages/EmployeeList";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import Header from "./components/Header";
import UpdateEmployee from "./pages/UpdateEmployee";
import EmployeeInd from "./pages/EmployeeInd";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/update/:id" element={<UpdateEmployee />} />
        <Route path="/employee/:id" element={<EmployeeInd />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
