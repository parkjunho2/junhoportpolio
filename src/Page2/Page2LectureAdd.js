import { useState } from "react";

const Page2LectureAdd=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/lectureAdd.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">강의 등록,목록</h1>
                    <h4>
                    검색기능 column , keyword 두 개의 조건이 만족하면 검색 두 개의 조건 불일치 모든 항목 asc순서 query문 사용
                    비동기 통신사용 하여 입력 상태 유무 검사
                    RestController CrossOrigin연결하여 DBMS 중복검사 비동기통신 데이터 검사
                    MVC 패턴 사용하여 RequestParam 으로 정보 출력
                    </h4>
              </div>
                  <div className='col-md-6 col-sm-12'>
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
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      Controller
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'Service' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Service')}>
                      Service
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'Repository' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Repository')}>
                      Repository
                    </button>
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>

                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>

                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Controller
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Service
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Repository
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2LectureAdd;