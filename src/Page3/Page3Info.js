import { useState } from "react";

const Page3Info=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    return(<>
    <div className="row w-100">
        <div className='col-md-6 col-sm-12 ps-4'>    
            <pre className='text-black bg-gray-200 ps-1' style={{ fontSize: '19px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>
{`1      {
2    "BackEnd" : {
3                     "OS" : "MacOs3" ,                                            
4          "Language" : "Java" ,
5                     "IDE" : "VSCode" ,
6       "FrameWork" : "Spring Boot" ,
7              "RDBMS" : { "Oracle11g" : "DBeaver" } ,
8        "ORMapper" : "MyBatis" ,
9                  "WAS" : "Apache Tomcat" ,
10            "Library" : [
11                     { "Spring Web" ,  "Spring Boot DevTools" , "Oracle Driver" ,  
12                     "Lombok", "Java Mail Sender", "Spring Security", "Spring Data JDBC",
13                     "WebSocket", "MyBatis Framwork", "React"
14                   }
15               ]
16         },
17  "FrontEnd" : {
18                    "UI" :  { "CSR" : "RESTful API" } ,
19                    "JS" : { "ES6"  : "React" } ,
20                 "API" : { "KakaoPay" , "open-meteo" },
21                "npm" : [
22                            { "Moment" ,  "Chart.js",  "Cinema-seat", "Bootstrap", 
23                            "Axios, "Recoil", "jsdelivr"  }
24                         ]
25                   }
26         }
`}</pre>
    </div>
    <div className="col-md-6 col-sm-12 ps-4">
                <h1 className='text-warning mb-0'>개발 환경</h1>
                <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      App.js
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      App.css
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      API
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      package.json
                    </button>
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Service' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Service')}>
                      Interceptor
                    </button>
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`const App = () => {

//recoil state
const [, setUser] = useRecoilState(userState);
const [, setMemberLoading] = useRecoilState(memberLoadingState);

useEffect(() => {
  refreshLogin();
}, []);

//callback
const refreshLogin = useCallback(async () => {
  const sessionToken = window.sessionStorage.getItem("refreshToken");
  const localToken = window.localStorage.getItem("refreshToken");
  if (sessionToken === null && localToken === null) {
    setMemberLoading(true);
    return;
  }
  const refreshToken = sessionToken || localToken;
  axios.defaults.headers.common["Authorization"] = "Bearer " + refreshToken;
  const resp = await axios.post("/users/refresh");
  setUser({
    userId: resp.data.usersId,
    userType: resp.data.usersType,
  });

  axios.defaults.headers.common["Authorization"] = "Bearer " + resp.data.accessToken;
  if (window.localStorage.getItem("refreshToken") !== null) {
    window.localStorage.setItem("refreshToken", resp.data.refreshToken);
  }
  else {
    window.sessionStorage.setItem("refreshToken", resp.data.refreshToken);
  }

  setMemberLoading(true);
}, []);


const location = useLocation();
const noHeaderRoutes = ['/join'];

return (
  <>{/* ToastContainer 추가 */}
    <ToastContainer
      position="top-right" // 토스트 위치
      autoClose={2000} // 자동 닫힘 시간
      hideProgressBar={false} // 진행 바 표시 여부
      closeOnClick
      pauseOnHover
      draggable
    />
    {!noHeaderRoutes.includes(location.pathname) && <Header />}
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} /> {/* 로그인 */}
      <Route path='/findPw' element={<FindPw />} />
      <Route path="/resetPw" element={<ResetPw />} />

      {/* 비로그인 */}
      <Route path="/flight/booking/:flightId" element={<Booking />} />
      <Route path="/flight/bookingList" element={<BookingList />} />
      <Route path="test/exchange" element={<Exchange />} />
      <Route path="test/weather" element={<Weather />} />
      <Route path="test/lottery" element={<Lottery/>} />
      {/* 로그인 되어야지만 볼 수 있는 페이지 */}
      <Route element={<PrivateRoute />}>
        <Route path="/payment/:flightId" element={<Payment />} />
        <Route path="/payment/:flightId/success/:partnerOrderId" element={<PaymentSuccess />} />
        <Route path="/payment/:flightId/cancel" element={<PaymentCancel />} />
        <Route path="/payment/:flightId/fail" element={<PaymentFail />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/payment/list' element={<PaymentList />} />
        <Route path='/payment/alllist' element={<PaymentAllList />} />
        <Route path="/chat/:roomNo" element={<Chat />} />
        <Route path="/room" element={<Room />} />
        <Route path='/payment/detail/:paymentNo' element={<PaymentDetail />} />
      </Route>

      {/* 관리자만 봐야하는 페이지 */}
      <Route element={<AdminRoute />}>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/list" element={<AdminFlight />} />
        <Route path="/admin/detail/:flightId" element={<AdminFlightDetail />} />
        <Route path="/userlist" element={<UserList />} />
      </Route>

      {/* 멤버만 못보는 페이지 -> ADMIN, AIRLINE만 가능 */}
      <Route element={<NotMemberRoute />}>
        <Route path="/airline" element={<AirLine />} />
        <Route path="/graph" element={<Graph />} />
      </Route>

      {/* 항공사만 봐야하는 페이지 */}
      <Route element={<AirLineRoute />}>
        <Route path="/flight" element={<Flight />} />
        <Route path="/flight/detail/:flightId" element={<FlightDetail />} />
      </Route>

      {/* 공지사항 페이지 추가 */}
      <Route path="/notice" element={<Notice />} />  {/* Notice 페이지 경로 설정 */}
      <Route path="/notice/:id" element={<NoticeDetail />} />  {/* 공지사항 상세 페이지 경로 설정 */}

      <Route path="*" element={<NotFound />} /> {/* 모든 잘못된 경로 처리 */}
    </Routes>
    <Footer />
  </>
);
}

export default App;
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`#menu {
  position: fixed;
  top: 1%;
  right: 1%;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}

