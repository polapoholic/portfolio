// app/profile.ts

export type Profile = {
    name: string
    title: string
    summary: string
    email: string
    github?: string
}

export const profile: Profile = {
    name: '박영수',
    title: 'Frontend Developer (Vue & WebView)',
    summary: 'Vue.js 기반 하이브리드 모바일 앱과 WebView 브릿지 개발을 주로 합니다.',
    email: 'you@example.com',
    github: 'https://github.com/your-id'
}
