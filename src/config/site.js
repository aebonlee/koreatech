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
      labelKey: 'site.nav.python',
      path: '/python',
      activePath: '/python',
      dropdown: [
        { path: '/python/basics', labelKey: 'site.nav.pythonBasics' },
        { path: '/python/control', labelKey: 'site.nav.pythonControl' },
        { path: '/python/functions', labelKey: 'site.nav.pythonFunctions' },
        { path: '/python/data', labelKey: 'site.nav.pythonData' }
      ]
    },
    { path: '/lectures', labelKey: 'site.nav.lectures', activePath: '/lectures' },
    { path: '/board', labelKey: 'site.nav.board', activePath: '/board' }
  ],

  // 푸터 바로가기 링크
  footerLinks: [
    { path: '/', labelKey: 'nav.home' },
    { path: '/python', labelKey: 'site.nav.python' },
    { path: '/lectures', labelKey: 'site.nav.lectures' },
    { path: '/board', labelKey: 'site.nav.board' }
  ],

  // Family Site 목록
  familySites: [
    { name: 'DreamIT Biz (본사이트)', url: 'https://www.dreamitbiz.com' },
    { name: 'DreamIT Books', url: 'https://books.dreamitbiz.com' }
  ]
};

export default site;
