import { useState } from "react";

const Page2DepartmentAdd=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/departmentAdd.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">학과 등록, 목록</h1>
                    <h4>
                    검색기능 column , keyword 두 개의 조건이 만족하면 검색 두 개의 조건 불일치 모든 항목 asc순서 query문 사용
                    비동기 통신사용 하여 입력 상태 유무 검사
                    RestController CrossOrigin연결하여 DBMS 중복검사 비동기통신 데이터 검사
                    MVC 패턴 사용하여 RequestParam 으로 정보 출력
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
  var status ={ `}<span className="text-danger">{` //상태객체`}</span>{`
  departmentCodeValid : false, departmentCodeCheckValid:false,
  departmentNameValid : false, departmentNameCheckValid:false,
  ok : function(){
  return this.departmentCodeValid && this.departmentNameValid 
  && this.departmentCodeCheckValid && this.departmentNameCheckValid
  },
}; 

$("[name=departmentCode]").blur(function(){`}<span className="text-danger">{` // 학과 코드 입력창 검사`}</span>{`
  var regex= /^.+$/;`}<span className="text-danger">{` //형식검사`}</span>{`
  var departmentCode = $(this).val();
  var isValid= regex.test(departmentCode);
  if(isValid){`}<span className="text-danger">{` //비동기통신 중복검사`}</span>{`
      $.ajax({
        url:"{pageContext.request.contextPath}/rest/admin/department/checkDepartmentCode",
        method:"post",
        data:{departmentCode:departmentCode},
        success:function(response){
          if(response){
            status.departmentCodeCheckValid=true;
            $("[name=departmentCode]").removeClass("success fail fail2")
            .addClass("success");
            $("[name=departmentCode]").parent().find("label").find("i").removeClass("red fa-bounce");
            $("[name=departmentCode]").parent().find("label").find("i").addClass("green fa-beat");
          }
          else{
              status.departmentCodeCheckValid=false;
              $("[name=departmentCode]").removeClass("success fail fail2")
              .addClass("fail2");
              $("[name=departmentCode]").parent().find("label").find("i").removeClass("green fa-beat");
              $("[name=departmentCode]").parent().find("label").find("i").addClass("red fa-bounce");
            }
        },
      });
    }
      else{
            $("[name=departmentCode]").removeClass("success fail fail2")
            .addClass("fail");
          $("[name=departmentCode]").parent().find("label").find("i").removeClass("green fa-beat");
          $("[name=departmentCode]").parent().find("label").find("i").addClass("fa-bounce");
        }
        status.departmentCodeValid = isValid;
  });
  
