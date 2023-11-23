import React from "react";
import MainLayout from "./layout/MainLayout.jsx";
import { Outlet } from "react-router";

function App() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
