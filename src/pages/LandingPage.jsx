import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import NavbarDemo from "../components/Home-nav";
import QuizFeatures from "../components/Options";
import HowItWorks from "@/components/Howitworks";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/");
  };

  return (
  <div className="w-full font-sans overflow-hidden">
    <NavbarDemo/>
    <section id="Quiz">
      <Hero />
    </section>
    <section id="Features">
      <QuizFeatures />
    </section>
    <section id="How">
      <HowItWorks />
    </section>
  </div>
  );
}
