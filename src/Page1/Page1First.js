import SwiperComponent from '../components/options/SwiperComponent';


const Page1First=()=>{

    return(<>
          <div className='row w-100'>
            <div className='col-md-6 col-sm-12 ps-5'>
                  <h1>프로필</h1>
                  <h3>간단한 자기소개 해주세요간단한</h3>
                  <h3>Force</h3>
                  <h4>사용하는 언어</h4>
                  <h3>Knowledge</h3>
                  <h4>다룰줄 아는 어플리케이션을 적어주세요</h4>
            </div>
            
            <div className='col-md-6 col-sm-12 pe-5'>
            <SwiperComponent/> 
            </div>
          </div>
    </>)
}
export default Page1First;