"use client";
export const dynamic = "force-dynamic";
export const revalidate = 0;
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <main className="flex min-h-screen items-center justify-center bg-black text-cyan-400">Loading...</main>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-cyan-400">
      {/* Placeholder for Cyberpunk 2077 OS UI */}
      <h1 className="text-4xl font-bold">Welcome to the Cyberpunk OS</h1>
      <p className="mt-4">You are logged in as {session?.user?.email || session?.user?.name}</p>
    </main>
  );
}
