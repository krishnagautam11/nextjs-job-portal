import "./globals.css";
import "@/styles/base.css";
import "@/styles/style.css";

import ReduxProvider from "@/store/ReduxProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Next.js Job Portal",
  description: "Find your next job opportunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
