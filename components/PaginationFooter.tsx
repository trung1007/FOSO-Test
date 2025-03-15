const PaginationFooter = () => {
    return (
        <div className="flex items-center justify-center gap-3 py-4 text-gray-500 text-sm">
            <button className="flex items-center gap-1 px-3 py-1 hover:text-gray-700 transition">
                ← Trang trước
            </button>

            <div className="flex gap-2">
                <button className="px-3 py-1 rounded-md bg-green-200 font-bold">1</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">2</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">3</button>
                <span className="px-3 py-1">...</span>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">8</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">9</button>
                <button className="px-3 py-1 rounded-md hover:bg-gray-100">10</button>
            </div>

            <button className="flex items-center gap-1 px-3 py-1 hover:text-gray-700 transition">
                Trang kế tiếp →
            </button>
        </div>
    );
};

export default PaginationFooter;
