const images = [
    {
        src: "/jjfkfk.jpeg",
        title: ["crazy deal", "buy 1 get 1 free", "the best classic dress is on sale at cara"],
        buttonText: "Learn more",
        colSpan: "col-span-2 md:col-span-4",
        rowSpan: "row-span-4",
    },
    {
        src: "/hhhh.jpeg",
        title: ["spring / summer", "upcoming season", "the best classic dress is on sale at cara"],
        buttonText: "Collection",
        colSpan: "col-span-2 md:col-span-4",
        rowSpan: "row-span-4",
    },
    {
        src: "/_.jpeg",
        title: ["seasonal sale", "winter collection -50% off"],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 row-start-5",
    },
    {
        src: "/hjhh.jpeg",
        title: ["warm collection", "Spring / summer 2025"],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 col-start-2 md:col-start-3 row-start-5",
    },{
        src: "/Instagram.jpeg",
        title: ["warm collection", "Spring / summer 2025"],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 col-start-2 md:col-start-5 row-start-5",
    },
    {
        src: "/gdhgjg.jpeg",
        title: ["t-shirts", "new trendy print"],
        buttonText: null,
        colSpan: "col-span-1 md:col-span-2",
        rowSpan: "row-span-2 col-start-2 md:col-start-7 row-start-5",
    },
];

const ImageShop = () => {
    return (
        <div className="h-screen p-10 md:p-20 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 grid-rows-6 gap-4 bg-gray-100">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`relative bg-cover bg-center transition-transform duration-300 hover:scale-97 ${image.colSpan} ${image.rowSpan} min-h-[150px]`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 py-6">
                        {image.title.map((text, idx) => (
                            <h1 key={idx} className="text-white text-lg md:text-2xl mb-2">
                                {text}
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
