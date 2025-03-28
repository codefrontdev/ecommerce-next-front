"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import styles from "../styles/styles.module.css";
import Image from "next/image";
import Link from "next/link";

const links = [
    { name: "Home", href: "/home" },
    { name: "Shop", href: "/shop" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    const isActive = (href) => pathname === href;

    return (
        <header className="bg-[#ffffffd9] backdrop-blur-lg w-screen z-[1000] fixed p-[.3em] overflow-x-hidden border-b border-b-gray-300">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                <Link href="/" className="block text-black text-3xl">
                    <Image
                        width={35}
                        height={35}
                        src="/elc logo.svg"
                        alt="logo"
                        unoptimized
                    />
                </Link>

                <div className="hidden md:flex md:items-center md:gap-12">
                    <nav aria-label="Global">
                        <ul className={styles.linksRouter}>
                            {links.map(({ name, href }) => (
                                <li key={name}>
                                    <Link
                                        href={href}
                                        className={`${styles.linkItem} ${isActive(href) ? styles.activeLink : ""
                                            }`}
                                    >
                                        {name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button className="border-none bg-none cursor-pointer">
                        <i className="text-[1.125rem] ri-shopping-bag-fill transition text-black hover:text-[var(--d-teal)]"></i>
                    </button>
                </div>

                <button
                    className="block md:hidden text-3xl text-black cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <i className="ri-menu-line"></i>
                </button>
            </div>

            <div
                className={`shadow-[0px_11px_50px_1px_#00000010] absolute top-0 left-0 w-full h-[70%] bg-[var(--l-mist)] z-50 transform ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 md:hidden`}
            >
                <button
                    className="cursor-pointer absolute top-4 right-4 text-3xl"
                    onClick={() => setMenuOpen(false)}
                >
                    <i className="ri-close-fill"></i>
                </button>
                <ul className="flex flex-col items-center justify-center h-full space-y-6 text-lg font-medium">
                    {links.map(({ name, href }) => (
                        <li key={name}>
                            <Link
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className={isActive(href) ? styles.activeLink : ""}
                            >
                                {name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
