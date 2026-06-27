// Path: pages/Login.tsx

import React, { useState } from "react";

export default function Login() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (mode === "signup" && password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    console.log({ mode, email, password });
  };

  const switchMode = (next: "signin" | "signup") => {
    setMode(next);
    setError("");
    setPassword("");
    setConfirmPassword("");
  };

  const EyeIcon = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center shadow-md">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 18L9 11.25l4.306 4.307L21.75 6.75"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75H16.5M21.75 6.75v5.25"
              />
            </svg>
          </div>
          <span className="font-extrabold text-black text-lg tracking-tight">
            Allocate
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2 text-center">
          <h1
            className="text-3xl tracking-tight"
            style={{ color: "#000", fontWeight: 900 }}
          >
            {mode === "signin" ? "Welcome back" : "Create account"}
          </h1>
          <p className="text-gray-400 text-sm">
            {mode === "signin"
              ? "Sign in to continue to your allocation plan."
              : "Sign up to start managing your allocation plan."}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-start">
          {/* Email */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              required
              className="w-full px-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-black transition text-base"
            />
          </div>

          {/* Password */}
          <div className="space-y-1.5">
            <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-black transition text-base pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition"
              >
                <EyeIcon />
              </button>
            </div>
          </div>

          {/* Confirm Password — Sign Up only */}
          {mode === "signup" && (
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-500 tracking-wider uppercase">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full px-4 py-3.5 bg-gray-50 text-gray-800 placeholder-gray-400 rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-black transition text-base pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 transition"
                >
                  <EyeIcon />
                </button>
              </div>
            </div>
          )}

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 font-semibold">{error}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full mt-2 bg-black text-white py-4 px-4 rounded-full font-bold hover:bg-gray-900 transition flex items-center justify-center space-x-2 text-sm"
          >
            <span>{mode === "signin" ? "Sign In" : "Create Account"}</span>
            <svg
              className="w-4 h-4 transform translate-y-[0.5px]"
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
        </form>

        {/* Footer */}
        <div className="text-center pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-500 font-medium">
            {mode === "signin"
              ? "Don't have an account? "
              : "Already have an account? "}
            <button
              type="button"
              onClick={() =>
                switchMode(mode === "signin" ? "signup" : "signin")
              }
              className="text-black font-bold hover:underline"
            >
              {mode === "signin" ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
