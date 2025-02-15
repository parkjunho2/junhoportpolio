import { useState } from "react";

const Page3PaymentGrape=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/paymentGrape.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-warning mt-4">매출 내역</h1>
                    <h4>
                    검색기능 column , keyword 두 개의 조건이 만족하면 검색 두 개의 조건 불일치 모든 항목 asc순서 query문 사용
                    비동기 통신사용 하여 입력 상태 유무 검사
                    RestController CrossOrigin연결하여 DBMS 중복검사 비동기통신 데이터 검사
                    MVC 패턴 사용하여 RequestParam 으로 정보 출력
                    </h4>
              </div>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS(CSS)
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JSX
                    </button>
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      RestController
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
                  {`Chart.register(...registerables);

const Graph = () => {
const user = useRecoilValue(userState);
const [flightData, setFlightData] = useState(null);
const [airlineData, setAirlineData] = useState(null);
const [airlineName, setAirlineName] = useState('');
const [flightPieData, setFlightPieData] = useState(null);
const [airlinePieData, setAirlinePieData] = useState(null);

useEffect(() => {
    getFlightData();
    getAirlineData();
}, []);    

`}<span className="text-danger">{`//항공사별 매출액`}</span>{`
const getAirlineData = useCallback(async () => {
    try {
        const response = await axios.get('/graph/allFlightPayment');
        const allData = response.data;

        const airlinePayments = {};
        allData.forEach(item => {
            if (!airlinePayments[item.airlineName]) {
                airlinePayments[item.airlineName] = 0;
            }
            airlinePayments[item.airlineName] += item.totalPayment;
        });

        const airlineLabels = Object.keys(airlinePayments);
        const airlineTotalPayments = Object.values(airlinePayments);

        setAirlineData({
            labels: airlineLabels,
            datasets: [
                {
                    label: '항공사별 총 매출',
                    data: airlineTotalPayments,
                    backgroundColor: 'rgba(255, 99, 132, 0.8)',
                    borderColor: 'rgba(255, 99, 132, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255, 99, 132, 1)',
                    hoverBorderColor: 'rgba(54, 162, 235, 1)',
                }
            ]
        });

        setAirlinePieData({
            labels: airlineLabels,
            datasets: [
                {
                    label: '항공사 매출 분포',
                    data: airlineTotalPayments,
                    backgroundColor: airlineTotalPayments.map((_, index) => 'rgba({index * 60 % 255}, {200 - index * 30 % 155}, {100 + index * 30 % 155}, 0.6)'),
                    hoverBackgroundColor: airlineTotalPayments.map((_, index) => 'rgba({index * 60 % 255}, {200 - index * 30 % 155}, {100 + index * 30 % 155}, 1)'),
                }
            ]
        });
    } catch (error) {
        console.error("Error fetching airline chart data:", error);
    }
}, []);

`}<span className="text-danger">{`//항공편별 매출액`}</span>{`
const getFlightData = useCallback(async () => {
    try {
        const response = await axios.get('/graph/airlinePayment', {
            params: { userId: user.userId }
        });
        const data = response.data;

        const labels = data.map(item => '비행편 {item.flightNumber}');
        const payments = data.map(item => item.totalPayment);

        if (data.length > 0) {
            setAirlineName(data[0].airlineName);
        }

        setFlightData({
            labels: labels,
            datasets: [
                {
                    label: '총 결제액',
                    data: payments,
                    backgroundColor: 'rgba(54, 162, 235, 0.8)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(54, 162, 235, 1)',
                    hoverBorderColor: 'rgba(255, 99, 132, 1)',
                }
            ]
        });

        setFlightPieData({
            labels: labels,
            datasets: [
                {
                    label: '결제 분포',
                    data: payments,
                    backgroundColor: payments.map((_, index) => 'rgba({index * 30 % 255}, {100 + index * 30 % 155}, {200}, 0.6)'),
                    hoverBackgroundColor: payments.map((_, index) => 'rgba({index * 30 % 255}, {100 + index * 30 % 155}, {200}, 1)'),
                }
            ]
        });
    } catch (error) {
        console.error("Error fetching flight chart data:", error);
    }
}, [user.userId]);



`}<span className="text-danger">{`//항공편 매출액`}</span>{`
const flightOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: {
            display: true,
            text: '비행편 번호별 총 결제액 ({airlineName} / {user.userType})',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => '{tooltipItem.dataset.label}: {tooltipItem.raw.toLocaleString()} 원'
            }
        }
    },
    animation: { duration: 1000 },
    scales: {
        y: {
            beginAtZero: true,
            title: { display: true, text: '총 결제액 (원)' }
        },
        x: { title: { display: true, text: '비행편 번호' } }
    }
};

`}<span className="text-danger">{`//항공사 매출액`}</span>{`
const airlineOptions = {
    responsive: true,
    plugins: {
        legend: { position: 'top' },
        title: {
            display: true,
            text: '항공사별 총 매출 ({user.userType})',
        },
        tooltip: {
            callbacks: {
                label: (tooltipItem) => '{tooltipItem.dataset.label}: {tooltipItem.raw.toLocaleString()} 원'
            }
        }
    },
    animation: { duration: 1000 },
    scales: {
        y: {
            beginAtZero: true,
            title: { display: true, text: '총액 (원)' }
        },
        x: { title: { display: true, text: '항공사' } }
    }
};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>
<div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', }}>

`}<span className="text-danger">{`{/* 항공사 */}`}</span>{`
{user.userType === 'AIRLINE' && flightData ? (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginTop:"30px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '20px', }}>
        <div style={{ width: '600px', textAlign: 'center' }}>
            <Bar data={flightData} options={flightOptions} />
        </div>
        {flightPieData && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '300px', marginTop: '20px' }}>
                    <Doughnut data={flightPieData} options={{ responsive: true }} />
                </div>
                <div style={{ textAlign: 'left', marginTop: '20px' }}>
                    <h3>비행편 결제 상세 내역</h3>
                    <ul>
                        {flightData.labels.map((label, index) => (
                            <li key={index}>
                                <strong>{label}</strong>: {flightData.datasets[0].data[index].toLocaleString()} 원
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
) : user.userType === 'AIRLINE' ? (
    <p>비행편 결제 차트 데이터를 로딩 중입니다...</p>
) : null}
</div>

`}<span className="text-danger">{`{/* 관리자 */}`}</span>{`
<div style={{
display: 'flex', gap: '20px', alignItems: 'flex-start',
}}>
{user.userType === 'ADMIN' && airlineData ? (
    <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', marginTop:"30px", boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', borderRadius: '10px', padding: '20px', }}>
        <div style={{ width: '600px', textAlign: 'center' }}>
            <Bar data={airlineData} options={airlineOptions} />
        </div>
        {airlinePieData && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '300px', marginTop: '20px' }}>
                    <Doughnut data={airlinePieData} options={{ responsive: true }} />
                </div>
                <div style={{ textAlign: 'left', marginTop: '20px' }}>
                    <h3>항공사 매출 상세 내역</h3>
                    <ul>
                        {airlineData.labels.map((label, index) => (
                            <li key={index}>
                                <strong>{label}</strong>: {airlineData.datasets[0].data[index].toLocaleString()} 원
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )}
    </div>
) : user.userType === 'ADMIN' ? (
    <p>항공사 매출 차트 데이터를 로딩 중입니다...</p>
) : null}
</div>
</div>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@CrossOrigin(origins = {"https://topguntravel.shop"})
@RestController
@RequestMapping("/graph")
public class GraphRestController {
    
  @Autowired
  private GraphDao graphDataDao;

  `}<span className="text-danger">{`//params 항공사 정보를 조회`}</span>{`
  @GetMapping("/airlinePayment")
  public List<FlightPaymentVO> flightPayments(@RequestParam("userId") String userId) {
      return graphDataDao.flightPayment(userId);
  }
  

  `}<span className="text-danger">{`// 모든 항공사 결제정보 조회`}</span>{`
  @GetMapping("/allFlightPayment")
  public List<FlightPaymentVO> allFlightPayments() {
      return graphDataDao.allflightPayment();
  }
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@Repository
public class GraphDao {

  @Autowired
  private SqlSession sqlSession;
`}<span className="text-danger">{`// 항공사 결제 조회`}</span>{`
  public List<FlightPaymentVO> flightPayment(String userId) {
      return sqlSession.selectList("graph.flightPayment", userId);
  }
  
  `}<span className="text-danger">{`// 모든 항공사 결제 조회`}</span>{`
  public List<FlightPaymentVO> allflightPayment() {
      return sqlSession.selectList("graph.allFlightPayment");
  }
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page3PaymentGrape;