import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Design Mentor",
  description: "Improve your frontend skills with Design Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-dark">
      <head>
        <title>Design Mentor</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
