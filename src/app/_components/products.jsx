import Image from 'next/image';
import React from 'react';

export default function Products({ products , title}) {

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
			<div className="text-center mb-8">
				<h1 className="text-5xl capitalize font-bold text-gray-800">{title}</h1>
				<p className="text-gray-500 text-lg">Deluxe Collection New Modern Designs</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4 w-full">
				{products.map((product, index) => (
					<div key={index} className="bg-white border border-gray-200 rounded-xl shadow-lg p-5 max-w-sm w-full hover:scale-105 transition-transform duration-300">
						<div className="w-full aspect-square overflow-hidden rounded-md">
							<Image src={product.image} width={400} height={400} alt={product.name} className="object-cover w-full h-full" />
						</div>

						<div className="mt-4">
							<h2 className="text-gray-500 text-sm">{product.brand}</h2>
							<h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>

							<div className="mt-2">{renderStars(product.rating)}</div>

							<div className='flex flex-row w-full justify-between items-center '>
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
