const imageData = [
    {
        src: "/jjfkfk.jpeg",
        title: [
            { text: "crazy deal", className: "text-lg md:text-2xl" },
            { text: "buy 1 get ! free", className: "text-3xl md:text-5xl font-bold" },
            { text: "the best classic dress is on sale at cara", className: "text-lg md:text-2xl" }
        ],
        buttonText: "Learn more",
        colSpan: "col-span-2 md:col-span-4",
        rowSpan: "row-span-4",
    },
    {
        src: "/Instagram.jpeg",
        title: [
            { text: "spring / summer", className: "text-lg md:text-2xl" },
            { text: "upcoming season", className: "text-3xl md:text-5xl font-bold" },
            { text: "the best classic dress is on sale at cara", className: "text-lg md:text-2xl" }
        ],
        buttonText: "Collection",
        colSpan: "col-span-2 md:col-span-4",
        rowSpan: "row-span-4",
    },
    {
        src: "/_.jpeg",
        title: [
            { text: "seasonal sale", className: "text-lg md:text-2xl" },
            { text: "winter collection -50% off", className: "text-lg md:text-2xl" }
        ],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 row-start-5",
    },
    {
        src: "/hjhh.jpeg",
        title: [
            { text: "warm collection", className: "text-lg md:text-2xl" },
            { text: "Spring / summer 2025", className: "text-lg md:text-2xl" }
        ],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 col-start-2 md:col-start-4 row-start-5",
    },
    {
        src: "/gdhgjg.jpeg",
        title: [
            { text: "t-shirts", className: "text-lg md:text-2xl" },
            { text: "new trendy print", className: "text-lg md:text-2xl" }
        ],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 col-start-2 md:col-start-7 row-start-5",
    },
];

const ImageShop = () => {
    return (
        <div className="h-screen p-10 md:p-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-6 gap-4 bg-gray-100">
            {imageData.map((image, index) => (
                <div
                    key={index}
                    className={`relative bg-cover bg-center bg-[url(${image.src})] ${image.colSpan} ${image.rowSpan} min-h-[150px]`}
                >
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-6">
                        {image.title.map((line, idx) => (
                            <h1 key={idx} className={`text-white ${line.className} mb-2`}>
                                {line.text}
                            </h1>
                        ))}
                        {image.buttonText && (
                            <button className="mt-4 px-6 py-2 rounded-lg border border-gray-100 text-gray-100 bg-transparent hover:bg-gray-100 hover:text-gray-950 transition-all duration-300 text-sm md:text-base">
                                {image.buttonText}
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageShop;
