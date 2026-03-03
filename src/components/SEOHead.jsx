import { useLanguage } from '../contexts/LanguageContext';

const SEOHead = ({ title, description, path = '', ogImage, noindex = false }) => {
  const SITE = 'KoreaTech 컴퓨팅 사고 | 한국기술교육대학교';
  const BASE = 'https://koreatech.dreamitbiz.com';
  const DEFAULT_DESC = '코리아텍 컴퓨팅 사고 - 파이썬 기초부터 문제해결까지';
  const fullTitle = title ? `${title} | ${SITE}` : SITE;
  const desc = description || DEFAULT_DESC;
  const image = ogImage || `${BASE}/og-image.png`;

  const { language } = useLanguage();

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={`${BASE}${path}`} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={`${BASE}${path}`} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEOHead;
