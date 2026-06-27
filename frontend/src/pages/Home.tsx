import React from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative pb-20 border-x border-gray-100">
      <Header title="Home" />

      {/* Main Content Area */}
      <main className="p-5 flex-1 space-y-6">
        {/* Hero Greeting Section */}
        <div className="space-y-1.5">
          <span className="inline-block bg-gray-100 text-[10px] font-bold text-gray-500 px-2 py-0.5 rounded tracking-wider uppercase">
            Welcome Back
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            Good afternoon, Shenron.
          </h1>
          <p className="text-gray-400 text-xs font-medium tracking-wide">
            It's June 2026. Ready to tell your money where to go?
          </p>
        </div>

        {/* Primary Call to Action Card (Dark) */}
        <div className="bg-zinc-950 text-white rounded-[24px] p-5 shadow-sm space-y-4">
          <div className="w-9 h-9 rounded-full bg-zinc-800 flex items-center justify-center">
            <svg
              className="w-4 h-4 text-gray-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.854-1.106-2.24 0-3.093 1.147-.881 2.94-.881 4.087 0l.916.703M12 3v3m0 12v3"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              New Allocation
            </span>
            <h2 className="text-lg font-black tracking-tight">
              Allocate This Month's Income
            </h2>
            <p className="text-xs text-gray-400 font-medium">
              Enter your income and get instant instructions.
            </p>
          </div>
          <button className="inline-flex items-center space-x-1 text-xs font-bold text-gray-200 hover:text-white pt-1">
            <span>Get started</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Overview Dashboard Card (Light) */}
        <div className="bg-white border border-gray-100 rounded-[24px] p-5 shadow-sm space-y-4">
          <div className="w-9 h-9 rounded-2xl bg-gray-50 flex items-center justify-center">
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">
              Overview
            </span>
            <h2 className="text-lg font-black text-black tracking-tight">
              View My Dashboard
            </h2>
            <p className="text-xs text-gray-500 font-medium">
              Last allocation:{" "}
              <span className="font-semibold text-gray-700">$500</span>
            </p>
          </div>
          <button className="inline-flex items-center space-x-1 text-xs font-bold text-gray-500 hover:text-black pt-1">
            <span>Open dashboard</span>
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>

        {/* Breadcrumb Flow Timeline Card */}
        <div className="bg-white border border-gray-100 rounded-[24px] p-5 shadow-sm space-y-3">
          <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">
            The Allocation Flow
          </span>
          <div className="flex flex-wrap items-center gap-y-2 text-xs font-bold text-black">
            <span>Income</span>
            <span className="text-gray-300 mx-1.5 font-normal">›</span>
            <span className="text-gray-900">Obligations</span>
            <span className="text-gray-300 mx-1.5 font-normal">›</span>
            <span className="text-gray-900">Allocations</span>
            <span className="text-gray-300 mx-1.5 font-normal">›</span>
            <span className="text-gray-900">Living Expenses</span>
            <span className="text-gray-300 mx-1.5 font-normal">›</span>
            <span className="text-gray-900">Mission</span>
          </div>
        </div>
      </main>

      <Navigations />
    </div>
  );
}
