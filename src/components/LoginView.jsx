import React, { useState } from "react";

export default function LoginView({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg-wave.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Welcome Challenger to DOT Quiz
        </h2>
        <input
          type="text"
          placeholder="Masukkan nama"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={() => username && onLogin(username)}
          className="w-full bg-green-400 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600 transition"
        >
          Mulai
        </button>
      </div>
    </div>
  );
}
