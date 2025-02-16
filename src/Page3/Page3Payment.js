import { useState } from "react";

const Page3Payment=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/payment.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-warning mt-4">항공편 좌석생성, 결제</h1>
                    <h4>
                    항공편이 최종 승인이 이루어지면, 좌석 데이터가 생성되도록 Service를 작성하여 로직을 처리<br/><br/>
                    결제를 처리하기 위해 카카오페이 가이드에 필요한 key와 value 값을 받아<br/>
                    결제가 정상적으로 이루어지도록 서비스 로직을 구현하였습니다.<br/>
                    결제와 관련된 API 통신 디버깅은 Spring Boot Test를 사용하여 검사<br/>
                    RESTful API 문서화 SpringDoc Swagger UI를 사용했습니다.
                    </h4>
              </div>
                  <div className='col-md-6 col-sm-12 ps-4'>
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
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      RestController
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
{`const{flightId} = useParams();

//state
`}<span className="text-danger">{` //리스트 초기 값`}</span>{`
const[seatsList, setSeatsList] =useState([]);
const [flightInfo, setFlightInfo] = useState({});
const [seatsDisplayList, setSeatsDisplayList] = useState([]);
const passangerRegex = /^[가-힣]+$/;
const englishRegex = /^[A-Z]+$/;
const passportRegex = /^[A-Z][0-9]{8}$/;

`}<span className="text-danger">{` //좌석UI`}</span>{`
useEffect(()=>{
    setSeatsDisplayList(seatsList.map(seat=>{
        const row = seat.seatsNumber.substring(0, 1);
        const col = seat.seatsNumber.substring(1);
        const reserved = seat.seatsStatus === "사용";
        return {
            ...seat,
            seatsRow : row,
            seatsColumn : col,
            seatsReserved : reserved
        };
    }));
}, [seatsList]);

//effect
useEffect(()=>{
    loadSeatsList();
    loadFlightInfo();
},[]);

//callback
const loadSeatsList= useCallback(async()=>{ 
    const resp=await axios.get('/seats/{flightId}');
        setSeatsList(resp.data.map(seats=>{
            return{
                ...seats,
                select:false,
                qty:1,
                paymentDetailPassport:"",
                paymentDetailPassanger:"",
                paymentDetailEnglish:"",
                paymentDetailSex:"",
                paymentDetailBirth:"",
                paymentDetailCountry:"",
                paymentDetailVisa:"",
                paymentDetailExpire:""
            }
        }));
}, [flightId]);

`}<span className="text-danger">{` // 항공편 정보 백엔드에 불러옴`}</span>{`
  const loadFlightInfo = useCallback(async () => {
    const resp = await axios.get('/seats/info/{flightId');
    setFlightInfo(resp.data[0]); // 첫 번째 항공편 정보만 가져오기
}, [flightId]);

//memo 
`}<span className="text-danger">{` //체크된 좌석 목록`}</span>{`
const checkedSeatsList= useMemo(()=>{
    return seatsList.filter(seats=>seats.select);
}, [seatsList]);

`}<span className="text-danger">{` // 체크된 비즈니스 좌석 목록`}</span>{`
const checkedBusinessSeatsList = useMemo(() => {
    return checkedSeatsList.filter(seats => seats.seatsRank === "비즈니스");
    }, [checkedSeatsList]);

`}<span className="text-danger">{` // 체크된 이코노미 좌석 목록`}</span>{`
const checkedEconomySeatsList = useMemo(() => {
    return checkedSeatsList.filter(seats => seats.seatsRank === "이코노미");
    }, [checkedSeatsList]);

`}<span className="text-danger">{` //체크된 총 계산된 금액`}</span>{`
const checkedSeatsTotal = useMemo(() => {
    return checkedSeatsList.reduce((before, current) => {
        `}<span className="text-danger">{` // 좌석 가격 + 항공편 가격 * 수량을 합산`}</span>{`
        return before + ((current.seatsPrice + (flightInfo.flightPrice || 0)) * current.qty);
    }, 0);
}, [checkedSeatsList, flightInfo.flightPrice]);

`}<span className="text-danger">{` //결제 후 이동할 주소`}</span>{`
const getCurrentUrl = useCallback(()=>{
    return window.location.origin + window.location.pathname + (window.location.hash||'');
}, []);
`}<span className="text-danger">{` //체크된 좌석 금액 결제`}</span>{`
const sendPurchaseRequest = useCallback(async () => {
    try {
        `}<span className="text-danger">{` // 중복 체크 API 호출`}</span>{`
        const duplicateCheckResponse = await axios.post("/seats/exist", checkedSeatsList);

        `}<span className="text-danger">{` // 중복이 없으면 구매 진행`}</span>{`
        if (duplicateCheckResponse.status === 200) {
            const isBasicInfoOnly = ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(flightInfo.departureAirport) &&
                                      ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(flightInfo.arrivalAirport);
`}<span className="text-danger">{` // 조건에 맞춰 모든 입력 필드가 채워져 있거나 모두 비어있는지 확인`}</span>{`
    const allFilled = checkedSeatsList.every(seat =>
        isBasicInfoOnly
            ? seat.paymentDetailPassanger && seat.paymentDetailBirth`}<span className="text-danger">{` //기본 정보만 입력 체크`}</span>{`
            : seat.paymentDetailPassport && `}<span className="text-danger">{` //모든 정보 입력 체크`}</span>{`
              seat.paymentDetailPassanger &&
              seat.paymentDetailEnglish &&
              seat.paymentDetailSex &&
              seat.paymentDetailBirth &&
              seat.paymentDetailCountry &&
              seat.paymentDetailVisa &&
              seat.paymentDetailExpire 
    );
    const allEmpty = checkedSeatsList.every(seat =>
        isBasicInfoOnly
            ? !seat.paymentDetailPassanger && !seat.paymentDetailBirth
            : !seat.paymentDetailPassport &&
              !seat.paymentDetailPassanger &&
              !seat.paymentDetailEnglish &&
              !seat.paymentDetailSex &&
              !seat.paymentDetailBirth &&
              !seat.paymentDetailCountry &&
              !seat.paymentDetailVisa &&
              !seat.paymentDetailExpire
    );

    `}<span className="text-danger">{` // 최소 하나의 좌석은 입력되어야 하고, 다른 좌석은 입력되지 않아야 함`}</span>{`
const mixedFilled = checkedSeatsList.some(seat =>
    isBasicInfoOnly
        ? seat.paymentDetailPassanger && seat.paymentDetailBirth
        : seat.paymentDetailPassport &&
          seat.paymentDetailPassanger &&
          seat.paymentDetailEnglish &&
          seat.paymentDetailSex &&
          seat.paymentDetailBirth &&
          seat.paymentDetailCountry &&
          seat.paymentDetailVisa &&
          seat.paymentDetailExpire
) && checkedSeatsList.some(seat =>
    isBasicInfoOnly
        ? !seat.paymentDetailPassanger && !seat.paymentDetailBirth
        : !seat.paymentDetailPassport &&
          !seat.paymentDetailPassanger &&
          !seat.paymentDetailEnglish &&
          !seat.paymentDetailSex &&
          !seat.paymentDetailBirth &&
          !seat.paymentDetailCountry &&
          !seat.paymentDetailVisa &&
          !seat.paymentDetailExpire
);

if (!(allFilled || allEmpty || mixedFilled)) {
    toast.error("모든 정보를 입력하거나 아무것도 입력하지 않아야 합니다.");
    return; `}<span className="text-danger">{` //조건이 충족되지 않으면 함수 종료`}</span>{`
}

if(checkedSeatsList.length===0){
        toast.error("좌석을 선택하세요.");
        return;
} 
    const resp = await axios.post(
        "/seats/purchase", 
        {`}<span className="text-danger">{` //백엔드 puchaseReqeustVO 로 전송`}</span>{`
            seatsList: checkedSeatsList, //seatNo,qty,여권정보
            approvalUrl: getCurrentUrl() + "/success",
            cancelUrl: getCurrentUrl() + "/cancel",
            failUrl: getCurrentUrl() + "/fail",
        }
    );`}<span className="text-danger">{` //결제페이지로 전송`}</span>{`
        window.sessionStorage.setItem("tid", resp.data.tid);//pc_url 가기전 먼저 tid 전송
        window.sessionStorage.setItem("checkedSeatsList", JSON.stringify(checkedSeatsList));`}<span className="text-danger">{` //체크된 결제한 리스트 전송`}</span>{`
        window.location.href= resp.data.next_redirect_pc_url;`}<span className="text-danger">{` //결제 페이지로 이동`}</span>{`
    }
} catch (error) {
    toast.error("이미 결제된 좌석입니다.");
    loadSeatsList();
}
}, [checkedSeatsList, flightInfo]);


const changeSeats= useCallback((target, input, field)=>{
    setSeatsList(seatsList.map(seats=>{
        if(seats.seatsNo===target.seatsNo){
            return{...seats, 
                [field]:input
            };
        }
        return{...seats};
    }));
}, [seatsList]);
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{` <div className="container">
  <div className="row mt-3">
    <div className="col mt-2">
      <SeatGroup map={seatsDisplayList} setMap={setSeatsList}
          fields={{
              no:'seatsNo', 
              col:'seatsRow', 
              row:'seatsColumn', 
              price:'seatsPrice', 
              grade:'seatsRank',
              reserved:'seatsReserved', 
              disabled:'seatsStatus',
              checked:'select',
          }}
          cols={['A', 'B', ' ', 'C', 'D','E']}
          rows={['1', '2','3','4','5','6']}
          showNames={true}
  />
  </div>
                      
<div className="col mt-2">
    <table className="table">
        <thead>
            <tr>
                <th>항공사</th>
                <th></th>
                <th className="text-end">{flightInfo.airlineName}</th>
            </tr>
            <tr>
                <th> {flightInfo.departureAirport}</th>
                <th></th>
                <th className="text-end">출국시간 {flightInfo.departureTime}</th>
            </tr>
            <tr>
                <th> {flightInfo.arrivalAirport}</th>
                <th></th>
                <th className="text-end">입국시간 {flightInfo.arrivalTime}</th>
            </tr>
            <tr>
                <th>항공편 가격</th>
                <th></th>
                <th className="text-end">{(flightInfo.flightPrice+0).toLocaleString()}원</th>
            </tr>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <th>등급</th>
                <th>좌석 번호</th>
                <th className="text-end">가격</th>
            </tr>
        </thead>    
        <tbody>
            {checkedBusinessSeatsList.length > 0 && (<>
                    {checkedBusinessSeatsList.map(seats => (
                        <tr key={seats.seatsNo}>
                            <td>{seats.seatsRank}</td>
                            <td>{seats.seatsNumber}</td>
                            <td className="text-end">{(seats.seatsPrice+flightInfo.flightPrice).toLocaleString()}원</td>
                        </tr>
                    ))}
            </>)}
            {checkedEconomySeatsList.length > 0 && (<>
                    {checkedEconomySeatsList.map(seats => (
                        <tr key={seats.seatsNo}>
                            <td>{seats.seatsRank}</td>
                            <td>{seats.seatsNumber}</td>
                            <td className="text-end">{(seats.seatsPrice+flightInfo.flightPrice).toLocaleString()}원</td>
                        </tr>
                    ))}
            </>)}
            {checkedBusinessSeatsList.length === 0 && checkedEconomySeatsList.length === 0 && (
                <tr>
                    <td colSpan="3" className="text-center">선택된 좌석이 없습니다.</td>
                </tr>
            )}
            <tr>
            </tr>
            <tr>
                <td colSpan="2"><strong>총 결제금액</strong></td>
                <td className="text-end"><strong>{checkedSeatsTotal.toLocaleString()}원</strong></td>
            </tr>
        </tbody>
          </table>
          <button
                className="btn btn-success w-100 my-3"
                onClick={sendPurchaseRequest}
                disabled={
                    checkedSeatsList.some(seat => 
                        (seat.paymentDetailPassanger && !passangerRegex.test(seat.paymentDetailPassanger)) ||
                        (seat.paymentDetailEnglish && !englishRegex.test(seat.paymentDetailEnglish)) || 
                        (seat.paymentDetailPassport && !passportRegex.test(seat.paymentDetailPassport))
                    )
                }
            >구매하기
        </button>
            
        <div className="text-center text-primary"><strong>여권 정보는 결제 완료 후에도 입력하실 수 있습니다</strong></div>

        {seatsList.map(seats => (
        checkedSeatsList.some(checkedSeat => checkedSeat.seatsNo === seats.seatsNo) && (
            <div key={seats.seatsNo} className="mb-3">
                <hr/>
                <h5>{seats.seatsRank} {seats.seatsNumber} 좌석 여권정보 입력</h5>

                {(["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(flightInfo.departureAirport) &&
                ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(flightInfo.arrivalAirport)) ? (
                    <>
                        <div className="mb-2">
                            <label>이름</label>
                            <input
                                type="text"
                                className="form-control"
                                value={seats.paymentDetailPassanger}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailPassanger')}
                                onBlur={() => {
                                    if (!passangerRegex.test(seats.paymentDetailPassanger)) {
                                        toast.error("한글만 입력하세요");
                                    }
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label>생년월일</label>
                            <input
                                type="date"
                                className="form-control"
                                value={seats.paymentDetailBirth}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailBirth')}
                                max={new Date().toISOString().split("T")[0]} 
                            />
                        </div>
                    </>
                ) : (
                    <>
                        <div className="mb-2">
                            <label>여권 번호</label>
                            <input
                                type="text"
                                className="form-control"
                                value={seats.paymentDetailPassport}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailPassport')}
                                onBlur={() => {
                                    if (!passportRegex.test(seats.paymentDetailPassport)) {
                                        toast.error("여권 번호는 영문 대문자 1자 뒤에 숫자 8개로 이루어져야 합니다.");
                                    }
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label>한글이름</label>
                            <input
                                type="text"
                                className="form-control"
                                value={seats.paymentDetailPassanger}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailPassanger')}
                                onBlur={() => {
                                    if (!passangerRegex.test(seats.paymentDetailPassanger)) {
                                        toast.error("한글만 입력하세요");
                                    }
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label>영문이름</label>
                            <input
                                type="text"
                                className="form-control"
                                value={seats.paymentDetailEnglish}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailEnglish')}
                                onBlur={() => {
                                    if (!englishRegex.test(seats.paymentDetailEnglish)) {
                                        toast.error("영문 대문자만 입력하세요");
                                    }
                                }}
                            />
                        </div>
                        <div className="mb-2">
                            <label>성별</label>
                            <select 
                                className="form-control" 
                                value={seats.paymentDetailSex} 
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailSex')} 
                            >
                                <option value="">선택하세요</option>
                                <option value="M">남성</option>
                                <option value="W">여성</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label>생년월일</label>
                            <input
                                type="date"
                                className="form-control"
                                value={seats.paymentDetailBirth}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailBirth')}
                                max={new Date().toISOString().split("T")[0]} 
                            />
                        </div>
                        <div className="mb-2">
                            <label>국적</label>
                            <select 
                                className="form-control" 
                                value={seats.paymentDetailCountry} 
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailCountry')} 
                            >
                                <option value="">선택하세요</option>
                                <option value="대한민국">대한민국</option>
                                <option value="미국">미국</option>
                                <option value="일본">일본</option>
                                <option value="중국">중국</option>
                                <option value="영국">영국</option>
                                <option value="독일">독일</option>
                                <option value="프랑스">프랑스</option>
                                <option value="캐나다">캐나다</option>
                                <option value="호주">호주</option>
                                <option value="인도">인도</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label>여권 발행국</label>
                            <select 
                                className="form-control" 
                                value={seats.paymentDetailVisa} 
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailVisa')} 
                            >
                                <option value="">선택하세요</option>
                                <option value="대한민국">대한민국</option>
                                <option value="미국">미국</option>
                                <option value="일본">일본</option>
                                <option value="중국">중국</option>
                                <option value="영국">영국</option>
                                <option value="독일">독일</option>
                                <option value="프랑스">프랑스</option>
                                <option value="캐나다">캐나다</option>
                                <option value="호주">호주</option>
                                <option value="인도">인도</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label>여권 만료일</label>
                            <input
                                type="date"
                                className="form-control"
                                value={seats.paymentDetailExpire}
                                onChange={e => changeSeats(seats, e.target.value, 'paymentDetailExpire')}
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </div>
                    </>
                )}
            </div>
        )))}
    </div>
</div>
</div>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{` none`}</span>{`
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@PutMapping("/update")
@Transactional
public void update(@RequestBody FlightDto flightDto) {
    adminFlightDao.update(flightDto);

`}<span className="text-danger">{` // 승인 완료 후 좌석 생성`}</span>{`
if(flightDto.getFlightStatus().equals("승인")) {
    seatsDao.insertList(flightDto.getFlightId());
}
}
`}<span className="text-danger">{` // 좌석 조회`}</span>{`
@GetMapping("/{flightId}")
public List<SeatsDto> list(@PathVariable int flightId) {
return seatsDao.selectList(flightId);
}

`}<span className="text-danger">{` // 항공편 정보 조회`}</span>{`
@GetMapping("/info/{flightId}")
public List<SeatsFlightInfoVO> flightInfoVO(@PathVariable int flightId) {
return paymentDao.seatsFlightInfo(flightId);
}

`}<span className="text-danger">{` //구매하기버튼 클릭 중복검사`}</span>{`
@PostMapping("/exist")
public void checkDuplicate(@RequestBody List<SeatsQtyVO> seatsList) {
    `}<span className="text-danger">{` // 좌석 리스트 순회하며 중복 체크`}</span>{`
    for (SeatsQtyVO seatRequest : seatsList) {
        int count = paymentDao.exists(seatRequest.getFlightId(), seatRequest.getSeatsNo());
        if (count > 0) {
            throw new TargetNotFoundException("이미 결제된 좌석입니다: " + seatRequest.getSeatsNo());
        }
    }
}

`}<span className="text-danger">{` // 좌석 구매`}</span>{`
@PostMapping("/purchase")
public PayReadyResponseVO purchase(@RequestHeader("Authorization") String token, `}<span className="text-danger">{` // 회원토큰`}</span>{`
  @RequestBody SeatsPurchaseRequestVO request) throws URISyntaxException {
UserClaimVO claimVO = `}<span className="text-danger">{` // 회원 아이디 불러옴`}</span>{`
    tokenService.check(tokenService.removeBearer(token));
List<SeatsFlightInfoVO> flightInfoList = paymentDao
    .seatsFlightInfo(request.getSeatsList().get(0).getFlightId());
List<SeatsDto> seatsList = seatsDao.selectList(request.getSeatsList().get(0).getFlightId());
int flightPrice = flightInfoList.get(0).getFlightPrice();
String arrival = flightDao.selectArrival(request.getSeatsList().get(0).getFlightId());
StringBuffer buffer = new StringBuffer();
int total = 0;
for (SeatsQtyVO vo : request.getSeatsList()) {
  SeatsDto seatDto = seatsList.stream()
      .filter(seat -> seat.getSeatsNo() == vo.getSeatsNo())
      .findFirst()
      .orElseThrow(() -> new TargetNotFoundException("결제 대상 없음"));
  total += (seatDto.getSeatsPrice() + flightPrice) * vo.getQty();
  if (buffer.isEmpty()) {
    buffer.append(flightInfoList.get(0).getAirlineName() + " ");
    buffer.append(arrival + "행 ");
    buffer.append(seatDto.getSeatsRank());
    buffer.append(seatDto.getSeatsNumber() + " ");
  }
}if (request.getSeatsList().size() >= 2) { // 2좌석 이상 구매시
  buffer.append(" 외 " + (request.getSeatsList().size() - 1) + "건 ");
}
`}<span className="text-danger">{` // ready 준비 (입력)`}</span>{`
PayReadyRequestVO requestVO = new PayReadyRequestVO();
requestVO.setPartnerOrderId(paymentDao.payServiceSequence());`}<span className="text-danger">{` // 주문번호`}</span>{`
requestVO.setPartnerUserId(claimVO.getUserId());`}<span className="text-danger">{` // token`}</span>{`
requestVO.setItemName(buffer.toString());
requestVO.setTotalAmount(total);
requestVO.setApprovalUrl(request.getApprovalUrl());
requestVO.setCancelUrl(request.getCancelUrl());
requestVO.setFailUrl(request.getFailUrl());
PayReadyResponseVO responseVO = payService.ready(requestVO); `}<span className="text-danger">{` // ready 처리 (입력된 값을) , payservice로 가서 ready #4에 requestVO 입력`}</span>{`
return responseVO;`}<span className="text-danger">{` // ready 출력 PayService response로부터 tid,url,partner_order_id, partner_user_id 받아옴`}</span>{`
}

`}<span className="text-danger">{` // response에 받은 tid ,partner_order_id, partner_user_id , pg_token 전달`}</span>{`
@Transactional
@PostMapping("/approve")
public PayApproveResponseVO approve(@RequestHeader("Authorization") String token, `}<span className="text-danger">{` // 아이디 토큰`}</span>{`
  @RequestBody SeatsApproveRequestVO request `}<span className="text-danger">{` // tid,pg_token,partnerOrderId`}</span>{`
) throws URISyntaxException {

UserClaimVO claimVO = `}<span className="text-danger">{` // 아이디 토큰 불러옴`}</span>{`
    tokenService.check(tokenService.removeBearer(token));

`}<span className="text-danger">{` // 중복 좌석 체크`}</span>{`
for (SeatsQtyVO seatRequest : request.getSeatsList()) {
  int count = paymentDao.exists(seatRequest.getFlightId(), seatRequest.getSeatsNo());
  if (count > 0) {
    throw new TargetNotFoundException("이미 결제된 좌석입니다: " + seatRequest.getSeatsNo());
  }
}

`}<span className="text-danger">{` // approve 준비 (입력)`}</span>{`
PayApproveRequestVO requestVO = new PayApproveRequestVO();
requestVO.setPartnerOrderId(request.getPartnerOrderId());
requestVO.setPartnerUserId(claimVO.getUserId());
requestVO.setTid(request.getTid());
requestVO.setPgToken(request.getPgToken());

`}<span className="text-danger">{` // approve 처리 client에 전송`}</span>{`
PayApproveResponseVO responseVO = payService.approve(requestVO);

// DB저장
`}<span className="text-danger">{` // [1]대표 정보 등록`}</span>{`
int flightPrice = flightDao.selectPrice(request.getSeatsList().get(0).getFlightId());
int paymentSeq = paymentDao.paymentSequence();

PaymentDto paymentDto = new PaymentDto();
paymentDto.setPaymentNo(paymentSeq);// 결제번호
paymentDto.setPaymentTid(responseVO.getTid());//// 거래번호
paymentDto.setFlightId(request.getSeatsList().get(0).getFlightId());
paymentDto.setPaymentName(responseVO.getItemName());// 상품명
paymentDto.setPaymentTotal(responseVO.getAmount().getTotal());// 총결제금액
paymentDto.setPaymentRemain(paymentDto.getPaymentTotal());// 취소가능금액
paymentDto.setUserId(claimVO.getUserId());// 결제한 아이디
paymentDao.paymentInsert(paymentDto);// 대표정보 등록

`}<span className="text-danger">{` // [2]상세 정보 등록`}</span>{`
List<SeatsDto> seatsList = seatsDao.selectList(request.getSeatsList().get(0).getFlightId());
for (SeatsQtyVO qtyVO : request.getSeatsList()) {// tid,pg_token,partner_orderId
  SeatsDto seatsDto = seatsList.stream()
      .filter(seat -> seat.getSeatsNo() == qtyVO.getSeatsNo())
      .findFirst()
      .orElseThrow(() -> new TargetNotFoundException("존재하지 않는 좌석입니다"));
  int paymentDetailSeq = paymentDao.paymentDetailSequence();// 번호추출
  PaymentDetailDto paymentDetailDto = new PaymentDetailDto();
  paymentDetailDto.setPaymentDetailNo(paymentDetailSeq);// 번호 설정
  paymentDetailDto.setFlightId(seatsDto.getFlightId());// 항공기번호
  paymentDetailDto.setPaymentDetailName(seatsDto.getSeatsRank() + seatsDto.getSeatsNumber());// 좌석번호
  paymentDetailDto.setPaymentDetailPrice(seatsDto.getSeatsPrice() + flightPrice);// 좌석판매가
  paymentDetailDto.setPaymentDetailSeatsNo(seatsDto.getSeatsNo());// 좌석별고유번호
  paymentDetailDto.setPaymentDetailQty(qtyVO.getQty());// 구매수량
  paymentDetailDto.setPaymentDetailOrigin(paymentSeq);// 어느소속에 상세번호인지
  paymentDetailDto.setPaymentDetailPassport(qtyVO.getPaymentDetailPassport());
  paymentDetailDto.setPaymentDetailPassanger(qtyVO.getPaymentDetailPassanger());
  paymentDetailDto.setPaymentDetailEnglish(qtyVO.getPaymentDetailEnglish());
  paymentDetailDto.setPaymentDetailSex(qtyVO.getPaymentDetailSex());
  paymentDetailDto.setPaymentDetailBirth(qtyVO.getPaymentDetailBirth());
  paymentDetailDto.setPaymentDetailCountry(qtyVO.getPaymentDetailCountry());
  paymentDetailDto.setPaymentDetailVisa(qtyVO.getPaymentDetailVisa());
  paymentDetailDto.setPaymentDetailExpire(qtyVO.getPaymentDetailExpire());
  seatsDao.seatsStatus(seatsDto);// 결제시 사용으로 변경
  paymentDao.paymentDetailInsert(paymentDetailDto);
}
// approve 출력
return responseVO;
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`                          `}<span className="text-danger">{` <!-- 좌석 생성 -->`}</span>{`
@Service
public class CreateSeatService {

public List<SeatsDto> createList(int seatRow, int seatCol, int flightId) {

`}<span className="text-danger">{` // seatList를 ArrayList로 초기화`}</span>{`
List<SeatsDto> seatList = new ArrayList<>();
for (int row = 1; row <= seatRow; row++) {
  for (int col = 1; col <= seatCol; col++) {
    SeatsDto seat = new SeatsDto();

    seat.setFlightId(flightId);
    seat.setSeatsNo((row - 1) * seatCol + col); `}<span className="text-danger">{` // 좌석 번호 계산 (고유 번호)`}</span>{`

    `}<span className="text-danger">{`// row 값을 알파벳으로 변환`}</span>{`
    char rowLetter = (char) ('A' + row - 1);
    String seatNumber = rowLetter + String.valueOf(col);

    seat.setSeatsNumber(seatNumber); `}<span className="text-danger">{`// 좌석 번호 설정`}</span>{`

    `}<span className="text-danger">{`// A열이나 B열일 때 비즈니스, 나머지는 이코노미`}</span>{`
    String seatRank = (rowLetter == 'A' || rowLetter == 'B') ? "비즈니스" : "이코노미";
    seat.setSeatsRank(seatRank); `}<span className="text-danger">{`// 좌석 등급 설정`}</span>{`

    // 좌석 가격 설정
    if ("비즈니스".equals(seatRank)) {
      seat.setSeatsPrice(80000); // 비즈니스 80,000원
    } else {
      seat.setSeatsPrice(0); // 이코노미 0원
    }
    // seatList에 추가
    seatList.add(seat);
  }
}
return seatList;
}
}

                           `}<span className="text-danger">{` <!-- 결제 -->`}</span>{`
@Service
public class PayService {
//#1~#6
@Autowired
private PayProperties payProperties;// cid, secret
@Autowired//#1 보내는 방법
private RestTemplate template;// 외부 API통신 도구
@Autowired//#3 보내는 사람
private HttpHeaders headers;// Authorization + Content-Type

`}<span className="text-danger">{` // 결제 준비(ready)`}</span>{`
public PayReadyResponseVO ready(PayReadyRequestVO request) throws URISyntaxException {
  
  //#2 보낼 주소
  URI uri = new URI("https://open-api.kakaopay.com/online/v1/payment/ready");
  //#4 보낼 내용
  Map<String, String> body = new HashMap<>();
  body.put("cid", payProperties.getCid());
  body.put("partner_order_id", String.valueOf(request.getPartnerOrderId()));//주문번호
  body.put("partner_user_id", request.getPartnerUserId());//회원아이디
  body.put("item_name", request.getItemName());//상품명 (항공사 + 비지니스 || 이코노미 + 좌석번호)
  body.put("quantity", "1");//수량
  body.put("total_amount", String.valueOf(request.getTotalAmount()));//숫자를 문자열로 바꾸는 변환명령 String.valueOf
  body.put("tax_free_amount", "0");
  body.put("approval_url", request.getApprovalUrl() + "/" + request.getPartnerOrderId());
  body.put("cancel_url", request.getCancelUrl());
  body.put("fail_url", request.getFailUrl());
  //#5(#3+#4) , 4번의 설정된 정보를 불러와야 되서 configuration 에 넣을 수 없음 , 모두 모아서 kakaopay 로부터 전송
  HttpEntity entity = new HttpEntity(body, headers);
  //#6 response= #1.post(#2+#5.#6.class) ,모두 담아서 SeatsResController에 전송
  PayReadyResponseVO response = template.postForObject(uri, entity, PayReadyResponseVO.class);
  //SeatResController로부터 받아온 tid,url,partner_order_id, partner_user_id 받음
  return response;
}

`}<span className="text-danger">{` // 결제 승인(approve) , ready (tid,partner_order_id, partner_user_id, pg_token)을 입력후 다시 전송`}</span>{`
public PayApproveResponseVO approve(PayApproveRequestVO request) throws URISyntaxException {
  //#2 다시 보낼 주소
  URI uri = new URI("https://open-api.kakaopay.com/online/v1/payment/approve");
  //#4 입력해야될 정보들
  Map<String, String> body = new HashMap<>();
  body.put("cid", payProperties.getCid());
  body.put("partner_order_id", request.getPartnerOrderId());
  body.put("partner_user_id", request.getPartnerUserId());
  body.put("tid", request.getTid());
  body.put("pg_token", request.getPgToken());
  //#5(#3+#4)
  HttpEntity entity = new HttpEntity(body, headers);
  //#6
  PayApproveResponseVO response = template.postForObject(uri, entity, PayApproveResponseVO.class);
  return response;
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`                         `}<span className="text-danger">{`<!-- 좌석 생성 -->`}</span>{`
@Autowired
private CreateSeatService createSeatService;

@Value("{custom.seat.row}")
private int seatRow;

@Value("{custom.seat.col}")
private int seatCol;

`}<span className="text-danger">{`// 좌석 조회`}</span>{`
public List<SeatsDto> selectList(int flightId) {
    return sqlSession.selectList("seats.selectSeatsListByFlightId", flightId);
}

`}<span className="text-danger">{`// 조건 리스트 조회(FlightId로 좌석을 조회)`}</span>{`
public List<SeatsDto> selectListByFlightId(int flightId){
  return sqlSession.selectList("seats.listByFlightId", flightId);
}

`}<span className="text-danger">{`// 좌석 생성`}</span>{`
public void insertList(int flightId) {
    List<SeatsDto> list = createSeatService.createList(seatRow, seatCol, flightId);
    for (SeatsDto seat : list) {
        sqlSession.insert("seats.insert", seat);
    }
}
`}<span className="text-danger">{`//항공기에 대한 좌석의 정보`}</span>{`
public List<SeatsFlightInfoVO> selectSeatsFlightInfo(int flightId) {
    return sqlSession.selectList("payment.seatsFlightInfoByFlightId", flightId);
}

`}<span className="text-danger">{`//좌석 결제시 상태 사용 으로 변경`}</span>{`
public boolean seatsStatus(SeatsDto seatsDto) {
  return sqlSession.update("seats.usedSeats", seatsDto)>0;
}

`}<span className="text-danger">{`//항공기 탑승자 명단`}</span>{`
  public List<FlightPassangerInfoVO> passangerInfo(int flightId) {
        return sqlSession.selectList("flightPassangerInfo", flightId);
    }

                           `}<span className="text-danger">{`<!-- 결제 -->`}</span>{`
@GetMapping("/seatsCountList/{flightId}")`}<span className="text-danger">{`//결제 가능좌석 카운팅`}</span>{`
  public List<SeatsCountVO> seatsCountList(@PathVariable int flightId) {
      return flightDao.seatsCount(flightId);
}
public int payServiceSequence(){`}<span className="text-danger">{`//카카오 결제 주문번호`}</span>{`
    return sqlSession.selectOne("payment.payServiceSequence");
}
public int paymentSequence(){ `}<span className="text-danger">{` //합계 주문번호`}</span>{`
    return sqlSession.selectOne("payment.paymentSequence");
}
public int paymentDetailSequence(){ `}<span className="text-danger">{` //낱개 주문번호`}</span>{`
    return sqlSession.selectOne("payment.paymentDetailSequence");
}
public void paymentInsert(PaymentDto paymentDto){ `}<span className="text-danger">{` //합계 주문`}</span>{`
    sqlSession.insert("payment.paymentInsert", paymentDto);
}
public void paymentDetailInsert(PaymentDetailDto paymentDetailDto){ `}<span className="text-danger">{` //낱개 주문`}</span>{`
    sqlSession.insert("payment.paymentDetailInsert", paymentDetailDto);
}
public List<SeatsFlightInfoVO> seatsFlightInfo(int flightId) {`}<span className="text-danger">{` //좌석과 항공편 정보를 조회`}</span>{`
    return sqlSession.selectList("payment.seatsFlightInfo", flightId);
}
public int exists(int flightId, int seatsNo) {`}<span className="text-danger">{` //DB 데이터 중복확인`}</span>{`
Map<String, Integer> params = new HashMap<>();
params.put("flightId", flightId);
params.put("seatsNo", seatsNo);
  return sqlSession.selectOne("payment.exists", params);
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page3Payment;