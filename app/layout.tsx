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
        url: "/logo/logoWithoutBg.avif",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo/logo.avif",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/logo/logoWithoutBg.avif",
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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919988943538?text=Hi%20I%20would%20like%20to%20know%20more."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-fab"
          aria-label="Chat with us on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            width="28"
            height="28"
            aria-hidden="true"
          >
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91C22 6.45 17.5 2 12.04 2zm0 18.16c-1.56 0-3.09-.42-4.42-1.22l-.32-.19-3.12.82.83-3.04-.21-.33a8.22 8.22 0 0 1-1.26-4.3c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.26-8.24 8.26zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.44-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02s-.44.06-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.13.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.16-.48-.28z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
