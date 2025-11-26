// app/components/Nav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/playground', label: 'Playground'}
]

export default function Nav() {
    const pathname = usePathname()

    return (
        <header className="border-b border-slate-800 bg-slate-950/80 backdrop-blur">
            <nav className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
                <div className="text-sm font-semibold text-slate-100">
                    YS Park
                </div>
                <ul className="flex gap-4 text-sm">
                    {links.map(link => {
                        const isActive =
                            link.href === '/'
                                ? pathname === '/'
                                : pathname.startsWith(link.href)

                        return (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={
                                        isActive
                                            ? 'text-sky-400'
                                            : 'text-slate-400 hover:text-slate-100'
                                    }
                                >
                                    {link.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </header>
    )
}
