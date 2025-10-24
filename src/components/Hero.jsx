import React from "react";
import { Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-green-100 py-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left: Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Daily Quiz, Daily Insight - <span className="text-green-400">Play Today!</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            DOT Quiz App is a daily trivia and quiz platform that brings 
            exciting challenges and rewards every day. Test your knowledge and earn your bonus!
          </p>
          <a
            href="/quiz"
            className="inline-flex bg-green-400 hover:bg-green-500 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-md transition duration-200"
          >
            <Play className="mr-2" />
            Play Now
          </a>
        </div>

        {/* Right: Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/Hands.png"
            alt="Quiz Illustration"
            className="w-72 md:w-96 animate-float"
          />
        </div>
      </div>
    </section>
  );
}
