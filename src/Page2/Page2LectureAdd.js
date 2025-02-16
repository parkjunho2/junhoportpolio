import { useState } from "react";

const Page2LectureAdd=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    

    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/lectureAdd.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">강의 등록,목록</h1>
                    <h4>
                    목록 param으로 column, keyword변수의 query문에 instr 사용하여 검색기능 사용<br/><br/>
                    Input창에 특정창 모두 입력하거나 하지 않았을때만 적용되도록 조건부 사용<br/>
                    등록 전 정규표현식 유무 검사 등록버튼에 상태객체 검사 후<br/>
                    RestController @CrossOrigin연결하여 DBMS 비동기통신 합니다.
                    </h4>
              </div>
                  <div className='col-md-6 col-sm-12 ps-4'>
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
                      RestController
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
{`$(function(){
  var status ={`}<span className="text-danger">{`//상태 객체`}</span>{` 
  lectureCodeValid : false, lectureCodeCheckValid : false,
  lectureDepartmentValid : false, lectureDepartmentCheckValid : false,
  lectureProfessorValid : false, lectureProfessorCheckValid : false,
  lectureTypeValid : false, lectureDateValid : false,
  lectureNameValid : false, lectureCountValid : false,
  lectureDurationValid : false,
  ok : function(){
  return this.lectureCodeValid && this.lectureCodeCheckValid &&  
  this.lectureDepartmentValid && this.lectureDepartmentCheckValid &&
  this.lectureProfessorValid && this.lectureProfessorCheckValid &&
  this.lectureTypeValid && this.lectureDateValid &&
  this.lectureNameValid && this.lectureCountValid && 
  this.lectureDurationValid
  },
};
  
`}<span className="text-danger">{`// 강의 코드 입력창 검사`}</span>{` 
  $("[name=lectureCode]").blur(function(){
  var regex= /^.+$/;`}<span className="text-danger">{`//형식검사`}</span>{` 
  var lectureCode = $(this).val();
  var isValid= regex.test(lectureCode);
  if(isValid){`}<span className="text-danger">{`//비동기통신 중복검사`}</span>{` 
      $.ajax({
        url:"{pageContext.request.contextPath}/rest/admin/lecture/checkLectureCode",
        method:"post",
        data:{lectureCode:lectureCode},
        success:function(response){
          if(response){
            status.lectureCodeCheckValid=true;
            $("[name=lectureCode]").removeClass("success fail fail2")
            .addClass("success");
            $("[name=lectureCode]").parent().find("label").find("i").removeClass("red fa-bounce");
            $("[name=lectureCode]").parent().find("label").find("i").addClass("green fa-beat");
          }
          else{
              status.lectureCodeCheckValid=false;
              $("[name=lectureCode]").removeClass("success fail fail2")
              .addClass("fail2");
              $("[name=lectureCode]").parent().find("label").find("i").removeClass("green fa-beat");
              $("[name=lectureCode]").parent().find("label").find("i").addClass("red fa-bounce");
          }
        },
      });
    }
      else{
        $("[name=lectureCode]").removeClass("success fail fail2")
        .addClass("fail");
        $("[name=lectureCode]").parent().find("label").find("i").removeClass("green fa-beat");
        $("[name=lectureCode]").parent().find("label").find("i").addClass("red fa-bounce");
      }
      status.lectureCodeValid = isValid;
  });
  
  `}<span className="text-danger">{`//학과코드 존재여부 검사`}</span>{` 
  $("[name=lectureDepartment]").blur(function(){
  var regex= /^.+$/;`}<span className="text-danger">{`//형식검사`}</span>{` 
  var lectureDepartment = $(this).val();
  var isValid= regex.test(lectureDepartment);
  if(isValid){`}<span className="text-danger">{`//조회`}</span>{` 
      $.ajax({
        url:"{pageContext.request.contextPath}/rest/admin/lecture/checkLectureDepartment",
        method:"post",
        data:{lectureDepartment:lectureDepartment},
        success:function(response){
          if(response){
            status.lectureDepartmentCheckValid=true;
            $("[name=lectureDepartment]").removeClass("success fail fail2")
            .addClass("success");
            $("[name=lectureDepartment]").parent().find("label").find("i").removeClass("red fa-bounce");
            $("[name=lectureDepartment]").parent().find("label").find("i").addClass("green fa-beat");
          }
          else{
              status.lectureDepartmentCheckValid=false;
              $("[name=lectureDepartment]").removeClass("success fail fail2")
              .addClass("fail2");
              $("[name=lectureDepartment]").parent().find("label").find("i").removeClass("green fa-beat");
              $("[name=lectureDepartment]").parent().find("label").find("i").addClass("red fa-bounce");
          }
        },
      });
    }
      else{
            $("[name=lectureDepartment]").removeClass("success fail fail2")
            .addClass("fail");
          $("[name=lectureDepartment]").parent().find("label").find("i").removeClass("green fa-beat");
          $("[name=lectureDepartment]").parent().find("label").find("i").addClass("red fa-bounce");
        }
        status.lectureDepartmentValid = isValid;
  });
  
  `}<span className="text-danger">{`//교수코드 존재여부 검사`}</span>{` 
  $("[name=lectureProfessor]").blur(function(){
  var regex= /^.+$/;`}<span className="text-danger">{`//형식검사`}</span>{` 
  var lectureProfessor = $(this).val();
  var isValid= regex.test(lectureProfessor);
  if(isValid){`}<span className="text-danger">{`//비동기통신 중복검사`}</span>{` 
      $.ajax({
        url:"{pageContext.request.contextPath}/rest/admin/lecture/checkLectureProfessor",
        method:"post",
        data:{lectureProfessor:lectureProfessor},
        success:function(response){
          if(response){
            status.lectureProfessorCheckValid=true;
            $("[name=lectureProfessor]").removeClass("success fail fail2")
            .addClass("success");
            $("[name=lectureProfessor]").parent().find("label").find("i").removeClass("red fa-bounce");
            $("[name=lectureProfessor]").parent().find("label").find("i").addClass("green fa-beat");
          }
          else{
              status.lectureProfessorCheckValid=false;
              $("[name=lectureProfessor]").removeClass("success fail fail2")
              .addClass("fail2");
              $("[name=lectureProfessor]").parent().find("label").find("i").removeClass("green fa-beat");
              $("[name=lectureProfessor]").parent().find("label").find("i").addClass("red fa-bounce");
          }
        },
      });
    }
      else{
        $("[name=lectureProfessor]").removeClass("success fail fail2")
        .addClass("fail");
        $("[name=lectureProfessor]").parent().find("label").find("i").removeClass("green fa-beat");
        $("[name=lectureProfessor]").parent().find("label").find("i").addClass("red fa-bounce");
        }
        status.lectureProfessorValid = isValid;
  });
  
  `}<span className="text-danger">{`//분류코드 선택창 검사`}</span>{` 
    $("[name=lectureType]").click(function(){
      var isValid = $(this).val().length>0;
        $(this).removeClass("success fail")
          .addClass(isValid ? "success" : "fail");
      if(isValid){
        $("[name=lectureType]").parent().find("label").find("i").removeClass("red fa-bounce");
        $("[name=lectureType]").parent().find("label").find("i").addClass("green fa-beat");
      }
        else{
        $("[name=lectureType]").parent().find("label").find("i").removeClass("green fa-beat");
        $("[name=lectureType]").parent().find("label").find("i").addClass("red fa-bounce");
      }
        status.lectureTypeValid = isValid;
      });
  
 `}<span className="text-danger">{`//강의명 입력창 검사`}</span>{` 
$("[name=lectureName]").blur(function(){
    var regex= /^[가-힣A-Za-z()]{1,10}$/;`}<span className="text-danger">{` //형식검사`}</span>{` 
    var lectureName = $(this).val();
    var isValid= regex.test(lectureName);
      $(this).removeClass("success fail")
              .addClass(isValid ? "success" : "fail");
      if(isValid){
        $("[name=lectureName]").parent().find("label").find("i").removeClass("red fa-bounce");
        $("[name=lectureName]").parent().find("label").find("i").addClass("green fa-beat");
      }
        else{
        $("[name=lectureName]").parent().find("label").find("i").removeClass("green fa-beat");
        $("[name=lectureName]").parent().find("label").find("i").addClass("red fa-bounce");
      }
        status.lectureNameValid = isValid;
  });
  
`}<span className="text-danger">{`//강의시작시간+강의수업시간+강의요일 모두 선택 or 모두 불 선택`}</span>{`             
$("[name=lectureTime],[name=lectureDuration],[name=lectureDay]").blur(function(){
        var lectureTime = $("[name=lectureTime]").val();
        var lectureDuration = $("[name=lectureDuration]").val();
        var lectureDay = $("[name=lectureDay]").val();

        var isEmpty = lectureTime.length == 0 
                  && lectureDuration.length == 0 
                  && lectureDay.length == 0;
      var isFill = lectureTime.length > 0
                    && lectureDuration.length > 0
                    && lectureDay.length > 0;
      var isValid = isEmpty || isFill;
$("[name=lectureTime],[name=lectureDuration],[name=lectureDay]")
                          .removeClass("success fail")
                          .addClass(isValid ? "success" : "fail");
              status.lectureDateValid = isValid;
          });   

`}<span className="text-danger">{`//수업시간 입력`}</span>{` 
  $("[name=lectureDuration]").blur(function(){
        var isValid = $(this).val()>=0;
            $(this).removeClass("success fail fail2")
              .addClass(isValid ? "success" : "fail2");
              status.lectureDurationValid = isValid;
            });

`}<span className="text-danger">{`//강의실 입력`}</span>{` 
  $("[name=lectureRoom]").on("input", function(){
        var isValid = $(this).val().length>=0;
            $(this).removeClass("success fail")
              .addClass(isValid ? "success" : "fail");
              status.lectureRoomValid = isValid;
            });
      $(".onlyFive").on("input", function(){`}<span className="text-danger">{`//입력수 5글자까지만`}</span>{`
          var count = $(this).val().length;
          while(count > 5) {
              var content = $(this).val();
              $(this).val(content.substring(0, count-1));
              count--;
          }
          $(this).css("border-color","green")
          if(count == 5){
            $(this).removeClass("fail").addClass("success");	
            $(this).css("border-color","green");
          }
          else{
            $(this).removeClass("success");	  
          }
      });

`}<span className="text-danger">{`//인원 입력`}</span>{` 
$("[name=lectureCount]").blur(function(){
      var isValid = $(this).val()>0;
          $(this).removeClass("success fail")
                          .addClass(isValid ? "success" : "fail");
              status.lectureCountValid = isValid;
          });
    
`}<span className="text-danger">{`//단축키 폼 검사`}</span>{` 
$(".check-form").submit(function(){
$("[name]").trigger("input").trigger("blur").trigger("click");
      return status.ok();
    });
});

                        `}<span className="text-danger">{` <!-- 목 록 -->`}</span>{` 

function showMessage(message) {`}<span className="text-danger">{` //alert`}</span>{` 
	if (message === 'remove') 
		loadCheck();
	}
$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get('message');
    if (message) {
        showMessage(message); 
    }
});
function loadCheck() {
	 Swal.fire({
     icon: 'success',
     iconColor: "#6695C4",
     title: '삭제 완료.',
     showConfirmButton: false,
     timer: 1500         
	 });
};	
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<form action="add" method="post"  class="check-form" autocomplete="off">
  <div class="container w-400 my-50">
  <div class="row center">
      <h1>강의개설</h1>
  </div>
 `}<span className="text-danger">{`<!-- 강의 코드 입력 중복X -->`}</span>{`                
<div class="row">
  <label>강의코드 <i class="fa-solid fa-asterisk red"></i></label>
      <input type="text" name="lectureCode" 
          class="field w-100" placeholder="ex)KHL01003">
  <div class="success-feedback 00b894">올바른 강의 코드입니다.</div>
  <div class="fail-feedback d63031">코드는 영문 대문자와 숫자로 작성해주세요.</div>
  <div class="fail2-feedback d63031">이미 사용중인 코드입니다.</div>
</div>
`}<span className="text-danger">{`<!-- 학과 코드 입력-->`}</span>{` 
<div class="row">
  <label>학과코드 <i class="fa-solid fa-asterisk red"></i></label>
    <input type="text" name="lectureDepartment"  autocomplete="on"
      class="field w-100" placeholder="ex)KHD01001">
  <div class="success-feedback 00b894">올바른 학과 코드입니다.</div>
  <div class="fail-feedback d63031">코드는 영문 대문자와 숫자로 작성해주세요.</div>
  <div class="fail2-feedback d63031">존재하지 않는 코드입니다.</div>
</div>
`}<span className="text-danger">{`<!-- 교수 코드 입력-->`}</span>{` 
<div class="row">
  <label>교수코드 <i class="fa-solid fa-asterisk red"></i></label>
  <input type="text" name="lectureProfessor"  autocomplete="on"
      class="field w-100" placeholder="ex)khp01240002">
  <div class="success-feedback 00b894">올바른 교수 코드입니다.</div>
  <div class="fail-feedback d63031">코드는 영문 소문자와 숫자로 작성해주세요.</div>
  <div class="fail2-feedback d63031">존재하지 않는 코드입니다.</div>
</div>
`}<span className="text-danger">{`<!-- 분류 선택-->`}</span>{` 
<div class="row">
    <label>분류 <i class="fa-solid fa-asterisk red"></i></label>
    <select name="lectureType" class="field w-100">
        <option value="">선택하세요</option>
        <option value="전공">전공</option>
        <option value="교양">교양</option>
        <option value="채플">채플</option>
    </select>
    <div class="success-feedback 00b894">올바른 선택입니다</div>
    <div class="fail-feedback d63031">반드시 선택해야 합니다</div>
</div>
`}<span className="text-danger">{`<!-- 강의명 입력-->`}</span>{` 
<div class="row">
  <label>강의명 <i class="fa-solid fa-asterisk red"></i></label>
    <input type="text" name="lectureName" 
      class="field w-100" placeholder="ex)학교보건교육론">
  <div class="success-feedback 00b894">올바른 입력입니다.</div>
  <div class="fail-feedback d63031">한/영 으로만 입력하세요.</div>
  <div class="fail2-feedback d63031">이미 사용중인 강의명입니다.</div>
</div>
`}<span className="text-danger">{`<!-- 강의 시작 시간입력-->`}</span>{` 
<div class="row">
  <label>강의시작</label>
  <input type="time" name="lectureTime" class="field w-100">
  <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
</div>
`}<span className="text-danger">{`<!-- 강의 수업시간 입력-->`}</span>{` 
<div class="row">
  <label>강의시간</label>
    <input type="number" name="lectureDuration" class="field w-100" placeholder="시간" min="0">
      <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
      <div class="fail2-feedback d63031">0 이상이어야 합니다</div>
</div> 
`}<span className="text-danger">{`<!-- 강의 수업요일 입력-->`}</span>{` 
<div class="row">
  <label>강의요일</label>
  <select name="lectureDay" class="field w-100">
      <option value="">선택하세요</option>
      <option value="월요일">월요일</option>
      <option value="화요일">화요일</option>
      <option value="수요일">수요일</option>
      <option value="목요일">목요일</option>
      <option value="금요일">금요일</option>
      <option value="토요일">토요일</option>
      <option value="일요일">일요일</option>
  </select>
  <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
</div>
`}<span className="text-danger">{`<!-- 강의실 입력-->`}</span>{` 
<div class="row">
  <label>강의실</label>
    <input type="text" name="lectureRoom" class="field w-100 onlyFive" placeholder="5글자 이하만 입력하세요">
    <div class="success-feedback">최대 5글자까지 입력 가능합니다</div>
</div>
`}<span className="text-danger">{`<!-- 인원 입력-->`}</span>{` 
<div class="row">
<label>정원</label>
  <input type="number" name="lectureCount" value="1"
    class="field w-100" placeholder="인원" min="1">
    <div class="fail-feedback d63031">1명 이상이어야 합니다</div>
</div>
`}<span className="text-danger">{`<!-- 전송버튼 -->`}</span>{` 
<div class="row">
  <button type="submit" class="btn btn-positive w-100 mt-30" >
      <i class="fa-regular fa-square-plus"></i>
      강의개설
  </button>
  <div class="row">
  <a href="list" class="btn btn-neutral w-100" >
      <i class="fa-solid fa-list"></i> 목록이동
  </a>
  </div>
</div>
</div>
</form>


                            `}<span className="text-danger">{`<!-- 목 록 -->`}</span>{` 

<div class="row center">
  <form action="list" method="get" autocomplete="off">
      <!-- 검색창 --> 
<select class="field" name="column">
  <option value="department_name" <c:if test="{param.column == 'department_name'}">selected</c:if>>전공(학과)</option>
  <option value="member_name" <c:if test="{param.column == 'member_name'}">selected</c:if>>교수명</option>
  <option value="lecture_type" <c:if test="{param.column == 'lecture_type'}">selected</c:if>>분류</option>
  <option value="lecture_name" <c:if test="{param.column == 'lecture_name'}">selected</c:if>>강의명</option>
</select>
    <input type="search" name="keyword" value="{param.keyword}" class="field" placeholder="검색어">
    <button class="btn btn-positive" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
<a href="add" class="btn btn-neutral"><i class="fa-regular fa-square-plus"></i> 강의개설</a>
  </form>
</div>
            
<div class="row">
    <table class="table table-horizontal table-hover w-100">
        <thead>
          <tr>
            <th>강의코드</th>
            <th>전공(학과)</th>
            <th>교수명</th>
            <th>분류</th>
            <th>강의명</th>
            <th>시작시간</th>
            <th>수업시간</th>
            <th>강의요일</th>
            <th>강의실</th>
            <th>정원</th>
          </tr>
</thead>
<tbody>
    <c:forEach var="lectureMemberVO" items="{lectureList}">
        <tr onclick="location.href='detail?lectureCode={lectureMemberVO.lectureCode}'" style="cursor: pointer;">
            <td>{lectureMemberVO.lectureCode}</td>
            <td>{lectureMemberVO.departmentName}</td>
            <td>{lectureMemberVO.memberName}</td>
            <td>{lectureMemberVO.lectureType}</td>
            <td>{lectureMemberVO.lectureName}</td>
            <td>{lectureMemberVO.lectureTime}</td>
            <td>{lectureMemberVO.lectureDuration}</td>
            <td>{lectureMemberVO.lectureDay}</td>
            <td>{lectureMemberVO.lectureRoom}</td>
            <td>{lectureMemberVO.lectureCount}</td>
          </tr>
      </c:forEach>
    </tbody>
  </table>
  <jsp:include page="/WEB-INF/views/template/navigator.jsp"></jsp:include> <!-- navigator 추가 -->
</div>
</div>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`.kh-container{
    height: auto !important; 
}
.red.bounce {
	color: red;
	animation: bounce 0.1s ease-in-out infinite;
	}
.green.beat {
	color: green;
	animation: beat 0.1s ease-in-out infinite;
	}	
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`
`}<span className="text-danger">{`<!-- 등 록 -->`}</span>{` 
@GetMapping("/add")
  public String add() {
    return "/WEB-INF/views/admin/lecture/add.jsp";
  }
  @PostMapping("/add")
  public String add(@ModelAttribute LectureDto lectureDto) {
    adminLectureDao.add(lectureDto);
    return "redirect:detail?lectureCode="+lectureDto.getLectureCode();
}
`}<span className="text-danger">{`//강의 코드 중복검사`}</span>{` 
public LectureDto selectOneByLectureCode(String lectureCode) {
  String sql="select * from lecture where lecture_code=?";
  Object[] data= {lectureCode};
  List<LectureDto>list = jdbcTemplate.query(sql,  lectureMapper, data);
  return list.isEmpty()? null:list.get(0);
}

`}<span className="text-danger">{`//학과 코드 중복검사`}</span>{` 
    public LectureDto selectOneByLectureDepartment(String lectureDepartment) {
      String sql="select * from department where department_code=?";
      Object[] data= {lectureDepartment};
      List<LectureDto>list = jdbcTemplate.query(sql,  lectureMapper, data);
      return list.isEmpty()? null:list.get(0);
    }
    
`}<span className="text-danger">{`//교수 코드 중복검사`}</span>{` 
    public LectureDto selectOneByLectureProfessor(String lectureProfessor) {
      String sql="select * from professor where professor_code=?";
      Object[] data= {lectureProfessor};
      List<LectureDto>list = jdbcTemplate.query(sql,  lectureMapper, data);
      return list.isEmpty()? null:list.get(0);
    }				

`}<span className="text-danger">{`//강의명 코드 중복검사`}</span>{` 
    public LectureDto selectOneByLectureName(String lectureName) {
      String sql="select * from lecture where lecture_name=?";
      Object[] data= {lectureName};
      List<LectureDto>list = jdbcTemplate.query(sql,  lectureMapper, data);
      return list.isEmpty()? null:list.get(0);
    }					


`}<span className="text-danger">{`<!-- 목 록 -->`}</span>{` 
@RequestMapping("list")
  public String list(@ModelAttribute("pageVO") PageVO pageVO, Model model) {
  model.addAttribute("lectureList", lectureDao.selectListByPaging(pageVO));
  int count = lectureDao.countByPaging(pageVO);
  pageVO.setCount(count);
  return "/WEB-INF/views/admin/lecture/list.jsp";
	}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@RestController
@RequestMapping("/rest/admin/lecture")
public class AdminLectureRestController {
  @Autowired
  private AdminLectureDao adminLectureDao;
  @Autowired
  private ProfessorDao professorDao;
  @Autowired
  private DepartmentDao departmentDao;
`}<span className="text-danger">{`//코드 중복 검사`}</span>{` 
@PostMapping("/checkLectureCode")
  public boolean checkLectureCode(@RequestParam String lectureCode) {
    LectureDto lectureDto =
        adminLectureDao.selectOneByLectureCode(lectureCode);
    return lectureDto==null;
  }
`}<span className="text-danger">{`//과목코드 DB에 있는것만 검사`}</span>{` 
@PostMapping("/checkLectureDepartment")
  public boolean checkLectureDepartment(@RequestParam String lectureDepartment) {
    DepartmentDto lectureDto =
        departmentDao.selectOne(lectureDepartment);
    return lectureDto!=null; 
  }
`}<span className="text-danger">{`//교수코드 DB에 있는것만 검사`}</span>{` 
@PostMapping("/checkLectureProfessor")
  public boolean checkLectureProfessor(@RequestParam String lectureProfessor) {
    ProfessorDto lectureDto =
        professorDao.selectOne(lectureProfessor);
    return lectureDto!=null; 
  }
`}<span className="text-danger">{`//강의명 중복검사`}</span>{` 
@PostMapping("/checkLectureName")
  public boolean checkLectureName(@RequestParam String lectureName) {
    LectureDto lectureDto =
        adminLectureDao.selectOneByLectureName(lectureName);
    return lectureDto==null; 
  }
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`<!-- 등 록 -->`}</span>{` 
public void add(LectureDto lectureDto) {
  String sql = "insert into lecture("
      + "lecture_code, lecture_department, lecture_professor, "
      + "lecture_type, lecture_name, lecture_time, "
      + "lecture_duration, lecture_day, lecture_room, lecture_count"
      + ") values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  Object[] data = {
      lectureDto.getLectureCode(), lectureDto.getLectureDepartment(),
      lectureDto.getLectureProfessor(), lectureDto.getLectureType(), 
      lectureDto.getLectureName(), lectureDto.getLectureTime(), 
      lectureDto.getLectureDuration(), lectureDto.getLectureDay(), 
      lectureDto.getLectureRoom(), lectureDto.getLectureCount()
      };
  jdbcTemplate.update(sql,data);		
  }

`}<span className="text-danger">{`<!-- 목 록 -->`}</span>{` 
public List<LectureDto>selectList(){
  String sql = "select * from lecture order by lecture_code asc";
  return jdbcTemplate.query(sql, lectureMapper);
}  
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2LectureAdd;