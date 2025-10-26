import React, { useState } from "react";
import { User, Sparkles } from "lucide-react";

export default function LoginView({ onLogin }) {
  const [username, setUsername] = useState("");

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-400 via-teal-300 to-green-200 bg-center bg-no-repeat">
     
      <a
        href="/"
        className="absolute top-12 left-12 flex items-center space-x-2 hover:opacity-80 transition"
      >
        <img src="/edu.png" alt="DOT Quiz Logo" className="w-8 h-8" />
        <span className="text-md font-extrabold text-gray-800 tracking-wide">
          <span className="text-white">DOT</span> Quiz
        </span>
      </a>

      <div className="relative bg-white/90 p-8 rounded-2xl shadow-2xl w-full max-w-sm backdrop-blur-sm border border-white/20">
        <div className="absolute -top-6 right-6 bg-green-400 p-3 rounded-full shadow-md">
          <Sparkles className="text-white w-5 h-5" />
        </div>

        <h2 className="text-2xl font-extrabold mb-2 text-center text-gray-800">
          Welcome Challenger!
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Masuk untuk mulai tantangan harianmu di{" "}
          <span className="font-semibold text-green-500">DOT Quiz</span>.
        </p>

        <div className="relative mb-4">
          <User className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Masukkan nama kamu"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="pl-10 border border-gray-200 p-2 rounded-md text-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Tombol */}
        <button
          onClick={() => username && onLogin(username)}
          className={`w-full px-4 py-2 rounded-md font-semibold text-white transition ${
            username
              ? "bg-green-400 hover:bg-green-500"
              : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Mulai
        </button>

        {/* Footer kecil */}
        <p className="text-xs text-gray-400 text-center mt-6">
          © {new Date().getFullYear()} Athabrani - Play. Learn. Challenge.
        </p>
      </div>
    </div>
  );
}
