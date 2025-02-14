import './App.css';
import { useCallback, useEffect } from 'react';
import "fullpage.js/dist/fullpage.min.css";
import fullpage from 'fullpage.js';
import Preview from './components/options/Preview'; 
import Page1First from './Page1/Page1First';
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
import Page3First from './Page3/Page3First';
import Page3Info from './Page3/Page3Info';
import Page3Payment from './Page3/Page3Payment';
import Page3PaymentStatus from './Page3/Page3PaymentStatus';
import Page3PaymentAllList from './Page3/Page3PaymentAllList';
import Page3PaymentDetail from './Page3/Page3PaymentDetail';
import Page3PaymentGrape from './Page3/Page3PaymentGrape';


function App() {

  const fullPageLoading = useCallback(() => {
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
      normalScrollElements: '.swiper',
      touchMove: false
    });
  }, []);

  useEffect(() => {
    fullPageLoading();
  }, [fullPageLoading]); 
  
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
                <Page3First/>
              </div>
              <div className='slide'>
                <Page3Info/>
              </div>
              <div className='slide'>
                <Page3Payment/>
              </div>
              <div className='slide'>
                <Page3PaymentStatus/>
              </div>
              <div className='slide'>
                <Page3PaymentAllList/>
              </div>
              <div className='slide'>
                <Page3PaymentDetail/>
              </div>
              <div className='slide'>
                <Page3PaymentGrape/>
              </div>
          </div>

          <div className="section page4" data-anchor="Extensions">
            <h1 className='text-center'>UpLading Soon...</h1>
          </div>

        </div>
          
    </>
  );
}

export default App;