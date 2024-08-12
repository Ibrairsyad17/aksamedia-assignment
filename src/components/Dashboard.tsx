import React, { useState, useEffect } from "react";

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  return <h1>Dashboard</h1>;
};

export default Dashboard;
