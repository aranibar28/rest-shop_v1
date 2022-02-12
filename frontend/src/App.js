import { Container } from "react-bootstrap";
import { Header, Footer } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, ProductScreen, CartScreen } from "./screen";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/" element={<CartScreen />}>
              <Route path=":id" element={<CartScreen />} />
            </Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
