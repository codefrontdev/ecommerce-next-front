import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const socialLinks = [
        { href: "https://facebook.com", iconClass: "ri-facebook-fill" },
        { href: "https://instagram.com", iconClass: "ri-instagram-line" },
        { href: "https://twitter.com", iconClass: "ri-twitter-x-line" },
        { href: "https://youtube.com", iconClass: "ri-youtube-fill" },
        { href: "https://tiktok.com", iconClass: "ri-tiktok-fill" }
    ]
    return (
        <footer className="bg-[var(--l-mist)] w-full overflow-x-hidden">
            <div className="w-full">
                <div className="flex flex-col w-full lg:items-start lg:gap-8">
                    {/* Newsletter Section */}
                    <div className="bg-[var(--p-navy)] p-18 flex flex-col w-full items-center text-center md:flex-row md:text-left md:gap-10">
                        {/* Left Section */}
                        <div className="flex w-full md:w-1/2 justify-center md:justify-start">
                            <div>
                                <h1 className="text-4xl font-bold text-[var(--l-mist)]">Sign Up For Newsletters</h1>
                                <p className="mt-4 text-gray-400 font-semibold">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                    <span className="text-[#FDAF00]"> Esse non cupiditate</span>
                                </p>
                            </div>
                        </div>

                        {/* Right Section */}
                        <div className="flex w-full md:w-1/2 justify-end">
                            <form className="w-full md:w-3/4 flex flex-wrap items-center gap-2">
                                <div className="flex-grow bg-[var(--l-mist)] flex items-center px-4 py-2 rounded-lg shadow-md">
                                    <input
                                        type="email"
                                        id="UserEmail"
                                        placeholder="Your email address"
                                        className="bg-[var(--l-mist)] w-full border-none focus:outline-none text-sm"
                                    />
                                </div>
                                <button className="bg-[var(--d-teal)] px-6 py-3 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-[--p-navy] rounded-lg">
                                    Sign Up
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="p-18 w-full grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-y-16">
                        {/* Contact */}
                        <div className="col-span-1">
                            <Image width={45} height={45} src="/elc logo.svg" className="mb-6" alt="logo" />
                            <p className="text-xl font-medium text-black">Contact</p>
                            <ul className="mt-6 space-y-2 text-lg text-gray-700">
                                <li>Address: <span className="text-gray-400">Sale Al Jadida N56 Ain Agadir</span></li>
                                <li>Phone: <span className="text-gray-400">+212 600000000</span></li>
                                <li>Hours: <span className="text-gray-400">10:00 - 18:00 Mon-Fri</span></li>
                                <li className="flex flex-row gap-2 text-2xl">
                                    {socialLinks.map((link, index) => (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="text-gray-700 transition hover:text-[var(--d-teal)]"
                                        >
                                            <i className={link.iconClass}></i>
                                        </Link>
                                    ))}
                                </li>

                            </ul>
                        </div>

                        {/* About Us */}
                        <div className="col-span-1">
                            <p className="text-xl font-medium text-black">About Us</p>
                            <ul className="mt-6 space-y-2 text-lg">
                                {["About Us", "Delivery Information", "Privacy Policy", "Terms & Conditions", "Contact Us"].map((item) => (
                                    <li key={item}>
                                        <Link href="#" className="text-gray-700 transition hover:text-[var(--d-teal)]">{item}</Link>
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
                                        <Link href="#" className="text-gray-700 transition hover:text-[var(--d-teal)]">{item}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* app */}
                        <div className="col-span-2 sm:col-span-1">
                            <p className="text-xl font-medium text-black">Install App</p>
                            <ul className="mt-6 space-y-2 text-lg">
                                <li>From App Store or Google Play</li>
                                <li className="flex flex-col">
                                    <Link href="#" className="cursor-pointer transition hover:text-[var(--d-teal)]">
                                        <i className="ri-apple-fill"> </i> App Store
                                    </Link>
                                    <Link href="#" className="cursor-pointer transition hover:text-[var(--d-teal)]">
                                        <i className="ri-google-play-fill"></i> Google Play
                                    </Link>
                                </li>
                                <li>Secured Payment Gateways</li>
                                <li>
                                    <Link href="#" className="cursor-pointer">
                                        <i className="transition text-4xl ri-paypal-fill hover:text-[var(--d-teal)]"></i>
                                    </Link>
                                    <Link href="#" className="cursor-pointer">
                                        <i className="transition text-6xl ri-visa-line hover:text-[var(--d-teal)]"></i>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom */}
                    <div className="w-full pb-2 text-center">
                        <hr className="bg-black opacity-10" />
                        <p className="text-lg text-gray-400">&copy; 2022. Company Name. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
