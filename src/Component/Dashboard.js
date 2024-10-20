// Dashboard.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import DashboardTable from "./DashboardTable";

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
          <h2>Dashboard</h2>
          <DashboardTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
