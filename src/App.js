import './App.css';
import { useState,useCallback, useEffect,useRef } from 'react';
import "fullpage.js/dist/fullpage.min.css";
import fullpage from 'fullpage.js';
import { FaGithub } from "react-icons/fa6";
import { Modal } from 'bootstrap';
import Preview from './components/Preview'; 
import Page2Second from './Page2/Page2Second';

function App() {
  const [activeTab, setActiveTab] = useState('JS');

  const fullpageLoading = () => {
    new fullpage("#fullpage", {
      CSS3: true,
      sectionsColor: ['#FF6347', '#32CD32', '#1E90FF', '#FFD700'],
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      controlArrows: false,
      slidesNavPosition: 'bottom',
      navigationTooltips: ['Profile', 'EC5 JQuery', 'EC6 React', 'Extensions'],
      showActiveTooltip: true,
      menu: '#menu',
      scrollHorizontally: false,
    });
  };

  useEffect(() => {
    fullpageLoading();
  }, []);

  const modal = useRef();
  const openModal = useCallback(()=>{
      const tag = Modal.getOrCreateInstance(modal.current);
      tag.show();
  },[modal]);

  const closeModal = useCallback(()=>{
      const tag = Modal.getInstance(modal.current);
      tag.hide();
  },[modal]);


  return (
    <>
     <Preview />
         <div className="modal" tabIndex="-1" ref={modal}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                  <div className='center'>pp01024689860@gmail.com</div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
                </div>
            </div>
            </div>

        <ul id="menu">
          <li className='wrapper'>
            <a href="https://host.sysout.co.kr/kh14sc/home/login" className='menu-item'>EC5 Jquery DNS</a>
          </li>
          <li>
            <a href="https://topguntravel.shop" className='menu-item'>EC6 React DNS</a>
          </li>
          <li>
            <a href="https://topguntravel.shop" className='menu-item'>Extensions DNS </a>
          </li>
          <li>
            <a href="https://github.com/parkjunho2/pp01024689860" className='menu-item'><FaGithub size={30} /></a>
          </li>
        </ul>

          <div id="fullpage">
            <div className="section active page1">
                <div className='row mx-4'>
                  <div className='row ms-5'>

                  <h1>프로필</h1>
                  <h3>간단한 자기소개 해주세요간단한</h3>

                  <h3 className='mt-5'>Force</h3>
                  <div>사용하는 언어</div>

                  <h3 className='mt-5'>Knowledge</h3>
                  <div>다룰줄 아는 어플리케이션을 적어주세요</div>
                  
                  <div className='row mt-5'>
                  <a href='https://naver.com' className='btn btn-outline-light mx-3' style={{width:"100px"}}>깃허브</a>
                  <button className='btn btn-outline-light mx-3' style={{width:"100px"}}
                  onClick={openModal}>이메일</button>
                  </div>
                  </div>
                  <div className='page1-right ms-5 ps-5'>
                  <div className='imageBox'>
                  <div className='overlay'>
                    <div>
                      <a href='https://naver.com' className='mx-3'><FaGithub className='icon'/></a>
                      <a href='https://naver.com' className='mx-3'><FaGithub className='icon'/></a>
                      <a href='https://naver.com' className='mx-3'><FaGithub className='icon'/></a>
                      <a href='https://naver.com' className='mx-3'><FaGithub className='icon'/></a>
                    
                    </div>
                  </div>
                  <img src='/images/profile.png' className='userImage' alt="" />
                </div>
                  </div>
                </div>
          </div>
          <div className="section page2">
              <div className='slide'>
                <div className='row'>
                  <div className='col-6 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/login.mp4" type="video/mp4"/>
                  </video>
                   </div>         
                  <div className='row col-6 ms back-ground-white'>
                    <h1 className='mb-3'><span className='text-warning me-5'>대학교 홈페이지</span>
                    <a href='https://www.erdcloud.com/d/aLZnhSbNA6kKDuM8f' className='text-primary' id='link-a'>
                    ERD Link
                    </a></h1>
                    <h1><span className='text-warning me-3'>참여인원 </span>6명</h1>
                    <h1><span className='text-warning me-5'>기여도</span> 20%</h1>
                    <h1><span className='text-warning me-3'>작업기간 </span> 24.08.22 - 24.09.04 (2주)</h1>
                    <h1 className='text-warning mt-2'>담당 업무</h1>
                    <h1 className='row'>
                      <div className='col'>지도API</div>
                      <div className='col'>학과CRUD</div>
                      <div className='col'>강의CRUD</div>
                    </h1>  
                    <h2 className='mt-4 text-warning'>주요기술 요약</h2>
                    <h4>JSP사용하여 정적 웹 페이지를 생성하며 MVC패턴으로 서버와<br/> 
                     클라이언트를 나눠 요청처리하도록 코드를 작성했습니다. <br/>
                    JS코드는 jQuery의 CDN을 사용하여 DOM조작과 AJAX를<br/>
                    통해 비동기적으로 서버와 데이터를 통신하여 페이지 리로드 없이 <br/>
                    동적인 콘텐츠 받아올수 있도록 코드를 작성했습니다.</h4>
                  </div>
                    </div>
                </div>


                <div className='slide'>
              <h1 className='ms-5 text-danger mb-0'>{`/*Development Environment*/`}</h1>
              <pre className='text-black mt-0' style={{ fontSize: '19.5px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>{`
1    {
2       "BackEnd" : {
3            "OS" : "Window10" ,                                            
4            "Language"  : "Java" ,
5            "IDE" : [
6                   { "Eclipse" , "VSCode" }
7                ] ,
8            "FrameWork" : "Spring Boot" ,
9            "RDBMS" : { "Oracle11g" : "DBeaver" } ,
10          "SQLMapper" : "JDBCTemplate" ,
11           "WAS" : "Apache Tomcat" ,
12          "Library" : [
13                       { "Spring Web" ,  "Spring Boot DevTools" ,  "Oracle Driver" ,  "Spring Data JDBC" ,
14                       "Lombok" ,  "Java Mail Sender" , "Spring Security" }
15               ]
16          },
17     "FrontEnd" : {
18          "UI" :  { "MVC" : "JSP" } ,
19          "JS" : { "EC5"  : "JQuery" } ,
20         "API" : "KakaoMap" ,
21          "CDN" : [
22                    { "Moment" ,  "JQuery",  "SweetAlert2" }
23             ]
24         }
25  }
`}</pre>
              </div>

              <div className='slide'>
                <Page2Second/>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      HTML
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 3</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      HTML
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 4</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      HTML
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 5</h2>
                  </div>
                </div>
              </div>
          </div>
        
          <div className="section page3">
              <div className='slide'>
                <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 1</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 2</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 3</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 4</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 5</h2>
                  </div>
                </div>
              </div>
          </div>
          <div className="section page4">
          <div className='row'>
                  <div className='col-6 ps-5'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JS코드
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>

                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    CSS코드
                  </code></pre>
                </div>
              </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 4</h2>
                  </div>
                </div>
          </div>
          </div>
          
    </>
  );
}

export default App;