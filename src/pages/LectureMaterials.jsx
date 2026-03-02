import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import SEOHead from '../components/SEOHead';

const PDF_LIST = [
  { week: 1, file: 'week01.pdf', title: '컴퓨팅 사고 개요', titleEn: 'Introduction to CT' },
  { week: 2, file: 'week02.pdf', title: '입출력과 변수', titleEn: 'I/O & Variables' },
  { week: 3, file: 'week03.pdf', title: '자료형과 연산', titleEn: 'Data Types & Operations' },
  { week: 4, file: 'week04.pdf', title: 'IPO와 PDC', titleEn: 'IPO & PDC' },
  { week: 5, file: 'week05.pdf', title: '터틀 그래픽', titleEn: 'Turtle Graphics' },
  { week: 6, file: 'week06.pdf', title: '순서도', titleEn: 'Flowchart' },
  { week: 7, file: 'week07.pdf', title: 'IF 조건문', titleEn: 'Conditionals' },
  { week: 8, file: 'week08.pdf', title: '반복문', titleEn: 'Loops' },
  { week: 9, file: 'week09.pdf', title: '함수', titleEn: 'Functions' },
  { week: 10, file: 'week10.pdf', title: '예외처리', titleEn: 'Exceptions' },
  { week: 11, file: 'week11.pdf', title: '리스트', titleEn: 'Lists' },
  { week: 12, file: 'week12.pdf', title: '종합 정리', titleEn: 'Review' },
];

const LectureMaterials = () => {
  const { t, language } = useLanguage();
  const [viewingPdf, setViewingPdf] = useState(null);

  const getPdfUrl = (file) => `${import.meta.env.BASE_URL}pdf/${file}`;

  const handleView = (pdf) => {
    setViewingPdf(viewingPdf?.file === pdf.file ? null : pdf);
  };

  return (
    <>
      <SEOHead title={t('site.lectures.materials.title')} path="/lectures/materials" />

      <section className="page-header">
        <div className="container">
          <h1>{t('site.lectures.materials.title')}</h1>
          <p>{t('site.lectures.materials.subtitle')}</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="materials-table-wrapper">
            <table className="materials-table">
              <thead>
                <tr>
                  <th className="materials-col-week">{t('site.lectures.materials.week')}</th>
                  <th>{t('site.lectures.materials.titleLabel')}</th>
                  <th className="materials-col-file">{t('site.lectures.materials.fileName')}</th>
                  <th className="materials-col-actions">{t('site.lectures.materials.actions')}</th>
                </tr>
              </thead>
              <tbody>
                {PDF_LIST.map((pdf) => (
                  <tr key={pdf.week} className={viewingPdf?.file === pdf.file ? 'active-row' : ''}>
                    <td className="materials-col-week">
                      <span className="materials-week-badge">
                        {pdf.week}{t('site.lectures.materials.weekUnit')}
                      </span>
                    </td>
                    <td className="materials-title-cell">
                      {language === 'ko' ? pdf.title : pdf.titleEn}
                    </td>
                    <td className="materials-col-file materials-file-cell">{pdf.file}</td>
                    <td className="materials-col-actions">
                      <div className="materials-btn-group">
                        <button
                          className={`materials-btn view ${viewingPdf?.file === pdf.file ? 'active' : ''}`}
                          onClick={() => handleView(pdf)}
                        >
                          {viewingPdf?.file === pdf.file
                            ? t('site.lectures.materials.close')
                            : t('site.lectures.materials.view')}
                        </button>
                        <a
                          className="materials-btn newtab"
                          href={getPdfUrl(pdf.file)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t('site.lectures.materials.newTab')}
                        </a>
                        <a
                          className="materials-btn download"
                          href={getPdfUrl(pdf.file)}
                          download={pdf.file}
                        >
                          {t('site.lectures.materials.download')}
                        </a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {viewingPdf && (
            <div className="pdf-viewer">
              <div className="pdf-viewer-header">
                <h3>
                  {viewingPdf.week}{t('site.lectures.materials.weekUnit')} —{' '}
                  {language === 'ko' ? viewingPdf.title : viewingPdf.titleEn}
                </h3>
                <button className="materials-btn close" onClick={() => setViewingPdf(null)}>
                  {t('site.lectures.materials.close')}
                </button>
              </div>
              <div className="pdf-viewer-container">
                <iframe
                  src={getPdfUrl(viewingPdf.file)}
                  title={viewingPdf.title}
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default LectureMaterials;
