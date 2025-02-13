import { useState } from "react";

const Page2DepartmentEdit=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
      <div className='col-md-6 col-sm-12'>
      <video className="videos" autoPlay muted loop playsInline>
        <source src="/videos/departmentedit.mp4" type="video/mp4"/>
      </video>
      <h1 className="text-primary mt-4">학과 수정</h1>
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
{` $(function(){
  var status ={`}<span className="text-danger">{`//상태 객체`}</span>{`
  departmentNameValid : false, departmentNameCheckValid:false,
  ok : function(){
  return this.departmentNameValid && this.departmentNameCheckValid
  },
};
  $("[name=departmentName]").on("input", function(){`}<span className="text-danger">{`//학과명 입력창 검사`}</span>{`
    var regex= /^[가-힣]{2,20}$/;`}<span className="text-danger">{`//형식검사`}</span>{`
    var departmentName = $(this).val();
    var isValid= regex.test(departmentName);
    if(isValid){`}<span className="text-danger">{`//비동기통신 중복검사`}</span>{`
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
`}<span className="text-danger">{`//form 상태 검사`}</span>{`
    $(".check-form").submit(function(){
        $("[name]").trigger("input").trigger("blur");
        return status.ok();
    });
});		
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{` <form action="edit" method="post" autocomplete="off" class="check-form">
<div class="container w-400 my-50">
  <div class="row center">
    <h1>학과 정보 수정</h1>
  </div>
          
  <div class="row">
    <label>학과코드</label>
      <input type="hidden" name="departmentCode" value="{departmentDto.departmentCode}">
      <div class="field w-100">{departmentDto.departmentCode}</div>
  </div>
        
`}<span className="text-danger">{`<!-- 학과명 입력 -->`}</span>{`
<div class="row">
  <label>학과명 <i class="fa-solid fa-asterisk red"></i></label>
  <input type="text" name="departmentName"  value="{departmentDto.departmentName}"
                    class="field w-100" placeholder="ex)기계공학과">
    <div class="success-feedback 00b894">올바른 학과명입니다.</div>
            <div class="fail-feedback d63031">학과명은 한글로만 입력해주세요.</div>
            <div class="fail2-feedback d63031">이미 사용중인 학과명입니다</div>
</div>

<div class="row mt-30">
  <button class="btn btn-positive w-100 confirm-link" data-text="정말 수정하시겠습니까?">
          <i class="fa-solid fa-eraser"></i> 수정하기</button>
</div>
<div class="row">
  <a href="detail?departmentCode={departmentDto.departmentCode}" class="btn btn-neutral w-100" >
      <i class="fa-solid fa-arrow-rotate-left"></i> 뒤로가기</a>
  </div>
</div>
</form>
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`.red.bounce {`}<span className="text-danger">{`//시각적효과`}</span>{`
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
  public String edit(Model model, @RequestParam String departmentCode) {
  DepartmentDto departmentDto = adminDepartmentDao.selectOne(departmentCode);
  if(departmentDto == null) throw new TargetNotFoundException();
  model.addAttribute("departmentDto", departmentDto);
  return "/WEB-INF/views/admin/department/edit.jsp";
}
@PostMapping("/edit")
  public String edit(@ModelAttribute DepartmentDto departmentDto) {
  boolean result = adminDepartmentDao.edit(departmentDto);
  if(result == false) throw new TargetNotFoundException("수정할 학과가 없습니다.");
  return "redirect:detail?departmentCode="+departmentDto.getDepartmentCode()+ "&message=edit";
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`@PostMapping("/checkDepartmentName")
  public boolean checkDepartmentName(@RequestParam String departmentName) {
  DepartmentDto departmentDto =
      adminDepartmentDao.selectOneByDepartmentName(departmentName);
  return departmentDto==null;
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`public boolean edit(DepartmentDto departmentDto) {
  String sql = "update department set "
      + "department_name=? "
      + "where department_code = ?";
  Object[] data = {
      departmentDto.getDepartmentName(),
      departmentDto.getDepartmentCode()
  };
  return jdbcTemplate.update(sql, data) > 0;
}

`}<span className="text-danger">{`//학과명 중복검사`}</span>{`
public DepartmentDto selectOneByDepartmentName(String departmentName) {
  String sql="select * from department where department_name=?";
  Object[] data= {departmentName};
  List<DepartmentDto>list = jdbcTemplate.query(sql, departmentMapper, data);
  return list.isEmpty()? null:list.get(0);
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2DepartmentEdit;