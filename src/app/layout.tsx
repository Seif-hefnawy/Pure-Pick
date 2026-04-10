import { Manrope } from "next/font/google"; 
import "./globals.css";
import { ThemeProvider } from "./_components/theme-mode/ThemeProvider";
import Navbar from "./_components/navbar/Navbar";
import GlobalLoading from "./_components/loading/GlobalLoading";
import Footer from "./_components/footer/footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",   
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning> 
      <body suppressHydrationWarning={true} className={`${manrope.variable} antialiased bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary`}>
        <ThemeProvider>
          <GlobalLoading/>
          <div className="flex flex-col min-h-screen">
            <Navbar/>
            <main className="flex-1">
              {children}
              <Footer/>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}