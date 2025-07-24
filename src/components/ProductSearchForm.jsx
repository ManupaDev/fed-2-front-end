import { useGetProductsBySearchQuery } from "@/lib/api";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Input } from "./ui/input";
import { Link } from "react-router";

function ProductSearchForm() {
  const [search, setSearch] = useState("");

  const { data: products, isLoading } = useGetProductsBySearchQuery(search, {
    skip: !search,
  });

  return (
    <div className="relative">
      <Input
        type="text"
        placeholder="Search"
        className="w-64"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div
        className={cn(
          "hidden absolute top-10 rounded-md left-0 z-10 right-0 bottom-0 px-2 bg-white border shadow",
          {
            "block h-32 overflow-y-scroll": search !== "",
          }
        )}
      >
        {products?.map((product) => (
          <Link
            to={`/shop/products/${product._id}`}
            key={product.id}
            className="block py-2"
          >
            {product.name}
          </Link>
        ))}
        {
          !products || products.length === 0 && (
            <div className="py-2 text-center">
              <p>No results found</p>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ProductSearchForm;
