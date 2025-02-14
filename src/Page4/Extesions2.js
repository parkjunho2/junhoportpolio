
const Extensions2=()=>{

    return(<>
    <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/preview.mp4" type="video/mp4"/>
                  </video>
                    <h2 className="text-center mt-5">
                    </h2>
                   </div>         
                  <div className='row col-md-6 col-sm-12 ps-4'>
                    <h1 className='mb-3'><span className='text-success me-5'>Preview 확장프로그램</span>
                    </h1>
                    <h2 className='mt-4 text-success'>주요기술 요약</h2>
                    <h4>링크 이동 전 어떤 사이트인지 미리 볼 수 있는 기능
                    </h4>
                  </div>
                    </div>
    </>)
}
export default Extensions2;