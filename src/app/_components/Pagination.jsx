export default function Pagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="flex space-x-4 mt-8">
            <button title="Previous" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)} className="cursor-pointer px-4 py-2 text-[var(--p-navy)] hover:bg-gray-200 rounded-full disabled:opacity-0 ">
                <i className="ri-arrow-left-wide-line"></i>
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
                <button
                    key={i + 1}
                    onClick={() => onPageChange(i + 1)}
                    className={`cursor-pointer px-4 py-2 rounded-full ${currentPage === i + 1 ? 'bg-[var(--p-navy)] text-white' : 'hover:bg-gray-200 text-[var(--p-navy)]'}`}
                >
                    {i + 1}
                </button>
            ))}

            <button title='next' disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)} className="cursor-pointer px-4 py-2 text-[var(--p-navy)] hover:bg-gray-200 rounded-full disabled:opacity-0">
                <i className="ri-arrow-right-wide-line"></i>
            </button>
        </div>
    );
}