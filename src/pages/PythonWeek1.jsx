import { Link } from 'react-router-dom';

const PythonWeek1 = () => (
  <>
    <section className="page-header">
      <div className="container">
        <h1>1주차: 파이썬 및 실습환경 안내</h1>
        <p>Python 설치, IDLE 및 VS Code 개발환경 구성</p>
      </div>
    </section>
    <section className="section lesson-content">
      <div className="container">
        <div className="lesson-body">

          <h2>1. 파이썬이란?</h2>
          <p>
            파이썬(Python)은 1991년 귀도 반 로섬(Guido van Rossum)이 만든 프로그래밍 언어입니다.
            문법이 간결하고 읽기 쉬워 프로그래밍 입문자에게 적합합니다.
          </p>
          <ul>
            <li>간결하고 직관적인 문법</li>
            <li>다양한 라이브러리 생태계</li>
            <li>웹, 데이터 분석, AI 등 폭넓은 활용 분야</li>
          </ul>

          <h2>2. 파이썬 설치</h2>
          <p>
            <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">python.org</a>에서
            최신 버전을 다운로드하여 설치합니다. 설치 시 <strong>"Add Python to PATH"</strong>를 반드시 체크하세요.
          </p>
          <div className="code-block">
            <div className="code-header">터미널에서 버전 확인</div>
            <pre><code>python --version{'\n'}# Python 3.12.x</code></pre>
          </div>

          <h2>3. IDLE 사용하기</h2>
          <p>IDLE은 파이썬 설치 시 함께 제공되는 기본 개발 환경입니다.</p>
          <ul>
            <li>시작 메뉴에서 "IDLE" 검색하여 실행</li>
            <li><strong>대화형 모드 (Shell)</strong>: 코드를 한 줄씩 입력하고 바로 결과 확인</li>
            <li><strong>스크립트 모드</strong>: File → New File로 .py 파일 작성 후 F5로 실행</li>
          </ul>
          <div className="code-block">
            <div className="code-header">IDLE Shell에서 실행</div>
            <pre><code>{`>>> print("Hello, Python!")
Hello, Python!
>>> 2 + 3
5`}</code></pre>
          </div>

          <h2>4. VS Code 설치 및 설정</h2>
          <p>
            <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">Visual Studio Code</a>는
            가장 인기 있는 코드 편집기입니다.
          </p>
          <ol>
            <li>VS Code 다운로드 및 설치</li>
            <li>확장(Extensions)에서 <strong>"Python"</strong> (Microsoft) 설치</li>
            <li>새 파일(*.py) 생성 → 코드 작성 → 터미널에서 실행</li>
          </ol>

          <h2>5. 첫 프로그램: Hello World</h2>
          <div className="code-block">
            <div className="code-header">hello.py</div>
            <pre><code>{`# 나의 첫 파이썬 프로그램
print("Hello, World!")
print("안녕하세요, 파이썬!")
print("컴퓨팅 사고 수업에 오신 것을 환영합니다!")`}</code></pre>
          </div>

          <div className="exercise-box">
            <h3>실습 과제</h3>
            <p>자신의 이름, 학번, 전공을 출력하는 프로그램을 작성해보세요.</p>
          </div>

          <div className="lesson-nav">
            <Link to="/python" className="lesson-nav-btn prev">← 목록으로</Link>
            <Link to="/python/io" className="lesson-nav-btn next">2주차: 입출력과 변수 →</Link>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default PythonWeek1;
