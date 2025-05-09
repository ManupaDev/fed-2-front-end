function CategoryButton({ category }) {
  return (
    <button
      className={`border rounded-full px-4 py-2 transition-colors border-black text-black hover:bg-gray-100`}
    >
      {category.name}
    </button>
  );
}

export default CategoryButton;
