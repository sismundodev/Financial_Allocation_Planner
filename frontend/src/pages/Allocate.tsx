// Allocate.tsx
import React, { useState, useEffect } from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";

export default function Allocate() {
  const [income, setIncome] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!income || income === "0") return;
    console.log("Calculating allocation for:", income);
  };

  // Handle global "Enter" key press behavior as hinted in the UI
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Enter" && income && income !== "0") {
        console.log("Calculating allocation for:", income);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [income]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto border-x border-gray-100">
      {/* Top Header */}
      <Header title="Allocate" />

      {/* Main Container */}
      <main className="p-6 flex-1 space-y-6">
        {/* Step Indicator & Header Text */}
        <div className="space-y-2">
          <span className="inline-block bg-gray-100 text-[9px] font-bold text-gray-400 px-2 py-0.5 rounded tracking-wider uppercase">
            Step 1 of 1
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            How much did you earn?
          </h1>
          <p className="text-gray-400 text-xs font-medium leading-relaxed">
            Enter your net (after-tax) income for this period. Your income
            changes every month — so does your allocation.
          </p>
        </div>

        {/* Input Form Box */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-white border border-black rounded-[20px] p-5 shadow-sm min-h-[140px] flex flex-col justify-between relative">
            <label className="block text-[10px] font-bold text-gray-400 tracking-wider uppercase">
              Net Income - June 2026
            </label>

            {/* Simulated Custom Large Number Input Container */}
            <div className="flex items-center mt-3 relative w-full">
              {/* Dollar Sign */}
              <span className="text-4xl font-bold text-gray-300 select-none mr-1">
                $
              </span>

              {/* Custom Blinking Cursor Line */}
              <div className="h-10 w-[2px] bg-black animate-pulse self-center mr-1" />

              {/* Real hidden/styled transparent input overlays custom display logic */}
              <input
                type="number"
                pattern="[0-9]*"
                inputMode="numeric"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                placeholder="0"
                className="w-full text-4xl font-bold bg-transparent border-0 p-0 text-black placeholder-gray-200 focus:ring-0 focus:outline-none tracking-tight"
                autoFocus
              />
            </div>
          </div>

          {/* Action Button */}
          <button
            type="submit"
            disabled={!income || income === "0"}
            className={`w-full py-4 px-4 rounded-2xl font-bold text-sm transition text-center ${
              income && income !== "0"
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Calculate My Allocation
          </button>
        </form>

        {/* Dynamic keyboard tip */}
        <div className="text-center">
          <p className="text-[10px] font-medium text-gray-400">
            Press{" "}
            <span className="bg-white border border-gray-200 px-1.5 py-0.5 rounded text-gray-500 font-semibold shadow-2xs mx-0.5">
              Enter
            </span>{" "}
            to calculate
          </p>
        </div>
      </main>

      <Navigations />
    </div>
  );
}
