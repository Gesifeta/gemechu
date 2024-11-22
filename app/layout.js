import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Gemechu Gesifeta",
  description: "Show casing my works, experiences, and educations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
       <Header/>
        {children}
      </body>
    </html>
  );
}
