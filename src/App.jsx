import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Controls from "./components/Controls";
import ThemeToggle from "./components/ThemeToggle";
import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen font-poppins">
      <div className="blob" style={{top: '10%', left: '10%'}}></div>
      <div className="blob"></div>
      <div className="blob"></div>
      <Header />
      <main className="relative">
        <About />
        <Portfolio />
        <Contact />
      </main>

      {/* Copyright footer */}
      <footer className="w-full border-t border-gray-700 mt-8 py-6 bg-transparent text-center text-sm text-[#9aa6b2]">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Shedrach Morris Uzoigwe. All rights reserved.</p>
        </div>
      </footer>

      <Controls />
      <ThemeToggle />
    </div>
  );
}
