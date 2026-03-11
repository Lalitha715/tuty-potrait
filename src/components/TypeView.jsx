import React from "react";

function TypeView({ selectedProduct, onBack }) {
  return (
    <div className="p-5">
      <button
        onClick={onBack}
        className="mb-8 bg-gray-800 text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
      >
        ← Back to Products
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {selectedProduct.types.map((typeItem, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
          >
            <div className="w-full aspect-[4/3] flex items-center justify-center">
              <img
                src={typeItem.image}       // Use the image property
                alt={typeItem.name}        // Use the name for alt
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {typeItem.name}
            </h3>
            {typeItem.color && (
              <div className="mt-2">
                <p className="text-sm text-gray-600">Available Colors:</p>
                <div className="flex space-x-2">
                  {typeItem.color.map((color, i) => (
                    <span
                      key={i}
                      className="inline-block w-6 h-6 rounded-full border border-gray-300"
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}
            {typeItem.sizes && (
              <p className="text-sm text-gray-500 mt-1">
                Available: {typeItem.sizes.join(", ")}
              </p>
            )}
            {typeItem.available && (
              <p className="text-sm text-gray-500 mt-1">
                Also available as: {typeItem.available.join(", ")}
              </p>
            )}

            <a
              href={`https://wa.me/917708260129?text=Hi, I'm interested in ${selectedProduct.name} - ${typeItem.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
            >
              Order on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TypeView;