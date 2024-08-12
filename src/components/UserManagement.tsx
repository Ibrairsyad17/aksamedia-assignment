import React, { useState } from "react";

interface UserManagementProps {
  users: string[];
  onAddUser: (username: string) => void;
  onDeleteUser: (username: string) => void;
  onUpdateUser: (oldUsername: string, newUsername: string) => void;
}

const UserManagement: React.FC<UserManagementProps> = ({
  users,
  onAddUser,
  onDeleteUser,
  onUpdateUser,
}) => {
  return <h1>Managemen</h1>;
};

export default UserManagement;
