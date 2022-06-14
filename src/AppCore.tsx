import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { SideBar } from "./components/sidebarpage";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { NotFound } from "./pages/notFound";
import { Register } from "./pages/register";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export function AppCore() {
  return (
    <Container>
      {/* <SideBar /> */}
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}
