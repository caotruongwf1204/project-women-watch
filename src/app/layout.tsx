import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providerUi";
import StoreProvider from "./lib/features/StoreProvier";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Đồng hồ nữ Olivia Burton-Phân phối chính thức",
  description: "https://oliviaburtonvietnam.com",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <StoreProvider>{children}</StoreProvider>
        </Providers>
        <ToastContainer
        pauseOnHover={false}
        pauseOnFocusLoss={false}
        newestOnTop
      ></ToastContainer>
      </body>
    </html>
  );
}
