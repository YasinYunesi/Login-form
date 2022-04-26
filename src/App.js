// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Screens
import SignUpScreen from "./screens/SignUpScreen";
import LogInScreen from "./screens/LogInScreen";

// UI
import "./App.css";

const App = () => {
  // JSX //////////////////////////////////
  return (
    <Router>
      <div className="h-screen overflow-y-hidden bg-dark text-white">
        <Routes>
          <Route path="/" element={<SignUpScreen />} />
          <Route path="/log-in" element={<LogInScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
