// app/projects/page.tsx
import Link from 'next/link'
import { projects } from './data'

export default function ProjectsPage() {
    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <section className="max-w-4xl mx-auto px-4 py-12">
                <h1 className="text-2xl font-semibold mb-6">Projects</h1>

                <div className="space-y-4">
                    {projects.map(project => (
                        <article
                            key={project.slug}
                            className="border border-slate-800 rounded-xl p-4 bg-slate-900/60"
                        >
                            <h2 className="text-lg font-semibold">
                                <Link href={`/projects/${project.slug}`} className="hover:text-sky-400">
                                    {project.title}
                                </Link>
                            </h2>
                            <p className="text-xs text-slate-400 mt-1">{project.period}</p>
                            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                                {project.description}
                            </p>
                        </article>
                    ))}
                </div>
            </section>
        </main>
    )
}
