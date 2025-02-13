import './App.css';
import { useEffect } from 'react';
import "fullpage.js/dist/fullpage.min.css";
import fullpage from 'fullpage.js';
import Preview from './components/options/Preview'; 
import Page1First from './components/Page1/Page1First';
import Menu from './components/options/Menu';
import Page2DepartmentAdd from './Page2/Page2DepartmentAdd';
import Page2First from './Page2/Page2First';
import Page2Map from './Page2/Page2Map';
import Page2Info from './Page2/Page2Info';
import Page2DepartmentEdit from './Page2/Page2DepartmentEdit';
import Page2DepartmentRemove from './Page2/Page2DepartmentRemove';
import Page2LectureAdd from './Page2/Page2LectureAdd';
import Page2LectureEdit from './Page2/Page2LectureEdit';
import Page2LectureRemove from './Page2/Page2LectureRemove';


function App() {

  const fullpageLoading =()=> {
    new fullpage("#fullpage", {
      CSS3: true,
      sectionsColor: ['#FF6347', '#32CD32', '#1E90FF', '#FFD700'],
      navigation: true,
      navigationPosition: 'right',
      slidesNavigation: true,
      controlArrows: false,
      slidesNavPosition: 'bottom',
      navigationTooltips: ['Profile', 'EC5 JQuery', 'EC6 React', 'Extensions'],
      showActiveTooltip: true,
      menu: '#menu',
      scrollHorizontally: false,
      anchors: ['Profile', 'JQuery', 'React', 'Extensions'],
      onLeave: (origin, destination, direction) => {
        updateMenuActiveState(destination.index);
      }
    });
  };

  const updateMenuActiveState = (sectionIndex) => {
    const menuItems = document.querySelectorAll('#menu li');
    menuItems.forEach(item => {
      item.classList.remove('active');  // 기존 활성화된 항목 제거
    });
    const activeItem = menuItems[sectionIndex];
    if (activeItem) {
      activeItem.classList.add('active');  // 새로운 항목에 active 클래스 추가
    }
  };

  useEffect(() => {
    fullpageLoading();
  }, []);

  return (
    <>
     <Preview />
      <Menu/>        
        <div id="fullpage">
          <div className="section page1" data-anchor="Profile">
            <Page1First/>
          </div>
          <div className="section page2" data-anchor="JQuery">
            <div className='slide'>
              <Page2First/>
            </div>
            <div className='slide'>
              <Page2Info/>
            </div>
            <div className='slide'>
              <Page2Map/>
            </div>
            <div className='slide'>
              <Page2DepartmentAdd/>
            </div>
            <div className='slide'>
              <Page2DepartmentEdit/>  
            </div>
            <div className='slide'>
              <Page2DepartmentRemove/>
            </div>
            <div className='slide'>
              <Page2LectureAdd/>
            </div>
            <div className='slide'>
              <Page2LectureEdit/>
            </div>
            <div className='slide'>
              <Page2LectureRemove/>
            </div>
          </div>
        
          <div className="section page3" data-anchor="React">
              <div className='slide'>
                
              </div>
              <div className='slide'>
              
              </div>
              <div className='slide'>
              
              </div>
              <div className='slide'>
              
              </div>
              <div className='slide'>
              
            </div>
          </div>

          <div className="section page4" data-anchor="Extensions">
          
          </div>

        </div>
          
    </>
  );
}

export default App;