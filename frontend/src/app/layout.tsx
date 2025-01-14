import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "@/components/Navbar";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MERN Blog",
  description: "MERN Blog App",
};
const queryClient = new QueryClient();
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <html lang="en">
          <body className={`${inter.className} antialiased`}>
            <div className="px-4 md:px-8 xl:px-16 2xl:px-64">
              <Navbar />
              {children}
            </div>
          </body>
        </html>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
