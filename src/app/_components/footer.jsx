import Image from 'next/image';
export default function Footer() {
    return (
        <footer className="bg-white w-full">
            <div className="w-full">
                <div className="flex flex-col w-full lg:items-start lg:gap-8">
                    {/* Newsletter Section */}
                    <div className="p-10 bg-[var(--purple-navy)] flex flex-col w-full items-center text-center md:flex-row md:text-left md:gap-10">
                        {/* Left Section */}
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                            <div>
                                <h1 className="text-4xl font-bold text-white">Sign Up For Newsletters</h1>
                                <p className="mt-4 text-gray-400 font-semibold">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    <span className="text-[#FDAF00]"> Esse non cupiditate</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex w-full md:w-1/2 justify-end">
                            <form className="w-full md:w-3/4 flex flex-wrap items-center gap-2">
                                <div className="flex-grow bg-white flex items-center px-4 py-2 rounded-lg shadow-md">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Your email address"
                                        className="bg-white w-full border-none focus:outline-none text-sm"
                                    />
                                </div>
                                <button className="bg-[var(--dark-teal)] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-teal-600 rounded-lg">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="p-9 w-full grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-y-16">
                        {/* Contact */}
                        <div className="col-span-1">
                            <Image width={45} height={45} src="/elc logo.svg" className="mb-6" alt="logo" />
                            <p className="text-xl font-medium text-black">Contact</p>
                            <ul className="mt-6 space-y-2 text-lg text-gray-700">
                                <li>Address: <span className="text-gray-400">Sale Al Jadida N56 Ain Agadir</span></li>
                                <li>Phone: <span className="text-gray-400">+212 600000000</span></li>
                                <li>Hours: <span className="text-gray-400">10:00 - 18:00 Mon-Fri</span></li>
                            </ul>
                        </div>

                        {/* About Us */}
                        <div className="col-span-1">
                            <p className="text-xl font-medium text-black">About Us</p>
                            <ul className="mt-6 space-y-2 text-lg">
                                {["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-700 transition hover:text-[var(--dark-teal)]">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* My Account */}
                        <div className="col-span-2 sm:col-span-1">
                            <p className="text-xl font-medium text-black">My Account</p>
                            <ul className="mt-6 space-y-2 text-lg">
                                {["Sign In", "View Cart", "My Wishlist", "Track My Order", "Help"].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-700 transition hover:text-[var(--dark-teal)]">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* app */}
                        <div className="col-span-2 sm:col-span-1">
                            <p className="text-xl font-medium text-black">Install App</p>
                            <ul className="mt-6 space-y-2 text-lg">
                                <li>Form App Store or Google Play</li>
                                <li className="flex flex-col " >
                                    <a className="cursor-pointer transition hover:text-[var(--dark-teal)]"> <i className="ri-apple-fill"> </i> app Store </a>
                                    <a className="cursor-pointer transition hover:text-[var(--dark-teal)]"><i className="ri-google-play-fill"></i> Google Play</a>
                                </li>
                                <li>Secured Payment Gateways </li>
                                <li>
                                    <a className="cursor-pointer"><i className="transition text-4xl ri-paypal-fill hover:text-[var(--dark-teal)]"></i></a>
                                    <a className="cursor-pointer"><i className="transition text-6xl ri-visa-line hover:text-[var(--dark-teal)]"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="w-full pb-2 text-center">
                        <hr className="text-black bg-black opacity-10" />
                        <p className="text-lg text-gray-400">&copy; 2022. Company Name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
