import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providerUi";
import StoreProvider from "./lib/features/StoreProvier";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import { store } from "./lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";


let persistor = persistStore(store);


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
          <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
          </Provider>
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
