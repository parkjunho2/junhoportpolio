import { useState } from "react";

const Page2Info=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    return(<>
    <div className="row w-100">
        <div className='col-md-6 col-sm-12 ps-4'>    
            <pre className='text-black bg-gray-200 ps-1' style={{ fontSize: '19px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>
{`1      {
2     "BackEnd" : {
3                 "OS" : "Window10" ,                                            
4      "Language" : "Java" ,
5                "IDE" : [
6                        { "Eclipse" , "VSCode" }
7                       ] ,
8       "FrameWork" : "Spring Boot" ,
9              "RDBMS" : { "Oracle11g" : "DBeaver" } ,
10     "SQLMapper" : "JDBCTemplate" ,
11                  "WAS" : "Apache Tomcat" ,
12             "Library" : [
13                   { "Spring Web" ,  "Spring Boot DevTools" ,  "Oracle Driver" ,  
14                   "Lombok", "Java Mail Sender", "Spring Security", "Spring Data JDBC"
15                    }
16                ]
17           },
18   "FrontEnd" : {
19              "UI" :  { "MVC" : "JSP" } ,
20              "JS" : { "EC5"  : "JQuery" } ,
21             "API" : "KakaoMap" ,
22          "CDN" : [
23                        { "Moment" ,  "JQuery",  "SweetAlert2" }
24                     ]
25          }
26   }
`}</pre>
    </div>
    <div className="col-md-6 col-sm-12 ps-4">
                <h1 className='text-primary mb-0'>개발 환경</h1>
                <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      &lt;head&gt;
                    </button>
                    <button 
                      className={`btn btn-primary ${activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      JS
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
                      SQLMapper
                    </button>
                    <button 
                      className={`btn btn-success ${activeTab === 'Service' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Service')}>
                      Interceptor
                    </button>
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`<!-- google font cdn -->`}</span>{`
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">

`}<span className="text-danger">{`<!-- custom css -->`}</span>{`
<link rel="stylesheet" type="text/css" href="{pageContext.request.contextPath}/css/commons.css">

`}<span className="text-danger">{`<!-- font awesome icon cdn-->`}</span>{`
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css">

`}<span className="text-danger">{`<!-- moment cdn -->`}</span>{`
<script src="https://cdn.jsdelivr.net/npm/moment@2.30.1/moment.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/locale/ko.min.js"></script>
  
`}<span className="text-danger">{`<!-- jquery cdn -->`}</span>{`
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>

`}<span className="text-danger">{`<!-- my jquery library -->`}</span>{`
<script src="{pageContext.request.contextPath}/js/checkbox.js"></script>
<script src="{pageContext.request.contextPath}/js/confirm-link.js"></script>	    
<script src="{pageContext.request.contextPath}/js/multipage.js"></script>

`}<span className="text-danger">{`<!-- sweetalert2 cdn -->`}</span>{`
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

`}<span className="text-danger">{`<!-- remainTime.js -->`}</span>{`
<script src="{pageContext.request.contextPath}/js/remainTime.js"></script>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`<!-- checkboc -->`}</span>{`
$(function () {
    $(".check-all").change(function () {
        var checked = $(this).prop("checked");
        $(".check-item").prop("checked", checked);
        $(".check-item").trigger("change");
    });

    $(".check-required-all").change(function () {
        var checked = $(this).prop("checked");
        $(".check-required-item").prop("checked", checked);
        $(".check-item").trigger("change");
    });

    $(".check-item").change(function () {
        var requiredCount = $(".check-required-item").length;
        var checkRequiredCount = $(".check-required-item:checked").length;
        var checkRequiredAll = requiredCount == checkRequiredCount;
        var allCount = $(".check-item").length;
        var checkAllCount = $(".check-item:checked").length;
        var checkAll = allCount == checkAllCount;
        $(".check-required-all").prop("checked", checkRequiredAll);
        $(".check-all").prop("checked", checkAll);
    });
});

`}<span className="text-danger">{`<!-- confirm-link -->`}</span>{`
$(function(){
    $(".confirm-link").click(function(){
        var text = $(this).attr("data-text") || "정말 이동하시겠습니까?";
        return window.confirm(text);
    });
});
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@charset "UTF-8";
*{
	color: #2D3436;
    box-sizing: border-box; 
    font-family: "Noto Sans KR", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    word-break: break-all;
}

div{
    box-shadow: 0 0 0px 0 #B2BEC3;
}

html, body {
	margin: 0;
	padding: 0;
	height: 100%;
	width: 100%;
}

.kh-container{
	display: flex;
	flex-direction: column;
	height: 100vh;
	background-image: url("/images/KHuniv_background_main_crop_lv80.png");
	background-position: center;
	background-repeat: no-repeat;
    background-size: cover; 
}
.kh-header{
	height: 150px;
	width: 100%;
}
.kh-body{
	border: 1px solid #2D3436;
	border-right: none;
	border-left: none;
	flex:1;
	height: 100%;
	margin-left: 10%;
    margin-right: 10%;
	background-color: #E3ECF4;
}
.kh-footer{
	color: #2D3436;
	font-size: 12px;
	height: 150px; 
	width: 100%;
	z-index:1;
}

.container{
    margin-left: auto;
    margin-right: auto;
}
.row{
    margin-top: 10px;
    margin-bottom: 10px;
}

.left{
    text-align: start !important;
}
.center{
    text-align: center !important;
}
.right{
    text-align: end !important;
}

...
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`<!-- 학과Mapper -->`}</span>{`
@Service
public class AdminDepartmentMapper implements RowMapper<AdminDepartmentDto>{

@Override
public AdminDepartmentDto mapRow(ResultSet rs, int rowNum) throws SQLException {
  AdminDepartmentDto adminDepartmentDto = new AdminDepartmentDto();
  adminDepartmentDto.setDepartmentCode(rs.getString("department_code"));
  adminDepartmentDto.setDepartmentName(rs.getString("department_name"));
  return adminDepartmentDto;
  }
}
`}<span className="text-danger">{`<!-- 강의Mapper -->`}</span>{`
@Service
public class AdminLectureMapper implements RowMapper<AdminLectureDto>{

@Override
public AdminLectureDto mapRow(ResultSet rs, int rowNum) throws SQLException {
  AdminLectureDto adminLectureDto = new AdminLectureDto();
    adminLectureDto.setLectureCode(rs.getString("lecture_code"));
    adminLectureDto.setLectureDepartment(rs.getString("lecture_department"));
    adminLectureDto.setLectureProfessor(rs.getString("lecture_professor"));
    adminLectureDto.setLectureType(rs.getString("lecture_type"));
    adminLectureDto.setLectureName(rs.getString("lecture_name"));
    adminLectureDto.setLectureTime(rs.getDate("lecture_time"));
    adminLectureDto.setLectureDuration(rs.getInt("lecture_dutration"));
    adminLectureDto.setLectureDay(rs.getDate("lecture_day"));
    adminLectureDto.setLectureRoom(rs.getString("lecture_room"));
    adminLectureDto.setLectureCount(rs.getInt("lecture_count"));
  return  adminLectureDto;
  }
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@Configuration
public class InterceptorConfiguration implements WebMvcConfigurer{

@Autowired
private MemberInterceptor memberInterceptor;
@Autowired
private AdminInterceptor adminInterceptor;
@Autowired
private BoardOwnerInterceptor boardOwnerInterceptor;
@Autowired
private ScheduleInterceptor scheduleInterceptor;


@Override
public void addInterceptors(InterceptorRegistry registry) {
  
  registry.addInterceptor(memberInterceptor)
      .addPathPatterns( // member만 접속가능
        "/member/**", // 모든 페이
        "/home/main",
        "/registration/**",
        "/lecture/**",
        "/schedule/list",
        "/schedule/detail",
        "/board/list",
        "/board/detail",
        "/rest/board/**",
        "/rest/grade/**",
        "/rest/home/main/**",
        "/rest/lecture/**",
        "/rest/registration/**",
        "/api/**" // 로그인 남은 시간 페이지
      ) // 해당 설정은 화이트 리스트 방식
      .excludePathPatterns( // member 아니어도 접속 가능
        "/home/login",
        "/member/login", // 로그인 페이지
        "/member/findPw*", //비밀번호 찾기 관련 페이지
        "/member/resetPw*", //비밀번호 재설정 관련 페이지		
        "/rest/cert/**", // 비밀번호 인증 관련 비동기 통신
        "/rest/member/**" // 회원 정보 형식 검사 관련 비동기 통신
      );
  
  // 관리자 검사 인터셉터 설정
  registry.addInterceptor(adminInterceptor)
      .addPathPatterns(
        "/admin/**", // 관리자 관련 페이지
        "/rest/admin/**", // 관리자 페이지의 형식 검사 비동기 통신
        "/rest/member/**", // 관리자의 멤버 등록 페이지의 형식 검사 비동기통신
        "/board/add",
        "/schedule/add"
      )
      .excludePathPatterns(
          
      );
  
  // 게시글 수정삭제 검사 인터셉터 설정
  registry.addInterceptor(boardOwnerInterceptor)
      .addPathPatterns(
        "/board/edit",
        "/board/delete"
      );
  
  // 학사일정 수정삭제 검사 인터셉터 설정
  registry.addInterceptor(scheduleInterceptor)
      .addPathPatterns(
        "/schedule/edit",
        "/schedule/delete"
      );
  
}
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Repository
                  </code></pre>
                </div>
    </div>
</div>
    </>)
}
export default Page2Info;