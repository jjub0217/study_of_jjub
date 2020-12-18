//  << React concept >>
/*  
    6. CSR VS SSR
    - CSR( client side rendering )
        - 클라이언트 사이드에서 랜더링 (SPA(싱글 페이지 어플리케이션) 라고도 할수 있다. )
            : 서버 안에서 문자열 덩어리는 만들어서 브라우저에게 보내주고, 브라우저는 받은 것을 바로 랜더링해서 보여줌
            - 단말기의 아이콘 클릭 -> 브라우저 오픈 -> url 창에 네이버 타이핑 후 클릭 
            -> DNS(DNS 서버) 는 도메인 네임 url 과 맞는 ip의 집합 목록을 가지고 있는데, 
                그 목록들 중에서 사용자가 입력하는 도메인 네임과 맞게 연결될 ip 주소(DNS 서버 ip 주소)를 
                통신사들이 사용자들에게 준다. 
            -> 브라우저는 사용자가 입력하는 도메인 네임의 DNS 서버 ip 주소를 받음
            -> 해당 ip 주소를 가지고 있는 도메인의 서버에 html 파일을 http / https 로 요청
                (https : 개인정보(아이디 및 비번)를 제3자가 가져가지 못하게, 알수없는 문자열로 변환해준다. ) 
            -> 요청을 받은 네이버 서버는 https 로 들어온 요청을 어떻게 파싱할건지, 해놓은 설정대로 html 을 만들어서 브라우저에 보내줌
            -> 브라우저는 html 파일을 받음 
        - 리액트, 앵귤러, 뷰 등 CSR 을 기본, 우선으로 탑재하고 있다.
            -   핸드폰이 개 좋아짐. 컴터가 개 좋아짐. 단말기 안에 들어가는 브라우저가 짱 좋아짐. 
                브라우저에서 애플리케이션을 브라우저 레벨에서 돌리는데 이걸 웹 앱이라고 한다. 이걸 브라우저에서 돌릴만큼 
                브라우저가 좋아졌기 때문
        - REST API : API 를 보고서 모든걸 다 알아낼수 있다. 
            - 요즘 트랜드이다. 
            - 서버가 정해준 형식을 클라이언트가 요청 받음 요청 받음 
            (설명영상: https://www.youtube.com/watch?v=RP_f5dMoHFc)
        - javascript 가 전부 다운로드 되어, 리액트 애플리케이션이 정상 실행되기 전까지는 화면이 보이지 않음.
            -> 리액트 애플리케이션이 정상 실행된 후, 화면이 보이면서 유저가 인터렉션 가능
            ( 처음에는 서버가 브라우저에게 빈 껍데기를 보내주고, 스크립트 태그 안에 리액트가 들어있기 때문에 
              리액트 애플리케이션이 실행되기 전까지는 보이지 않음 )
        - CSR 의 과정이미지 (굿노트 파일 확인 혹은 카톡 파일 확인)
        
        - SSR ( server side rendering )
            - 서버 사이드에서 랜더링 
            - javascript 가 전부 다운로드 되지 않아도, 일단 화면은 보이지만 유저가 사용할수 없음. 
            (실제로 javascript 가 없어도 화면에 보임. 서버에서 만들어진 문자열로 html 을 만들어서 줬기 때문에 화면에 보임)
            - javascript 가 전부 다운로드 되어 리액트 애플리케이션이 정상 실행된 후, 유저가 사용 가능
            - 리액트도 SSR을 지원한다.  
            - SSR 의 과정이미지 (굿노트 파일 확인 혹은 카톡 파일 확인)
    */ 





                        













// 첫번째 교시      16분  ~ 1시간 4분
// 두번째 교시 1시간 15분 ~ 2시간 5분
// 마지막 교시 2시간 15분 ~ 3시간 10분
    
   // 12시 ~    7시간 화요일 수업꺼 -> 수요일(2시간 53분 - 20분 : 2시간 33분)
   // 12시 ~ 7시간 수요일 수업꺼 -> 목요일

   // 12시 ~ 6시간 금요일 수업꺼 -> 금요일
   // 12시 ~ 7시간 월요일 수업꺼 -> 토요일
   // 12시 ~ 7시간 화요일 수업꺼 -> 일요일
   // 12시 ~ 6시간 수요일 수업꺼 -> 월요일