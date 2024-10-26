// Dashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardTable from "./DashboardTable";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import FileuploaderComp from "./FileuploaderComp";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ display: "flex" }}>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      <div style={{ flexGrow: 1 }}>
        <Header />
        <div style={{ padding: "20px" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DashboardTable />} />
              <Route path="/uploader" element={<FileuploaderComp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
