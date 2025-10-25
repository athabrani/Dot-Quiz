import { useState, useEffect } from "react";
import shuffleArray from "../utils/shuffleArray";

const BASE_URL = "https://opentdb.com/api.php?amount=5&type=multiple";

// Pemetaan kategori lokal → kategori API OpenTDB
const CATEGORY_MAP = {
  football: 21, // Sports
  science: 17, // Science & Nature
  movie: 11, // Film
  music: 12, // Music
  fashion: 9, // General 
};

export default function useQuizState() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);
  const [status, setStatus] = useState(localStorage.getItem("status") || "idle");
  const [questions, setQuestions] = useState(JSON.parse(localStorage.getItem("questions")) || []);
  const [currentIndex, setCurrentIndex] = useState(Number(localStorage.getItem("index")) || 0);
  const [answers, setAnswers] = useState(JSON.parse(localStorage.getItem("answers")) || []);
  const [timeLeft, setTimeLeft] = useState(Number(localStorage.getItem("timer")) || 60);

  // Persist state ke localStorage
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("status", status);
    localStorage.setItem("questions", JSON.stringify(questions));
    localStorage.setItem("index", currentIndex);
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("timer", timeLeft);
  }, [user, status, questions, currentIndex, answers, timeLeft]);

  // Timer logic
  useEffect(() => {
    if (status === "running" && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setStatus("finished");
    }
  }, [status, timeLeft]);

  const login = (username) => {
    setUser({ username });
    setStatus("idle");
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setStatus("idle");
  };

  const resetSavedState = () => {
    localStorage.clear();
    setQuestions([]);
    setAnswers([]);
    setCurrentIndex(0);
    setStatus("idle");
  };

  /**
   * Fetch questions dari API berdasarkan kategori
   * @param {string} category - nama kategori, contoh: "science", "music", "football"
   */
  const fetchQuestions = async (category) => {
    setStatus("loading");

    // cari ID kategori di map
    const categoryId = CATEGORY_MAP[category?.toLowerCase()];
    const url = categoryId ? `${BASE_URL}&category=${categoryId}` : BASE_URL;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const shuffled = data.results.map((q) => ({
        ...q,
        options: shuffleArray([...q.incorrect_answers, q.correct_answer]),
      }));

      setQuestions(shuffled);
      setStatus("running");
      setCurrentIndex(0);
      setAnswers([]);
      setTimeLeft(60);
    } catch (error) {
      console.error("Error fetching quiz:", error);
      setStatus("idle");
    }
  };

  const selectAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setStatus("finished");
    }
  };

  const finishQuiz = () => setStatus("finished");

  return {
    user,
    status,
    login,
    logout,
    resetSavedState,
    fetchQuestions,
    selectAnswer,
    finishQuiz,
    settings: {},
    questions,
    currentIndex,
    answers,
    timeLeft,
  };
}
