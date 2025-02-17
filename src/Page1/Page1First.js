import Images from "../components/options/Images";

const Page1First=()=>{

    return(<>
          <div className='row w-100'>
            <div className='col-md-6 col-sm-12 ps-5'>
                  <h2>Don’t reinvent the wheel, just improve it</h2>
                  <h2 className="mb-5">바퀴를 발명하지말고, 개선해나가자</h2>
                  <h4>Email: pp01024689860@gmail.com</h4>      
            </div>
            
            <div className='col-md-6 col-sm-12 pe-5'>
                  <Images/>
            </div>
          </div>
    </>)
}
export default Page1First;