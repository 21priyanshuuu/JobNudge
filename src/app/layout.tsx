import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/src/components/Navbar";
import "./globals.css";
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobNudge",
  description: "Land to your dream job",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { getUser } = await getKindeServerSession();
  // const user = await getUser();
  // const name = user?.given_name;
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
