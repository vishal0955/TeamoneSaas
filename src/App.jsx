import { BrowserRouter as Router } from "react-router-dom";
import RoleBasedRoutes from "./routes/RoleBasedRoutes";
import "./styles/sidebar.css"; // Sidebar Styling
import Navbar from "./layout/Navbar";

function App() {



  return (
    <Router>
      {/* <Navbar></Navbar> */}
      <RoleBasedRoutes />
    </Router>
  );
}

export default App;
