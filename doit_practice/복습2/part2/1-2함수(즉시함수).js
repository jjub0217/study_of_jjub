/* <함수 표현식> : 함수 표현식으로 정의한 함수는 함수 표현식 이전에 호출 할 수 있다. 
    1. 익명함수
        - 하나의 표현식이기 때문에 변수에 할당 할 수 있다.
                ￣￣￣￣표현식 : "10 + 20" ("연산자 표현식")
                        ￣￣￣￣평가(식을 해석해서 값을 생성) ─>  값을 생섬 / 기존 값을 참조    ─> 변수에 할당
                                                                ￣￣￣￣￣￣￣￣￣￣￣￣￣￣     ￣￣￣ 
        "표현식 = 리터럴"                                          "값" :                         변수 : 값으로 평가되므로 "식별자 표현식"이다.
                                                                1. 데이터 타입을 갖고있다.
                                                                2. 메모리에 2진수의 나열로 저장된다.
                        리터럴 : 1. 원시타입( immutable: 변경 불가능 )
                                    - number
                                        - 정수 
                                        - 부동소수점
                                        - 2진수 
                                        - 8진수
                                        - 16진수 
                                    - string
                                    - boolean
                                    - null
                                    - undefined
                                2. 객체타입 ( mutable : 변경 가능 )
                                    - 배열
                                    - 정규표현식
                                    - 함수 
        - 또 다른 매개변수로도 사용할 수 있다. */
/* 2. 즉시 실행함수
- 함수를 정의함과 **동시**에 실행하는 함수 
- 함수 선언 소스 전체를 소괄호로 묶어야 한다.
- 소스 전체를 묵는 소괄호 뒤에 인수를 넣을 소괄호를 붙힌다.
- 변수에 할당할 수 있고, 반환값을 변수에 할당할 수 있다.
                        ￣￣￣반환값(return 값)
                                1. 함수의 결과값을 함수 밖으로 넘기는 값
                                2. 함수 밖으로 넘겨서, 다른 계산에 적용하거나, 써먹거나 다른 곳에 표시해야 할때 
                            반환문(return 문)
                                1. 함수를 종료시키는 역할
                                2. 함수를 종료시키는 역할을 하기 때문에, 함수 내부에서 가장 끝에 있어햐 한다.
                                    - return 문 뒤에 같은 코드블럭 내에서 다른 작업을 하거나 또 return을 해도, 
                                      첫 return 문 뒤에 문은 무시된다. 
- 한번 호출하면 그 호출이 마지막 호출이 되며, 단 한번만 호출할수 있는 함수이다.*/

let result = (function (a, b) {
    return 10 + 35;
})();
console.log(result); // 45

let sum = (function(a, b){
    return a + b;
})(27, 49);
console.log(sum); // 76
