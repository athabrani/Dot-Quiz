import React from "react";

export default function ResultView({ questions, answers, fetchQuestions, resetSavedState }) {
  const correct = answers.filter((a, i) => a === questions[i].correct_answer).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Hasil Kuis</h2>
      <p>Jumlah Soal: {questions.length}</p>
      <p>Benar: {correct}</p>
      <p>Salah: {answers.length - correct}</p>
      <p>Dijawab: {answers.length}</p>

      <div className="mt-6 flex gap-4">
        <button
          onClick={fetchQuestions}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Main Lagi
        </button>
        <button
          onClick={resetSavedState}
          className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Reset Progress
        </button>
      </div>
    </div>
  );
}
