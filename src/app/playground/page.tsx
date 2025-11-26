// app/playground/page.tsx
'use client'

import { useEffect, useState } from 'react'

type Mode = '24h' | 'custom'

export default function PlaygroundPage() {
    const [mode, setMode] = useState<Mode>('24h')
    const [customMinutes, setCustomMinutes] = useState(10)
    const [expiresAt, setExpiresAt] = useState<Date | null>(null)
    const [now, setNow] = useState<Date>(new Date())

    // 1초마다 현재 시간 갱신
    useEffect(() => {
        const timer = setInterval(() => {
            setNow(new Date())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    // 남은 시간 계산
    const remainingMs =
        expiresAt != null ? expiresAt.getTime() - now.getTime() : 0

    const isExpired = expiresAt != null && remainingMs <= 0

    const durationMs =
        mode === '24h' ? 24 * 60 * 60 * 1000 : customMinutes * 60 * 1000

    function startTimer() {
        const next = new Date(Date.now() + durationMs)
        setExpiresAt(next)
    }

    function formatRemaining(ms: number) {
        if (ms <= 0) return '00:00:00'
        const totalSeconds = Math.floor(ms / 1000)
        const hours = Math.floor(totalSeconds / 3600)
        const minutes = Math.floor((totalSeconds % 3600) / 60)
        const seconds = totalSeconds % 60

        const pad = (n: number) => n.toString().padStart(2, '0')
        return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
    }

    return (
        <main className="bg-slate-950 text-slate-50 min-h-screen">
            <section className="max-w-3xl mx-auto px-4 py-12 space-y-6">
                <h1 className="text-2xl font-semibold mb-2">
                    QR 유효시간 카운트다운 데모
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed">
                    실제 업무에서 구현했던 QR 코드 유효시간(예: 24시간) 타이머 로직의
                    단순화 버전입니다. React + TypeScript로 남은 시간을 계산하고,
                    만료 시 상태를 변경하는 예제입니다.
                </p>

                {/* 모드 선택 */}
                <div className="flex flex-wrap gap-3 text-sm">
                    <button
                        onClick={() => setMode('24h')}
                        className={
                            mode === '24h'
                                ? 'px-3 py-1 rounded-full bg-sky-500 text-slate-50'
                                : 'px-3 py-1 rounded-full border border-slate-700 text-slate-200'
                        }
                    >
                        24시간 유효 QR
                    </button>
                    <button
                        onClick={() => setMode('custom')}
                        className={
                            mode === 'custom'
                                ? 'px-3 py-1 rounded-full bg-sky-500 text-slate-50'
                                : 'px-3 py-1 rounded-full border border-slate-700 text-slate-200'
                        }
                    >
                        커스텀 분 단위
                    </button>
                </div>

                {/* 커스텀 분 입력 */}
                {mode === 'custom' && (
                    <div className="text-sm text-slate-200 flex items-center gap-2">
                        <span>유효 시간</span>
                        <input
                            type="number"
                            min={1}
                            max={60 * 24}
                            value={customMinutes}
                            onChange={e => setCustomMinutes(Number(e.target.value) || 0)}
                            className="w-20 px-2 py-1 rounded bg-slate-900 border border-slate-700 text-right"
                        />
                        <span>분</span>
                    </div>
                )}

                {/* 타이머 카드 */}
                <div className="mt-4 border border-slate-800 rounded-2xl bg-slate-900/60 p-6 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-32 h-32 rounded-xl border border-dashed border-slate-600 flex items-center justify-center text-xs text-slate-500">
                        QR 미리보기
                    </div>

                    <div className="flex-1 space-y-2 text-sm">
                        <div className="text-slate-300">남은 시간</div>
                        <div className="text-3xl font-mono">
                            {expiresAt ? formatRemaining(remainingMs) : '시작 전'}
                        </div>

                        <div className="mt-3 text-xs text-slate-400 space-y-1">
                            <div>현재 시간: {now.toLocaleString()}</div>
                            <div>
                                만료 시간:{' '}
                                {expiresAt ? expiresAt.toLocaleString() : '타이머를 시작하세요'}
                            </div>
                            <div>
                                상태:{' '}
                                <span className={isExpired ? 'text-red-400' : 'text-emerald-400'}>
                  {expiresAt
                      ? isExpired
                          ? '만료됨 (QR 재발급 필요)'
                          : '유효함'
                      : '대기 중'}
                </span>
                            </div>
                        </div>

                        <button
                            onClick={startTimer}
                            className="mt-3 inline-flex items-center px-4 py-2 rounded-lg bg-sky-500 text-sm text-slate-50 hover:bg-sky-400"
                        >
                            타이머 시작
                        </button>
                    </div>
                </div>
            </section>
        </main>
    )
}
