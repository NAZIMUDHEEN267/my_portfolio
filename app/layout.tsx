import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "@/sass/global.scss";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Nazimudheen TI",
  description: "Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} ${poppins.variable}`}>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
