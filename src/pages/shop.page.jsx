import { useGetAllProductsQuery } from "@/lib/api";
import { useParams } from "react-router";
import ProductSearchForm from "@/components/ProductSearchForm";

function ShopPage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  const { category } = useParams();
  console.log(category);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(products);

  return (
    <main className="px-4 lg:px-16 min-h-screen py-8">
      <h2 className="text-4xl font-bold">Shop</h2>
      <div className="mt-4"></div>
    </main>
  );
}

export default ShopPage;
