import { GeistSans, Inter } from "geist/font/sans";
import "./globals.css";


export const metadata = {
  title: "Design Mentor",
  description: "Improve your frontend skills with Design Mentor.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <title>Design Mentor</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
