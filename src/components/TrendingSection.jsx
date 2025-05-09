import { products, categories } from "./../data";
import SimpleProductCard from "./SimpleProductCard";
import CategoryButton from "./CategoryButton";

function TrendingSection() {
  return (
    <section className="px-4 lg:px-16 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
        <h2 className="text-2xl sm:text-3xl">Trending</h2>
        <div className="flex flex-wrap items-center gap-2 sm:gap-x-4 max-w-full overflow-x-auto pb-2">
          {categories?.map((category) => (
            <CategoryButton key={category._id} category={category} />
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-4 md:gap-x-4 md:gap-y-8">
        {products.map((product) => {
          return <SimpleProductCard key={product._id} product={product} />;
        })}
      </div>
    </section>
  );
}

export default TrendingSection;
