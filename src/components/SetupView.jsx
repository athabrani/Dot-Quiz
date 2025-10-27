import React from "react";

export default function SetupView({
  user,
  settings,
  fetchQuestions,
  resetSavedState,
  onLogout,
}) {
  const capitalizeName = (name) => {
    if (!name) return "";
    return name
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join(" ");
  };

  const getInitial = (name) => (!name ? "?" : name.trim().charAt(0).toUpperCase());


  const totalTasks = 7;
  const completedTasks = settings?.progress || 7;
  const progressPercent = Math.min((completedTasks / totalTasks) * 100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-400 via-teal-300 to-green-200 flex flex-col items-center py-10 font-sans text-gray-900 relative overflow-hidden">

      <div className="absolute top-20 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full blur-2xl"></div>

      <header className="w-11/12 max-w-5xl flex justify-between items-center mb-10 relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md border-2 border-white flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white drop-shadow-md">
              {getInitial(user?.username)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white drop-shadow-md">
              Hai, {capitalizeName(user?.username)}
            </h1>
            <p className="text-white/90 text-sm drop-shadow-sm">
              Ready to challenge your brain today?
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="bg-red-500/70 hover:bg-red-600/90 text-white px-5 py-2 rounded-lg font-semibold transition shadow-md backdrop-blur-md"
        >
          Logout
        </button>
      </header>

 
      <section className="w-11/12 max-w-5xl bg-white/75 backdrop-blur-lg rounded-2xl p-6 shadow-lg mb-8 border border-white/40 transition hover:shadow-xl">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg font-bold text-emerald-900">Daily Task</h2>
          <span className="text-sm text-gray-600">
            {totalTasks} Questions
          </span>
        </div>


        <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden mb-3 shadow-inner">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-400 h-3 rounded-full transition-all duration-700"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700 font-medium">
          <span>Progress: {completedTasks} / {totalTasks}</span>
          <span>{Math.round(progressPercent)}%</span>
        </div>
      </section>


      <section className="w-11/12 max-w-5xl mb-8 relative z-10">
        <div className="mb-4 text-left">
          <h3 className="text-xl font-bold text-white drop-shadow-md">Pick a Category</h3>
          <p className="text-white/90 text-sm">
            Choose a topic that matches your passion.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
          {[
            { name: "Football", icon: "⚽" },
            { name: "Science", icon: "🔬" },
            { name: "Animal", icon: "🐾" },
            { name: "Movie", icon: "🎬" },
            { name: "Music", icon: "🎵" },
          ].map((item, index) => (
            <div
              key={index}
              onClick={() => fetchQuestions(item.name)}
              className="bg-white/25 hover:bg-white/40 hover:-translate-y-1 transition-all duration-300 p-5 rounded-xl flex flex-col items-center text-white shadow-lg cursor-pointer backdrop-blur-md"
            >
              <span className="text-4xl mb-2 drop-shadow-md">{item.icon}</span>
              <p className="text-sm font-semibold drop-shadow-sm">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="w-11/12 max-w-5xl mb-10 relative z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white drop-shadow-md">More Quiz</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: "Language Quiz", icon: "🧠", questions: 15, players: "24.7K" },
            { title: "Exam Quiz", icon: "🧭", questions: 12, players: "12.5K" },
          ].map((game, i) => (
            <div
              key={i}
              className="bg-white/85 backdrop-blur-lg rounded-2xl shadow-md p-6 flex justify-between items-center hover:shadow-xl hover:-translate-y-1 transition-all border border-white/40"
            >
              <div className="flex items-center gap-4">
                <div className="text-4xl">{game.icon}</div>
                <div>
                  <h4 className="text-lg font-bold text-emerald-900">{game.title}</h4>
                  <p className="text-sm text-gray-600">{game.questions} Questions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-600 mb-1">{game.players} Players</p>
                <button
                  onClick={fetchQuestions}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md transition"
                >
                  Start
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
