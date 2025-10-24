import React from "react";
import { Gift, CircleDollarSign, Crown, ArrowRight } from "lucide-react";

export default function QuizFeatures() {
  const options = [
    {
      icon: <Gift className="w-6 h-6 text-green-600" />,
      title: "Daily Trivia",
      description: "Fun daily quizzes to test your knowledge",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-yellow-500" />,
      title: "Test your IQ!",
      description: "Play and win exciting rewards every day!",
    },
    {
      icon: <Crown className="w-6 h-6 text-blue-500" />,
      title: "Play Like King",
      description: "Challenge others and prove your mastery!",
    },
  ];

  return (
     <section className="bg-gradient-to-t from-white to-green-100 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg">
          <div className="bg-green-500 text-white md:w-1/3 flex flex-col justify-center items-center p-8 rounded-l-2xl">
            <h2 className="text-2xl font-bold mb-2">Prove yourself worthy!</h2>
            <p className="text-sm text-green-100 text-center">
              Play, Challenge, and Learn
            </p>
          </div>

        <div className="flex flex-col w-full md:w-2/3 p-6 gap-4 bg-white rounded-r-2xl">
          {options.map((opt, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white hover:bg-green-50 hover:shadow-md transition-all duration-200 cursor-pointer rounded-xl p-5 border border-transparent hover:border-green-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-full">{opt.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {opt.title}
                  </h3>
                  <p className="text-sm text-gray-500">{opt.description}</p>
                </div>
              </div>
              {/* <div className="flex items-center gap-1 text-green-500 font-medium">
                Start Now <ArrowRight className="w-4 h-4" />
              </div> */}
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
