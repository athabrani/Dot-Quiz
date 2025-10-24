import React from "react";
import { UserPlus, ClipboardCheck, Trophy } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="w-8 h-8 text-blue-500" />,
      title: "1. Sign Up or Log In",
      description:
        "Create your account by entering your name and start your daily quiz journey.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-green-500" />,
      title: "2. Start Your Quiz",
      description:
        "Answer a series of trivia questions to test your knowledge",
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-500" />,
      title: "3. Evaluate Your Performance",
      description:
        "Gain insights into your progress and win exciting rewards.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-green-100 py-20" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-500 mb-12">
          Learn how you can join, play, and win — it’s quick and easy!
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-8 rounded-2xl bg-green-50 hover:bg-yellow-50 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-2"
            >
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
