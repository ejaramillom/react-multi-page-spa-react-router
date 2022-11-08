import { Route } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import Products from "./pages/Products";
import Welcome from "./pages/Welcome";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/product-detail/:productId">
          <ProductDetail />
        </Route>
      </main>
    </div>
  );
}

export default App;

// example of react router dom

// our-domain.com/ => component A
// our-domain.com/products => component B

// this is what react router does

// so far, this implementation has a flaw, the states are lost because a request is made
// so we lose any state saved in the browser
// so we need to use the Link function of react router