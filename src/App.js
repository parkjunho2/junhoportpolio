import './App.css';
import { useState, useEffect } from 'react';
import "fullpage.js/dist/fullpage.min.css";
import fullpage from 'fullpage.js';
import Preview from './components/options/Preview'; 
import Page2Second from './Page2/Page2Second';
import Page2First from './Page2/Page2First';
import Page2Info from './Page2/Page2Info';
import Page1First from './Page1/Page1First';
import Menu from './components/options/Menu';

function App() {
  const [activeTab, setActiveTab] = useState('JS');

  const fullpageLoading =()=> {
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

  return (
    <>
     <Preview />
      <Menu/>        
        <div id="fullpage">
          <div className="section active page1">
            <Page1First/>
          </div>
          <div className="section page2">
            <div className='slide'>
              <Page2First/>
            </div>
            <div className='slide'>
              <Page2Info/>
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