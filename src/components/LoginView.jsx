import React, { useState } from "react";

export default function LoginView({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />
      <button
        onClick={() => username && onLogin(username)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Mulai
      </button>
    </div>
  );
}
