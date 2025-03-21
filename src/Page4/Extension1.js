import { LuOption } from "react-icons/lu";
import { MdKeyboardTab } from "react-icons/md";
import { FaApple } from "react-icons/fa";
const Extensions1=()=>{

    return(<>
    <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/extension1.mp4" type="video/mp4"/>
                  </video>
                    <h2 className="text-center">You can now use this option in place</h2>
                    <h2 className="text-center mt-5">
                    <FaApple className="text-light me-2"/><LuOption className="text-primary"/><span className="text-primary">+</span><MdKeyboardTab className="text-primary" />
                    <br/><br/> Elements Label 번호 Input창에 입력 후 Enter
                    </h2>
                   </div>         
                  <div className='row col-md-6 col-sm-12 ps-4'>
                    <h1 className='mb-3'><span className='text-success me-5'>Elements선택 확장프로그램</span>
                    </h1>
                    <h2 className='mt-4 text-success'>주요기술 요약</h2>
                  </div>
                    </div>
    </>)
}
export default Extensions1;