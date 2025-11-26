// app/about/page.tsx
import { profile } from '../profile'

export default function AboutPage() {
    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <section className="max-w-3xl mx-auto px-4 py-12 space-y-4">
                <h1 className="text-2xl font-semibold mb-4">About</h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                    {profile.summary}
                </p>

                <div className="mt-6 space-y-2 text-sm text-slate-300">
                    <p>
                        Vue.js 기반 하이브리드 모바일 앱(WebView)과
                        사내 그룹웨어 기능들을 개발하고 있습니다. 디지털 명함, QR 코드,
                        Kakao 연동, html2canvas 캡처, iOS/Android WebView 대응 등을 주로 작업해왔습니다.
                    </p>
                    <p>
                        DL 그룹웨어 앱의 BizCard, TodayMenu, 조직도, 전자결재 등
                        여러 모듈을 프론트엔드 중심으로 유지보수 및 신규 기능 개발을 진행해왔습니다.
                    </p>
                </div>
                <h2 className="text-lg font-semibold">이 포트폴리오 사이트</h2>
                <p className="text-slate-300">
                    이 사이트는 Next.js(App Router)와 TypeScript, Tailwind CSS 기반으로 제작했습니다.
                    서버 컴포넌트와 클라이언트 컴포넌트를 분리하고, 페이지/레이아웃 구조를 활용해
                    전자 명함, 프로젝트, Playground 데모를 구성했습니다.
                </p>
            </section>
        </main>
    )
}
