import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import IncomePage from "./pages/IncomePage.jsx";
import ExpensePage from "./pages/ExpensePage.jsx";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/income" element={<IncomePage />} />
          <Route path="/expense" element={<ExpensePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
