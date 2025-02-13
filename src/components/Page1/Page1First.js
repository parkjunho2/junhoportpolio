import { Modal } from 'bootstrap';
import { FaGithub } from "react-icons/fa6";
import { useCallback, useRef } from 'react';


const Page1First=()=>{

    const modal = useRef();
    const openModal = useCallback(()=>{
        const tag = Modal.getOrCreateInstance(modal.current);
        tag.show();
    },[modal]);
  
    const closeModal = useCallback(()=>{
        const tag = Modal.getInstance(modal.current);
        tag.hide();
    },[modal]);

    return(<>
         <div className="modal" tabIndex="-1" ref={modal}>
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-body">
                  <div className='center'>pp01024689860@gmail.com</div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
                </div>
                </div>
            </div>
            </div>

            <div className='page1-left mx-4 col-md-6 col-sm-12'>
                  <div className='row ms-5'>

                  <h1>프로필</h1>
                  <h3>간단한 자기소개 해주세요간단한</h3>

                  <h3 className='mt-5'>Force</h3>
                  <div>사용하는 언어</div>

                  <h3 className='mt-5'>Knowledge</h3>
                  <div>다룰줄 아는 어플리케이션을 적어주세요</div>
                  
                  <div className='row mt-5'>
                  <a href='https://naver.com' className='btn btn-outline-light mx-3' style={{width:"100px"}}>깃허브</a>
                  <button className='btn btn-outline-light mx-3' style={{width:"100px"}}
                  onClick={openModal}>이메일</button>
                  </div>
                  </div>
                  </div>
                  <div className='page1-right ms-5 ps-5 col-md-6 col-sm-12'>
                  <div className='imageBox'>
                  
                  <img src='/images/profile.png' className='userImage' alt="" />
                </div>
                  </div>
    </>)
}
export default Page1First;