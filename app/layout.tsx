import type { Metadata } from "next";
import "./globals.css";
import "aos/dist/aos.css";
import "./css/header.css";
import "./css/responsive/mobileHeader.css";
import "./css/footer.css";
import "./css/responsive/mobileFooter.css";
import "./css/app.css";
import "./css/fonts.css";

import "./css/work.css";
import "./css/contact.css";

import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ReduxProvider from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: "Jambu Moses | Portfolio",
  description:
    "i'm a creative developer with years of experience in building products and appealing web experiences. i've collaborated with individuals and teams to build experiences in large enterprises .",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="relative font-roboto font-poppins antialiased"
        suppressHydrationWarning
      >
        <ReduxProvider>
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
