
const Page2Info=()=>{
    
    return(<>
    <div className="row align-items-start w-100">
        <div className='col-md-6 col-sm-12'>    
            <pre className='text-black' style={{ fontSize: '20px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>{`
1      {
2           "BackEnd" : {
3                "OS" : "Window10" ,                                            
4                "Language"  : "Java" ,
5               "IDE" : [
6                       { "Eclipse" , "VSCode" }
7                    ] ,
8                "FrameWork" : "Spring Boot" ,
9               "RDBMS" : { "Oracle11g" : "DBeaver" } ,
10              "SQLMapper" : "JDBCTemplate" ,
11               "WAS" : "Apache Tomcat" ,
12              "Library" : [
13                   { "Spring Web" ,  "Spring Boot DevTools" ,  "Oracle Driver" ,  
14                   "Lombok", "Java Mail Sender", "Spring Security", "Spring Data JDBC"
15                      }
16                   ]
17              },
18         "FrontEnd" : {
19              "UI" :  { "MVC" : "JSP" } ,
20              "JS" : { "EC5"  : "JQuery" } ,
21             "API" : "KakaoMap" ,
22              "CDN" : [
23                        { "Moment" ,  "JQuery",  "SweetAlert2" }
24               ]
25             }
26   }
`}</pre>
    </div>
    <div className="col-md-6 col-sm-12">
                <h1 className='text-primary'>공통 옵션</h1>
    </div>
</div>
    </>)
}
export default Page2Info;