import { useState } from "react";

const Page2DepartmentRemove=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/departmentdelete.mp4" type="video/mp4"/>
                  </video>
                    <h1 className="text-primary mt-4">학과 상세,삭제</h1>
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
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success ${activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      Controller
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
{`
function showMessage(message) {
     if (message === 'edit') 
    	 loadCheck();
 }
`}<span className="text-danger">{`//Alert`}</span>{`
 $(document).ready(function() {
     var urlParams = new URLSearchParams(window.location.search);
     var message = urlParams.get('message');
     if (message) {
         showMessage(message); 
     }
 });
`}<span className="text-danger">{`//SweetAlert2`}</span>{` 
 function loadCheck() {
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
{`<div class="container w-500 my-50">

<c:choose>
    <c:when test="{departmentDto == null}">
    <div class="row center">
        <h1>존재하지 않는 학과 정보 입니다.</h1>
        </div>
    </c:when>
<c:otherwise>

<div class="row center my-50">
<h1>학과 상세정보</h1>
</div>
    <table class="table table-border">
        <tr>
            <th width="30%">학과코드</th>
            <td>{departmentDto.departmentCode}</td>
        </tr>
        <tr>
            <th>학과명</th>
            <td>{departmentDto.departmentName}</td>
        </tr>
    </table>
    </c:otherwise>
</c:choose>

<div class="row float-box center mt-30">
<a href="expand" class="btn btn-positive"><i class="fa-solid fa-building-columns"></i> 학과개설</a>
<a href="list" class="btn btn-neutral"><i class="fa-solid fa-list"></i> 목록이동</a>
<a href="edit?departmentCode={departmentDto.departmentCode}" class="btn btn-neutral"><i class="fa-solid fa-eraser"></i> 학과수정</a>
<a href="reduce?departmentCode={departmentDto.departmentCode}"class="btn btn-negative confirm-link" 
      data-text="정말 삭제하시겠습니까?"><i class="fa-solid fa-trash"></i> 학과삭제</a>
</div>
</div>    
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>

                  </code></pre>
                </div>
                <div className={activeTab === 'Controller' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`//학과 삭제`}</span>{` 
@RequestMapping("/reduce")
public String reduce(@RequestParam String departmentCode, @ModelAttribute PageVO pageVO) {
  boolean result = adminDepartmentDao.reduce(departmentCode);
  if(result == false)
    throw new TargetNotFoundException("존재하지 않는 학과입니다.");
  return "redirect:list?page=" + pageVO.getPage() + "&message=reduce"; 
}

`}<span className="text-danger">{`//학과 상세정보`}</span>{` 
@RequestMapping("detail")
public String detail(@RequestParam String departmentCode, Model model) {
  DepartmentDto departmentDto = adminDepartmentDao.selectOne(departmentCode);
  model.addAttribute("departmentDto", departmentDto);
  return "/WEB-INF/views/admin/department/detail.jsp";
}
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'Service' ? 'code-editor' : 'd-none'}>
                  <pre><code>
                    Service
                  </code></pre>
                </div>
                <div className={activeTab === 'Repository' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{``}<span className="text-danger">{`//학과 삭제`}</span>{` 
public boolean reduce(String departmentCode) {
  String sql = "delete department where department_code=?";
  Object[] data = {departmentCode};
	return jdbcTemplate.update(sql, data) > 0;
}

`}<span className="text-danger">{`//학과 상세정보`}</span>{` 
public DepartmentDto selectOne(String departmentCode) {
  String sql= "select * from department where department_code=?";
  Object[] data = {departmentCode};
  List<DepartmentDto> list = jdbcTemplate.query(sql, departmentMapper, data);
  return list.isEmpty() ? null : list.get(0);
}
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2DepartmentRemove;