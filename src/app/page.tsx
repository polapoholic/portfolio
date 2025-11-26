// app/page.tsx
import { profile, type Profile } from './profile'
import TechStack from './components/TechStack'

type BizCardProps = {
  profile: Profile
}

function BizCard({ profile }: BizCardProps) {
  return (
      <section className="min-h-[60vh] flex items-center justify-center px-4 py-16 bg-slate-950">
        <div className="max-w-3xl w-full flex flex-col md:flex-row gap-8 items-center">
          {/* 명함 카드 */}
          <div className="w-full md:w-1/2 bg-slate-900 rounded-2xl shadow-xl p-6 border border-slate-700">
            <div className="text-slate-200 text-sm mb-2">Digital Business Card</div>
            <h1 className="text-2xl font-semibold text-slate-50">
              {profile.name}
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              {profile.title}
            </p>

            <p className="text-sm text-slate-300 mt-4 leading-relaxed">
              {profile.summary}
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <div className="text-slate-400">
                Email{' '}
                <a
                    href={`mailto:${profile.email}`}
                    className="text-sky-400 hover:underline"
                >
                  {profile.email}
                </a>
              </div>

              {profile.github && (
                  <div className="text-slate-400">
                    GitHub{' '}
                    <a
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sky-400 hover:underline"
                    >
                      {profile.github.replace('https://', '')}
                    </a>
                  </div>
              )}
            </div>
          </div>

          {/* 나중에 QR 코드 들어갈 영역 */}
          <div className="w-full md:w-1/2 flex flex-col items-center text-slate-200">
            <div className="w-40 h-40 rounded-xl border border-dashed border-slate-600 flex items-center justify-center text-xs text-slate-500">
              QR CODE AREA
            </div>
            <p className="mt-4 text-sm text-slate-400 text-center leading-relaxed">
              이 QR 코드는 이 포트폴리오 페이지로 연결될 예정입니다
              <br />
              명함처럼 스캔해서 바로 제 정보를 볼 수 있습니다
            </p>
          </div>
        </div>
      </section>
  )
}

export default function HomePage() {
  return (
      <main className="bg-slate-950 text-slate-50 min-h-screen">
        <BizCard profile={profile}/>
        <section className="max-w-3xl mx-auto px-4 py-12 space-y-4">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Vue.js 기반 하이브리드 모바일 앱, WebView 브릿지, 디지털 명함, QR 코드, Kakao 연동 등을 주로 개발하고 있습니다.
          </p>
        </section>

        <TechStack/>
      </main>
  )
}
