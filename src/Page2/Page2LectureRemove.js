import { useState } from "react";

const Page2LectureRemove=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row w-100'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/lectureremove.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">강의 상세,삭제</h1>
                    <h4>
                    목록 tr에 onClick시 selectOne사용하여 DB첫 페이지 검색되도록 사용<br/><br/>
                    Alert 경고메시지와 CDN 통해 SweetAlert Library 사용<br/>
                    삭제 후 목록으로 redirect하도록 하였습니다.
                    </h4>
              </div>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <div className='btn-group head'>
                    <button 
                      className={`btn btn-primary {activeTab === 'JS' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JS')}>
                      JS
                    </button>
                    <button 
                      className={`btn btn-primary {activeTab === 'JSX' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('JSX')}>
                      HTML
                    </button>
                    <div className='btn-group head'>
                    <button 
                      className={`btn btn-success {activeTab === 'Controller' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Controller')}>
                      Controller
                    </button>
                    <button 
                      className={`btn btn-success {activeTab === 'Repository' ? 'active' : ''}`} 
                      onClick={() => setActiveTab('Repository')}>
                      Repository
                    </button>
                    </div>
                  </div>

                    <div className={activeTab === 'JS' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`function showMessage(message) {`}<span className="text-danger">{`//Alert`}</span>{` 
    if (message === 'edit') {
    } 
}
(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var message = urlParams.get('message');
    if (message) {
        showMessage(message); 
    }
});
`}
                  </code></pre>
                </div>
                <div className={activeTab === 'JSX' ? 'code-editor' : 'd-none'}>
                  <pre><code>
{`<div class="container w-500 my-50">
<div class="row center">
  <h1>[ {lectureDto.lectureName} ] 강의 정보</h1>
</div>
<c:choose>
    <c:when test="{lectureDto == null}">
        <h2>존재하지 않는 강의 정보 입니다.</h2>
    </c:when>
<c:otherwise>
  <table class="table table-border">
          <tr>
              <th width="30%">강의코드</th>
              <td>{lectureDto.lectureCode}</td>
          </tr>
          <tr>
              <th>전공(학과)</th>
              <td>
                {departmentDto.departmentName}
                {departmentDto.departmentCode}
              </td>
          </tr>
          <tr>
              <th>교수명</th>
              <td>{memberDto.memberName}</td>
          </tr>
          <tr>
              <th>분류</th>
              <td>{lectureDto.lectureType}</td>
          </tr>
          <tr>
              <th>강의명</th>
              <td>{lectureDto.lectureName}</td>
          </tr>
          <tr>
            <th>강의시간</th>
            <td>
              {lectureDto.lectureDay}
              {lectureDto.lectureTime}
              ({lectureDto.lectureDuration}시간)
            </td>
        </tr>
          <tr>
              <th>강의실</th>
              <td>{lectureDto.lectureRoom}</td>
          </tr>
          <tr>
              <th>수강인원</th>
            <td>{lectureDto.lectureRegist}/{lectureDto.lectureCount}</td>
          </tr>
      </table>
  </c:otherwise>
</c:choose>
  
<div class="row float-box center mt-30">
  <a href="add" class="btn btn-positive"><i class="fa-regular fa-square-plus"></i> 강의개설</a>
  <a href="list" class="btn btn-neutral"><i class="fa-solid fa-list"></i> 목록이동</a>
  <a href="edit?lectureCode={lectureDto.lectureCode}" class="btn btn-neutral"><i class="fa-solid fa-eraser"></i> 강의수정</a>
  <a href="remove?lectureCode={lectureDto.lectureCode}"class="btn btn-negative confirm-link" data-text="정말 삭제하시겠습니까?"  onclick="return checkRemove()">
    <i class="fa-solid fa-trash"></i> 강의삭제</a>
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
{``}<span className="text-danger">{`//학과 상세정보`}</span>{` 
@RequestMapping("detail")
public String detail(@RequestParam String lectureCode, Model model) {
  LectureDto lectureDto = lectureDao.selectOne(lectureCode);
  if(lectureDto == null) throw new TargetNotFoundException("미등록 강의 입니다.");
  model.addAttribute("lectureDto", lectureDto);
  
  DepartmentDto departmentDto =  departmentDao.selectOne(lectureDto.getLectureDepartment());
  model.addAttribute("departmentDto", departmentDto);
  
  MemberDto memberDto = memberDao.selectOne(lectureDto.getLectureProfessor());
  model.addAttribute("memberDto", memberDto);
  
  return "/WEB-INF/views/admin/lecture/detail.jsp";
}
`}<span className="text-danger">{`//학과 통폐합`}</span>{` 
@RequestMapping("/remove")
public String remove(@RequestParam String lectureCode, @ModelAttribute PageVO pageVO) {
  boolean result = adminLectureDao.remove(lectureCode);
  if(result == false)
    throw new TargetNotFoundException("존재하지 않는 학과입니다.");
  return "redirect:list?page=" + pageVO.getPage() + "&message=remove"; 
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
{``}<span className="text-danger">{`//강의 상세정보 검색`}</span>{` 
public List<LectureDto> selectList(String column, String keyword){
  String sql = "select * from lecture "
      + "where instr("+column+", ?)>0 "
      + "order by "+column+" asc ,lecture_code asc";
  Object[] data = {keyword};
  return jdbcTemplate.query(sql, lectureMapper,data);
}
`}<span className="text-danger">{`//학과 통폐합`}</span>{` 
public boolean remove(String lectureCode) {
  String sql = "delete lecture where lecture_code=?";
  Object[] data = {lectureCode};
  return jdbcTemplate.update(sql, data) > 0;
  }
`}
                  </code></pre>
                </div>
                  </div>
                </div>       
    </>)
}
export default Page2LectureRemove;