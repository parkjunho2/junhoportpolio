import { useState } from "react";

const Page2Map=()=>{
const [activeTab, setActiveTab] = useState('JS');

    return(
        <>
        <div className='row'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/map.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">지도 페이지</h1>
                  <h4>
                  KakaoMap API를 호스트에 IPv4 등록 후 
                  Request API키를 호출하여
                  권장하는 guide에 맞게 코드를 작성하여 추가적으로 버튼과 마커에 시각적인 디자인을 적용했습니다.
                  </h4>
              </div>
                  <div className='col-md-6 col-sm-12'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'HTML' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('HTML')}>
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
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<!--카카오 맵API-->
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7d514f39f1a90b1f9acaf2ac1526268a"></script>

$(function(){
var container = document.querySelector('.kakao-map'); //지도생성 태크
var options = {
    center: new kakao.maps.LatLng(37.533826, 126.896837), //지도위치 설정
    level: 3  //지도의 확대
};

window.kakaoMap = new kakao.maps.Map(container, options);  //태그와 옵션을 이용하여 카카오 지도를 생성
kakaoMap.setLevel(3);
var imageSrc = {pageContext.request.contextPath}/images/education.png", //마커이미지 
imageSize = new kakao.maps.Size(64, 69),
imageOption = { offset: new kakao.maps.Point(27, 69) };
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);  //마커정보

function loadMapList(map){  //클릭한 지도 위치로 이동
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
    
    var location = new kakao.maps.LatLng(lat, lng);  //parameter
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
    var lat = $(this).attr("data-lat");  //위도 정보
    var lng = $(this).attr("data-lng");  //경도 정보
    $(".btn-map").removeClass("red").addClass("black"); //스타일 수정
    $(".btn-map i").removeClass("red").addClass("black");
    $(this).removeClass("black").addClass("red");
    $(this).find('i').removeClass("black").addClass("red");

    var location = new kakao.maps.LatLng(lat, lng); //위취에 스타일 적용
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
                <div className={activeTab === 'HTML' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<div class="container omega px-10 mx-20 my-20">
<div class=" center">  //모달
  <h3 class="my-0 underline">캠퍼스 정보</h3>
</div>
<div class="mt-10 center">
  <a href="#" data-lat="37.499" data-lng="127.0328" class="link link-animation black btn-map gangNam">
    강남 캠퍼스 
    <i class="fa-solid fa-location-arrow black"></i>
  </a>
</div>
<div class=" center">
  <a href="#" data-lat="37.5679" data-lng="126.983" class="link link-animation black btn-map jongRo">
    종로 캠퍼스
    <i class="fa-solid fa-location-arrow black"></i>
  </a>
</div>
<div class=" center">
  <a href="#"  data-lat="37.533826" data-lng="126.896837" class="link link-animation black btn-map dangSan">
    당산 캠퍼스
    <i class="fa-solid fa-location-arrow black"></i>
  </a>
</div>
</div>
<div class="kakao-map"></div>  //화면출력

<!-- footer 추가 -->
<jsp:include page="/WEB-INF/views/template/footer.jsp"></jsp:include>
    
<div class="w-25"> //Footer Page
  <div class="row center">
      <h3>캠퍼스 정보</h3>
      <div>
        <a href="{pageContext.request.contextPath}/home/map?mapW=gangNam" data-lat="37.499" data-lng="127.0328" class="link link-animation campus">강남 캠퍼스
          <i class="fa-solid fa-square-arrow-up-right"></i></a>
      </div>
      <div>
        <a href="{pageContext.request.contextPath}/home/map?mapW=jongRo" data-lat="37.5679" data-lng="126.983" class="link link-animation campus">종로 캠퍼스
          <i class="fa-solid fa-square-arrow-up-right"></i></a>
      </div>
      <div>
        <a href="{pageContext.request.contextPath}/home/map?mapW=dangSan"  data-lat="37.533826" data-lng="126.896837" class="link link-animation campus">당산 캠퍼스
          <i class="fa-solid fa-square-arrow-up-right"></i></a>
      </div>
</div>
</div>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`.kakao-map{ `}<span className="text-danger">{` //지도 크기 조정`}</span>{`
   	position: relative;
	width: 100%;
	height: 100%;
	z-index: 1;
	margin: auto;
	padding: auto;
}

`}<span className="text-danger">{`//시각적 디자인`}</span>{`
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
{`
@Controller
@RequestMapping("/home")
public class HomeController {
  
  @RequestMapping("/map") //카카오맵
  public String map() {
    return "/WEB-INF/views/home/map.jsp";
  }
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>
        </>
    )
}
export default Page2Map;