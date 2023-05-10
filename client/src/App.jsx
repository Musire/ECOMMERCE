import ProductPage from "./pages/ProductPage";
import { CartProvider } from "./context/CartContext"

export default function App() {
  return (
    <section className="section-container centered">
      <CartProvider>
        <ProductPage />
      </CartProvider>
      
    </section>
  )
}