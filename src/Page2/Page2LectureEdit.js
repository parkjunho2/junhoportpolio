import { useState } from "react";

const Page2LectureEdit=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/lectureEdit.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">강의 수정</h1>
                    <h4>
                    검색기능 column , keyword 두 개의 조건이 만족하면 검색 두 개의 조건 불일치 모든 항목 asc순서 query문 사용
                    비동기 통신사용 하여 입력 상태 유무 검사
                    RestController CrossOrigin연결하여 DBMS 중복검사 비동기통신 데이터 검사
                    MVC 패턴 사용하여 RequestParam 으로 정보 출력
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
  lectureCodeValid : true, lectureCodeCheckValid : true,
  lectureDepartmentValid : true, lectureDepartmentCheckValid : true,
  lectureProfessorValid : true, lectureProfessorCheckValid : true,
  lectureTypeValid : true, lectureDateValid : true,
  lectureNameValid : true, lectureCountValid : true,
  ok : function(){
  return this.lectureCodeValid && this.lectureCodeCheckValid &&  
  this.lectureDepartmentValid && this.lectureDepartmentCheckValid &&
  this.lectureProfessorValid && this.lectureProfessorCheckValid &&
  this.lectureTypeValid && this.lectureDateValid &&
  this.lectureNameValid && this.lectureCountValid
  },
};
`}<span className="text-danger">{`//학과코드 입력창 검사 // 테이블에 있는값인지 확인코드 추가`}</span>{`
  $("[name=lectureDepartment]").blur(function(){
  var regex= /^.+$/;`}<span className="text-danger">{`//형식검사`}</span>{`
  var lectureDepartment = $(this).val();
  var isValid= regex.test(lectureDepartment);
  if(isValid){`}<span className="text-danger">{`//비동기통신 중복검사`}</span>{`
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
  
  `}<span className="text-danger">{`//교수코드 입력창 검사 // 테이블에 있는값인지 확인코드 추가`}</span>{`
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
$("[name=lectureType]").on("input", function(){
  var regex=  /^(전공|교양|채플)$/;`}<span className="text-danger">{`//형식검사`}</span>{`
var lectureType = $(this).val();
var isValid= regex.test(lectureType);
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
var regex= /^[가-힣A-Za-z()]{1,10}$/;`}<span className="text-danger">{`//형식검사`}</span>{`
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
$("[name=lectureRoom]").blur(function(){
        var isValid = $(this).val().length>=0;
            $(this).removeClass("success fail")
            .addClass(isValid ? "success" : "fail");
            status.lectureRoomValid = isValid;
            });	
$(".onlyFive").on("input", function(){
    var count = $(this).val().length;
    while(count > 5) {
      var content = $(this).val();
      $(this).val(content.substring(0, count-1));
      count--;
    }
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
        $("[name]").trigger("input").trigger("blur");
        if(status.ok()){
    $(".btn-edit").addClass("confirm-link");
        loadCheck();
    }
    return status.ok();
    });
});
});	
function loadCheck() {`}<span className="text-danger">{`//Sweet Alet2`}</span>{`
  Swal.fire({
  icon: 'success',
  iconColor: "#6695C4",
  title: '수정 완료.',
  showConfirmButton: false,
  timer: 1500         
  });
};	
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<form action="edit" method="post" autocomplete="off" class="check-form">
<div class="container w-500 my-50">
<div class="row center">
  <h1>강의 정보 수정</h1>
</div>
        
<div class="row">
  <label>강의코드</label>
  <input type="hidden" name="lectureCode" value="{lectureDto.lectureCode}">
  <div class="field w-100">{lectureDto.lectureCode}</div>
</div>
            
`}<span className="text-danger">{`<!-- 학과 코드 입력 중복가능-->`}</span>{`
<div class="row">
  <label>학과 코드 <i class="fa-solid fa-asterisk red"></i></label>
  <input type="text" name="lectureDepartment"  value="{lectureDto.lectureDepartment}"
        class="field w-100" placeholder="ex)d01">
    <div class="success-feedback 00b894">올바른 학과 코드입니다.</div>
      <div class="fail-feedback d63031">코드는 앞 영문 소문자로 시작하며,다음 숫자를 2~3자로 작성해주세요.</div>
      <div class="fail2-feedback d63031">존재하지 않는 코드입니다.</div>
</div>

`}<span className="text-danger">{`<!-- 교수 코드 입력 중복가능-->`}</span>{`
<div class="row">
  <label>교수 코드 <i class="fa-solid fa-asterisk red"></i></label>
  <input type="text" name="lectureProfessor" value="{lectureDto.lectureProfessor}"  
                    class="field w-100" placeholder="ex)prof001">
    <div class="success-feedback 00b894">올바른 교수 코드입니다.</div>
      <div class="fail-feedback d63031">코드는 앞 영문 소문자로 시작하며,다음 숫자를 3자로 작성해주세요.</div>
      <div class="fail2-feedback d63031">존재하지 않는 코드입니다.</div>
</div>

`}<span className="text-danger">{`<!-- 분류 선택-->`}</span>{`
<div class="row">
  <label>분류 <i class="fa-solid fa-asterisk red"></i></label>
  <select name="lectureType" class="field w-100" >
    <option value="">선택하세요</option>
    <option value="전공" ;{lectureDto.lectureType == '전공' ? 'selected' : ''}>전공</option>
    <option value="교양" ;{lectureDto.lectureType == '교양' ? 'selected' : ''}>교양</option>
    <option value="채플" ;{lectureDto.lectureType == '채플' ? 'selected' : ''}>채플</option>
  </select>
    <div class="success-feedback 00b894">올바른 선택입니다.</div>
    <div class="fail-feedback d63031">반드시 선택해야 합니다</div>
</div>

`}<span className="text-danger">{`<!-- 강의명 입력-->`}</span>{`
<div class="row">
  <label>강의 명 <i class="fa-solid fa-asterisk red"></i></label>
    <input type="text" name="lectureName" value="{lectureDto.lectureName}"  
                      class="field w-100" placeholder="ex)학교보건교육론">
      <div class="success-feedback 00b894">올바른 입력입니다.</div>
      <div class="fail-feedback d63031">한/영 으로만 입력하세요.</div>
</div>

`}<span className="text-danger">{`<!-- 강의 시작 시간입력-->`}</span>{`
<div class="row">
  <label>강의시작 시간</label>
  <input type="time" name="lectureTime" class="field w-100" value="{lectureDto.lectureTime}">
    <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
</div>

`}<span className="text-danger">{`<!-- 강의 수업시간 입력-->`}</span>{`
<div class="row">
  <label>강의 수업 시간</label>
  <input type="number" name="lectureDuration" class="field w-100" min="0" 
          placeholder="시간" value=";{lectureDto.lectureDuration != null ? lectureDto.lectureDuration : ''}">
    <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
    <div class="fail2-feedback d63031">0 이상이어야 합니다</div>
</div>

`}<span className="text-danger">{`<!-- 강의 수업요일 입력-->`}</span>{`
<div class="row">
  <label>강의요일</label>
  <select name="lectureDay" class="field w-100">
    <option value="">선택하세요</option>
    <option value="월요일" ;{lectureDto.lectureDay == '월요일' ? 'selected' : ''}>월요일</option>
    <option value="화요일" ;{lectureDto.lectureDay == '화요일' ? 'selected' : ''}>화요일</option>
    <option value="수요일" ;{lectureDto.lectureDay == '수요일' ? 'selected' : ''}>수요일</option>
    <option value="목요일" ;{lectureDto.lectureDay == '목요일' ? 'selected' : ''}>목요일</option>
    <option value="금요일" ;{lectureDto.lectureDay == '금요일' ? 'selected' : ''}>금요일</option>
    <option value="토요일" ;{lectureDto.lectureDay == '토요일' ? 'selected' : ''}>토요일</option>
    <option value="일요일" ;{lectureDto.lectureDay == '일요일' ? 'selected' : ''}>일요일</option>
  </select>
    <div class="fail-feedback d63031">3개 모두 입력해야 합니다</div>
</div>

`}<span className="text-danger">{`<!-- 강의실 입력-->`}</span>{`
<div class="row">
  <label>강의실</label>
  <input type="text" name="lectureRoom" class="field w-100 onlyFive" placeholder="5글자 이하만 입력하세요"
        value="{lectureDto.lectureRoom}" >
    <div class="success-feedback">최대 5글자까지 입력이 가능합니다</div>
</div>

`}<span className="text-danger">{`<!-- 인원 입력-->`}</span>{`
<div class="row">
  <label>정원</label>
    <input type="number" name="lectureCount"  value="{lectureDto.lectureCount}" 
                    class="field w-100" placeholder="인원" min="1">
    <div class="fail-feedback d63031">1명 이상이어야 합니다</div>
</div>	

<div class="row mt-30">
  <button class="btn btn-positive w-100 btn-edit confirm-link" data-text="정말 수정하시겠습니까?">
          <i class="fa-solid fa-eraser"></i> 수정하기</button>
</div>
<div class="row">
  <a href="detail?lectureCode={lectureDto.lectureCode}" class="btn btn-neutral w-100" >
      <i class="fa-solid fa-arrow-rotate-left"></i> 뒤로가기</a>
</div>
</div>
</form>
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
{`@GetMapping("/edit")
public String edit(Model model, @RequestParam String lectureCode) {
  LectureDto lectureDto = adminLectureDao.selectOne(lectureCode);
  if(lectureDto == null) throw new TargetNotFoundException();
  model.addAttribute("lectureDto", lectureDto);
  return "/WEB-INF/views/admin/lecture/edit.jsp";
}
@PostMapping("/edit")
public String edit(@ModelAttribute LectureDto lectureDto) {
  boolean result = adminLectureDao.edit(lectureDto);
  if(result == false) throw new TargetNotFoundException("수정할 학과가 없습니다.");
  return "redirect:detail?lectureCode="+lectureDto.getLectureCode()  + "&message=edit";
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
{`public boolean edit(LectureDto lectureDto) {
  String sql = "update lecture set "
      + "lecture_department=?, lecture_professor=?, "
      + "lecture_type=?, lecture_name=?, "
      + "lecture_time=?, lecture_duration=?, "
      + "lecture_day=?, lecture_room=?, "
      + "lecture_count=? where lecture_code = ?";
  Object[] data = {
      lectureDto.getLectureDepartment(),lectureDto.getLectureProfessor(),
      lectureDto.getLectureType(),lectureDto.getLectureName(),
      lectureDto.getLectureTime(),lectureDto.getLectureDuration(),
      lectureDto.getLectureDay(),lectureDto.getLectureRoom(),
      lectureDto.getLectureCount(),lectureDto.getLectureCode()
  };
  return jdbcTemplate.update(sql, data) > 0;
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2LectureEdit;