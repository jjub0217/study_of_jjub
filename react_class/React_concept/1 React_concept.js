//  << React concept >>
/*  
    - 프레임워크와 라이브러리의 차이점
        - 프레임워크 (너의 코드를 나한테 넣어)
            - 뼈대나 구조를 의미한다.
            - 그 틀 안에 이미 제어 흐름에 대한 주도성이 내포되어있기 때문에 개발자들이 프레임워크 안에서 필요한 코드를 짜서 넣는 것이다.
            - 우리 코드를 자동차의 일부분이 되도록 넣어서, 자동차가 돌아가게 하는것
        - 라이브러리 
            - 단순 활용이 가능한 도구들의 집합
            - 개발자가 라이브러리 도구들을 가지고 와서 사용하고 호출
            - 자동차의 일부분을 개발자가 가지고 와서 새로운 자동차를 만드는 것
    1. 앵귤러 vs 리액트 vs 뷰
        - 앵귤러 
            - 깃헙의 star 숫자는 리액트보다 뷰가 많지만 다운로드는 리액트가 더 많다.
            - 1과 2가 있는데, 현재가 2버전이다.
            - 1을 AngularJS 라고 하고, 2 를 Angular.io 라고 한다. 
            - 2버전안에 현재 11까지 릴리즈되어있다.
            - " one framework" 
                : 너네 플젝할때 앵귤러 말고 설치하지마. 너네 플젝을 앵귤러로 할거면 앵귤러 말고 다른거 설치 하지마.
                  앵귤러로 하면 모바일이랑 데탑 다 대응할수 있게 해줄게. 
                  나를 따르면 되염. 내가 정해준 걸로 해. 
            - 어떤 데이터를 가져오기 위해 API를 호출하고 싶을때, 리액트는 어떤 라이브러리를 써서 데이터를 가져와야 내가 제일 멋있고 스무스하게 구현할수 있을까.
              앵귤러는 이거 써. 라고 하는 것이다.
            - 프레임워크다. 
        - 리액트
            - " A Javascript library for building user interface "
                : 나는 user 인터페이스를 만들기 위한 자스 라이브러리야. 그 이상 그 이하도 아니야.
            - 뷰(user interface)를 만들어내는(다루는) 라이브러리다.
            - 상태(statement)가 중요하다. ( 리액트에서는 url도 상태로 본다. )
        - 뷰 
            - " The Progressive Javascript framework "
                : 라이브러리로 쓰고 싶으면 라이브러리처럼 쓰고, 프레임워크처럼 쓰고 싶으면 프레임워크처럼 써라.
            - 프레임워크다.

    2. 뷰를 다루는 라이브러리다. 
        - 리액트가 뷰를 다루는 라이브러리인거면, 리액트가 실제로 어떤걸 하나? 
        1. only 랜더링(브라우저에 그리기) & 업데이트(브라우저에 그린것을 다시 그리기)
            - not include another functionally (ex, http client, ...) : http 등 다른 기능들은 전혀 포함되어있지 않다. 
            - A 의 상태에서, B 의 상태로 다시 그릴때, 달라진 부분만 다시 그리게 해야 한다. (A 의 상태를 싹다 지웠다가 B 를 다시 그리는건 멍청함)    */ 

