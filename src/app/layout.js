import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Next.js Job Portal",
  description: "Find your next job opportunity",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
