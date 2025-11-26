// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { projects } from '../data'

type Params = {
    slug: string
}

// SSG용 (선택, 없어도 dev에선 동작함)
export function generateStaticParams() {
    return projects.map(p => ({ slug: p.slug }))
}

// 🔥 여기서 params가 Promise라 async + await 필요
export default async function ProjectDetailPage({
                                                    params
                                                }: {
    params: Promise<Params>
}) {
    const { slug } = await params

    const project = projects.find(p => p.slug === slug)

    if (!project) {
        notFound()
    }

    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <section className="max-w-3xl mx-auto px-4 py-12 space-y-4">
                <h1 className="text-2xl font-semibold">{project.title}</h1>
                <p className="text-xs text-slate-400">{project.period}</p>

                <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                </p>

                {project.details && (
                    <p className="text-sm text-slate-300 leading-relaxed">
                        {project.details}
                    </p>
                )}

                <div className="flex flex-wrap gap-2 mt-3 text-xs">
                    {project.tech.map(t => (
                        <span
                            key={t}
                            className="px-2 py-1 rounded-full border border-slate-700 bg-slate-900/60"
                        >
              {t}
            </span>
                    ))}
                </div>
            </section>
        </main>
    )
}
