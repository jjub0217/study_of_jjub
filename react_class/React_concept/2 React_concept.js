//  << React concept >>
/*  
    3. 컴포넌트 베이스 development ( 컴포넌트를 기반으로 한 개발 )
        -   리액트에서의 뷰는 브라우저의 뷰포트를 말하는데, 
            브라우저의 뷰포트에서 랜더링을 하고, 상태 업데이트를 하는 것을 리액트라고 한다. 
        -   only rendering 과 update 만 하는 리액트의, 세계에서의 컴포넌트란?
            - 독립적인 코드 블럭을 말한다.
            - HTML + CSS + Javascript 의 하나의 결과물 ->> 서로 영향가지 않는 범위 내에서 재활용하고 싶어서 나온 것 
            - 하나의 컴포넌트를 만들고 나면, 해당 컴포넌트가 여기에서도 내가 만든대로 동작하고, 
              저기에서도 내가 만든대로 동작하게끔. 그니까 html 태그를 여기에 써도 그 태그의 역할을 하고 
              저기에서도 그 태그의 역할을 하는 것처럼, 동작하는 하나의 단위를 말한다.
              (중복되는 표현들을 쉽고 간단하게 적용시키고 싶어서 하나의 키워드로 만든것이 컴포넌트)
            - 리액트에서의 컴포넌트는 모든것이다. 
              (예시: 아이콘 하나도 컴포넌트 / input 도 컴포넌트 / 
                     아이콘과 input 을 묶은 것도 컴포넌트 / 페이지 자체도 컴포넌트)
            - 작업의 단위("너는 이 컴포넌트 만들어, 나는 이 컴포넌트 만들게")도 컴포넌트로 분할 할수 있다. 
        - 컴포넌트인거
            - html 의 어트리뷰트(속성) 같이 생긴거 ( ex: html 에서는 src => react 에서는 name)
            - html, css, js 를 합쳐서 내가 만든 일종의 태그를 말한다. 
            - 리액트에서는, html 의 어트리뷰트같은 것을 prop / props 라고 한다.
            - ex1 : < 내가지은이름 name = "준호" >
                    < idol name = "준호">  
                        - idol 이라는 태그에 name 을 준호라고 지은것. (준호를 활용하기 위함)
                        - name : prop 이라고 한다. (외부에서 내가 지은 태그에 뭔가 데이터를 넣어주고 싶을때 prop 이라고 이름을 붙힘)
                        - idol 의 props = { name: "준호" } 
            - ex2 : <내가지은이름 prop={false}>내용</내가지은이름>
                    < idol prop = {false}>준호< /idol>  
                        - 준호 => children 이라고 한다.(children 도 props 들중에 하나다.)
                        - idol 의 props = { prop: false, children: "준호" } (해당객체의 이름 : props)
            => 컴포넌트를 개발자가 해당 컴포넌트를 어케 동작하는지 구현해놓지 않음 -> props 를 받아서 어떻게 동작하는지 구현해놔야 함 
            - 컴포넌트가 아닌거  
                - ex1 : <img src="이미지 주소"> = 일반적인  html 태그(태그를 만든사람이 이게 어케 동작하는지 구현해놓음)
                - ex2 : <button class="이름">버튼</button> = 일반적인 html 태그

    4. 리액트는 virtual DOM( 가상 돔 ) 이다.
        - 진짜 돔은 뷰포트에 보여지고 있는데, 가짜돔은 어딘가에 데이터로만 가지고 있는 것이다. 
                - 진짜 돔을 직접 제어하는 경우 : 바뀐 부분만 정확히 바꿔야 한다. 
                - 진짜 돔을 직접 제어하지 않는 경우 : 
                    1.가상 돔트리를 사용해서, 바뀌기 이전과 바뀐 후의 상태를 비교하여, 바뀐 부분을 찾아내서 자동으로 바꾼다. 
                    2. 바뀌기 이전과 바뀐 후의 상태를 비교할때, 바뀐 컴포넌트의 하위 자손 컴포넌트들도 바뀌었는지 비교한 후에 
                       자   동으로 바꾼다.
                - 개발자들은 어떠한 가상의 트리구조(가상 돔)를 만들고, 그 가짜 돔을 가지고 실제로 브라우저에 그리는 역할(랜더링)을 하는게 리액트다. 
        - 개발자가 가상 돔으로 만들어진 어떤 구조 중의 한 부분만 빨간색으로 바꾸면 실제 돔도 빨갛게 바껴야 한다.  
          이때, 개발자가 직접 빨갛게 바뀔 요소를 지정해서 코딩할 필요가 없이 
          개발자가 빨개졌다 라고만 말하면, 이전에 랜더 된 애랑 새로 바뀐 애랑 비교해서 바뀐 부분만 바꾸는 것이 리액트가 하는 일이다.
        - virtual DOM 에 관해 쉬운 이해의 글 : https://velopert.com/3236
          ( 1. 뷰포트에 변화가 있다면, 그 변화는 실제 DOM 에 적용되기전에, 가상의 DOM 에 먼저 적용시키고,
               그 최종적인 결과를 실제 DOM 으로 전달해줍니다. 
               이로써, 브라우저 내에서 발생하는 연산의 양을 줄이면서 성능이 개선되는 것 이지요.
            2. 변화가 일어나면 그걸 오프라인 DOM 트리에 적용시키죠. 
               이 DOM 트리는 렌더링도 되지 않기때문에 연산 비용이 적어요. 
               연산이 끝나고나면 그 최종적인 변화를 실제 DOM 에 던져주는거에요. )
        - virtual DOM 에 관해 쉬운 이해의 영상 : https://www.youtube.com/watch?v=muc2ZF0QIO4
        - 리액트 디스...... => 스벨트(ㅋㅋㅋㅋ) : 우리 스벨트는 no virtual DOM 이야. 아무리 리액트가 좋다고 해도, 리액트가 직접 돔을 바꾸는 것보다 느릴거야. 돔을 바꾸고 싶으면 리얼돔을 바꿔~ 내가 도와줄게 

    5. JSX 
        - 자바스크립트((javascript eXtension)를 확장한 문법이다.
        - 자바스크립트의 모든 기능이 포함되어있는 것이다.(자바스크립트로 변환되는 코드이다. )
        - 예시: const element = <h1>Hello, world!</h1>;
        - not templates (템플릿 언어라고 생각하겠지만 아니다.) : HTML 로 파싱되는 것이 아니다.
        - transpile to JS ( 바벨, 타입스크립트 ) 
            - 브라우저가 읽을수 있는 javascript의 수준 정도가 다 다르기 때문에, 
            브라우저가 모든 javascript를 이해할수 있는 수준 정도로 변환되는 과정을, transpile이라고 한다. 
            ( 바벨 이나 타입스트립트를 통해서 브라우저가 이해하기 쉬운 수준으로 javascript의 수준 정도를 낮추는 과정에
            JSX 도 자스로 변환이 된다.)
        - 문법
            - 최상위 요소가 1개여야 한다.(최상위 부모역할을 하는게 1개여야 한다. )
                const Component= () => ( 
                    <div> // ────────────────────────────────┐
                        <h1>BoyFriend</h1>                   │
                            <ul>                             │
                                <li>오세진</li>              │
                                <li>이준호</li>              │ (최상위 부모요소)
                                <li>양<span>오빠</span></li> │   
                                <li><span>뀨</span>형</li>   │ 
                            </ul>                            │
                    </div> ──────────────────────────────────┘
                    <div> ──────────────────────────────────────┐
                    이렇게 다른 최상위 부모요소가 존재하면 안된다.│ <- X 이러면 안된다.
                    </div> ─────────────────────────────────────┘
                    )
                - 최상위 요소를 반환하는 경우, ( ) 로 감싸야 한다. 
                - 즉, 하나의 컴포넌트를 반환하는 경우 ( ) 로 감싸야 한다.  
            - 2개 이상의 태그집합은, 꼭 하나의 태그로 감싸야 함
                - 예시1: 
                const Component = ( ) => {
                    <>
                    <hello/>
                    <div></div>
                    </>
                }

                - 예시2: 
                const Component = ( ) => {
                    <hello
                    <div></div>
                    <input/>
                    />
                }
            - 자식들을 바로 랜더링 하고 싶으면, <>자식들 컨텐트 코드들</> 를 사용해야 한다. 
                => "fragment" (빈 태그)
            - 자바스크립트 표현식을 사용하려면, {표현식}을 이용한다.
            - if 문은 사용할수 없다. 
                - if 문을 사용하려면 삼항 연산자 혹은 && 을 사용한다.
            - style 을 이용하면 인라인 스타일링 가능
            - class 대신 className 을 사용해서 class 적용가능
            - 자식요소가 있다면 꼭 닫아야 하고, 자식요소가 없다면 열면서 닫아야 함.
                - 예시1(자식요소가 있을 경우) <p>어쩌구</p>
                - 예시2(자식요소가 없을 경우): <br/> */ 