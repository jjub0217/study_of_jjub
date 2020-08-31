/* Date객체
        - 날짜와 시간의 정보를 다루는 객체
        - 1. 현재 날짜와 시간을 알수 있다. : new Date()
          2. 특정 날짜나, 특정 시간까지 얼마나 남았는지 알수 있다. : new Date(특정날짜와 특정시간)
        - Date객체를 사용하려면 Date객체의 인스턴스를 만들어야 한다. 
        - Date 객체 안의 내장 메서드를 사용할수 있다. 
                - getter 함수(가져온다): 날짜와 시간 정보를 **가져오는** 함수
                        1. getSecond() <- 시간 정보 중 '초' 를 가져오는 함수
                        2. getFullYear() <- 날짜 정보 중 '연도'를 가져와서 4자리 숫자로 표시하는 함수
                        3. getMonth() <- 날짜 정보 중 '월'을 가져오는 함수 (0부터 11까지 표시: 0이 1월이다)
                        4. getDate() <- 날짜 정보 중 '일'을 가져오는 함수 
                        5. getDay() <- 날짜 정보 중 '요일'을 가져오는 함수 (0부터 6까지 표시: 0이 일요일이다)
                        6. getTime() <- 1970년 1월 1일 자정 이후 시간을 **밀리 초** 로 표시하는 함수
                                        밀리초: 1/1000 초이다. (1분 = 60초 = )

                - setter 함수(설정한다): 날짜와 시간을 **원하는 값으로 설정**하는 함수 
                        - 예시: setSecond() <- 시간 정보 중 '초' 를 원하는 값으로 설정하는 함수
        */
let now = new Date().getTime();
console.log(now); // 1598852467200