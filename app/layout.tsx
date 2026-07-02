import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";

const poppins = Poppins({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Anand Global Foods",
    default: "Anand Global Foods | Premium Agri-Export Company",
  },
  description:
    "Anand Global Foods is a leading agri-export company with 15+ years of global experience, exporting premium Basmati Rice, Sugar, Tea, Coffee, and Spices to 100+ countries.",
  keywords: ["Agri Export", "Basmati Rice", "Refined Sugar", "Indian Spices", "Private Label Packaging", "Anand Global Foods", "Food Exporters"],

  icons: {
    icon: [
      {
        url: "/logo/logoWithoutBg.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo/logo.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logo/logoWithoutBg.png",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased font-sans`}>
        <NavBar />
        <main className="px-[2%]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
