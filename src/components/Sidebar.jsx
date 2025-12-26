"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const navItems = [
        { name: 'PORTRAIT', href: '/galeria/modelos' },
        { name: 'PAISAJES', href: '/galeria/paisajes' },
        { name: 'CANTABRIA', href: '/galeria/cantabria' },
        { name: 'DEPORTE', href: '/galeria/deporte' },
        { name: 'URBEX', href: '/galeria/urbex' },
        { name: 'AUTOR', href: '/galeria/autor' },
    ];


    return (
        <aside className="fixed left-0 top-0 h-screen w-[300px] bg-black text-white p-12 flex flex-col justify-between z-50">
            <div>
                <Link href="/" className="block">
                    <h1 className="text-4xl leading-tight font-serif tracking-tighter mb-16">
                        THE <br />
                        <span className="text-5xl font-bold">FOTOSCLICK</span> <br />
                        STUDIO
                    </h1>
                </Link>

                <nav>
                    <h2 className="text-2xl font-serif italic mb-6">Portfolios</h2>
                    <ul className="space-y-4">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`sidebar-link ${pathname === item.href ? 'text-white' : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="mt-auto pt-10">
                <h2 className="text-2xl font-serif italic mb-6">Address</h2>
                <div className="text-xs uppercase tracking-widest text-[#888] leading-loose">
                    FOTOSCLICK STUDIO <br />
                    SANTANDER, CANTABRIA <br />
                    SPAIN <br />
                    39001
                </div>

                <div className="mt-8 flex space-x-4 text-xs tracking-widest text-[#888]">
                    <a href="#" className="hover:text-white transition-colors">IG</a>
                    <a href="#" className="hover:text-white transition-colors">FB</a>
                    <a href="#" className="hover:text-white transition-colors">TW</a>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
