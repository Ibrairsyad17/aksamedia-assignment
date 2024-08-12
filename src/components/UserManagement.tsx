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
  const [newUsername, setNewUsername] = useState("");
  const [editUsername, setEditUsername] = useState("");
  const [selectedUser, setSelectedUser] = useState("");

  const handleAddUser = () => {
    onAddUser(newUsername);
    setNewUsername("");
  };

  const handleUpdateUser = () => {
    onUpdateUser(selectedUser, editUsername);
    setEditUsername("");
    setSelectedUser("");
  };

  return (
    <div>
      <h2>User Management</h2>
      <input
        type="text"
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
        placeholder="New Username"
      />
      <button onClick={handleAddUser}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user}>
            {user}
            <button onClick={() => onDeleteUser(user)}>Delete</button>
            <button onClick={() => setSelectedUser(user)}>Edit</button>
          </li>
        ))}
      </ul>
      {selectedUser && (
        <div>
          <input
            type="text"
            value={editUsername}
            onChange={(e) => setEditUsername(e.target.value)}
            placeholder="Edit Username"
          />
          <button onClick={handleUpdateUser}>Update User</button>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
