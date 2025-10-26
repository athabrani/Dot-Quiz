import React from "react";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-400 via-teal-400 to-green-300 relative overflow-hidden">
      {/* Decorative Blur Elements */}
      <div className="absolute w-72 h-72 bg-white/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl bottom-10 right-10 animate-pulse"></div>

      {/* Glassmorphic Loader Box */}
      <div className="relative z-10 flex flex-col items-center bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-10 shadow-2xl">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mb-6"></div>

        {/* Loading Text */}
        <p className="text-white text-lg font-semibold tracking-wider animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  );
}
