import { FaGithub } from "react-icons/fa6";

const Menu=()=>{

    return(<>
        <ul id="menu">
          <li className='wrapper'>
            <a href="https://host.sysout.co.kr/kh14sc/home/login" className='menu-item'>EC5 Jquery DNS</a>
          </li>
          <li>
            <a href="https://homeweb.kro.kr" className='menu-item'>EC6 React DNS</a>
          </li>
          <li>
            <a href="https://topguntravel.shop" className='menu-item'>Extensions DNS </a>
          </li>
          <li>
            <a href="https://github.com/parkjunho2/pp01024689860" className='menu-item'><FaGithub size={30} /></a>
          </li>
        </ul>
    </>)
}
export default Menu;