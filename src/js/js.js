// 콘솔 창에서 확인 가능 (한 줄식 입력해야함)

// alert() : 사용자에게 경고 메시지를 표시하는 함수입니다.

alert("안녕하세요")

// confirm() : 사용자가 확인 또는 취소를 선택할 수 있는 함수입니다.-> 확인을 누를 경우 true, 취소를 누를 경우 false 반환한다.

confirm("안녕하세요?")

// prompt() : 사용자로부터 값을 입력 받을 수 있는 함수입니다. -> 값은 반환값이 된다.

prompt("궁금한점은?")

// document.write() : (웹 브라우저 창) HTML 문서에 텍스트를 직접 작성하는 함수

document.write("텍스트 작성")

// typeof 함수 예시
let data = 5;
typeof(data);


// 숫자형
typeof(10); // 정수 -> 숫자형 number
typeof(10.123); // 실수 -> 숫자형 number
typeof("10"); // 큰 따움표 -> 문자열 string
typeof('10'); // 작은 따움표 -> 문자열 string


// 문자형
typeof("안녕하세요?")
typeof("10")
typeof("") // 빈 문자열


// 이스케이프 문자
console.log("i\'m studying now.")
console.log("탭 \t 포함")



// 템플릿 리터럴 사용 전
let name = "도레미";
let classroom = 201
console.log(name + "님 " + classroom + "호 강의실로 입장하세요")

// 템플릿 리터럴 사용 후
name= "백두산";
classroom = 205
console.log(`${name}님 ${classroom}호 강의실로 입장해주세요`)
