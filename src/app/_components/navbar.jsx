import styles from '@/styles/styles.module.css';
import Image from 'next/image';

export default function Navbar() {
    return (
        < header className="bg-[#E3E6F3] p-[.3em]" >
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-black text-3xl" href="#">
                            <Image width={35} height={35} src="/elc logo.svg" alt="logo" unoptimized />
                        </a>
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className={styles.linksRouter}>
                                <li>
                                    <a className={styles.linkItem} href="#"> Home </a>
                                </li>

                                <li>
                                    <a className={styles.linkItem} href="#"> Shop </a>
                                </li>

                                <li>
                                    <a className={styles.linkItem} href="#"> Blog </a>
                                </li>

                                <li>
                                    <a className={styles.linkItem} href="#"> About </a>
                                </li>

                                <li>
                                    <a className={styles.linkItem} href="#"> Contact Us </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="hidden md:relative md:block">
                            <button
                                type="button"
                                className="overflow-hidden border-none bg-none cursor-pointer"
                            >
                                <i className="text-[1.125rem] ri-shopping-bag-fill transition text-black hover:text-[var(--dark-teal)]" ></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    );
}

