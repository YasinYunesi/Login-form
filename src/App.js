// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components / Screens
import SignUpScreen from "./screens/SignUpScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import WelcomeScreen from "./screens/WelcomeScreen";

// UI
import "./App.css";

const App = () => {
  // JSX //////////////////////////////////
  return (
    <Router>
      <div className="h-screen overflow-x-hidden bg-dark text-white">
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/sign-up" element={<SignUpScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
