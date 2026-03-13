import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Devasanjay N - Computer Science Student & Startup Founder | DAVNS",
  description:
    "Portfolio of Devasanjay N - Computer Science Engineering student at Saveetha Engineering College, Founder & CEO of DAVNS startup. IBM Z Datathon 2nd Place winner specializing in web development, AI solutions, and innovative software.",
  keywords:
    "Devasanjay N, Computer Science, Saveetha Engineering College, DAVNS, Startup Founder, IBM Z Datathon, Web Development, AI Solutions, Chennai",
  authors: [{ name: "Devasanjay N" }],
  creator: "Devasanjay N",
  openGraph: {
    title: "Devasanjay N - Computer Science Student & Startup Founder",
    description:
      "IBM Z Datathon 2nd Place winner, Founder & CEO of DAVNS startup, Computer Science student at Saveetha Engineering College",
    url: "https://davns.in",
    siteName: "Devasanjay N Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Devasanjay N - Computer Science Student & Startup Founder",
    description: "IBM Z Datathon 2nd Place winner, Founder & CEO of DAVNS startup",
  },
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-background text-foreground relative`}>
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-[100] origin-left transform scale-x-0 transition-transform duration-100" id="scroll-progress"></div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', () => {
                const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
                const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scrolled = (winScroll / height);
                document.getElementById('scroll-progress').style.transform = 'scaleX(' + scrolled + ')';
              });
            `,
          }}
        />
      </body>
    </html>
  )
}
