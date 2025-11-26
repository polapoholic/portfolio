// app/projects/data.ts
export type Project = {
    slug: string
    title: string
    period: string
    description: string
    tech: string[]
    details?: string
}

export const projects: Project[] = [
    {
        slug: 'dl-groupware-bizcard',
        title: 'DL 그룹웨어 모바일 BizCard (디지털 명함)',
        period: '2023 - 현재',
        description:
            'Vue.js 기반 WebView 하이브리드 앱에서 디지털 명함, QR 코드, Kakao 공유, html2canvas 캡처 등을 구현.',
        tech: ['Vue.js', 'Pinia', 'html2canvas', 'Kakao API', 'MiAPS Bridge'],
        details:
            'QR 코드 유효시간 관리, Swiper 기반 명함 스와이프, iOS/Android WebView 차이 대응, Kakao 템플릿 이미지 업로드 등.'
    },
    {
        slug: 'today-menu-widget',
        title: '사내 TodayMenu 위젯',
        period: '2024',
        description:
            '사내 식당 메뉴를 위치/시간대별로 보여주는 위젯. 점심/저녁 자동 선택, 캐싱, 공지 연동 구현.',
        tech: ['Vue.js', '.NET API', 'REST']
    }
]
