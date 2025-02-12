import { useState } from "react";

const Page2Second=()=>{
const [activeTab, setActiveTab] = useState('JS');

    return(
        <>
        <div className='row'>
                  <div className='col-6 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/map.mp4" type="video/mp4"/>
                  </video>
                    <h1 className='text-warning'>담당파트 지도API</h1>
                    <h4>학교 위치를 찾도록 kakaoMap API사용하여 해당위치의 위도 경도에 마커와 이미지를 설정하여 지도웹페이지를
                    생성했습니다. 선택된 항목의 js코드에 addClass 사용하여 글자의 색이 변경하도록 시각적인 효과를 추가했습니다.</h4>
              </div>
                  <div className='col-6'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      HTML
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'CSS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('CSS')}>
                      CSS
                    </button>
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      Controller
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'Service' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Service')}>
                      Service
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'Repository' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Repository')}>
                      Repository
                    </button>
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<!--카카오 맵API-->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7d514f39f1a90b1f9acaf2ac1526268a"></script>

$(function(){
var container = document.querySelector('.kakao-map'); //지도를 생성하기 태크
var options = {
    center: new kakao.maps.LatLng(37.533826, 126.896837), //지도 위치 설정
    level: 3 //- level:지도의 확대
};

window.kakaoMap = new kakao.maps.Map(container, options); //태그와 옵션을 이용하여 카카오 지도를 생성
kakaoMap.setLevel(3);
var imageSrc = {pageContext.request.contextPath}/images/education.png", //마커이미지
imageSize = new kakao.maps.Size(64, 69),
imageOption = { offset: new kakao.maps.Point(27, 69) };
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption); //마커정보

function loadMapList(map){ //클릭한 지도 위치로 이동
    var lat, lng;
    $("btn-map").removeClass("red").addClass("black");
    switch(map) {
        case 'jongRo':
        lat = 37.5679;
        lng = 126.983;
        kakaoMap.setLevel(3);
        $(".jongRo").removeClass("black").addClass("red");
        $(".jongRo i").removeClass("black").addClass("red");
        break;
        case 'dangSan':
        lat = 37.533826;
        lng = 126.896837;
        kakaoMap.setLevel(3);
        $(".dangSan").removeClass("black").addClass("red");
        $(".dangSan i").removeClass("black").addClass("red");
        break;
        case 'gangNam':
        lat = 37.499;
        lng = 127.0328;
        kakaoMap.setLevel(3);
        $(".gangNam").removeClass("black").addClass("red");
        $(".gangNam i").removeClass("black").addClass("red");
        break;
        default:
        lat = 37.533826;
        lng = 126.896837;
        kakaoMap.setLevel(3);
        $(".dangSan").removeClass("black").addClass("red");
        $(".dangSan i").removeClass("black").addClass("red");
        break;
    }
    
    var location = new kakao.maps.LatLng(lat, lng); //parameter
    kakaoMap.setCenter(location);
    if (window.kakaoMapMarker) {
        kakaoMapMarker.setMap(null);
        kakaoMapMarker = null;
    }
    
    window.kakaoMapMarker = new kakao.maps.Marker({ //지도에 파라미터추가
        position: location,
        image: markerImage
        });
        kakaoMapMarker.setMap(kakaoMap);
    }
    var params = new URLSearchParams(location.search);
    var map = params.get("mapW");

    loadMapList(map);
$(".btn-map").click(function(){ 
    var lat = $(this).attr("data-lat"); //위도 정보
    var lng = $(this).attr("data-lng"); //경도 정보
    $(".btn-map").removeClass("red").addClass("black"); //스타일 수정
    $(".btn-map i").removeClass("red").addClass("black");
    $(this).removeClass("black").addClass("red");
    $(this).find('i').removeClass("black").addClass("red");

    var location = new kakao.maps.LatLng(lat, lng); //지도를 이동
    kakaoMap.setLevel(3);
    kakaoMap.setCenter(location);
    if(window.kakaoMapMarker){
    kakaoMapMarker.setMap(null);
    kakaoMapMarker=null;
    }
    window.kakaoMapMarker = new kakao.maps.Marker({
    position:location,
    image: markerImage
    });
    kakaoMapMarker.setMap(kakaoMap); //지도에 마커 설정
});
});
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    JSX코드
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`.kakao-map{
   	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	margin: auto;
	padding: auto;
}
.btn{
	position: absolute;
	z-index: 5;
	flex-direction: column;
}
.omega{
	position: absolute;
	z-index: 5;
	background-color: rgba(255, 255, 255, 0.9);
}
.underline{
	border-bottom: 1px solid;
	border-top: none;
    border-left: none;
    border-right: none;
    padding-left: 0;
    padding-right: 0;
    border-radius: 0;
}
.btn-map{
	margin-bottom: 5px;
}

.btn-map.red i {
    color: red;
}

.btn-map.black i {
    color: black;
}`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Controller
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Service
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Repository
                  </code></pre>
                </div>
                  </div>
                </div>
        </>
    )
}
export default Page2Second;