import { useGetAllProductsQuery } from "@/lib/api";

function ShopPage() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useGetAllProductsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log(products);
  

  return (
    <main>
      <h1>Shop Page</h1>
      {/* <p>{category}</p> */}
      <div>{isLoading ? "Loading" : "Done"}</div>
      <div>{error}</div>
      <div>{JSON.stringify(products)}</div>
    </main>
  );
}

export default ShopPage;
