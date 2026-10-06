import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";


export const metadata: Metadata = {
  title: "Thomas Luke — AI & Software Portfolio",
  description:
    "Portfolio of Thomas Luke — AI, machine learning, software engineering, data and UX.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}