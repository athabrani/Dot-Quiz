import React from "react";
import useQuizState from "../hooks/useQuizState";
import LoginView from "../components/LoginView";
import SetupView from "../components/SetupView";
import QuizView from "../components/QuizView";
import ResultView from "../components/ResultView";
import Loading from "../components/LoadingPage";

export default function Quiz() {
  const {
    user,
    status,
    login,
    logout,
    resetSavedState,
    fetchQuestions,
    selectAnswer,
    finishQuiz,
    restartQuiz,
    settings,
    questions,
    currentIndex,
    answers,
    timeLeft,
    error,
  } = useQuizState();

  return (
    <div className="min-h-screen">
      <main className="mx-auto">
        {!user &&
        (<div className="fixed inset-0 z-50">
         <LoginView onLogin={login} />
         </div>
         )}
        {user && status === "idle" && (
          <SetupView
            user={user}
            settings={settings}
            fetchQuestions={fetchQuestions}
            resetSavedState={resetSavedState}
            onLogout={logout}
          />
        )}
        {user && status === "loading" && <Loading />}
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
            restartQuiz={restartQuiz}
            resetSavedState={resetSavedState}
          />
        )}
      </main>
    </div>
  );
}
