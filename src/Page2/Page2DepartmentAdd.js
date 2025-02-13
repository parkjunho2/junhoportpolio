import { useState } from "react";

const Page2DepartmentAdd=()=>{
    const [activeTab, setActiveTab] = useState('JS');
    
    return(<>
  <div className='row'>
                  <div className='col-md-6 col-sm-12 ps-4'>
                  <video className="videos" autoPlay muted loop playsInline>
                    <source src="/videos/departmentAdd.mp4" type="video/mp4"/>
                  </video>
                  <h1 className="text-primary mt-4">학과 목록, 등록</h1>
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
  if(isValid){`}<span className="text-danger">{` //중복검사`}</span>{`
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
  if(isValid){`}<span className="text-danger">{` //중복검사`}</span>{`
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

                  </code></pre>
                </div>
                <div className={activeTab === 'CSS' ? 'code-editor' : 'd-none'}>
                  <pre><code>

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
    </>)
}
export default Page2DepartmentAdd;