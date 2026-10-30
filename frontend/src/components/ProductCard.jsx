import { MapPin, Heart } from "lucide-react";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition">

      {/* Product image */}

      <div className="relative h-52 bg-gray-100">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />

        <button
          aria-label="Add to wishlist"
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
        >
          <Heart size={19} />
        </button>

      </div>

      {/* Product details */}

      <div className="p-4">

        <p className="text-sm text-green-700 font-medium">
          {product.category}
        </p>

        <h3 className="text-lg font-semibold mt-2">
          {product.name}
        </h3>

        <p className="text-xl font-bold text-gray-900 mt-2">
          Rs. {product.price.toLocaleString("en-IN")}
        </p>

        <div className="flex justify-between items-center mt-3 text-sm text-gray-500">

          <span className="flex items-center gap-1">
            <MapPin size={15} />
            {product.location}
          </span>

          <span>{product.condition}</span>

        </div>

      </div>

    </div>
  );
}

export default ProductCard;