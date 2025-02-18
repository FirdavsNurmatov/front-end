import React from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <div>
          <header>
            <Header />
          </header>
          <main>{children}</main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};
