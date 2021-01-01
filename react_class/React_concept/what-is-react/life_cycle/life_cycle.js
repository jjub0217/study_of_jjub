// << Life cycle  >>
/* 
    - 컴포넌트의 생명주기 (태어날때부터 죽을때까지의 인생사)
    - "Hooks" 
        - React에 새로 추가된 기능 
        - class 를 작성하지 않고도(functional 컴포넌트에서) state 와 다른 React의 기능들을 사용할수 있게 해준다. 
        - < Hooks 이전의 컴포넌트 만드는 법 >
            - 컴포넌트 내부에 상태(state)가 있다면? : class 키워드 사용
            - 컴포넌트 내부에 상태(state)가 없다면? 
            - 라이프사이클이 있다면? : class 키워드 사용
            - 라이프사이클이 없다면? : function 키워드 사용
    - Hook 과 상관없이 클래스 컴포넌트에서만 발생
    - 리액트 컴포넌트는 탄생부터 죽기까지 여러 지점에서 개발자가 작업이 가능하도록, 베서드를 오버라이딩 할 수 있게 해준다.
    - 컴포넌트라는 것이 실제로 메모리에 올라가서 사용될 준비가 되어, 화면에 랜더링 하며
      props나 state가 변경이 되면 다시 랜더되고 또 랜더되어 결국엔 화면에 컴포넌트가 없어질수 있다는 의미이다.
    - 디클레러티브 ( Declarative )
        - component life cycle 변경 전
            - component 생성 및 마운트 ( component 탄생 : 유니폼 입고 축구장 입장 전 - 축구장 입장 )
                - constructor(초기화: Initialization) -> componentWillMount -> render(최초 랜더) -> componentDidMount
            - component life cycle 변경 전
                - component 생성 및 마운트 ( component 탄생 : 유니폼 입고 축구장 입장 전 - 축구장 입장 )
                    - constructor(초기화: Initialization) -> getDerivedStateFromProps(밥먹기전 행위: props로부터 state를 derive 한다) 
                         -> render(최초 랜더) -> componentDidMount
        - 원래 실행동작 과정
            예시:

            class App extends React.Component {
                state = {
                    count: 0
                }

                render() {
                    console.log('render'); // <- 3. 3번째로 찍힘.
                    const {count}  = this.state;
                    return (
                    <div> 
                        <p>{count}</p>
                        </div>
                    )
                }

                constructor(props){ // <- 1. 1번째로 찍힘.
                    super(props)
                    console.log('constructor');

                }

                componentWillMount(){   // <- 2.  2번째로 찍힘. (안 그려져있는 상태)
                    console.log('componentWillMount'); // <- 여기에서는 랜더 활용하면 안된다. 
                }

                componentDidMount() { // <- 4. 4번째로 찍힘. (그려져 있는 상태) 
                    console.log('componentDidMount'); /* <- 랜더 활용할수 있다. (랜더된 직후니까.) 
                                                            1. 타이머 
                                                            2. API 호출
                                                            3. 랜더 된 결과물에 뭔가 하기 (최초에만 해야 하는 일들만) *//*
                }
            } // <- 클래스 선언 

            
            const app = new App(); : JSX 의 처음으로 출연 (constructor) 
            -> app.componentWillMount(); : 어떤 타이밍이 되었을 때, 리액트 라이브러리가 알아서 componentWillMount 함수 호출 하여 실행.
            -> app.render()
            -> app.componentDidMount(); 
            
            // 선언한 클래스를 수행(동작)하는건 리액트 라이브러리 이다. 








            */








// 26분일때   48분

// 12 ~ 1시간 2분
// 1시간 12분 ~ 2시간 2분
// 2시산 12분 ~ 3시간 12분


// 12시 ~ 6시간 11일 금요일 수업꺼 -> 23 수요일 
// 12시 ~ 7시간 14일 월요일 수업꺼 -> 24 목요일
// 12시 ~ 7시간 15일 화요일 수업꺼 -> 25 금요일   // 1월 5일
// 12시 ~ 6시간 16일 수요일 수업꺼 -> 26 토요일   
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 21일 금요일 수업꺼 -> 28 월요일 // 1월 19일 
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일
// 12시 ~ 6시간 18일 금요일 수업꺼 -> 27 일요일

