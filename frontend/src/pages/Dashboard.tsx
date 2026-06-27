import React from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col w-full relative pb-20 border-x border-gray-100">
      <Header title="Dashboard" />
      <main className="p-5 flex-1 space-y-6">
        {/* Greeting */}
        <div className="space-y-1.5">
          <span className="inline-block bg-gray-100 text-[10px] font-bold text-gray-500 px-2 py-0.5 rounded tracking-wider uppercase">
            June 2026
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            Your allocation overview.
          </h1>
          <p className="text-gray-400 text-xs font-medium tracking-wide">
            Here's where your money stands this month.
          </p>
        </div>

        {/* Dark Hero Metrics Card */}
        <div className="bg-zinc-950 text-white rounded-[24px] p-5 shadow-sm space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-zinc-500 tracking-wider uppercase">
                Net Income Allocated
              </span>
              <h2 className="text-4xl font-black tracking-tight">$500</h2>
              <p className="text-xs font-bold text-zinc-400">June 2026</p>
            </div>
            <button className="inline-flex items-center space-x-1 bg-zinc-800 text-[11px] font-bold text-gray-200 px-3 py-1.5 rounded-full hover:bg-zinc-700 transition">
              <svg
                className="w-3 h-3 text-zinc-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
              <span>Reallocate</span>
            </button>
          </div>

          {/* Sub-metrics */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="bg-zinc-900 rounded-2xl p-3.5 space-y-1">
              <span className="block text-lg font-black text-white">$600</span>
              <span className="block text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                Obligations
              </span>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-3.5 space-y-1">
              <span className="block text-lg font-black text-white">$0</span>
              <span className="block text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                Allocated
              </span>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-3.5 space-y-1">
              <span className="block text-lg font-black text-white">$1.7K</span>
              <span className="block text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                Living
              </span>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-3.5 space-y-1">
              <span className="block text-lg font-black text-amber-500">
                $1.8K
              </span>
              <span className="block text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
                Deficit
              </span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-[9px] font-bold text-zinc-500 tracking-wider uppercase">
              <span>Allocated</span>
              <span className="text-white">466%</span>
            </div>
            <div className="w-full bg-zinc-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-white h-full w-full" />
            </div>
          </div>
        </div>

        {/* Automatic Allocations Card (Light) */}
        <div className="bg-white border border-gray-100 rounded-[24px] shadow-sm overflow-hidden">
          <div className="p-5 flex justify-between items-center border-b border-gray-50">
            <div className="space-y-1">
              <span className="block text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                Auto
              </span>
              <h2 className="text-lg font-black text-black tracking-tight">
                Automatic Allocations
              </h2>
            </div>
            <button className="inline-flex items-center space-x-1 text-xs font-bold text-gray-400 hover:text-black">
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.43l-1.003.767a1.123 1.123 0 00-.417 1.03c.004.074.006.148.006.222 0 .074-.002.148-.006.222a1.123 1.123 0 00.417 1.03l1.003.767a1.125 1.125 0 01.26 1.43l-1.296 2.247a1.125 1.125 0 01-1.37.49l-1.216-.456a1.125 1.125 0 00-1.075.124c-.073.044-.146.087-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 00-.646-.87c-.074-.041-.148-.084-.22-.128a1.125 1.125 0 00-1.075-.124l-1.217.456a1.125 1.125 0 01-1.37-.49l-1.296-2.247a1.125 1.125 0 01.26-1.43l1.003-.767a1.122 1.122 0 00.417-1.03c-.004-.074-.006-.148-.006-.222 0-.074.002-.148.006-.222a1.122 1.122 0 00-.417-1.03l-1.003-.767a1.125 1.125 0 01-.26-1.43l1.296-2.247a1.125 1.125 0 011.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.28z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="text-[11px]">Edit</span>
            </button>
          </div>
          <div className="p-5 space-y-4">
            {[
              { label: "Pay Yourself First", pct: "15%", w: "w-[45%]" },
              { label: "Emergency Fund", pct: "5%", w: "w-[5%]" },
              { label: "Personal Money", pct: "10%", w: "w-[30%]" },
            ].map((row) => (
              <div key={row.label} className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-black">
                  <span>{row.label}</span>
                  <div>
                    <span className="text-gray-300 font-normal mr-2">
                      {row.pct}
                    </span>
                    $0
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-1 rounded-full">
                  <div className={`bg-black h-full ${row.w}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Row */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm space-y-3">
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-black text-black tracking-tight">
                $600
              </span>
              <span className="block text-[10px] font-bold text-gray-400 tracking-wide">
                Obligations
              </span>
              <span className="block text-[10px] text-gray-400 font-medium">
                2 items
              </span>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm space-y-3">
            <div className="w-7 h-7 rounded-full bg-gray-50 flex items-center justify-center">
              <svg
                className="w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
            <div>
              <span className="block text-lg font-black text-black tracking-tight">
                $1.7K
              </span>
              <span className="block text-[10px] font-bold text-gray-400 tracking-wide">
                Living Expenses
              </span>
              <span className="block text-[10px] text-gray-400 font-medium">
                4 items
              </span>
            </div>
          </div>
        </div>

        {/* Deficit Alert */}
        <div className="bg-red-50 border border-red-100 rounded-[22px] p-4 flex justify-between items-center">
          <div className="space-y-0.5">
            <span className="block text-[9px] font-bold text-red-400 tracking-widest uppercase">
              Deficit
            </span>
            <span className="block text-lg font-black text-red-700 tracking-tight">
              -$1,830
            </span>
          </div>
          <div className="text-red-400">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
      </main>

      <Navigations />
    </div>
  );
}
