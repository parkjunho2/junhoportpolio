import Images from "../components/options/Images";
import { FaGithub } from "react-icons/fa";
import TypeIt from "typeit";
import { useEffect } from "react";
import ScrollOut from "scroll-out";


const Page1First=()=>{
      
      useEffect(() => {
            new TypeIt("#title", {
              speed: 50,
            }).pause(1000).go();
          
            new TypeIt("#title2", {
              speed: 150,
            }).pause(1000).go();
            
            setTimeout(() => {
                  ScrollOut({
                  });
                }, 100);

      }, []);

    return(<>
          <div className='row w-100'>
            <div className='col-md-6 col-sm-12 ps-5'>
                  <h2 id='title'>Don’t reinvent the wheel, just improve it</h2>
                  <h2 className="mb-5" id='title2'>바퀴를 발명하지말고, 개선해나가자</h2>
                  <h4 data-scroll>Email: pp01024689860@gmail.com</h4>
                  <a href="https://github.com/parkjunho2">
                  <h2 className="my-5 text-black" title="GitHub" data-scroll><FaGithub /></h2>      
                  </a>
            </div>
            
            <div className='col-md-6 col-sm-12 pe-5' data-scroll>
                  <Images/>
            </div>
          </div>
    </>)
}
export default Page1First;