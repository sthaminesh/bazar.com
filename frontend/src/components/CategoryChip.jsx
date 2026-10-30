function CategoryChip({ name, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-3 rounded-full text-sm font-medium whitespace-nowrap transition ${
        active
          ? "bg-green-700 text-white"
          : "bg-white text-gray-700 hover:bg-green-50 border border-gray-200"
      }`}
    >
      {name}
    </button>
  );
}

export default CategoryChip;