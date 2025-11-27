// app/page.tsx

const PORTFOLIO_URL = 'https://polapoholic.vercel.app'

const qrSrc = `https://chart.googleapis.com/chart?chs=260x260&cht=qr&chl=${encodeURIComponent(
    PORTFOLIO_URL
)}`

export default function HomePage() {
  return (
      <main className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-sky-100">
        {/* 가운데 카드 영역 */}
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8 items-stretch">
            {/* 왼쪽: 프로필 / 소개 */}
            <div className="flex-1 bg-white/90 backdrop-blur rounded-3xl shadow-lg border border-sky-100 p-8 flex flex-col justify-between">
              <div className="space-y-4">
                <p className="text-xs font-medium tracking-[0.2em] text-sky-500 uppercase">
                  Portfolio • Frontend Developer
                </p>
                <h1 className="text-3xl md:text-4xl font-semibold text-slate-900">
                  박영수
                  <span className="block mt-1 text-lg md:text-xl text-sky-600">
                  Frontend / Hybrid App Developer
                </span>
                </h1>

                <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                  Vue.js WebView 하이브리드 앱과 Next.js 기반 웹 프론트를
                  개발하고 있습니다. 디지털 명함, QR 코드, Kakao 공유,
                  html2canvas 캡처, iOS/Android WebView 대응 등
                  실제 사내 그룹웨어 서비스를 운영/개발한 경험을 정리한
                  포트폴리오 사이트입니다.
                </p>

                <div className="mt-4 space-y-2 text-sm text-slate-700">
                  <div>
                    <span className="font-medium text-slate-900">Portfolio</span>{' '}
                    <a
                        href={PORTFOLIO_URL}
                        className="text-sky-600 hover:text-sky-700 hover:underline break-all"
                        target="_blank"
                        rel="noreferrer"
                    >
                      {PORTFOLIO_URL}
                    </a>
                  </div>
                  {/* 필요하면 이메일 / 깃허브 추가 */}
                  {/* <div>
                  <span className="font-medium text-slate-900">Email</span>{' '}
                  <a
                    href="mailto:you@example.com"
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                  >
                    you@example.com
                  </a>
                </div>
                <div>
                  <span className="font-medium text-slate-900">GitHub</span>{' '}
                  <a
                    href="https://github.com/polapoholic"
                    className="text-sky-600 hover:text-sky-700 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/polapoholic
                  </a>
                </div> */}
                </div>
              </div>

              {/* 버튼 영역 */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                    href={PORTFOLIO_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-sky-500 text-white text-sm font-medium shadow-sm hover:bg-sky-600 transition-colors"
                >
                  포트폴리오 열기
                </a>
                <button
                    type="button"
                    onClick={() => {
                      navigator.clipboard?.writeText(PORTFOLIO_URL).catch(() => {})
                    }}
                    className="inline-flex items-center justify-center px-4 py-2 rounded-full border border-sky-200 text-sky-700 text-sm font-medium bg-white hover:bg-sky-50 transition-colors"
                >
                  주소 복사하기
                </button>
              </div>
            </div>

            {/* 오른쪽: QR 코드 카드 */}
            <div className="w-full md:w-72 bg-white/95 backdrop-blur rounded-3xl shadow-lg border border-sky-100 p-6 flex flex-col items-center justify-between">
              <div className="w-full text-center mb-4">
                <p className="text-xs font-medium tracking-[0.25em] text-sky-500 uppercase">
                  QR Code
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  폰 카메라로 스캔하면
                  <br />
                  바로 포트폴리오로 이동합니다.
                </p>
              </div>

              <div className="w-48 h-48 md:w-56 md:h-56 bg-sky-50 rounded-2xl border border-sky-100 flex items-center justify-center overflow-hidden">
                <img
                    src={qrSrc}
                    alt="Portfolio QR Code"
                    className="w-full h-full object-contain"
                />
              </div>

              <p className="mt-4 text-[11px] text-slate-500 text-center leading-snug">
                길게 눌러 이미지 저장 후
                <br />
                카카오톡 / 명함 앱 등에 붙여서 공유해도 좋습니다.
              </p>
            </div>
          </div>
        </section>
      </main>
  )
}
