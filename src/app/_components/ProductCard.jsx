import Image from "next/image";
import StarRating from "./StarRating";

export default function ProductCard({ product }) {

    return (
        <div title={product.title} className="lg:w-2xs 280 pr-5 pl-5 sm:w-full bg-white flex flex-col py-6 justify-between w-fit rounded-xl shadow-lg max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="w-[90%] self-center aspect-square overflow-hidden rounded-md">
                <Image
                    src={product.image} 
                    width={400}
                    height={400}
                    alt={product.category || "product"}
                    className="object-contain w-full h-full"
                />
            </div>

            <div className="mt-4">
                <h3 className="text-2xl font-semibold text-gray-900">
                    {product.title?.slice(0, 10)}...
                </h3>
                <h2 className="text-gray-500 text-sm">
                    {product.description?.slice(0, 30)}...
                </h2>


                <div className="flex my-3 w-full px-1 py-2 flex-row justify-between items-center">
                <p className="text-[var(--d-teal)] font-bold text-xl">${product.price}</p>
                <StarRating rating={product.rating?.rate} />

                </div>                    
                <button
                        title="Add to Cart"
                    className="w-full py-2 bg-[var(--p-navy)] text-white rounded-full text-sm font-semibold hover:bg-gray-100 hover:text-gray-900 transition-[1s] duration-300"
                    >
                        <i className="ri-shopping-cart-2-fill m-2"></i>
                    Add to Cart
                    </button>
            </div>
        </div>
    );
}
