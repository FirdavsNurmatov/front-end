import React from "react";
import { MainLayout } from "./layout/main-layout";
import { newProducts } from "./data/data";
import { ProductCard } from "./components/card/product-card";

function App() {
  return (
    <>
      <MainLayout>
        <section>
          <div className="container">
            <h1 className="text-[32px] font-semibold">Янги қўшилганлар</h1>
            <div className="flex gap-[24px]">
              {newProducts.map((item) => {
                <ProductCard
                  key={item.id}
                  id={item.id}
                  img={item.img}
                  title={item.title}
                />;
              })}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
