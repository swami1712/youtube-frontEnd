import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [isOpen, setIsopen] = useState(false);
  const menuClick = () => {
    if (isOpen) {
      setIsopen(false);
    } else {
      setIsopen(true);
    }
  };
  const hideSidebar = () => {
    if (isOpen) {
      setIsopen(false);
    }
  };
  return (
    <div className="App">
      <Header menuClick={menuClick} />
      <div className="AppView">
        <Sidebar isOpen={isOpen} />
        <RecommendedVideos hideSidebar={hideSidebar} />
      </div>
    </div>
  );
}

export default App;
