import { useState } from "react";

const Page3PaymentStatus=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/status.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-warning mt-4">결제 상태</h1>
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
                      Success
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      Fail
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      Cancel
                    </button>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`const PaymentSuccess=()=>{
const{flightId} = useParams();
const navigate = useNavigate();
`}<span className="text-danger">{`//수신`}</span>{`
const {partnerOrderId} = useParams();
`}<span className="text-danger">{`//로그인 상태`}</span>{`
const login = useRecoilValue(loginState);
const memberLoading = useRecoilValue(memberLoadingState);
//static

`}<span className="text-danger">{`//결제 승인 상태`}</span>{`
const [result, setResult] = useState(null);//결제 대기중
const [flightInfo, setFlightInfo] = useState({});
//state
`}<span className="text-danger">{`//리스트 불러오기`}</span>{`
const [seatsList, setSeatsList] = useState([]);

//effect
`}<span className="text-danger">{`//로그인 상태면 결제백엔드로 이동`}</span>{`
useEffect(()=>{
    if(login && memberLoading)
        sendApproveRequest();
        loadFlightInfo();
}, [login, memberLoading]);

//callback
const sendApproveRequest = useCallback(async()=>{
    try{//approveRequestVO 에 전송
        const resp = await axios.post("/seats/approve", {
            
            `}<span className="text-danger">{`//정보 전송 cid, userId, orderId, pg_token, tid`}</span>{`
            partnerOrderId: partnerOrderId,
            pgToken:new URLSearchParams(window.location.search).get("pg_token"),
            tid: window.sessionStorage.getItem("tid"),
            seatsList: JSON.parse(window.sessionStorage.getItem("checkedSeatsList"))
        });
        setSeatsList(JSON.parse(window.sessionStorage.getItem("checkedSeatsList")));//리스트 불러오기
        setResult(true);//결제성공
    }
    catch(e){
        setResult(false);//결제실패
    }
    finally{`}<span className="text-danger">{`//삭제`}</span>{`
        window.sessionStorage.removeItem("tid");
        window.sessionStorage.removeItem("checkedSeatsList");
    }
}, [login, memberLoading]);

`}<span className="text-danger">{`// 항공편 정보 백엔드에 불러옴`}</span>{`
const loadFlightInfo = useCallback(async () => {
const resp = await axios.get('/seats/info/{flightId}');
setFlightInfo(resp.data[0]); // 첫 번째 항공편 정보만 가져오기
}, [flightId]);

//memo
const total = useMemo(() => {
    return seatsList.reduce((b, c) => {
        const price = c.seatsPrice || 0; // 기본값을 0으로 설정
        const flightPrice = flightInfo.flightPrice || 0; // flightPrice에 접근
        const qty = c.qty || 0; // 기본값을 0으로 설정
        return b + ((price + flightPrice) * qty);
    }, 0);
}, [seatsList, flightInfo]);

const handleNavigate = () => {
    navigate("/payment/alllist");
};

//view
if(result===null){
    return <>
    <div className="container">
        <h1>결제 진행중입니다...</h1>
    </div>
    </>
}

else if(result){
    const flightId = seatsList.length > 0 ? seatsList[0].flightId : "알 수 없음";
return(<>
<div className="container text-center">
<div className="row mt-4">
    <div className="col">
        <h1 className="text-end">{flightInfo.airlineName}</h1>
    <div className="row">
        <div className="col">
            <div className="text-end"><strong>{flightInfo.departureAirport}</strong></div>
            <div className="text-end"><strong>{flightInfo.departureTime}</strong></div>
        </div>
    </div>
    <div className="row">
        <div className="col">
        <div className="text-end"><strong>{flightInfo.arrivalAirport}</strong></div>
        <div className="text-end"><strong>{flightInfo.arrivalTime}</strong></div>
        </div>
    </div>
        <table className="table">
            <tbody>
            <tr>
                <th>좌석번호</th>
                <th>좌석등급</th>
                <th>가격</th>
            </tr>
                {seatsList.map(seats=>(
                    <tr key={seats.seatsNo}>
                        <td>{seats.seatsNumber}</td>
                        <td>{seats.seatsRank}</td>
                        <td>{(seats.seatsPrice+flightInfo.flightPrice).toLocaleString()}원</td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <th>총 결제 금액</th>
                    <th></th>
                    <th>{total.toLocaleString()}원</th>
                </tr>
            </tfoot>
        </table>
        <div className="text-end">
        <button className="btn btn-primary" onClick={handleNavigate}>
                    예약내역
        </button>
        </div>
    </div>
</div>
</div>
</>);
}
else{
    return(<>
      <div className="container">
        <h1 className="text-center mt-5">결제 승인 실패...</h1>
        <div className="text-end">
        <button className="btn btn-primary" onClick={handleNavigate}>
                    예약내역
        </button>
        </div>
    </div>
    </>);
}
};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`const PaymentFail=()=>{
   
useEffect(()=>{
    window.sessionStorage.removeItem("tid");
    window.sessionStorage.removeItem("checkedSeatsList");
},[]);

return(<>
<h1 className="text-center mt-5">결제승인 시간초과 입니다.</h1>    
</>);
};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`const PaymentCancel=()=>{
    
useEffect(()=>{
    window.sessionStorage.removeItem("tid");
    window.sessionStorage.removeItem("checkedSeatsList");
},[]);

return(<>
<h1 className="text-center mt-5">결제 취소</h1>
</>);
};
`}
                  </code></pre>
                </div>
         
                  </div>
                </div>       
    </>)
}
export default Page3PaymentStatus;