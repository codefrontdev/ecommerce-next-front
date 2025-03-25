"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";
import { fetchProducts } from "../lib/fetchProducts";
import Loader from "./Loader";

export default function ProductsPage({ title, text }) {
	const [products, setProducts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [spinner, setspinner] = useState(true);
	const searchParams = useSearchParams();
	const router = useRouter();

	useEffect(() => {
		const page = parseInt(searchParams.get("page") || "1", 10);
		setCurrentPage(page);
		setspinner(true);

		fetchProducts(page).then(({ products, totalPages }) => {
			setProducts(products);
			setTotalPages(totalPages);
			setspinner(false);
		});
	}, [searchParams]);

	const goToPage = (page) => {
		if (page >= 1 && page <= totalPages) {
			router.push(`/?page=${page}`);
		}
	};

	return (
		<div className="w-full h-auto p-20 bg-gray-100 py-10 flex flex-col items-center">
			<div className="text-center mb-8">
				<h1 className="text-5xl capitalize font-bold text-gray-800">{title}</h1>
				<p className="text-gray-500 text-lg">{text}</p>
			</div>

			{spinner && <Loader/>}

			{!spinner && products.length > 0 ? (
				<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center px-4 w-full">
					{products.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
				</div>
			) : (
				!spinner && <p className="text-3xl text-gray-400">No products available <i className="ri-error-warning-line"></i></p>
			)}

			{!spinner && totalPages > 1 && (
				<Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={goToPage} />
			)}
		</div>
	);
}
