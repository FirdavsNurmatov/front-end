import { MainLayout } from "./layout/main-layout";
import { NewProductsSlider } from "./components/sliders/newProductsSlider";

function App() {
  return (
    <>
      <MainLayout>
        <section>
          <div className="container">
            <h1 className="text-[32px] font-semibold">Янги қўшилганлар</h1>
            <div className="flex gap-[24px]">
              <NewProductsSlider />
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}

export default App;