$("[name=departmentName]").on("input", function(){`}<span className="text-danger">{` //학과명 입력창 검사`}</span>{`
  var regex= /^.+$/;`}<span className="text-danger">{` //형식검사`}</span>{`
  var departmentName = $(this).val();
  var isValid= regex.test(departmentName);
  if(isValid){`}<span className="text-danger">{` //비동기통신 중복검사`}</span>{`
      $.ajax({
        url:"{pageContext.request.contextPath}/rest/admin/department/checkDepartmentName",
        method:"post",
        data:{departmentName:departmentName},
        success:function(response){
          if(response){
            status.departmentNameCheckValid=true;
            $("[name=departmentName]").removeClass("success fail fail2")
            .addClass("success");
            $("[name=departmentName]").parent().find("label").find("i").removeClass("fa-bounce");
            $("[name=departmentName]").parent().find("label").find("i").addClass("green fa-beat");
          }
          else{
              status.departmentNameCheckValid=false;
              $("[name=departmentName]").removeClass("success fail fail2")
              .addClass("fail2");
              $("[name=departmentName]").parent().find("label").find("i").removeClass("green fa-beat");
              $("[name=departmentName]").parent().find("label").find("i").addClass("fa-bounce");
            }
        },
      });
    }
      else{
            $("[name=departmentName]").removeClass("success fail fail2")
            .addClass("fail");
            $("[name=departmentName]").parent().find("label").find("i").removeClass("green fa-beat");
          $("[name=departmentName]").parent().find("label").find("i").addClass("fa-bounce");
        }
        status.departmentNameValid = isValid;
});

  $(".check-form").submit(function(){`}<span className="text-danger">{` //form상태 검사`}</span>{`
      $("[name]").trigger("input").trigger("blur");
      return status.ok();
  });
});
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{` <form action="expand" method="post" autocomplete="off" class="check-form">
  <div class="container w-400 my-50">
        <div class="row center">
          <h1>학과 개설</h1>
  </div>
 `}<span className="text-danger">{`<!-- 학과 코드 입력 -->`}</span>{`               
  <div class="row">
      <label>학과코드 <i class="fa-solid fa-asterisk red"></i></label>
          <input type="text" name="departmentCode" 
              class="field w-100" placeholder="ex)KHD01001">
      <div class="success-feedback 00b894">올바른 코드입니다.</div>
      <div class="fail-feedback d63031">코드는 영문 대문자와 숫자로 작성해주세요.</div>
      <div class="fail2-feedback d63031">이미 사용중인 코드입니다</div>
</div>
`}<span className="text-danger">{`<!-- 학과명 입력 -->`}</span>{`
  <div class="row">
      <label>학과명 <i class="fa-solid fa-asterisk red"></i></label>
            <input type="text" name="departmentName" 
              class="field w-100" placeholder="ex)기계공학과">
        <div class="success-feedback 00b894">올바른 학과명입니다.</div>
        <div class="fail-feedback d63031">학과명은 한글로만 입력해주세요.</div>
        <div class="fail2-feedback d63031">이미 사용중인 학과명입니다</div>
</div>
`}<span className="text-danger">{`<!-- 전송버튼 -->`}</span>{`
  <div class="row">
          <button type="submit" class="btn btn-positive w-100 mt-30" >
            <i class="fa-solid fa-building-columns"></i> 학과개설
          </button>
          <div class="row">
            <a href="list" class="btn btn-neutral w-100" >
              <i class="fa-solid fa-list" style="color: white"></i> 목록이동
            </a>
          </div>
  </div>
</div>
</form>

                                `}<span className="text-danger">{`<!-- 목 록 -->`}</span>{`
<div class="row center">  `}<span className="text-danger">{` //검색`}</span>{`
    <form action="list" method="get" autocomplete="off">
        <select name="column" class="field">
          <option value="department_code">학과코드</option>
    <c:choose>
      <c:when test="{param.column == 'department_name'}">
        <option value="department_name" selected>학과명</option>
      </c:when>
      <c:otherwise>
        <option value="department_name">학과명</option>
      </c:otherwise>
    </c:choose>
        </select>
      <input type="text" name="keyword" value="{param.keyword}" class="field" placeholder="검색어">
      <button type="submit"  id="search" class="btn btn-positive" ><i class="fa-solid fa-magnifying-glass"></i></button>
  <a href="expand" class="btn btn-neutral"><i class="fa-solid fa-building-columns"></i> 학과개설</a>
    </form>
</div>            
<div class="row">
  <table class="table table-horizontal table-hover">
      <thead>
  <tr>
    <th>학과코드</th>
    <th>학과명</th>
  </tr>
  </thead>
<tbody>
  <c:forEach var="departmentDto" items="{departmentList}">
      <tr onclick="location.href='detail?departmentCode={departmentDto.departmentCode}'" style="cursor: pointer;">
      <td>{departmentDto.departmentCode}</td>
      <td>{departmentDto.departmentName}</td>
    </tr>
  </c:forEach>
  </tbody>
</table>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`<!-- 시각적효과 -->`}</span>{`
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
{`@Controller
@RequestMapping("/admin/department")
  public class AdminDepartmentController {

@Autowired
  private AdminDepartmentDao adminDepartmentDao;

`}<span className="text-danger">{` //학과 증설`}</span>{`
@GetMapping("/expand")
  public String expand() {
  return "/WEB-INF/views/admin/department/expand.jsp";
}
@PostMapping("/expand")
  public String expand(@ModelAttribute DepartmentDto departmentDto) {
  adminDepartmentDao.insert(departmentDto);
`}<span className="text-danger">{`//학과 상세정보 이동`}</span>{`
  return "redirect:detail?departmentCode="+departmentDto.getDepartmentCode();
}
  
                              `}<span className="text-danger">{`<!-- 목 록 -->`}</span>{`
`}<span className="text-danger">{`//학과 시스템 관리`}</span>{`
@RequestMapping("list")
  public String list(@ModelAttribute("pageVO") PageVO pageVO, Model model) {
  model.addAttribute("departmentList", adminDepartmentDao.selectListByPaging(pageVO));
  int count = adminDepartmentDao.countByPaging(pageVO);
  pageVO.setCount(count);
  return "/WEB-INF/views/admin/department/list.jsp";
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@RestController
@RequestMapping("/rest/admin/department")
  public class AdminDepartmentRestController {
@Autowired
  private AdminDepartmentDao adminDepartmentDao;

`}<span className="text-danger">{`//코드 중복 검사`}</span>{`
@PostMapping("/checkDepartmentCode")
  public boolean checkDepartmentCode(@RequestParam String departmentCode) {
  DepartmentDto departmentDto =
      adminDepartmentDao.selectOneByDepartmentCode(departmentCode);
  return departmentDto==null;
}

`}<span className="text-danger">{`//학과명 중복 검사`}</span>{`
@PostMapping("/checkDepartmentName")
  public boolean checkDepartmentName(@RequestParam String departmentName) {
  DepartmentDto departmentDto =
      adminDepartmentDao.selectOneByDepartmentName(departmentName);
  return departmentDto==null;
}
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@Repository
  public class AdminDepartmentDao {

@Autowired
  JdbcTemplate jdbcTemplate;

`}<span className="text-danger">{`//학과 증설`}</span>{`
  public void insert(DepartmentDto departmentDto) {
  String sql = "insert into department("
      + "department_code, department_name"
      + ") values(?, ?)";
  Object[] data = {
      departmentDto.getDepartmentCode(),departmentDto.getDepartmentName()
      };
  jdbcTemplate.update(sql,data);
}

                              `}<span className="text-danger">{`<!-- 목 록 -->`}</span>{`
`}<span className="text-danger">{`//학과 시스템 관리`}</span>{`
public List<DepartmentDto>selectList(){
  String sql = "select * from department order by department_code asc";
  return jdbcTemplate.query(sql, departmentMapper);
}

`}<span className="text-danger">{`//학과 상세정보 검색`}</span>{`
public List<DepartmentDto> selectList(String column, String keyword){
  String sql = "select * from department "
      + "where instr("+column+", ?)>0 "
      + "order by "+column+" asc ,department_code asc";
  Object[] data = {keyword};
  return jdbcTemplate.query(sql, departmentMapper,data);
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2DepartmentAdd;