import React from "react";

export default function SetupView({ settings, fetchQuestions, resetSavedState }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Pengaturan Kuis</h2>
      <button
        onClick={fetchQuestions}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
      >
        Mulai Kuis
      </button>
      <button
        onClick={resetSavedState}
        className="ml-4 bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
      >
        Reset Progress
      </button>
    </div>
  );
}
