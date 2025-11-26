// app/components/TechStack.tsx
const stacks = {
    frontend: ['Vue.js', 'React (Next.js)', 'TypeScript', 'Pinia', 'Tailwind CSS'],
    mobile: ['WebView 하이브리드 앱', 'MiAPS Bridge', 'Android WebView', 'iOS WebView'],
    feature: ['디지털 명함', 'QR 코드', 'html2canvas 캡처', 'Kakao 공유', 'vCard 다운로드'],
    backend: ['.NET API 연동', 'REST API', 'SQL 기본']
}

export default function TechStack() {
    return (
        <section className="max-w-3xl mx-auto px-4 py-10 space-y-4">
            <h2 className="text-xl font-semibold">Tech Stack</h2>
            <div className="space-y-4 text-sm">
                {Object.entries(stacks).map(([key, items]) => (
                    <div key={key} className="space-y-2">
                        <h3 className="text-slate-300 capitalize">
                            {key === 'frontend' && 'Frontend'}
                            {key === 'mobile' && 'Mobile / WebView'}
                            {key === 'feature' && 'Features'}
                            {key === 'backend' && 'Backend / API'}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {items.map(item => (
                                <span
                                    key={item}
                                    className="text-[11px] px-2 py-1 rounded-full border border-slate-700 text-slate-200 bg-slate-900/60"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
