import React from "react";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

export default function ResultView({ questions, answers, restartQuiz, resetSavedState }) {
  const correct = answers.filter((a, i) => a === questions[i].correct_answer).length;
  const incorrect = answers.length - correct;
  const total = questions.length;
  const score = Math.round((correct / total) * 100);

  // Warna berdasarkan skor
  const scoreColor =
    score >= 80 ? "text-green-600" : score >= 50 ? "text-yellow-500" : "text-red-500";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-emerald-400 via-teal-300 to-green-200 px-6 py-12 font-sans">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border border-white/30">
        {/* Judul */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2 drop-shadow-sm">
           Hasil Kuis Kamu
        </h2>
        <p className="text-gray-600 mb-8">
          Selesai! Berikut hasil performa kamu dalam kuis ini:
        </p>

        {/* Skor utama */}
        <div className="flex flex-col items-center mb-8">
          <div
            className={`text-6xl font-extrabold ${scoreColor} drop-shadow-md animate-pulse`}
          >
            {score}%
          </div>
          <p className="text-gray-700 text-sm mt-2 font-medium">Skor Akhir</p>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-3 gap-4 mb-8 text-gray-700">
          <div className="bg-white/70 p-4 rounded-2xl shadow-sm border border-white/40">
            <div className="text-sm font-medium text-gray-500">Total Soal</div>
            <div className="text-lg font-semibold">{total}</div>
          </div>
          <div className="bg-green-100 p-4 rounded-2xl shadow-sm border border-green-200">
            <div className="flex items-center justify-center gap-1 text-sm font-medium text-green-700">
              <CheckCircle size={16} /> Benar
            </div>
            <div className="text-lg font-semibold text-green-700">{correct}</div>
          </div>
          <div className="bg-red-100 p-4 rounded-2xl shadow-sm border border-red-200">
            <div className="flex items-center justify-center gap-1 text-sm font-medium text-red-700">
              <XCircle size={16} /> Salah
            </div>
            <div className="text-lg font-semibold text-red-700">{incorrect}</div>
          </div>
        </div>

        {/* Tombol aksi */}
        <div className="flex justify-center gap-4">
          <button
            onClick={restartQuiz}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-5 py-3 rounded-full font-semibold shadow-md transition-all duration-300 transform hover:-translate-y-1"
          >
            <RotateCcw size={18} />
            Main Lagi
          </button>
          <button
            onClick={resetSavedState}
            className="flex items-center gap-2 bg-white/70 hover:bg-white text-gray-700 px-5 py-3 rounded-full font-semibold shadow-sm border border-gray-300 transition-all duration-300 transform hover:-translate-y-1"
          >
            Reset Progress
          </button>
        </div>

       
      </div>
    </div>
  );
}
