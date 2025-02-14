
const Page3First=()=>{

    return(<>
    <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/finalLogin.mp4" type="video/mp4"/>
                  </video>
                    <h2 className="text-center mt-5">
                  <a href='https://www.erdcloud.com/d/YtXD93EMHNXZDmkch' className='text-warning' id='link-a'>
                    ERD Link
                    </a>
                    </h2>
                   </div>         
                  <div className='row col-md-6 col-sm-12 ps-4'>
                    <h1 className='mb-3'><span className='text-warning me-5'>항공권 예매 사이트</span>
                    </h1>
                    <h1><span className='text-warning me-3'>참여인원 </span>6명</h1>
                    <h1><span className='text-warning me-5'>기여도</span> 25%</h1>
                    <h1><span className='text-warning me-3'>작업기간 </span> 24.10.17 - 24.11.06 (2주)</h1>
                    <h1 className='text-warning mt-2'>담당 업무</h1>
                    <h1 className='row'>
                      <div className='col'>좌석생성</div>
                      <div className='col'>매출내역</div>
                      <div className='col'>결제</div>
                    </h1>  
                    <h2 className='mt-4 text-warning'>주요기술 요약</h2>
                    <h4>JSON 형식의 RestFulAPI를 서버에서 수신하여<br/>
                      React 라이브러리의 가상 DOM을 SPA 아키텍처를 적용했습니다.<br/><br/>
                      페이지 전환 없이 필요한 데이터만을 동적으로 로드하여 렌더링 후<br/> 
                      빠른 페이지 전환 속도를 통해 JS와 JSX로 효율적으로 UI를 구현하여<br/>
                      JDBC통신을 ORMapper mybatis를 사용하였습니다.
                    </h4>
                  </div>
                    </div>
    </>)
}
export default Page3First;