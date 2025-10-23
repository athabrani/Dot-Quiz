import React from "react";
import decodeHtml from "../utils/decodeHtml";

export default function QuizView({
  user,
  questions,
  currentIndex,
  answers,
  timeLeft,
  onSelect,
  onFinish,
  onLogout,
}) {
  const current = questions[currentIndex];

  if (!current) return null;

  const options = [...current.incorrect_answers, current.correct_answer].sort();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between mb-2">
        <div>Soal {currentIndex + 1} / {questions.length}</div>
        <div>Waktu tersisa: {timeLeft}s</div>
      </div>

      <h2 className="text-lg font-semibold mb-4">{decodeHtml(current.question)}</h2>

      <div className="space-y-2">
        {options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => onSelect(opt)}
            className="block w-full border p-2 rounded hover:bg-blue-50"
          >
            {decodeHtml(opt)}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onLogout}
          className="text-sm text-red-500 hover:underline"
        >
          Logout
        </button>
        <button
          onClick={onFinish}
          className="text-sm text-gray-500 hover:underline"
        >
          Akhiri Kuis
        </button>
      </div>
    </div>
  );
}
