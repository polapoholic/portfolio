// app/contact/page.tsx
import { profile } from '../profile'

export default function ContactPage() {
    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <section className="max-w-3xl mx-auto px-4 py-12 space-y-4">
                <h1 className="text-2xl font-semibold mb-4">Contact</h1>

                <p className="text-sm text-slate-300">
                    아래 연락처로 문의 주시면 됩니다.
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-300">
                    <div>
                        Email{' '}
                        <a
                            href={`mailto:${profile.email}`}
                            className="text-sky-400 hover:underline"
                        >
                            {profile.email}
                        </a>
                    </div>

                    {/* 필요하면 GitHub, LinkedIn, Notion 등 추가 */}
                    {/* 예:
          <div>
            GitHub{' '}
            <a
              href="https://github.com/your-id"
              className="text-sky-400 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              github.com/your-id
            </a>
          </div>
          */}
                </div>
            </section>
        </main>
    )
}
