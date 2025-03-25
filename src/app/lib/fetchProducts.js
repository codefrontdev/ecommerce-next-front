export const fetchProducts = async (page = 1) => {
    const itemsPerPage = 8;

    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();

        if (Array.isArray(data)) {
            const start = (page - 1) * itemsPerPage;
            const paginatedData = data.slice(start, start + itemsPerPage);

            return {
                products: paginatedData,
                totalPages: Math.ceil(data.length / itemsPerPage),
            };
        } else {
            console.error("Unexpected data format:", data);
            return { products: [], totalPages: 1 };
        }
    } catch (error) {
        console.error("Error fetching products:", error);
        return { products: [], totalPages: 1 };
    }
};
