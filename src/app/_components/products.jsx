import Image from 'next/image';
import React from 'react';

export default function Products() {
	const productsData = [
		{ brand: "Benetto", image: "/_products/_ (2).jpeg", name: "Casual Printed T-shirts", price: 29.99, rating: 90 },
		{ brand: "Benetto", image: "/_products/_ (3).jpeg", name: "Casual Printed T-shirts", price: 19.99, rating: 80 },
		{ brand: "Benetto", image: "/_products/_ (4).jpeg", name: "Casual Printed T-shirts", price: 25.50, rating: 70 },
		{ brand: "Benetto", image: "/_products/_ (5).jpeg", name: "Casual Printed T-shirts", price: 40.00, rating: 100 },
		{ brand: "Benetto", image: "/_products/_ (7).jpeg", name: "Casual Printed T-shirts", price: 15.00, rating: 60 },
		{ brand: "Benetto", image: "/_products/Mouse.jpeg", name: "Casual Printed T-shirts", price: 12.99, rating: 50 },
		{ brand: "Benetto", image: "/_products/_ (10).jpeg", name: "Casual Printed T-shirts", price: 22.75, rating: 85 },
		{ brand: "Benetto", image: "/_products/_ (11).jpeg", name: "Casual Printed T-shirts", price: 18.50, rating: 95 },
	];

	// Function to generate stars based on rating
	const renderStars = (rating) => {
		const fullStars = Math.floor(rating / 20);
		return (
			<div className="flex text-yellow-500">
				{[...Array(fullStars)].map((_, i) => (
					<i key={i} className="ri-star-fill text-lg"></i>
				))}
			</div>
		);
	};

	return (
		<div className="w-full min-h-screen p-20 bg-gray-100 py-10 flex flex-col items-center">
			{/* Section title */}
			<div className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">Featured Products</h1>
				<p className="text-gray-500 text-lg">Deluxe Collection New Modern Designs</p>
			</div>

			{/* Product grid: Responsive layout using CSS Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4 w-full">
				{productsData.map((product, index) => (
					<div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 max-w-sm w-full hover:scale-105 transition-transform duration-300">
						{/* Product image container */}
						<div className="w-full aspect-square overflow-hidden rounded-md">
							<Image src={product.image} width={400} height={400} alt={product.name} className="object-cover w-full h-full" />
						</div>

						{/* Product details */}
						<div className="mt-4">
							<h2 className="text-gray-500 text-sm">{product.brand}</h2>
							<h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

							{/* Star rating */}
							<div className="mt-2">{renderStars(product.rating)}</div>

							{/* Price and Add to Cart button */}
							<div className='flex flex-row w-full justify-between items-center'>
								<p className="text-[var(--d-teal)] font-bold text-xl mt-3">${product.price}</p>
								<button className="mt-3 w-[50%] py-2 bg-[var(--p-navy)] text-gray-50 rounded-lg text-sm font-semibold hover:bg-gray-100 hover:text-gray-900 transition-[1s]">
									<i className="ri-shopping-cart-2-fill mr-2"></i> Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
