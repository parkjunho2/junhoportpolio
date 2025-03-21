import { useState } from "react";

const Page3PaymentAllList=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/paymentList.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-warning mt-4">결제 목록</h1>
                    <h4>
                    Recoil을 사용하여 회원 정보를 가져오고 최신순으로 데이터를 불러오도록 하였습니다.<br/><br/>
                    등록된 데이터에 정보가 비어있으면 입력창을 생성하여 데이터를 업데이트할 수 있도록 했습니다.<br/> 
                    결제 시 함께 정보를 등록한 경우, 입력한 정보 데이터를 모두 불러오도록 하였습니다.
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
                      JSX(CSS)
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
{`const [paymentList, setPaymentList] = useState([]); 
const [selectedDetail, setSelectedDetail] = useState({});
const [submittedDetails, setSubmittedDetails] = useState({});
const passangerRegex = /^[가-힣]+$/;
const englishRegex = /^[A-Z]+$/;
const passportRegex = /^[A-Z][0-9]{8}$/;ㅋ
//effect
useEffect(()=>{
  loadPaymentList();
}, []);

//callback
const loadPaymentList = useCallback(async()=>{
    const resp = await axios.get("/seats/paymentTotalList");
    setPaymentList(resp.data);
}, []);

`}<span className="text-danger">{`//여권정보 입력`}</span>{`
const updatePaymentDetail = useCallback(async (paymentDetailNo) => {
`}<span className="text-danger">{`// 입력 값 체크`}</span>{`
const { paymentDetailPassport, paymentDetailPassanger, paymentDetailEnglish, 
  paymentDetailSex, paymentDetailBirth, paymentDetailCountry, 
  paymentDetailVisa, paymentDetailExpire } = selectedDetail;

  const isBasicInfo = isBasicInfoOnly(paymentList.find(payment => payment.paymentDetailList.some(detail => detail.paymentDetailNo === paymentDetailNo)));

  if (isBasicInfo) {
`}<span className="text-danger">{`// 기본 정보만 입력할 때는 패스포트, 성별, 국가, 비자, 만료일 필드는 체크하지 않음`}</span>{`
      if (!paymentDetailPassanger || !paymentDetailBirth) {
          toast.error("탑승객 이름과 생년월일을 입력하세요."); // 경고 메시지
          return; // 등록을 중단
      }
  } else {
      `}<span className="text-danger">{`// 일반 정보 입력 체크`}</span>{`
      if (!paymentDetailPassport || !paymentDetailPassanger || !paymentDetailEnglish || 
          !paymentDetailSex || !paymentDetailBirth || !paymentDetailCountry || 
          !paymentDetailVisa || !paymentDetailExpire) {
          toast.error("모두 입력하세요."); // 경고 메시지
          return; // 등록을 중단
      }
  }

  // 경고문구 표시
  const confirmMessage = "입력한 정보는 한 번 등록하면 수정이 불가능합니다. 등록하시겠습니까?";
  if (!window.confirm(confirmMessage)) {
      return; // 사용자가 취소하면 함수 종료
  }
  try {
      const response = await axios.put("/seats/detailUpdate", {
          ...selectedDetail,
          paymentDetailNo
      });
      if (response.status === 200) {
          toast.success("여권정보가 저장되었습니다.");
          
          // 제출된 정보를 업데이트
          setSubmittedDetails(prev => ({
              ...prev,
              [paymentDetailNo]: { ...selectedDetail }`}<span className="text-danger">{`// 등록된 정보를 저장`}</span>{`
          }));
      
          loadPaymentList(); // 결제 목록을 다시 불러옵니다
          setSelectedDetail({}); // 입력 필드 초기화
      }
  } catch (error) {
      toast.error("여권정보 저장을 실패했습니다.");
  }
  }, [loadPaymentList, selectedDetail]);

const isBasicInfoOnly = (payment) => {
  // payment가 undefined가 아닐 때만 접근
  const departureAirport = payment?.flightVO?.departureAirport;
  const arrivalAirport = payment?.flightVO?.arrivalAirport;

  return ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(departureAirport) &&
          ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(arrivalAirport);
};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`{paymentList.length === 0 ? (
    <h1 className="text-center mt-5">결제한 목록이 없습니다.</h1>
) : (
<div className="container" style={{width:"1100px"}}>
  <div className="row mt-4">
      <div className="col">
{paymentList.map(payment=>(
    <div key={payment.paymentNo} className="list-group-item mt-4 mb-3" style={{textAlign:"center"}}>
        <h3 style={{textAlign:"left"}}>여정 안내서<MdCardTravel /></h3>
      `}<span className="text-danger">{`{/* 운임정보에 대한 테이블 */}`}</span>{`
          <div className="table">
              <table className="table">
                  <thead>
                      <tr>
                          <td colSpan="100%" style={{ backgroundColor: "#e6f9ff", padding: "0.5em" }}>
                              <span style={{ display: "block", width: "100%", color: "#00256c", fontWeight:"bolder"}}>운임정보</span>
                          </td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td style={{fontWeight:"bolder", width:"10%"}}>항공편</td>
                          <td style={{color:"#ff7675", fontWeight:"bolder"}}>
                              {payment.paymentDto.paymentName.substring(0, payment.paymentDto.paymentName.indexOf(")") + 1)}
                          </td>
                      </tr>
                      <tr>
                          <td style={{fontWeight:"bolder", width:"10%"}}>결제일</td>
                          <td style={{ color: "#ff7675", fontWeight: "bolder" }}>
                          {new Date(payment.paymentDto.paymentTime)
                              .toLocaleString("ko-KR", {
                              year: "numeric",
                              month: "2-digit",
                              day: "2-digit",
                              })
                              .replace(/.$/, "")}
                          </td>
                      </tr>
                      <tr>
                          <td style={{fontWeight:"bolder", width:"10%"}}>결제시간</td>
                          <td style={{color:"#ff7675", fontWeight:"bolder"}}>
                              {new Date(payment.paymentDto.paymentTime).toLocaleString('ko-KR', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                  hour12: false
                              })}
                          </td>
                      </tr>
                      <tr>
                          <td style={{fontWeight:"bolder", width:"10%"}}>총 결제금액</td>
                          <td style={{color:"#ff7675", fontWeight:"bolder"}}>{payment.paymentDto.paymentTotal.toLocaleString()}원</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      `}<span className="text-danger">{`{/* 여정 정보에 대한 테이블 */}`}</span>{`
      <div className="row mt-5">
          <div className="table" style={{textAlign:"center"}}>
              <table className="table">
                  <thead>
                      <tr>
                          <td colSpan="100%" style={{ backgroundColor: "#e6f9ff", padding: "0.5em" }}>
                              <span style={{ display: "block", width: "100%", color: "#00256c", fontWeight:"bolder"}}>여정</span>
                          </td>
                      </tr>
                      <tr>
                          <th>출발</th>
                          <th>도착</th>
                          <th>출발일</th>
                          <th>출발시각</th>
                          <th>도착시각</th>
                          <th>비행시간</th>
                      </tr>
                  </thead>
                      <tbody>
                          <tr>
                              <td style={{color:"#ff7675"}}>{payment.flightVO.departureAirport}</td>
                              <td style={{color:"#ff7675"}}>{payment.flightVO.arrivalAirport}</td>
                              <td style={{color:"#ff7675"}}>{moment(payment.flightVO.departureTime).format("YYYY-MM-DD")}</td>
                              <td style={{color:"#ff7675"}}>{moment(payment.flightVO.departureTime).format("HH:mm")}</td>
                              <td style={{color:"#ff7675"}}>{moment(payment.flightVO.arrivalTime).format("HH:mm")}</td>
                              <td style={{color:"#ff7675"}}>{(payment.flightVO.flightTime)}</td>
                          </tr>
                      </tbody>
                  </table>
          </div>
      </div>

          <div className="text-end mt-1">
              <NavLink className="btn btn-warning" to={'/payment/detail/{payment.paymentDto.paymentNo}'}>결제상세내역</NavLink>
            </div>
      <hr/>   `}<span className="text-danger">{`{/* 좌석정보와 항공편 가격 */}`}</span>{`
`}<span className="text-danger">{`{/* 상세 결제 내용 */}`}</span>{`
{payment.paymentDetailList?.length > 0 && (
<div className="row mt-4">
    <h3 style={{textAlign:"left"}}>탑승자 정보 및 좌석 정보<MdOutlineAirlineSeatReclineNormal /></h3>
        {payment.paymentDetailList.map(detail => ( 
        <>
        <div className="d-flex table" key={detail.paymentDetailNo}>
                <div className="mt-2" style={{width:"55%"}}>
                    <table className="table">
                        <thead>
                            <tr>
                                <td colSpan="100%" style={{ backgroundColor: "#e6f9ff", padding: "0.5em" }}>
                                    <span style={{ display: "block", width: "100%", color: "#00256c", fontWeight:"bolder"}}>결제 좌석정보</span>
                                </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{fontWeight:"bolder", width:"35%"}}>예약번호</td>
                                <td >{detail.paymentDetailNo}</td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:"bolder", width:"35%"}}>좌석정보</td>
                                <td >{detail.paymentDetailName}</td>
                            </tr>
                            <tr className={'{detail.paymentDetailStatus === '승인' ? 'text-primary' : detail.paymentDetailStatus === '취소' ? 'text-danger' : ''}'}>
                                <td style={{ fontWeight: "bolder", width: "35%" }}>결제상태</td>
                                <td style={{ color: detail.paymentDetailStatus === '취소' ? 'red' : 'inherit', fontWeight: 'bolder' }}>
                                    {detail.paymentDetailStatus} 완료
                                </td>
                            </tr>
                            <tr>
                                <td style={{fontWeight:"bolder", width:"20%"}}>좌석 결제금액</td>
                                <td>{detail.paymentDetailPrice.toLocaleString()}원</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
          {detail.paymentDetailStatus === '취소' ? ( 
        <div></div>
            ) : ( `}<span className="text-danger">{`// 등록된 정보가 없으면 입력 필드 표시`}</span>{`
            <div className="row" style={{width:"60%"}}>
                {detail.paymentDetailPassanger === null ? ( `}<span className="text-danger">{`// passport가 null인 경우 입력 필드 표시`}</span>{`
                    <>
                    <h5 className="ms-4" style={{textAlign:"left" , fontWeight:"bold"}}>여권정보 입력</h5>
                            <div className="ms-4" style={{width:"100%"}}>
                                    {(["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(payment.flightVO.departureAirport) &&
                                        ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(payment.flightVO.arrivalAirport)) ? (
                                        <>
                                            <div className="mb-2" style={{textAlign:"left"}}>
                                                <span>한글이름</span>
                                                <input
                                                    type="text"
                                                    style={{ width: '45%' }}
                                                    className="form-control"
                                                    onChange={e => setSelectedDetail(prev => ({ ...prev, paymentDetailPassanger: e.target.value }))}
                                                    onBlur={() => {
                                                        if (!passangerRegex.test(selectedDetail.paymentDetailPassanger)) {
                                                            toast.error("한글만 입력하세요.");
                                                        }
                                                    }}
                                                />
                                            </div >
                                        <div style={{textAlign:"left"}}>
                                            <span>생년월일</span>
                                                <div className="d-flex justify-content-between">
                                                    <input className="form-control"
                                                        style={{ width: '45%' }}
                                                        type="date"
                                                        onChange={e => setSelectedDetail(prev => ({ ...prev, paymentDetailBirth: e.target.value }))}
                                                    />
                                                    <div className="text-end">
                                                    <button
                                                        className="btn btn-primary"
                                                        onClick={() => updatePaymentDetail(detail.paymentDetailNo)}
                                                        disabled={
                                                            selectedDetail.paymentDetailPassanger && !passangerRegex.test(selectedDetail.paymentDetailPassanger)
                                                        }>
                                                        등록
                                                    </button>
                                                    </div>
                                                </div>
                                            </div>
                                    </>
                                ) : (
                                    <>
                                        <div  style={{textAlign:"left"}}>
                                            <span style={{width:"30%"}}>여권번호</span>
                                            <input className="form-control"
                                                type="text"
                                                style={{ width: '45%' }}
                                                onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailPassport: e.target.value }))}
                                                onBlur={() => {
                                                    if (!passportRegex.test(selectedDetail.paymentDetailPassport)) {
                                                        toast.error("여권 번호는 대문자 영문 1자 뒤에 숫자 8개로 이루어져야 합니다.");
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div style={{textAlign:"left"}}>
                                            <span style={{width:"30%"}}>한글이름</span>
                                            <input className="form-control"
                                                type="text"
                                                style={{ width: '45%' }}
                                                onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailPassanger: e.target.value }))}
                                                onBlur={() => {
                                                    if (!passangerRegex.test(selectedDetail.paymentDetailPassanger)) {
                                                        toast.error("한글만 입력하세요.");
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div style={{ textAlign: "left" }}>
                                            <span style={{width:"30%"}}>영문이름</span>
                                            <input
                                                className="form-control"
                                                type="text"
                                                style={{ width: '45%' }}
                                                onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailEnglish: e.target.value }))}
                                                onBlur={() => {
                                                    if (!englishRegex.test(selectedDetail.paymentDetailEnglish)) {
                                                        toast.error("영문 대문자만 입력하세요.");
                                                    }
                                                }}
                                            />
                                        </div>
                                        <div style={{textAlign:"left"}}>
                                            <span style={{ marginRight: '21px' , width:"30%" }}>성별</span>
                                            <select className="form-control"
                                                style={{ width: '45%' }}
                                                onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailSex: e.target.value }))}>
                                                <option value="">선택하세요</option>
                                                <option value="M">남성</option>
                                                <option value="W">여성</option>
                                            </select>
                                        </div>
                                        <div style={{textAlign:"left"}}>
                                            생년월일
                                            <input className="form-control"
                                                style={{ width: '45%' }}
                                                type="date"
                                                onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailBirth: e.target.value }))}
                                                max={new Date().toISOString().split("T")[0]} 
                                            />
                                            <div>
                                                <span style={{ marginRight: '21px', width:"30%" }}>국적</span>
                                                <select className="form-control"
                                                    style={{ width: '45%' }}
                                                    id="country"
                                                    onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailCountry: e.target.value }))}>
                                                    <option value="">국적을 선택하세요</option>
                                                    <option value="KR">대한민국</option>
                                                    <option value="US">미국</option>
                                                    <option value="JP">일본</option>
                                                    <option value="CN">중국</option>
                                                    <option value="FR">프랑스</option>
                                                    <option value="DE">독일</option>
                                                    <option value="GB">영국</option>
                                                    <option value="IT">이탈리아</option>
                                                    <option value="ES">스페인</option>
                                                    <option value="AU">호주</option>
                                                </select>
                                            </div>
                                            <div>
                                                <span style={{ width: '30%' }}>여권 발행국</span>
                                                <select className="form-control"
                                                    style={{ width: '45%' }}
                                                    id="visaType"
                                                    onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailVisa: e.target.value }))}>
                                                    <option value="">국적을 선택하세요</option>
                                                    <option value="KR">대한민국</option>
                                                    <option value="US">미국</option>
                                                    <option value="JP">일본</option>
                                                    <option value="CN">중국</option>
                                                    <option value="FR">프랑스</option>
                                                    <option value="DE">독일</option>
                                                    <option value="GB">영국</option>
                                                    <option value="IT">이탈리아</option>
                                                    <option value="ES">스페인</option>
                                                    <option value="AU">호주</option>
                                                </select>
                                            </div>
                                            <div style={{textAlign:"left"}}>
                                                <span style={{ width: '30%' }}>여권 만료일</span>
                                                    <div className="d-flex justify-content-between">
                                                        <input className="form-control"
                                                            style={{ width: '46%' }}
                                                            type="date"
                                                            onChange={(e) => setSelectedDetail(prev => ({ ...prev, paymentDetailExpire: e.target.value }))}
                                                            min={new Date().toISOString().split("T")[0]} // 오늘 날짜를 최소 날짜로 설정
                                                        />
                                                        <div className="text-end">
                                                            <button
                                                                className="btn btn-primary"
                                                                onClick={() => updatePaymentDetail(detail.paymentDetailNo)}
                                                                disabled={
                                                                    (selectedDetail.paymentDetailPassanger && !passangerRegex.test(selectedDetail.paymentDetailPassanger)) ||
                                                                    (selectedDetail.paymentDetailPassport && !passportRegex.test(selectedDetail.paymentDetailPassport)) ||
                                                                    (selectedDetail.paymentDetailEnglish && !englishRegex.test(selectedDetail.paymentDetailEnglish))
                                                                }>
                                                                등록
                                                            </button>
                                                        </div>
                                                    </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                </>
          ) : ( `}<span className="text-danger">{`//조건 탑승객 이름 입력되면 출력됨`}</span>{`
                    <div className="">
                        {(["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(payment.flightVO.departureAirport) &&
                            ["서울/김포(GMP)", "서울/인천(ICN)", "제주(CJU)"].includes(payment.flightVO.arrivalAirport)) ? (
                                <>
                                <div className="row" style={{width:"100%"}}>
                                        <div className="table">
                                                <table className="table">
                                                    <thead>
                                                        <tr>
                                                            <td colSpan="100%" style={{ backgroundColor: "#e6f9ff", padding: "0.5em" }}>
                                                                <span style={{ display: "block", width: "100%", color: "#00256c", fontWeight:"bolder"}}>탑승자 정보</span>
                                                            </td>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td style={{fontWeight:"bolder", width:"35%"}}>탑승객 이름</td>
                                                            <td > {detail.paymentDetailPassanger}</td>
                                                        </tr>
                                                        <tr>
                                                            <td style={{fontWeight:"bolder", width:"35%"}}>생년월일</td>
                                                            <td> {detail.paymentDetailBirth}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                        </div>
                                </div>
                            </>
                    ) : (
                            <div className="" style={{width:"100%"}}>
                                <div className="table">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <td colSpan="100%" style={{ backgroundColor: "#e6f9ff", padding: "0.5em" }}>
                                                        <span style={{ display: "block", width: "100%", color: "#00256c", fontWeight:"bolder"}}>여권 정보</span>
                                                    </td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>여권번호</td>
                                                    <td > {detail.paymentDetailPassport}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>한글 이름</td>
                                                    <td>{detail.paymentDetailPassanger}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>영문 이름</td>
                                                    <td>{detail.paymentDetailEnglish}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>성별</td>
                                                    <td>{detail.paymentDetailSex}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>생년월일</td>
                                                    <td>{detail.paymentDetailBirth}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>국적</td>
                                                    <td>{detail.paymentDetailCountry}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>여권 발행국</td>
                                                    <td>{detail.paymentDetailVisa}</td>
                                                </tr>
                                                <tr>
                                                    <td style={{fontWeight:"bolder", width:"30%"}}>여권 만료일</td>
                                                    <td>{detail.paymentDetailExpire}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                </div>
                            </div>
                            )}
                        </div>
                    )}
                </div>
                  )}
              </div>
              <hr/>   
              </>
          ))}
      </div>
      )}
  </div>
))}
</div>
</div>
</div>
  )};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`// 결제된 모든목록 조회
@GetMapping("/paymentTotalList")
public List<PaymentTotalVO> paymentTotalList(@RequestHeader("Authorization") String token) {
  UserClaimVO claimVO = tokenService.check(tokenService.removeBearer(token));
  return paymentDao.selectTotalList(claimVO.getUserId());
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`//paymentDto+paymentDetailDto+flightVO==PaymentTotalVO

public List<PaymentTotalVO> selectTotalList(String userId){
  return sqlSession.selectList("payment.findTotal", userId);
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page3PaymentAllList;