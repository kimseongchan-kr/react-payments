<p align="middle" >
  <img src="https://techcourse-storage.s3.ap-northeast-2.amazonaws.com/0fefce79602043a9b3281ee1dd8f4be6" width="400">
</p>
<h2 align="middle">페이먼츠</h2>
<p align="middle">React 모바일 페이먼츠 애플리케이션</p>
</p>

## 🚀 Getting Started

> `Component-Driven Development` 에 따라 UI를 구성하고 재사용 가능한 `Component`를 작성합니다.

✔️ `모바일 타겟`의 웹 앱을 구현하며 사용하기 `편리한 모바일 UI/UX`에 대해 고민해봅니다.  
✔️ 다른 라이브러리나 프레임워크 없이 오로지 `React`만으로 상태를 관리하고 컴포넌트를 설계합니다.  
✔️ `재사용 가능한 Component`를 직접 작성하고 사용합니다.  
✔️ `Controlled` & `Uncontrolled Components`에 입각하여 `Form`을 핸들링합니다.

## TODO LIST

- [x] input 공용 컴포넌트 만들기

  - 유연하면서, 모든 프로젝트에서 공용으로 사용할 수 있고, 사용자에게 친화적이며, 테스트가 용이하게...ㅜㅜ
  - 해당 프로젝트에 input이 가져야할 TASK는 무엇일까?
    - [x] left-label, right-label -> label 이라는 이름을 사용해서 문자열이 들어가야한다는 것을 사용자에게 알리자.
    - [x] icon -> icon도 작은 컴포넌트로 봐야하는가? icon 컴포넌트를 props에 넣을 수 있도록 만들어 커스텀이 가능하도록 할까?
    - [x] detachInput -> input이 일체형인지 분리형인지 구분하자
  - 당장엔 어떤 story가 필요한지 모르겠다..아마 error를 만들지 않을까 싶은데..일단 input부터 천천히 작업해보자.
  - input 컴포넌트를 따로 만들자...style이 달라지면 inputgroup을 사용할 때 배경색이 안맞는 경우를 없애기 위해..?? 결국 input 태그를 감싼 함수인데..? 굳이 필요없나? 만들지말자!
  - icon 유연하게 작업해보자! 는...storybook 배끼기..대단한 것 같다...이런 생각을 못해봤는데..

  - 유효성 검사
  - input 종류 - 한글과 숫자의 구분 (숫자만 입력이 가능하다, 글자 + 숫자 입력이 가능하다.)
  - input 조건 - maxlength, focus 이동,
  - 특이 사항 - maxlength가 되었을 경우 사이에 값이 추가된다.

  - [x] 한글과 숫자의 구분 beforinput
  - [x] maxlength keydown
  - [ ] focus 이동 Keyup

  - 위 같이 만들고보니 새로운 input을 만들 수 있을 것 같다.
  - maxlength의 경우 도메인이 존재하지 않아 공용 input으로 뺄 수 있을 것 같은데..한글의 구분은 해당 프로젝트의 도메인이다 과연 storybook으로 빼서 공용으로 작업하는게 좋을까?
  - 연결되어있는 input의 경우 컴포넌트로 만들어줄려고 한다.

  - connectedInput
  - [x] 몇개가 연결되어있는지 숫자를 받는다.
  - [x] 구분 기호를 입력 받는다.
  - [x] ref 생성에 쓰일 name을 입력받는다 / 지금 공용으로 뺀 input에는 props에 직접 넣어주지 않았는데 추가해줘야할 것 같다.
  - [x] 공용으로 들어갈 속성과 각 input이 들어갈 속성을 분리시켜주었다.
  - 덕분에 props가 너무 많아졌는데 이거 괜찮을까? 흠..
  - 드디어 input관련 작업을 끝냈다 이제 포커스와 전역 ref를 작업해보자