#menu li {
  display: inline-flex;
  margin: 10px;
}

#menu a {
  text-decoration: none;
  padding: 5px;
  color: #fff !important;
}

.fp-right ul li a span  {
  background-color: #fff !important;
}

.fp-slidesNav ul li a span {
  background-color: #fff !important;
}

.fp-warning, .fp-watermark {
  display: none !important;
}

.fp-slidesNav.fp-bottom{
  margin-left: 40% !important;
}

@keyframes slideUp {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateXY(0); 
    opacity: 1;
  }
}
.code-editor {
  background: #1e1e1e;
  color: #d4d4d4;
  padding: 2%;
  border-radius: 8px;
  overflow: auto !important;
  min-height: 650px !important;
  max-height: 650px !important;
  width: 85% !important;
}

@media (max-width: 768px) {
  .col-md-6.col-sm-12.ps-4{
    margin-top: 2vw !important;
    margin-bottom: 2vw !important;
  }
  .code-editor{
    width: 100% !important;
  }
  .btn-success, .btn-primary{
    font-size: 3vw !important; 
    padding: 1vw !important;
  }
}

.code-editor pre {
  word-wrap: break-word;
  height: 100%;
  min-width: 1000px; 
}

.code-editor::-webkit-scrollbar {
  width: 8px;  /* 세로 스크롤바 너비 */
  height: 8px; /* 가로 스크롤바 높이 */
}

.code-editor::-webkit-scrollbar-thumb {
  background-color: #888;  /* 스크롤바 색상 */
  border-radius: 4px;      /* 둥근 모서리 */
}

/* 스크롤바 배경 */
.code-editor::-webkit-scrollbar-track {
  background-color: #f1f1f1;  /* 스크롤바 배경 색상 */
  border-radius: 4px;
}

.modal-title, .modal-body>div, .modal-footer {
  text-align: center;
  color: #000000 !important; /* 검은색으로 글씨 색상을 변경 */
}
.modal-dialog {
  margin-top: 300px !important; /* 원하는 만큼 내리기 */
}

.videos{
  width: 100% !important;
}
  
.preview-modal {
position: absolute;
width: 30%;
height: 35%;
z-index: 9999999999999;
background-color: #fff;
}

