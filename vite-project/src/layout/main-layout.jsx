import { Footer } from "./footer";
import { Header } from "./header";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <header>
          <Header />
        </header>
        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
