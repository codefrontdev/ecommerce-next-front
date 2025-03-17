import Image from 'next/image';
import React from 'react';
const PecialOffers = () => {
    const features = [
        { image: "/online-ad.svg", text: "Online Order" },
        { image: "/pay-online.svg", text: "Save Money" },
        { image: "/order-delivered_puaw.svg", text: "Promotions" },
        { image: "/young-and-happy.svg", text: "Happy Sale" },
        { image: "/showing-support.svg", text: "Support" },
    ];
    return (
        <div className="flex flex-wrap w-full bg-[var(--l-mist)] h-auto justify-evenly items-center p-4">
            {features.map((feature, index) => (
                <div key={index} className="m-4 p-8 flex flex-col border rounded-xl border-[var(--d-teal)] bg-[#1d817908] items-center space-y-4 text-[var(--d-teal)]">
                    <div className="w-28 h-28 overflow-hidden ">
                        <Image
                            src={feature.image}
                            width='0'
                            height='0'
                            alt={feature.text}
                            className="object-fill w-full h-full"

                        />
                    </div>
                    <h2 className="text-xl font-semibold">{feature.text}</h2>
                </div>
            ))}
        </div>
    )
}

export default PecialOffers;
