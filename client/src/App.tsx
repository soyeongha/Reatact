import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ProductPage from "./pages/ProductPage";
import ProductCreatePage from "./pages/ProductCreatePage";
import Layout from "./components/Layout";
import PurchasePage from "./pages/PurchasePage";
import CartPage from "./pages/CartPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Homepage />} /> // 메인페이지
        <Route path="product/:productId" element={<ProductPage />} />{" "}
        //상품상세페이지
        <Route path="/create" element={<ProductCreatePage />} />{" "}
        //상품등록페이지
        <Route path="cart" element={<CartPage />} />
        <Route path="purchase/:productId" element={<PurchasePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
