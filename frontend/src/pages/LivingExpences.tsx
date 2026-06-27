import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Header from "../components/Header";

interface ExpenseItem {
  id: string;
  name: string;
  amount: number;
}

export default function LivingExpenses() {
  const [expenses, setExpenses] = useState<ExpenseItem[]>([
    { id: "1", name: "Rent", amount: 1200 },
    { id: "2", name: "Utilities", amount: 120 },
    { id: "3", name: "Groceries", amount: 350 },
    { id: "4", name: "Internet", amount: 60 },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputName.trim() || !inputAmount) return;

    const newExpense: ExpenseItem = {
      id: Date.now().toString(),
      name: inputName.trim(),
      amount: parseFloat(inputAmount) || 0,
    };

    setExpenses([...expenses, newExpense]);
    setInputName("");
    setInputAmount("");
  };

  const handleRemoveExpense = (id: string) => {
    setExpenses(expenses.filter((item) => item.id !== id));
  };

  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col max-w-md mx-auto relative pb-20 border-x border-gray-100">
      <Header title="Living" />

      {/* Main Budget Box Area */}
      <main className="p-5 flex-1 space-y-5">
        {/* Title Context Group */}
        <div className="space-y-1.5">
          <span className="inline-block bg-gray-100 text-[9px] font-bold text-gray-400 px-2 py-0.5 rounded tracking-wider uppercase">
            Monthly
          </span>
          <h1 className="text-2xl font-black text-black tracking-tight">
            Living Expenses
          </h1>
          <p className="text-gray-400 text-xs font-medium leading-relaxed">
            Fixed household costs and regular allowances paid from your living
            budget.
          </p>
        </div>

        {/* Dynamic Card Container list */}
        <div className="bg-white border border-gray-100 rounded-[24px] p-4 shadow-sm space-y-4">
          {/* Dynamic Item Row Array map */}
          <div className="space-y-2">
            {expenses.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white border border-gray-100 rounded-2xl px-4 py-3 text-sm font-bold text-black"
              >
                <span>{item.name}</span>
                <div className="flex items-center space-x-2">
                  <span>${item.amount.toLocaleString()}</span>
                  <button
                    onClick={() => handleRemoveExpense(item.id)}
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

          {/* New Input Entry inline Sub-Form */}
          <form
            onSubmit={handleAddExpense}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              placeholder="e.g. Rent, Groceries, Utilities"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className="flex-1 px-4 py-3 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black text-xs font-medium"
            />
            <input
              type="number"
              placeholder="0"
              value={inputAmount}
              onChange={(e) => setInputAmount(e.target.value)}
              className="w-16 px-2 py-3 bg-gray-50 text-center text-gray-800 placeholder-gray-400 rounded-full border-0 focus:outline-none focus:ring-1 focus:ring-black text-xs font-bold"
            />
            <button
              type="submit"
              className="bg-black text-white px-4 py-3 rounded-full text-xs font-bold hover:bg-gray-900 transition flex items-center shrink-0"
            >
              <span>+ Add</span>
            </button>
          </form>
        </div>

        {/* Dynamic Live Dynamic Metric Aggregation footer display banner */}
        <div className="bg-gray-100/70 rounded-[20px] px-5 py-4 flex justify-between items-center text-sm font-bold text-gray-500">
          <span>Total living expenses</span>
          <span className="text-black text-base font-black">
            ${totalExpenses.toLocaleString()}
          </span>
        </div>
      </main>

      <Navigations />
    </div>
  );
}
