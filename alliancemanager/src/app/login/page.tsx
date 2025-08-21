"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    if (res?.error) setError(res.error);
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-cyan-400">
      <div className="w-full max-w-md p-8 rounded-lg bg-gray-900 shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="p-2 rounded bg-gray-800 text-cyan-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="p-2 rounded bg-gray-800 text-cyan-200"
            required
          />
          <button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-bold py-2 px-4 rounded"
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => signIn("discord")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-2"
          >
            Sign in with Discord
          </button>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </main>
  );
}
