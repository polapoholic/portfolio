// app/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="border-t border-slate-800 mt-8">
            <div className="max-w-4xl mx-auto px-4 py-4 text-[11px] text-slate-500 flex flex-col md:flex-row gap-2 md:justify-between">
                <span>© {new Date().getFullYear()} YS Park</span>
                <span>
          Built with Next.js (App Router) · TypeScript · Tailwind CSS
        </span>
            </div>
        </footer>
    )
}
