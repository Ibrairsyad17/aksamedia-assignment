import React, { useState } from "react";
import SocialMediaLinks from "./SocialMediaLinks.tsx";

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  mode: string;
}

const Login: React.FC<LoginProps> = ({ onLogin, mode }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center space-y-4">
      <div
        className={`mt-7 max-w-sm mx-auto ${
          mode === "light"
            ? "bg-white border-gray-200"
            : "bg-black text-white border-gray-800 shadow-gray-900"
        } border rounded-xl shadow`}
      >
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1
              className={`block text-2xl font-bold ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Welcome Admin!
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
              Halo, Selamat Datang! Silahkan masuk untuk melanjutkan.
            </p>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm mb-2">
                    Username
                  </label>
                  <div className="relative">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      className={`px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        mode === "light"
                          ? ""
                          : "text-white bg-black ring-gray-800"
                      }`}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Masukkan Username"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-sm mb-2">
                      Kata Sandi
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className={`px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:text-sm focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                        mode === "light"
                          ? ""
                          : "text-white bg-black ring-gray-800"
                      }`}
                      required
                      aria-describedby="password-error"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Masukkan Kata Sandi"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                >
                  Masuk ke Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <SocialMediaLinks />
      <blockquote className="text-sm italic font-semibold text-center text-gray-500 w-1/3">
        Thank You for Visiting! - Warm Regards, Ibrahim
      </blockquote>
    </div>
  );
};

export default Login;
