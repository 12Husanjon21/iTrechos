import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainSection from "./components/MainSection";

function App() {
  return (
    <>
      <Router>
        <main className="flex flex-col min-h-screen bg-inherit ">
          <Header />
          <Routes>
            <Route path="/" element={<HeroSection />} />
            <Route path="main" element={<MainSection />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
