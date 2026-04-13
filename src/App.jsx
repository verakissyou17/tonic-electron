import{Routes, Route} from 'react-router-dom'
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import ProductsPage from './pages/ProductsPage';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/products.json");
        if (!res.ok) throw new Error("Could not fetch products.");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);


  return (<>
  <Routes>
    <Route path='/' element={<Home products={products} />} />
      <Route
        path="/category/:category"
        element={<ProductsPage products={products} />}
      />
  </Routes>

  </>);
}

export default App;