/* 로딩 아이콘 스타일 */
.loading-icon {
position: absolute;
top: 43%;
left: 44%;
transform: translate(-50%, -50%);
border: 4px solid #f3f3f3;
border-top: 4px solid #3498db;
border-radius: 50%;
width: 50px;
height: 50px;
animation: spin 1s linear infinite; /* 로딩 애니메이션 */
}

/* iframe 스타일 */
.iframe {
zoom: 0.40;  /* 페이지 내용 40%로 축소 */
width: 100% !important;  /* 100% 가로 */
height: 100%; /* 100% 세로 */
border: none;
}

/* 로딩 애니메이션 */
@keyframes spin {
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
}

/* 메뉴 항목에 대해 상대 위치를 설정 */
#menu li a {
  position: relative; 
}

/* 기본 메뉴 항목에 밑줄을 추가 */
.menu-item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0; /* 기본적으로 밑줄의 길이는 0 */
  background-color: #fff; 
  height: 2px; 
  transition: width 1s ease; 
}

/* 호버 시 밑줄이 100% 확장 */
.menu-item:hover::after {
  width: 100%;
}

/* 활성화된 항목에 대해서 밑줄이 100% 확장 */
#menu li.active a::after {
  content: ''; 
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%; /* 활성화된 항목에 밑줄이 100% 확장 */
  height: 2px; 
  background-color: #fff; 
  transition: width 1s ease;
}

/* 호버 상태에서 활성화된 항목의 밑줄은 덮어쓰지 않도록 처리 */
#menu li.active a:hover::after {
  width: 100%; /* 호버 시에도 활성화된 항목은 밑줄이 유지되도록 설정 */
}
.bg-gray-200 {
  background-color: var(--bs-gray-400) !important;
}

.swiper {
  width: 70%;
  height: 70%;
  align-items: center !important;
  justify-content: start !important;
}

