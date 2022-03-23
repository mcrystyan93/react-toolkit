
import { Box, Container, Grid } from "@mui/material";
import { styled } from "@mui/system";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Users } from "./pages/users/users/users";
import { Sidebar } from "./components/sidebar";
import { Navbar } from "./components/navbar";

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: '64px',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <Sidebar open={isSidebarOpen} onClose={() => setSidebarOpen(false)}></Sidebar>
      <Navbar onSidebarOpen={() => setSidebarOpen(true)}></Navbar>
      <LayoutRoot>
        <Box component="main" sx={{ display: 'flex', flexGrow: 1, py: 3 }}>
          <Container maxWidth={false} sx={{ display: 'flex', flexGrow: '1' }}>
            {/* <Box sx={{
              backgroundColor: 'background.paper',
              flexGrow: 1,
              borderRadius: 1,
              p: 3
            }}> */}
            <Routes>
              <Route path="user-list" element={<Users />}></Route>
            </Routes>
            {/* </Box> */}
          </Container>
        </Box>
      </LayoutRoot>
    </>
  );
}