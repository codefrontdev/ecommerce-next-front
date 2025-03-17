"use client"
import { useState } from 'react';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { name: 'Home', href: '/home' },
    { name: 'Shop', href: '/shop' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-[var(--l-mist)] p-[.3em] overflow-x-hidden">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo Section */}
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <Link href="/" className="block text-black text-3xl">
                            <Image width={35} height={35} src="/elc logo.svg" alt="logo" unoptimized />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:gap-12">
                        <nav aria-label="Global">
                            <ul className={styles.linksRouter}>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link className={styles.linkItem} href={link.href}>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="relative">
                            <button type="button" className="border-none bg-none cursor-pointer">
                                <i className="text-[1.125rem] ri-shopping-bag-fill transition text-black hover:text-[var(--d-teal)]"></i>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-3xl text-black cursor-pointer"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <i className="ri-menu-fill"></i>
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.open : ''}`}>
                {/* Close Button */}
                <button
                    className={styles.closeButton}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <i className="ri-close-fill"></i>
                </button>

                {/* Mobile Navigation */}
                <ul className={styles.mobileLinks}>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link href={link.href} onClick={() => setIsMenuOpen(false)}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