.swiper-image {
  max-width: 100%;
  max-height: 100%;
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`const getWeatherData = useCallback(async () => { `}<span className="text-danger">{`  //날씨 API`}</span>{`
    const latitude = 37.5665;
    const longitude = 126.978;
    const url = https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true&hourly=temperature_2m&daily=weathercode&timezone=Asia%2FSeoul;

    try {
      const response = await axios.get(url, {
        headers: {
          // Authorization 헤더를 명시적으로 제거
          Authorization: undefined, // 또는 삭제
        },
      });
      const data = response.data;
      if (data.current_weather) {
        setCurrWeather(data.current_weather);
      } else {
        console.error("현재 날씨 데이터가 없습니다.");
      }

      const [startDate, endDate] = dateRange;
      if (startDate && endDate) {
        const formattedStartDate = moment(startDate).utcOffset(9).format('YYYY-MM-DD');
        const formattedEndDate = moment(endDate).utcOffset(9).format('YYYY-MM-DD');
        const forecastUrl = {url}&start_date={formattedStartDate}&end_date={formattedEndDate};

        const forecastResponse = await axios.get(forecastUrl);
        const forecastData = forecastResponse.data;
        if (forecastData.hourly) {
          setWeather(forecastData.hourly);
          // Setting daily weather codes
          const dailyWeatherCodes = forecastData.daily.weathercode.map((code, index) => ({
            date: moment(forecastData.daily.time[index]).format('YYYY-MM-DD'),
            weatherCode: code,
          }));
          setWeatherCodes(dailyWeatherCodes);
        } else {
          console.error("날씨 데이터가 없습니다.");
        }
      }
    } catch (error) {
      console.error("날씨 조회 중 오류 발생:", error);
    }
  }, [dateRange]);

const getExchangeRates = useCallback(async () => {`}<span className="text-danger">{`  //환율 API`}</span>{`
    const url = https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{fromCurrency}.json;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: undefined, // 또는 삭제
        },
      });

      const data = response.data;
      if (data[fromCurrency]) {
        setExchangeRates({
          inr: data[fromCurrency]['inr'],
          krw: data[fromCurrency]['krw'],
        });
      } else {
        console.error("환율 데이터가 없습니다.");
      }
    } catch (error) {
      console.error("환율 조회 중 오류 발생:", error);
    }
  }, []);

  const getCurrencies = useCallback(async () => {
    const url = 'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json';
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCurrencies(data);
    } catch (error) {
      console.error("통화 목록을 가져오는 중 오류 발생:", error);
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getExchangeRates(), getCurrencies()]);
    };

    fetchData();
  }, [getExchangeRates, getCurrencies]);  
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`"dependencies":
    "animate.css": "^4.1.1",
    "axios": "^1.7.7",
    "bootstrap": "^5.3.3",
    "chart.js": "^4.4.5",
    "gasp": "^0.0.2",
    "hacademy-cinema-seat": "^0.0.14",
    "hangul-js": "^0.2.6",
    "lightpick": "^1.6.2",
    "lodash": "^4.17.21",
    "moment": "^2.30.1",
    "react": "^18.3.1",
    "react-chartjs-2": "^5.2.0",
    "react-datepicker": "^7.5.0",
    "react-dom": "^18.3.1",
    "react-icons": "^5.3.0",
    "react-loading-icons": "^1.1.0",
    "react-paginate": "^8.2.0",
    "react-quill": "^2.0.0",
    "react-router": "^6.27.0",
    "react-router-dom": "^6.28.0",
    "react-scripts": "^5.0.1",
    "react-spinners": "^0.14.1",
    "react-toastify": "^10.0.5",
    "recoil": "^0.7.7",
    "sockjs-client": "^1.6.1",
    "weather-js": "^2.0.0",
    "web-vitals": "^2.1.4"
  },
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@Configuration
public class InterceptorConfiguration implements WebMvcConfigurer {

// 로그인 여부
@Autowired
private LoginInterceptor loginInterceptor;

// Type이 AIRLINE인지
@Autowired
private AirLineInterceptor airLineInterceptor;

// Type이 ADMIN인지
@Autowired
private AdminInterceptor adminInterceptor;

@Override
public void addCorsMappings(CorsRegistry registry) {
    registry.addMapping("/**") // 모든 경로에 대해 CORS 허용
      .allowedOrigins("http://localhost:3000") // 허용할 출처 (예시)
      .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // 허용할 HTTP 메서드
      .allowedHeaders("Authorization", "Content-Type") // 허용할 헤더를 명시적으로 설정
      .allowCredentials(true); // 쿠키나 인증 정보를 허용할지 여부
}

@Override
public void addInterceptors(InterceptorRegistry registry) {

// 로그인 인터셉터를 적용할 경로 추가(즉 로그인만 되어있는지 아닌지 판단할 경우)
registry.addInterceptor(loginInterceptor)
      .addPathPatterns(
        "/users/**",
        "/room/**",
        "/chat/**",
        "/seats/**",
        "/api/**"
      )
      .excludePathPatterns(
        "/users/login", // 로그인
        "/users/join", // 회원가입
        "/users/resetPw", // 비밀번호 초기화
        "/users/changePassword", // 비밀번호 변경
        "/users/checkId", // 아이디 중복 검증
        "/users/search" // ADMIN만 접근 가능한 경로도 제외
      );
  
// 로그인 인터셉터를 적용할 경로 추가(즉 로그인만 되어있는지 아닌지 판단할 경우) + TYPE이 AIRLINE인 경우
registry.addInterceptor(airLineInterceptor)
      .addPathPatterns(
        "/flight/detail/{flightId}",
        "/flight/column/{column}/keyword/{keyword}"
        //그래프 api
        
      )
      .excludePathPatterns(

      );
    
// 로그인 인터셉터를 적용할 경로 추가(즉 로그인만 되어있는지 아닌지 판단할 경우) + TYPE이 ADMIN인 경우
registry.addInterceptor(adminInterceptor)
      .addPathPatterns(
        "/users/search", // 회원 목록 리스트 조회
        "/admin/list",//항공편 조회 및 승인 거절
        "/admin/detail/{flight}",
          
        //공지사항 등록시 어드민인 경우만 허용하도록 조회를 제외한 편집 기능 api 를 모두 포함
        "/notice/edit/{noticeId}",
        "/notice/delete/{noticeId}",
        "/notice/post"
      )
      .excludePathPatterns(
      );
}	
}
`}
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
export default Page3Info;