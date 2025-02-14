import { Modal } from 'bootstrap';
import { useCallback, useRef } from 'react';
import SwiperComponent from '../options/SwiperComponent';


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