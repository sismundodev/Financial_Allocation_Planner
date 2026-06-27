import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";

interface AllocationRule {
  id: string;
  name: string;
  description: string;
  value: number;
  icon: React.ReactNode;
}

export default function AllocationSettings() {
  const [allocations, setAllocations] = useState<AllocationRule[]>([
    {
      id: "pay-first",
      name: "Pay Yourself First",
      description: "Savings & investments before everything else",
      value: 15,
      icon: (
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      id: "emergency",
      name: "Emergency Fund",
      description: "Your financial safety net — target 3-6 months",
      value: 5,
      icon: (
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      id: "personal",
      name: "Personal Money",
      description: "Guilt-free personal spending allowance",
      value: 10,
      icon: (
        <svg
          className="w-4 h-4 text-gray-700"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
      ),
    },
  ]);

  const handleSliderChange = (id: string, newValue: number) => {
    setAllocations((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, value: newValue } : item,
      ),
    );
  };

  const totalAllocated = allocations.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative pb-24 border-x border-gray-100">
      <Header title="Allocations" />

      {/* Main Body */}
      <main className="p-4 flex-1 space-y-4">
        {/* Upper Title Section */}
        <div className="space-y-1.5 px-1">
          <span className="inline-block bg-gray-100 text-[9px] font-bold text-gray-400 px-2 py-0.5 rounded tracking-wider uppercase">
            Percentages
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            Allocation Settings
          </h1>
          <p className="text-gray-400 text-xs font-medium leading-relaxed">
            Define what % of your free income goes where. Applied automatically
            each month.
          </p>
        </div>

        {/* Dynamic Sliders List Container */}
        <div className="space-y-3.5">
          {allocations.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-gray-100 rounded-[20px] p-4 shadow-2xs space-y-3"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center mt-0.5 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold text-black tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-[10px] text-gray-400 font-medium leading-tight mt-0.5">
                      {item.description}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-black text-black tracking-tight">
                  {item.value}%
                </span>
              </div>

              {/* Native range slider customized tool styling */}
              <div className="space-y-1 pt-1">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={item.value}
                  onChange={(e) =>
                    handleSliderChange(item.id, parseInt(e.target.value))
                  }
                  className="w-full accent-black h-1 bg-gray-100 rounded-lg cursor-pointer appearance-none"
                />
                <div className="flex justify-between text-[9px] text-gray-300 font-bold tracking-tight px-0.5">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Metric Banner */}
        <div className="bg-zinc-950 text-white rounded-2xl p-4 flex justify-between items-center shadow-sm">
          <span className="text-xs font-bold tracking-wide">
            Total allocated
          </span>
          <span className="text-sm font-black tracking-tight">
            {totalAllocated}%
          </span>
        </div>
      </main>

      <Navigations />
    </div>
  );
}
