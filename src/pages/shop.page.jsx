import { getAllProducts } from "@/lib/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function ShopPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllProducts(category)
      .then((data) => setProducts(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [category]);

  return (
    <main>
      <h1>Shop Page</h1>
      <p>{category}</p>
      <div>{isLoading ? "Loading" : "Done"}</div>
      <div>{error}</div>
      <div>{JSON.stringify(products)}</div>
    </main>
  );
}

export default ShopPage;
