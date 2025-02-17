
const Page2First=()=>{

    return(<>
    <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                <a href="https://host.sysout.co.kr/kh14sc/home/login">
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/login.mp4" type="video/mp4"/>
                  </video>
                  </a>
                    <h2 className="text-center mt-5">
                  <a href='https://www.erdcloud.com/d/aLZnhSbNA6kKDuM8f' className='text-primary' id='link-a'>
                    ERD Link
                    </a>
                    <div className="mt-5">
                    ID: kha01240001  PW: kha0124001KH!
                    </div>
                    </h2>
                   </div>         
                  <div className='row col-md-6 col-sm-12 ps-4'>
                    <h1 className='mb-3'><span className='text-warning me-5'>대학교 홈페이지</span>
                    </h1>
                    <h1><span className='text-warning me-3'>참여인원 </span>6명</h1>
                    <h1><span className='text-warning me-5'>기여도</span> 20%</h1>
                    <h1><span className='text-warning me-3'>작업기간 </span> 24.08.22 - 24.09.04 (2주)</h1>
                    <h1 className='text-warning mt-2'>담당 업무</h1>
                    <h1 className='row'>
                      <div className='col'>지도API</div>
                      <div className='col'>학과CRUD</div>
                      <div className='col'>강의CRUD</div>
                    </h1>  
                    <h2 className='mt-4 text-warning'>주요기술 요약</h2>
                    <h4>JSP사용하여 정적 웹 페이지를 생성, MVC패턴으로 서버와<br/> 
                    클라이언트를 나눠 요청처리하도록 코드를 작성했습니다. <br/><br/>
                    JS코드는 jQuery의 CDN으로 DOM조작과 AJAX를 통해<br/>
                    비동기적으로 서버와 데이터를 통신하여 페이지 리로드 없이 <br/>
                    동적인 이벤트를 받아올수 있도록 코드를 작성했습니다.</h4>
                  </div>
                    </div>
    </>)
}
export default Page2First;