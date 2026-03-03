/**
 * 사이트 설정 파일
 * 하위 사이트의 브랜드, 메뉴, 푸터 등을 정의합니다.
 * 이 파일만 수정하면 Navbar/Footer가 자동으로 반영됩니다.
 */

const site = {
  // 사이트 기본 정보
  name: 'KoreaTech 컴퓨팅 사고',
  nameKo: '한국기술교육대학교 컴퓨팅 사고',
  description: '코리아텍 컴퓨팅 사고 - 파이썬 기초부터 문제해결까지',
  url: 'https://koreatech.dreamitbiz.com',

  // 부모 사이트
  parentSite: {
    name: 'DreamIT Biz',
    url: 'https://www.dreamitbiz.com'
  },

  // 브랜드 로고 텍스트
  brand: {
    parts: [
      { text: 'Korea', className: 'brand-dream' },
      { text: 'Tech', className: 'brand-it' },
      { text: ' CT', className: 'brand-biz' }
    ]
  },

  // 테마 컬러 (meta theme-color)
  themeColor: '#0046C8',

  // 네비게이션 메뉴
  menuItems: [
    { path: '/', labelKey: 'nav.home' },
    {
      labelKey: 'site.nav.ct',
      path: '/ct/what-is-ct',
      activePath: '/ct',
      dropdown: [
        { path: '/ct/what-is-ct', labelKey: 'site.nav.whatIsCT' },
        { path: '/ct/weekly-plan', labelKey: 'site.nav.weeklyPlan' },
        { path: '/ct/syllabus', labelKey: 'site.nav.syllabus' },
        { path: '/ct/practice-guide', labelKey: 'site.nav.practiceGuide' },
      ]
    },
    {
      labelKey: 'site.nav.python',
      path: '/python',
      activePath: '/python',
      dropdown: [
        { path: '/python/setup', labelKey: 'site.nav.pyWeek1' },
        { path: '/python/io', labelKey: 'site.nav.pyWeek2' },
        { path: '/python/datatype', labelKey: 'site.nav.pyWeek3' },
        { path: '/python/ipo', labelKey: 'site.nav.pyWeek4' },
        { path: '/python/turtle', labelKey: 'site.nav.pyWeek5' },
        { path: '/python/flowchart', labelKey: 'site.nav.pyWeek6' },
        { path: '/python/condition', labelKey: 'site.nav.pyWeek7' },
        { path: '/python/loop', labelKey: 'site.nav.pyWeek8' },
        { path: '/python/function', labelKey: 'site.nav.pyWeek9' },
        { path: '/python/exception', labelKey: 'site.nav.pyWeek10' },
        { path: '/python/list', labelKey: 'site.nav.pyWeek11' },
      ]
    },
    {
      labelKey: 'site.nav.aiTips',
      path: '/ai-tips',
      activePath: '/ai-tips',
      dropdown: [
        { path: '/ai-tips/chatgpt', labelKey: 'site.nav.aiChatGPT' },
        { path: '/ai-tips/claude', labelKey: 'site.nav.aiClaude' },
        { path: '/ai-tips/gemini', labelKey: 'site.nav.aiGemini' },
        { path: '/ai-tips/copilot', labelKey: 'site.nav.aiCopilot' },
        { path: '/ai-tips/prompt', labelKey: 'site.nav.aiPrompt' },
        { path: '/ai-tips/coding', labelKey: 'site.nav.aiCoding' },
        { path: '/ai-tips/writing', labelKey: 'site.nav.aiWriting' },
        { path: '/ai-tips/learning', labelKey: 'site.nav.aiLearning' },
      ]
    },
    { path: '/lectures', labelKey: 'site.nav.lectures', activePath: '/lectures' },
    { path: '/references', labelKey: 'site.nav.references', activePath: '/references' },
    { path: '/board', labelKey: 'site.nav.board', activePath: '/board' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/ct/what-is-ct', labelKey: 'site.nav.ct' },
    { path: '/python', labelKey: 'site.nav.python' },
    { path: '/ai-tips', labelKey: 'site.nav.aiTips' },
    { path: '/lectures', labelKey: 'site.nav.lectures' },
    { path: '/references', labelKey: 'site.nav.references' },
    { path: '/board', labelKey: 'site.nav.board' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT Books', url: 'https://books.dreamitbiz.com' }
  ]
};

export default site;
