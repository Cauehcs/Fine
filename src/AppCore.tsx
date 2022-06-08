import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SideBar } from "./components/sidebarpage";
import { Home } from "./pages/home/home";

export function AppCore() {
  return (
    <>
      <SideBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}
