import './App.css';
import { useCallback, useEffect } from 'react';
import "fullpage.js/dist/fullpage.min.css";
import fullpage from 'fullpage.js';
import { FaGithub } from "react-icons/fa6";

function App() {

  useEffect(() => {
    fullpageLoading();
  }, []); 

  const fullpageLoading = useCallback(()=>{
    new fullpage("#fullpage", {
      CSS3: true,
      sectionsColor: ['#FF6347', '#FFD700', '#32CD32', '#1E90FF', '#FF1493'],
      anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      controlArrows:false,
      slidesNavPosition: 'bottom',
      navigationTooltips: ['Profile', 'EC5 Jquery', 'EC6 React', 'Extensions'],
      showActiveTooltip: true,
      menu: '#menu',
      scrollHorizontally: false,
    });
  },[]);

  return (
    <>
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
            <a href="https://github.com/parkjunho2" className='menu-item'><FaGithub size={30} /></a>
          </li>
        </ul>

          <div id="fullpage">
            <div className="section active page1">
                <div className='row mx-5'>
                  <div className='page1-left'>
                  <h1>프로필 자리입니다</h1>
                  <h3>간단한 자기소개 해주세요</h3>
                  <p> 다룰줄 아는 어플리케이션을 적어주세요</p>
                  <div className='row mt-5'>
                  <a href='https://naver.com' className='btn btn-outline-light mx-3' style={{width:"100px"}}>깃허브</a>
                  <a href='https://naver.com' className='btn btn-outline-light mx-3' style={{width:"100px"}}>이메일</a>
                  </div>
                  </div>
                  <div className='page1-right ms-5 ps-5'>
                    <div className='imageBox'>
                      <span></span>
                      <div className='content'>
                        <img src='/images/profile.png' className='userImage'/>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="section page2">
              <div className='slide'>
                <div className='row'>
                  <div className='col-6 ps-5'>
                   <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                  <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                  <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                  <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                  <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                  <div class="code-editor">
                      <pre><code>
                          // 여기에 코드를 입력하세요.function hello() {
                          }
                          function hello() {
                          }
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
                    <h2>이 자리는 설명서 자리입니다 2</h2>
                  </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 2</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                    <h2>이 자리는 설명서 자리입니다 3</h2>
                  </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 3</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                    <h2>이 자리는 설명서 자리입니다 4</h2>
                  </div>
                  <div className='col-6'>
                    <h2>이 자리는 사진입니다 4</h2>
                  </div>
                </div>
              </div>
              <div className='slide'>
              <div className='row'>
                  <div className='col-6 ps-5'>
                    <h2>이 자리는 설명서 자리입니다 5</h2>
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
                    <h2>이 자리는 설명서 자리입니다 4</h2>
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