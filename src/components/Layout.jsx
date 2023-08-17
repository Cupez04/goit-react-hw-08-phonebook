import { Suspense } from "react";
import NavBar from "./NavBar/NavBar";
import { Outlet } from "react-router-dom";
import LoadingPage from "../pages/Loading";
import { Container } from "@mui/material";


const Layout = () => {
  return (
    <Container maxWidth='lg' style={{ borderRadius: '20px',
    border: '2px solid #ffc107', 
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.1)',
    padding: '10px',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',}}>
      <NavBar />
        <Suspense fallback={<LoadingPage />}>
          <Outlet />
        </Suspense>

    </Container>
  );
};

export default Layout;
