// app/page.tsx
"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => setIsClient(true), []);

  if (!isClient) return null;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 text-white">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          Welcome to <span className="underline underline-offset-4">JobNudge</span>
        </h1>
        <p className="text-lg mb-8 max-w-xl mx-auto">
          Discover your ideal tech role using our AI-powered job recommender. Log in to get started!
        </p>
        <LoginLink
          postLoginRedirectURL="/userForm"
          className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition"
        >
          🚀 Login to Get Started
        </LoginLink>
      </div>

      <div className="mt-10">
        <Image
          src="/hero-illustration.svg"
          alt="Job Matching"
          width={500}
          height={300}
          priority
        />
      </div>
    </main>
  );
}
