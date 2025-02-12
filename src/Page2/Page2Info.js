
const Page2Info=()=>{

    return(<>
      <h1 className='ms-5 text-danger mb-0'>{`/*Development Environment*/`}</h1>
              <pre className='text-black mt-0' style={{ fontSize: '19.5px', fontWeight: 'bold' ,fontFamily: 'sans-serif' }}>{`
1    {
2       "BackEnd" : {
3            "OS" : "Window10" ,                                            
4            "Language"  : "Java" ,
5            "IDE" : [
6                   { "Eclipse" , "VSCode" }
7                ] ,
8            "FrameWork" : "Spring Boot" ,
9            "RDBMS" : { "Oracle11g" : "DBeaver" } ,
10          "SQLMapper" : "JDBCTemplate" ,
11           "WAS" : "Apache Tomcat" ,
12          "Library" : [
13                       { "Spring Web" ,  "Spring Boot DevTools" ,  "Oracle Driver" ,  "Spring Data JDBC" ,
14                       "Lombok" ,  "Java Mail Sender" , "Spring Security" }
15               ]
16          },
17     "FrontEnd" : {
18          "UI" :  { "MVC" : "JSP" } ,
19          "JS" : { "EC5"  : "JQuery" } ,
20         "API" : "KakaoMap" ,
21          "CDN" : [
22                    { "Moment" ,  "JQuery",  "SweetAlert2" }
23             ]
24         }
25  }
`}</pre>
    </>)
}
export default Page2Info;