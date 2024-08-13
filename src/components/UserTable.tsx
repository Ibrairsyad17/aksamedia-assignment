import React from "react";

interface UserTableProps {
  users: string[];
  onDeleteUser: (username: string) => void;
  setSelectedUser: (username: string) => void;
}

const UserTable: React.FC<UserTableProps> = ({
  users,
  onDeleteUser,
  setSelectedUser,
}) => {
  return (
    <div className="flex flex-col w-full">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden shadow dark:border-gray-800">
            <table className="min-w-full divide-y divide-gray-200 bg-white dark:bg-black dark:divide-gray-800">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-gray-100"
                  >
                    Nama Pengguna
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-gray-100"
                  >
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                {users.map((user) => (
                  <tr key={user}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {user}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right flex space-x-2 items-end justify-end">
                      <button
                        onClick={() => onDeleteUser(user)}
                        className="text-white bg-red-500 hover:bg-red-600 px-2.5 text-xs py-1 rounded-md"
                      >
                        Hapus
                      </button>
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="text-white bg-indigo-500 hover:bg-indigo-600 px-2.5 text-xs py-1 rounded-md"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTable;
