import React from "react";
import useQuizState from "./hooks/useQuizState";
import LoginView from "./components/LoginView";
import SetupView from "./components/SetupView";
import QuizView from "./components/QuizView";
import ResultView from "./components/ResultView";

export default function App() {
  const {
    user,
    status,
    login,
    logout,
    resetSavedState,
    fetchQuestions,
    selectAnswer,
    finishQuiz,
    settings,
    questions,
    currentIndex,
    answers,
    timeLeft,
    error,
  } = useQuizState();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="max-w-4xl mx-auto flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">DOT Quiz App</h1>
        <div className="text-sm text-gray-700">
          {user ? `Hai, ${user.username}` : "Belum login"}
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        {!user && <LoginView onLogin={login} />}
        {user && status === "idle" && (
          <SetupView
            user={user}
            settings={settings}
            fetchQuestions={fetchQuestions}
            resetSavedState={resetSavedState}
          />
        )}
        {user && status === "loading" && <div>Memuat soal...</div>}
        {user && status === "running" && (
          <QuizView
            user={user}
            questions={questions}
            currentIndex={currentIndex}
            answers={answers}
            timeLeft={timeLeft}
            onSelect={selectAnswer}
            onFinish={finishQuiz}
            onLogout={logout}
          />
        )}
        {user && status === "finished" && (
          <ResultView
            questions={questions}
            answers={answers}
            settings={settings}
            fetchQuestions={fetchQuestions}
            resetSavedState={resetSavedState}
          />
        )}
      </main>

      <footer className="max-w-4xl mx-auto mt-10 text-center text-sm text-gray-500">
        Built with OpenTDB API. State disimpan secara lokal di browser (localStorage).
      </footer>
    </div>
  );
}
