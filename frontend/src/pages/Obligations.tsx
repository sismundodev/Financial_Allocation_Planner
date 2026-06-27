//Obligations.tsx
import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";
interface ObligationItem {
  id: string;
  name: string;
  amount: number;
}

export default function Obligations() {
  const [items, setItems] = useState<ObligationItem[]>([
    { id: "1", name: "Student Loan", amount: 320 },
    { id: "2", name: "Car Payment", amount: 280 },
  ]);

  const [newName, setNewName] = useState("");
  const [newAmount, setNewAmount] = useState("");

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newAmount) return;

    const newItem: ObligationItem = {
      id: Date.now().toString(),
      name: newName.trim(),
      amount: parseFloat(newAmount) || 0,
    };

    setItems([...items, newItem]);
    setNewName("");
    setNewAmount("");
  };

  const handleRemoveItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const totalObligations = items.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative pb-20 border-x border-gray-100">
      <Header title="Obligations" />
      
      {/* Main Container */}
      <main className="p-5 flex-1 space-y-5">
        {/* Section Title Header */}
        <div className="space-y-1.5">
          <span className="inline-block bg-gray-100 text-[9px] font-bold text-gray-400 px-2 py-0.5 rounded tracking-wider uppercase">
            Fixed
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            Immediate Obligations
          </h1>
          <p className="text-gray-400 text-xs font-medium">
            Commitments paid before anything else — loans, tuition, debts.
          </p>
        </div>

        {/* List Card Box */}
        <div className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm space-y-4">
          {/* Item Loop */}
          <div className="space-y-2">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-black"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span>${item.amount}</span>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-gray-300 hover:text-red-500 transition p-0.5"
                    type="button"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-gray-100" />

          {/* Add Item Field Form */}
          <form
            onSubmit={handleAddItem}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="e.g. Car loan, Tuition"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black text-xs font-medium"
            />
            <input
              type="number"
              placeholder="0"
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
              className="w-16 px-2 py-3 bg-gray-50 text-center text-gray-800 placeholder-gray-400 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black text-xs font-bold"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-3 rounded-full text-xs font-bold hover:bg-gray-900 transition flex items-center space-x-1 shrink-0"
            >
              <span>+ Add</span>
            </button>
          </form>
        </div>

        {/* Dynamic Total Banner */}
        <div className="bg-gray-100/70 rounded-[20px] px-5 py-4 flex justify-between items-center text-sm font-bold text-gray-500">
          <span>Total obligations</span>
          <span className="text-black text-base font-black">
            ${totalObligations}
          </span>
        </div>
      </main>
      <Navigations />
    </div>
  );
}
