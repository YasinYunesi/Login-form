// React
import { useContext } from "react";
// React router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Context
import StateProvider from "./Context";
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
      <StateProvider>
        <div className="h-screen overflow-x-hidden bg-dark text-white">
          <Routes>
            <Route path="/" element={<SignUpScreen />} />
            <Route path="/home" element={<WelcomeScreen />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
        </div>
      </StateProvider>
    </Router>
  );
};

export default App;
