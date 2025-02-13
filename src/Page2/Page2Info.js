import { useState } from "react";

const Page2Info=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    return(<>
    <div className="row align-items-start w-100">
        <div className='col-md-6 col-sm-12 ps-4'>    
            <pre className='text-black' style={{ fontSize: '19px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>{`
1      {
2           "BackEnd" : {
3                "OS" : "Window10" ,                                            
4                "Language"  : "Java" ,
5               "IDE" : [
6                       { "Eclipse" , "VSCode" }
7                    ] ,
8                "FrameWork" : "Spring Boot" ,
9               "RDBMS" : { "Oracle11g" : "DBeaver" } ,
10              "SQLMapper" : "JDBCTemplate" ,
11               "WAS" : "Apache Tomcat" ,
12              "Library" : [
13                   { "Spring Web" ,  "Spring Boot DevTools" ,  "Oracle Driver" ,  
14                   "Lombok", "Java Mail Sender", "Spring Security", "Spring Data JDBC"
15                      }
16                   ]
17              },
18         "FrontEnd" : {
19              "UI" :  { "MVC" : "JSP" } ,
20              "JS" : { "EC5"  : "JQuery" } ,
21             "API" : "KakaoMap" ,
22              "CDN" : [
23                        { "Moment" ,  "JQuery",  "SweetAlert2" }
24               ]
25             }
26   }
`}</pre>
    </div>
    <div className="col-md-6 col-sm-12">
                <h1 className='text-primary'>공통 옵션</h1>
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
export default Page2Info;