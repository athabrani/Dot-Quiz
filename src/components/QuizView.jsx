import React, { useState } from "react";
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
  const [showConfirm, setShowConfirm] = useState(false); // kontrol modal

  const current = questions[currentIndex];
  if (!current) return null;

  const options = [...current.incorrect_answers, current.correct_answer].sort();
  const currentAnswer = answers[currentIndex];
  const isAnswered = !!currentAnswer;

  const getButtonClass = (opt) => {
    if (!isAnswered) return "bg-white hover:bg-emerald-50 text-emerald-700";
    if (opt === current.correct_answer)
      return "bg-green-100 border-green-500 text-green-700 font-semibold";
    if (opt === currentAnswer)
      return "bg-red-100 border-red-500 text-red-700 font-semibold";
    return "bg-white text-gray-600";
  };

  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-emerald-400 via-teal-300 to-green-200 font-sans text-gray-800 px-4 py-8 relative">
      {/* Header Timer */}
      <div className="text-center mb-6">
        <div className="text-teal-800 text-sm font-medium mb-1">Waktu tersisa</div>
        <div className="text-2xl font-bold text-white drop-shadow-sm">{timeLeft}s</div>
      </div>

      {/* Progress Bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex justify-between text-sm mb-1 text-teal-900 font-medium">
          <span>
            Pertanyaan {currentIndex + 1} dari {questions.length}
          </span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
        <div className="w-full bg-white/40 h-2 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-2 bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
      </div>

      {/* Kartu Pertanyaan */}
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 text-center border border-white/40">
        <h2 className="text-lg font-semibold mb-6 text-gray-800 leading-relaxed">
          {decodeHtml(current.question)}
        </h2>

        {/* Pilihan Jawaban */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {options.map((opt, idx) => (
            <button
              key={idx}
              onClick={() => onSelect(opt)}
              disabled={isAnswered}
              className={`w-full border rounded-xl p-3 font-medium transition duration-300 ${getButtonClass(
                opt
              )}`}
            >
              {decodeHtml(opt)}
            </button>
          ))}
        </div>
      </div>

      {/* Tombol Akhiri */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowConfirm(true)}
          className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-6 py-2 rounded-full font-semibold shadow-md transition backdrop-blur-sm border border-white/30"
        >
          Akhiri Kuis
        </button>
      </div>

      {/* Modal Konfirmasi */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white/90 rounded-2xl shadow-xl p-8 text-center max-w-sm w-full border border-white/30 backdrop-blur-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Apakah Anda yakin ingin menyelesaikan kuis?
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              Setelah dikonfirmasi, jawaban tidak dapat diubah.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-5 py-2 rounded-lg bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium transition"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setShowConfirm(false);
                  onFinish();
                }}
                className="px-5 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white font-semibold shadow-md transition"
              >
                Ya, Selesai
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
