import { FaGithub } from "react-icons/fa6";

const Menu=()=>{

    return(<>
        <ul id="menu">
          <li data-menuanchor="JQuery">
            <a href="https://host.sysout.co.kr/kh14sc/home/login" className='menu-item'>EC5 JQuery DNS</a>
          </li>
          <li data-menuanchor="React">
            <a href="https://homeweb.kro.kr" className='menu-item'>EC6 React DNS</a>
          </li>
          <li data-menuanchor="Extensions">
            <a href="#Extensions" className='menu-item'>Extensions DNS </a>
          </li>
          <li data-menuanchor="Profile">
            <a href="http://webentity.kro.kr" className='menu-item'><FaGithub size={30} /></a>
          </li>
        </ul>
    </>)
}
export default Menu;