import { useState } from "react";

const Page3PaymentDetail=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/paymentDetail.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-warning mt-4">결제 상세</h1>
                    <h4>
                    세부목록에 필요한 데이터를 Recoil을 통해 Json형식으로 세부적인 데이터를 불러왔습니다. <br/><br/>
                    카카오페이 가이드에 등록된 key, value 값을 요청하여 카카오페이에 등록된 데이터를 조회하고, 취소가 가능하도록 처리했습니다.
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
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      RestController
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
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
{`//params
const {paymentNo} = useParams();
//state
const [info, setInfo] = useState(null);
const [selectedDetailName, setSelectedDetailName] = useState([]);
const [remainingTime, setRemainingTime] = useState(null); // 남은 시간 상태
const [timerInterval, setTimerInterval] = useState(null); // setInterval ID 저장용

//effect
useEffect(()=>{
    loadPaymentInfo();
    return () => {
        if (timerInterval) clearInterval(timerInterval); // 컴포넌트 언마운트 시 interval clear
      };
},[]);

//callback
const loadPaymentInfo= useCallback(async()=>{
    const resp= await axios.get("/seats/detail/"+paymentNo);
    setInfo(resp.data);
    calculateRemainingTime(resp.data.timerVO[0]?.arrivalTime);
}, []);

const cancelPaymentAll = useCallback(async()=>{
    const resp= await axios.delete("/seats/cancelAll/"+paymentNo);
    loadPaymentInfo();//화면 갱신
}, []);

const cancelPaymentItem = useCallback(async (detail) => {
    setSelectedDetailName(prev => {
        return [...prev, detail.paymentDetailName];
    });
    await axios.delete('/seats/cancelItem/{detail.paymentDetailNo}');
    toast.success('{detail.paymentDetailName} 항목이 취소되었습니다.');
    loadPaymentInfo();
}, [loadPaymentInfo]);

//한글 변환
const changeKorean = (type) => {
    switch (type) {
        case 'CARD':
            return '카드';
        case 'MONEY':
            return '현금';
        case 'PAYMENT':
            return '결제';
        case 'CANCEL':
            return '취소';
        case 'SUCCESS_PAYMENT':
            return '결제완료';
        case 'CANCEL_PAYMENT':
            return "취소완료";
        case 'PART_CANCEL_PAYMENT':
            return '부분취소 완료';
        default:
            return type;
    }
};
//날짜 변환
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {hour12: true };
    return date.toLocaleString(options); 
};

const calculateRemainingTime = (arrivalTime) => {
    if (!arrivalTime) return;
    const arrivalDate = new Date(arrivalTime);
arrivalDate.setHours(arrivalDate.getHours() - 24);  // 24시간을 빼기

const interval = setInterval(() => {
    const now = new Date();
    const diffInMs = arrivalDate - now;

      if (diffInMs <= 0) {
        clearInterval(interval);
        setRemainingTime("종료"); // 0시간으로 설정
        
      } else {
        const hours = Math.floor(diffInMs / (1000 * 60 * 60));
        const minutes = Math.floor((diffInMs % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diffInMs % (1000 * 60)) / 1000);
        setRemainingTime(
          '{hours.toString().padStart(2, "0")}:{minutes
            .toString()
            .padStart(2, "0")}:{seconds.toString().padStart(2, "0")}'
        );
      }
    }, 1000);

    setTimerInterval(interval);
  };

const isWithin24Hours = (arrivalTime) => {
    if (!arrivalTime) return false;
    const now = new Date();
    const arrivalDate = new Date(arrivalTime);
    const diffInMs = arrivalDate - now;
    const hoursDiff = diffInMs / (1000 * 60 * 60); // 시간 차이 계산
    return hoursDiff <= 24;
};
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`{info ? (  // info가 존재할 경우에만 렌더링
<div className="container">
<div className="row mb-4 mt-2">
    <div className="col">
    
        <h2>결제 내역</h2>
        <div className="row mt-2">
            <div className="col-3"><h5>결제명</h5></div>
            <div className="col-9"><h5>{info.paymentDto.paymentName}</h5></div>
        </div>
        <div className="row mt-2">
            <div className="col-3"><h5>총 결제금액</h5></div>
            <div className="col-9"><h5>{info.paymentDto.paymentTotal.toLocaleString()}원</h5></div>
        </div>
            <div className="row mt-2">
                <div className="col">
                    <button className="btn btn-danger"
                    disabled={info.paymentDto.paymentRemain ===0|| isWithin24Hours(info.timerVO[0]?.arrivalTime)}
                    onClick={cancelPaymentAll}>전체취소</button>
                </div>
            </div>
    </div>
<ul className="list-group mt-2">
    {info.paymentDetailList.map(detail=>(
        <li className="list-group-item">
            <h5>좌석번호: {detail.paymentDetailName}</h5>
            <div className="row mt-2">
                <div className="col-3">판매가</div>
                <div className="col-9">{detail.paymentDetailPrice.toLocaleString()}원</div>
            </div>
            <div className="row mt-2">
                <div className="col-3">상태</div>
                <div className="col-9">{detail.paymentDetailStatus}</div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <button className="btn btn-danger"
                    disabled={detail.paymentDetailStatus=== '취소'|| isWithin24Hours(info.timerVO[0]?.arrivalTime)} 
                    onClick={e=>cancelPaymentItem(detail)}> 
                        항목취소
                    </button>
                </div>
            </div>
        </li>
    ))}
</ul>
</div>
</div>
  ) : (
    <div className="text-center">
        <img src="/image/loading.gif"
    style={{width: "500px", height: "500px" }}></img></div>  // 데이터 로딩 중 표시할 메시지
)}

{info ? (  // info가 존재할 경우에만 렌더링
<div className="container">
<div className="row mt-5">
    <div className="col">
            <h3>결제 정보</h3>
        <div className="row mt-2">
            <div className="col-3">거래번호</div>
            <div className="col-9">{info.responseVO.tid}</div>
        </div>
        <div className="row mt-2">
            <div className="col-3">거래상태</div>
            <div className="col-9">{changeKorean(info.responseVO.status)}</div>
        </div>
            <div className="row mt-2">
                <div className="col-3">결제완료일시</div>
                <div className="col-9">{formatDate(info.responseVO.approved_at)}</div>
                </div>
            {info.responseVO.item_code !==null && (
        <div className="row mt-2">
            <div className="col-3">상품코드</div>
            <div className="col-9">{info.responseVO.item_code}</div>
        </div>
            )}
        <div className="row mt-2">
            <div className="col-3">대표좌석</div>
            <div className="col-9">{info.responseVO.item_name}</div>
        </div>
        <div className="row mt-2">
            <div className="col-3">구매방식</div>
            <div className="col-9">{changeKorean(info.responseVO.payment_method_type)}</div>
        </div>
        <div className="row mt-2">
            <div className="col-3">구매금액</div>
            <div className="col-9">{info.responseVO.amount.total.toLocaleString()}원
                (부가세 포함, 부가세 {info.responseVO.amount.vat.toLocaleString()}원)
        </div>
        <div className="row mt-2">
            <div className="col-3 text-danger">취소가능금액</div>
            <div className="col-9 text-danger">{info.responseVO.cancel_available_amount.total.toLocaleString()}원
            </div>
        </div>
        {info.responseVO.cancel_available_amount.total!==0 &&(
        <div className="row mt-2">
            <div className="col-3 text-dnager">취소 가능시간</div>
            <div className="col-9 text-danger">{remainingTime ? '{remainingTime}' : ""}</div>
            </div>
        )}
        {info.responseVO.canceled_at !==null &&(
        <div className="row mt-2">
            <div className="col-3">결제취소일시</div>
            <div className="col-9">{formatDate(info.responseVO.canceled_at)}</div>
        </div>
        )}
        {/* 결제 상세 내역 */}
        <ul className="list-group mt-4">
            <div className="row">
                <div className="col">
                    <h3>요청 내역</h3>
                </div>
            </div>
        {info.responseVO.payment_action_details.map((action, index)=>(
            <li className="list-group-item" key={index}>
                <div className="row">
                    <div className="col-3">요청번호</div>
                    <div className="col-9">{action.aid}</div>
                </div>
                <div className="row">
                    <div className="col-3">요청유형</div>
                    <div className="col-9">{changeKorean(action.payment_action_type)}</div>
                </div>
                {action.amount !== 0 &&(
                <div className="row">
                      <div className="col-3">요청금액</div>
                    <div className="col-9">{action.amount.toLocaleString()}원</div>
                </div>
                )}
                <div className="row">
                    <div className="col-3">요청승인일시</div>
                    <div className="col-9">{formatDate(action.approved_at)}</div>
                </div>
                {action.payload !==null && (
                <div className="row">
                    <div className="col-3">추가요청사항</div>
                    <div className="col-9">{action.payload}</div>
                </div>
                )}
            </li>
        ))}
        </ul>
        </div>
    </div>
</div>
<ToastContainer/>
</div>
) : (
<div>Loading...</div>  // 데이터 로딩 중 표시할 메시지
)}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{` //결제 조회(order)`}</span>{`
public PayOrderResponseVO order(PayOrderRequestVO request) throws URISyntaxException {
  URI uri = new URI("https://open-api.kakaopay.com/online/v1/payment/order");
  Map<String, String> body = new HashMap<>();
  body.put("cid", payProperties.getCid());
  body.put("tid", request.getTid());
  HttpEntity entity = new HttpEntity(body, headers);
  PayOrderResponseVO response=
      template.postForObject(uri, entity, PayOrderResponseVO.class);
  return response;
}
`}<span className="text-danger">{` //결제 취소(cancel)`}</span>{`
public PayCancelResponseVO cancel(PayCancelRequestVO request) throws URISyntaxException {
  URI uri = new URI("https://open-api.kakaopay.com/online/v1/payment/cancel");
  Map<String, String> body = new HashMap<>();
  body.put("cid", payProperties.getCid());
  body.put("tid", request.getTid());
  body.put("cancel_amount", String.valueOf(request.getCancelAmount()));
  body.put("cancel_tax_free_amount", String.valueOf(request.getCancelTaxFreeAmount()));
  HttpEntity entity = new HttpEntity(body, headers);
  PayCancelResponseVO response = 
      template.postForObject(uri, entity, PayCancelResponseVO.class);
  return response;
	}	
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@GetMapping("/detail/{paymentNo}")
public PaymentInfoVO detail(@RequestHeader("Authorization") String token, @PathVariable int paymentNo)
    throws URISyntaxException {
  `}<span className="text-danger">{`// 결제내역`}</span>{`
  PaymentDto paymentDto = paymentDao.selectOne(paymentNo);
  if (paymentDto == null)
    throw new TargetNotFoundException("존재하지 않는 결제내역");
  `}<span className="text-danger">{`// 회원 소유 검증`}</span>{`
  UserClaimVO claimVO = tokenService.check(tokenService.removeBearer(token));
  if (!paymentDto.getUserId().equals(claimVO.getUserId()))
    throw new TargetNotFoundException("결제내역의 소유자가 아닙니다.");
  `}<span className="text-danger">{`// 결제 상세 내역`}</span>{`
  List<PaymentDetailDto> list = paymentDao.selectDetailList(paymentNo);
  `}<span className="text-danger">{`// 조회내역`}</span>{`
  PayOrderRequestVO requestVO = new PayOrderRequestVO();
  requestVO.setTid(paymentDto.getPaymentTid());
  PayOrderResponseVO responseVO = payService.order(requestVO);
  List<TimerVO> timerList = paymentDao.timerList(paymentNo);
  `}<span className="text-danger">{`// 반환 형태 생성`}</span>{`
  PaymentInfoVO infoVO = new PaymentInfoVO();
  infoVO.setTimerVO(timerList);
  infoVO.setPaymentDto(paymentDto);
  infoVO.setPaymentDetailList(list);
  infoVO.setResponseVO(responseVO);
  return infoVO;
  }

  `}<span className="text-danger">{`// 1. 전체취소(paymentNo)`}</span>{`
  @Transactional
  @DeleteMapping("/cancelAll/{paymentNo}")
  public PayCancelResponseVO cancelAll(@PathVariable int paymentNo, @RequestHeader("Authorization") String token)
    throws URISyntaxException {
  PaymentDto paymentDto = paymentDao.selectOne(paymentNo);
  if (paymentDto == null)
    throw new TargetNotFoundException("존재하지 않는 결제정보");
  UserClaimVO claimVO = tokenService.check(tokenService.removeBearer(token));
  if (!paymentDto.getUserId().equals(claimVO.getUserId()))
    throw new TargetNotFoundException("소유자 불일치");
  if (paymentDto.getPaymentRemain() == 0)
    throw new TargetNotFoundException("이미 취소된 결제");

  `}<span className="text-danger">{`// 남은금액 취소 요청`}</span>{`
  PayCancelRequestVO request = new PayCancelRequestVO();
  request.setTid(paymentDto.getPaymentTid());
  request.setCancelAmount(paymentDto.getPaymentRemain());
  PayCancelResponseVO response = payService.cancel(request);
  `}<span className="text-danger">{`// 잔여금액 0으로 변경`}</span>{`
  paymentDao.cancelAll(paymentNo);
  `}<span className="text-danger">{`// 관련항목의 상태를 취소로 변경`}</span>{`
  paymentDao.cancelAllItem(paymentNo);
  return response;
  }

  `}<span className="text-danger">{`// 2. 항목취소(paymentDetailNo)`}</span>{`
  @DeleteMapping("/cancelItem/{paymentDetailNo}")
  public PayCancelResponseVO cancelItem(@RequestHeader("Authorization") String token,
    @PathVariable int paymentDetailNo) throws URISyntaxException {
  PaymentDetailDto paymentDetailDto = paymentDao.selectDetailOne(paymentDetailNo);
  if (paymentDetailDto == null)
    throw new TargetNotFoundException("존재하지 않는 결제정보");
  PaymentDto paymentDto = paymentDao.selectOne(paymentDetailDto.getPaymentDetailOrigin());
  if (paymentDto == null)
    throw new TargetNotFoundException("존재하지 않는 결제정보");
  UserClaimVO claimVO = tokenService.check(tokenService.removeBearer(token));
  if (!paymentDto.getUserId().equals(claimVO.getUserId()))
    throw new TargetNotFoundException("소유자 불일치");

  `}<span className="text-danger">{`// 취소요청`}</span>{`
  int money = paymentDetailDto.getPaymentDetailPrice() * paymentDetailDto.getPaymentDetailQty();
  PayCancelRequestVO request = new PayCancelRequestVO();
  request.setTid(paymentDto.getPaymentTid());
  request.setCancelAmount(money);
  PayCancelResponseVO response = payService.cancel(request);
  `}<span className="text-danger">{`// 상태항목을 취소로 변경`}</span>{`
  response.setItemName(paymentDetailDto.getPaymentDetailName());
  paymentDao.cancelItem(paymentDetailNo);
  `}<span className="text-danger">{`// 항목금액 차감`}</span>{`
  paymentDao.decreaseItemRemain(paymentDto.getPaymentNo(), money);
  return response;
  }

  `}<span className="text-danger">{`// 정보 변경`}</span>{`
  @PutMapping("/detailUpdate")
  public void update(@RequestBody PaymentDetailDto paymentDetailDto) {
  paymentDao.updatePaymentDetail(paymentDetailDto);
  }
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`//총 결제된 금액`}</span>{`
public PaymentDto selectOne(int paymentNo) {
  return sqlSession.selectOne("payment.find", paymentNo);
}`}<span className="text-danger">{`//낱개 결제된 금액`}</span>{`
public List<PaymentDetailDto> selectDetailList(int paymentNo){
  return sqlSession.selectList("payment.findDetail", paymentNo);
}`}<span className="text-danger">{`//모두취소되면 작동`}</span>{`
public boolean cancelAll(int paymentNo) {
  return sqlSession.update("payment.cancelAll", paymentNo)>0;
}`}<span className="text-danger">{`//전체취소`}</span>{`
public boolean cancelAllItem(int paymentNo) {
  return sqlSession.update("payment.cancelAllItem", paymentNo)>0;
}
`}<span className="text-danger">{`//항목취소`}</span>{`
public boolean cancelItem(int paymentDetailNo) {
  return sqlSession.update("payment.cancelItem", paymentDetailNo)>0;
}`}<span className="text-danger">{`//잔여금액 계산`}</span>{`
public boolean decreaseItemRemain(int paymentNo, int money) {
  Map<String, Integer> params = new HashMap<>();
  params.put("paymentNo", paymentNo);
  params.put("money", money);
  return sqlSession.update("payment.decreaseItemRemain", params)>0;
}`}<span className="text-danger">{`//결제된 정보`}</span>{`
public PaymentDetailDto selectDetailOne(int paymentDetailNo) {
  return sqlSession.selectOne("payment.selectDetailOne", paymentDetailNo);
}
`}<span className="text-danger">{`// 결제된 항공기 정보`}</span>{`
public boolean updatePaymentDetail(PaymentDetailDto paymentDetailDto) {
    return sqlSession.update("payment.paymentDetailUpdate", paymentDetailDto) > 0;
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page3PaymentDetail;