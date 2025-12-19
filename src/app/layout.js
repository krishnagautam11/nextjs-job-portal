import "./globals.css";
import "@/styles/base.css";
import "@/styles/style.css";

import ReduxProvider from "@/store/ReduxProvider";
import Navbar from "@/components/layout/Navbar";

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
        </ReduxProvider>
      </body>
    </html>
  );
}
