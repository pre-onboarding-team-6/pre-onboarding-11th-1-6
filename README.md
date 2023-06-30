# **Week 1**

동료학습을 통해서 팀에서 생각한 원티드 프리온보딩 프론트엔드 인턴십 [선발 과제](https://github.com/walking-sunset/selection-task)의 Best Pratice를 만들고 제출해주세요

> 💡 Best Practice란 모범사례라는 말로서, 특정 문제를 효과적으로 해결하기 위한 가장 성공적인 해결책 또는 방법론을 의미합니다.
>
> 과제 수행 과정에서 Best Practice란 팀원들이 각자의 구현방법을 설명하고 토론했을 때 팀 안에서 이 방법이 가장 효율적이라고 판단되는 것을 정하고 그것을 팀의 Best Practice로 삼는것입니다.
>
> 이때 특정한 팀원의 과제 전체를 Best Practice로 선정하는 것이 아닌, 과제의 각 부분이나 중점을 둬야할 부분을 단위를 나눈뒤, 각 단위마다의 Best Practice를 토론하고, 단위별로 Best Practice를 모아서 팀의 최종 결과물을 만들어내는 방식으로 진행해주세요

- [**Week 1**](#week-1)
  - [**프로젝트 개요**](#프로젝트-개요)
  - [**데모페이지**](#데모페이지)
  - [**사용 라이브러리**](#사용-라이브러리)
  - [**함께 토론한 이슈들**](#함께-토론한-이슈들)
    - [**1. 사용자관점 에서 낙관적업데이트 vs 비관적 업데이트 어떤 것이 좋은가?**](#1-사용자관점-에서-낙관적업데이트-vs-비관적-업데이트-어떤-것이-좋은가)
    - [**2. Input 컴포넌트 : 컨트롤드 컴포넌트 vs 언컨트롤드 컴포넌트**](#2-input-컴포넌트--컨트롤드-컴포넌트-vs-언컨트롤드-컴포넌트)
    - [**3. createbrowserrouter 사용하면 좋은점**](#3-createbrowserrouter-사용하면-좋은점)
    - [**4. 프롭스 드릴링을 해결하기위해서 todos가 과연 전역상태로 알맞은가?**](#4-프롭스-드릴링을-해결하기위해서-todos가-과연-전역상태로-알맞은가)
    - [**5. 최적화를 위해 useCallback, useMemo 써야될까?**](#5-최적화를-위해-usecallback-usememo-써야될까)
    - [**6. 상수들을 관리하는 방법 은 어떤 게 있을까**](#6-상수들을-관리하는-방법-은-어떤-게-있을까)
    - [**7. 작은 규모의 프로젝트에서 디렉토리 와 컴포넌트 를 분리하는 기준은 어떻게 하는 것이 좋을까?**](#7-작은-규모의-프로젝트에서-디렉토리-와-컴포넌트-를-분리하는-기준은-어떻게-하는-것이-좋을까)
    - [**8. 전역적인 스타일은 global.css 를 쓰는 게 좋을까? 아니면 CSS-in-JS 형태로 통일하는게 나을까?**](#8-전역적인-스타일은-globalcss-를-쓰는-게-좋을까-아니면-css-in-js-형태로-통일하는게-나을까)
    - [**9. 사용자는 props가 있을지 없을지 모르는데 공통 컴포넌트에 rest 파라미터로 props를 가변적으로 받아도 괜찮을까?**](#9-사용자는-props가-있을지-없을지-모르는데-공통-컴포넌트에-rest-파라미터로-props를-가변적으로-받아도-괜찮을까)
    - [**10. Typescript 없이 커스텀 UI Component 에 들어갈 props 명확하게 알 수 있을 방법이 있을 까?**](#10-typescript-없이-커스텀-ui-component-에-들어갈-props-명확하게-알-수-있을-방법이-있을-까)
    - [**11. 조건부 라우팅 / 엘리먼트를 라우팅 가드 컴포넌트 vs loader 속성에서 처리하기**](#11-조건부-라우팅--엘리먼트를-라우팅-가드-컴포넌트-vs-loader-속성에서-처리하기)

<br>

## **프로젝트 개요**

**6팀의 1주차 Best Practice 도출방안**

- 팀원들의 과제의 코드를 서로에게 설명하고 살펴보며 함께 이야기 할 주제들을 발제했다.
- 해당 주제에 대해 하루 동안 고민하고 기록한다.
- 고민한 내용을 바탕으로 페어프로그래밍을 진행하며 토론한다.
- 페어프로그래밍을 통해 함께 고민하고 코딩하며 Best Practice를 도출한다.
  - 페어프로그래밍은 vscode live share 익스텐션을 활용하여 진행한다.
  - 페어프로그래밍은 1명의 driver와 4명의 navigator가 함께 진행한다.
  - 30분 프로그래밍, 5분 휴식으로 한번씩 번갈아가면서 driver를 수행한다.

<br>

## **데모페이지**

[데모링크]()

<br>

## **사용 라이브러리**

- Styled Components
- Axios
- React Router Dom
- Eslint
- Prettier
- Husky
- lint-staged

<br>

## **함께 토론한 이슈들**

### **1. 사용자관점 에서 낙관적업데이트 vs 비관적 업데이트 어떤 것이 좋은가?**

[관련 자료](https://www.notion.so/9cf306bf6df44e02a767f4f947ecd8a4?pvs=21)

**🙋‍♀️ 윤희**

> - 커뮤니티의 게시글처럼 다른 사람도 볼 수 있는 화면인 경우에는 시간이 오래걸려도 비관적 업데이트가 적절하다고 생각. 투두는 남과 공유하지 않는 개인적인 공간이니 실패 로직만 잘 작성한다면 낙관적 업데이트가 반응이 빨라 답답하지 않을 것 같음. 시간이 오래걸리는 요청인 경우, 요청이 완료되기 전에 사용자가 페이지를 이탈하면 어떻게 처리할 지 생각해봐야함

**🙋‍♂️ 동규**

> - 인증과 관련된 중요한 정보들은 비관적 업데이트로 처리하고, 간단한 기능은 낙관적 업데이트로 처리하되 롤백 된 부분을 나중에라도 사용자가 알 수 있게끔 처리해야하는 과정이 수반되어야 좋은 사용자 경험을 만들 것 이라고 생각합니다.
>   [추후 리액트 쿼리 사용시 낙관적 업데이트 참고자료](https://tanstack.com/query/v4/docs/react/guides/optimistic-updates)

**🙋‍♂️ 현재**

> - 낙관적 업데이트는 사용자 액션의 결과가 응답까지 걸리는 시간과 관계 없이 결정되기 때문에 요청이 빈번하게 일어나는 기능 에 적합할 것 같다. 그래서 Todo 상태를 토글하는 API 에 낙관적 업데이트를 적용하면 좋을 것 같다. 요청이 실패했을 때 대처 방식에 대해 생각해 보면 좋을 듯
> - 비관적 업데이트 요청이 실패했을 때 리스크가 큰 기능에는 낙관 보다 비관적 업데이트가 좋을 것 같다. 회원 가입 / 로그인 기능에 적합할 듯 하다.

**🙋‍♂️ 규성**

> - 낙관적 업데이트는 서버와의 통신 시간을 줄이고 유저에게 바로 보여주어 유저에게 더 편한 UX를 제공함, 자주 일어나고 비교적 가벼운 부분이라고 생각하는 Todolist를 보여줄 때에는 낙관적 업데이트를 사용하고, 인증같은 서버와의 통신이 중요한 부분에서는 비관적 업데이트를 사용하는 것이 적절하다고 생각함.

**🙋‍♂️ 요섭**

> - 낙관적 업데이트는 사용자 경험을 향상시켜줍니다. 주로 좋아요, 투표(찬성/반대)와 같은 간단한 기능들, 그리고 다른 컴포넌트에 영향을 주지 않는 기능들에 사용합니다.(서버에서 요청이 거절되거나 에러가 발생했을 때 도미노 효과가 발생할 수 있기 때문) Todolist같은 경우 create, update, delete 기능은 서버 요청시 에러가 발생했을 때의 핸들링만 잘 해주면 낙관적 업데이트로 구성하는 편이 사용자 경험에 더 좋을 듯 합니다.로그인과 같은 기능은 인증이 필요하기 때문에 낙관적 업데이트처럼 먼저 성공했다는 결과를 클라이언트에 보내고 이후에 서버에 실패했을 경우 실패했다는 메시지를 보낼 경우 혼란을 줄 수 있기 때문에 비관적 업데이트가 적절하지 않을까 생각합니다.
>   > https://medium.com/@kyledeguzmanx/what-are-optimistic-updates-483662c3e171  
>   > https://jeongki.dev/post/%EB%8D%B0%EB%B8%8C%EC%BD%94%EC%8A%A4-15-16%EC%9D%BC%EC%B0%A8-til-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%9C%84%EC%9E%84-%EC%BB%A4%EC%8A%A4%ED%85%80-%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%82%99%EA%B4%80%EC%A0%81-%EC%97%85%EB%8D%B0%EC%9D%B4%ED%8A%B8-%EB%94%94%EB%B0%94%EC%9A%B4%EC%8A%A4

<br>

---

### **2. Input 컴포넌트 : 컨트롤드 컴포넌트 vs 언컨트롤드 컴포넌트**

[관련 자료](https://www.notion.so/9cf306bf6df44e02a767f4f947ecd8a4?pvs=21)

**🙋‍♀️ 윤희**

> - 유효성 검사가 필요하다면 컨트롤드, 아니라면 컨트롤드

**🙋‍♂️ 동규**

> - 대부분 컨트롤드가 유용하다고 생각합니다. 유효성 검사나, 자동완성 구현시에도 상태를 바로 참조할 수 있어서 편리할 것 같습니다. 다만, 해당 필드의 상태가 바뀔 때 마다 서버요청을 보내는 경우에는 디바운스처리를 해서 과도한 서버요청을 줄이는게 좋을 것 같습니다.
> - 만약, 필드가 여러개일 경우 useState가 batch처리되어 최적화 된다고 하지만, 여러 state보다 객체형태의 state 하나로 관리하면 좀 더 깔끔한 상태관리가 될 것 같습니다.
> - 언컨트롤 컴포넌트를 좋아했었는데, ref가 여러개 생기면 조금 헷갈려지는 부분이 생겨서 유지보수시에 개발자의 실수를 유발할 수도 있을 것 같습니다.

**🙋‍♂️ 일윤**

> - 컨트롤드 컴포넌트, 유효성검사와 실시간 필드검사가 용이해서 좀더 유용하다고 생각 (공식문서에도 권장 , 좀더 리액트스러움)

**🙋‍♂️ 현재**

> - 컨트롤드 컴포넌트, 입력 값을 실시간으로 Validation 해서 버튼 의 스타일을 바꿔야 했기 때문에 적합하다고 생각한다.
>   다만 불필요한 렌더링 이 발생하기 때문에, 스로틀링 이나 디바운싱 같은 기법을 사용하는 것이 좋을 것 같다.
>   > https://velog.io/@yukyung/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%99%80-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90-%ED%86%BA%EC%95%84%EB%B3%B4%EA%B8%B0

**🙋‍♂️ 규성**

> - 컨트롤드 컴포넌트
> - 실시간으로 값을 가져와 체크하는 유효성 검사같은 것에 필요하나 불필요하게 자원낭비가 되는 경우도 많아 단순 입력 값을 보내는 것은 언컨트롤드도 괜찮다고 생각함.

**🙋‍♂️ 요섭**

> - 컨트롤드 컴포넌트가 필요한 경우
> - 유효성 검사가 필요한 경우
> - 실시간 필드검사가 필요한 경우
> - 조건에 따라 버튼의 비 활성화 여부가 바뀌는 경우
>   > https://itprogramming119.tistory.com/entry/React-%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-VS-%EB%B9%84%EC%A0%9C%EC%96%B4-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8

<br>

---

### **3. createbrowserrouter 사용하면 좋은점**

**🙋‍♀️ 윤희**

> - 공식 문서 권장
> - data apis 지원
>   > https://reactrouter.com/en/main/routers/picking-a-router#data-apis

**🙋‍♂️ 동규**

> - 객체로 관리하여 가독성이 좋고 제공되는 여러 프로퍼티를 활용할 수 있어서 좋은 것 같습니다.

**🙋‍♂️ 현재**

> - react-router 공식 문서에서 권장하는 방법.
> - loaders,
> - 가독성이 좋다.

**🙋‍♂️ 규성**

> - 공식 문서에서 권장하는 방법
> - 로그인 시 방문 가능한 페이지 같은 가드 권한을 적용할 수 있음
>
> > https://velog.io/@kmh060020/CreateBrowserRouter%EC%99%80-%ED%9A%A1%EB%8B%A8-%EA%B4%80%EC%8B%AC%EC%82%AC

**🙋‍♂️ 요섭**

> - createBrowserRouter함수와 안에 들어가는 router들의 조건/상태들을 잘 만들어주면 route할 페이지가 변경, 추가될 때 관리하기가 편리하다. 물론 가독성도 좋아진다.
>
> > https://velog.io/@kmh060020/CreateBrowserRouter%EC%99%80-%ED%9A%A1%EB%8B%A8-%EA%B4%80%EC%8B%AC%EC%82%AC

<br>

---

### **4. 프롭스 드릴링을 해결하기위해서 todos가 과연 전역상태로 알맞은가?**

[관련 자료](https://www.notion.so/9cf306bf6df44e02a767f4f947ecd8a4?pvs=21)

**🙋‍♀️ 윤희**

> - 투두를 여러 곳에 깊게 내려줘야 한다면 전역상태가 필요하겠지만 이번 프로젝트는 input, p에만 내려주면되니 없어도 될 것 같음.
> - 컴포넌트 분리를 너무 많이했다면 투두를 불러오는 위치도 최대한 내려서 드릴링 줄이기(ul 컴포넌트에서 투두 GET, > li > input)

**🙋‍♂️ 동규**

> - 프롭스 드릴링이 3~4depth 이상이라면 전역으로 관리하는 것도 고려해볼만하지만 지금은 useState로 충분하다고 생각합니다.
> - 추후 확장되어서 todos를 sideNav 같은 컴포넌트에 일부분 보여야 한다면 상태 끌어올리기를 투머치하게 해야하기 때문에 전역으로 관리하는게 좋을 것 같습니다.

**🙋‍♂️ 일윤**

> - 규모가 적은 todolist같은 경우에는 굳이 전역상태로 사용하지않아도 괜찮을것 같다.

**🙋‍♂️ 현재**

> - todos 의 상태는 todos 기능의 컨텍스트 내에서만 필요하고, 그 이상으로 이 프로젝트가 확장할 가능성 이 없어서, 전역상태로 관리 할 필요가 없을 것 같다.
> - 성능의 이슈는 useMemo 훅을 이용해 처리하는 등 [최적화에 관련한 레퍼런스](https://itchallenger.tistory.com/285) 가 있었다.

**🙋‍♂️ 규성**

> - todo를 todolist말고는 다른 곳에서 쓸 곳이 없어 전역 상태로는 굳이 사용하지 않아도 될 것 같음.

**🙋‍♂️ 요섭**

> - 프로젝트 규모가 크지 않기 때문에 전역상태로 관리할 필요가 있을까 생각이 드네요.

<br>

---

### **5. 최적화를 위해 useCallback, useMemo 써야될까?**

**🙋‍♀️ 윤희**

> - 해당 컴포넌트가 다른 값에 의해 리렌더가 자주 되는데 의존성 배열에 있는 값은 거의 변하지 않는 경우 사용.
> - 이번 프로젝트는 의존성배열이 인풋상태값이거나(POST, PUT), 그렇지 않은 경우(DELETE)엔 로직이 복잡하지 않음
> - 신경쓰인다면 useMemo보다는 컴포넌트를 분리해 렌더링을 막아주면 될 것 같다.

**🙋‍♂️ 동규**

> - “모든 추상화(및 성능 최적화)에는 비용이 따른다.” 딱 알맞은 단어 같습니다!
> - useCallback 같은 경우 참조 비교와 같은 처리에 사용하자.
> - useMemo는 정말 복잡한 로직에만 사용하자.
> - 그 외의 경우에는 다른 최적화 기법을 적용하는 것을 고려해보자.
>
> > https://github.com/5kdk/My-Notes/blob/main/React/useMemo%2C%20useCallback%20%EC%B5%9C%EC%A0%81%ED%99%94%EA%B0%80%20%EA%BC%AD%20%ED%95%84%EC%9A%94%ED%95%A0%EA%B9%8C.md

**🙋‍♂️ 일윤**

> - 적은 코드나 간단한 코드에서 매번 새로운함수를 만들거나 재계산을하는것이 더 효율이 좋고, 불필요한 메모제이션 작업은 성능을 저하시킬 수 있기때문에 todoList 같은 간단한 작업에서는 사용하지 않되, 프로젝트의 규모가 큰 경우에는 useCallback과 useMemo를 사용해서 함수를 재사용해 사용하는것이 괜찮을것 같습니다.

**🙋‍♂️ 현재**

> - 공식문서 에 따르면 계산 비용이 값비싼 경우 사용하라고 권장한다. https://react.dev/reference/react/useMemo#how-to-tell-if-a-calculation-is-expensive 은 대략 몇 천개의 object 를 생성하거나, 루프를 돌고 있는 경우라고 생각하면 된다고 한다.
> - 그리고 몇 안되는 케이스 (레퍼런스에서 확인 가능) 에서만 useMemo 가 필요하다고 한다. 사용한 팀원의 코드가 케이스에 해당하면 사용 고려해보면 될듯.
>
> > https://react.dev/reference/react/useMemo#should-you-add-usememo-everywhere

**🙋‍♂️ 규성**

> - useMemo,useCallback 다 메모이제이션을 활용하는 것인데 값이 계속 변하는 경우에는 오히려 좋지 않다고 생각함.
> - 하지만 렌더링을 할 때 처리할 데이터가 많거나 함수가 복잡한 경우 등등 상황을 잘 파악해서 사용하는게 좋다고

**🙋‍♂️ 요섭**

> - useMemo는 복잡하거나 반복되는 큰 연산을 할 때 유용한데 간단한 작업에 useMemo를 적용하면 오히려 불필요한 메모리 낭비가 발생할 수 있다. 고로 Todo와 같은 간단한 앱에서 과연 useMemo로 최적화 할 필요가 있을까 의문이 든다.
> - useCallback도 마찬가지다. 단순히 setState를 호출하는 함수같은 경우 리액트 자체에서 성능 최적화가 보장되기 때문에 분별해서 사용하는 것이 메모리 효율에 좋다.
> - 최적화는 검사 후 필요한 경우에 고려해야 한다고 강의에서 들은적이 있다. todoList같은 간단한 앱은 대부분의 환경에서 최적화 없이도 잘 돌아갈 것이라 생각된다.
>
> > https://hayeondev.gatsbyjs.io/230202-usememo-and-usecallback/

<br>

---

### **6. 상수들을 관리하는 방법 은 어떤 게 있을까**

**🙋‍♀️ 윤희**

> - 항상 동일해야하는 값을 여러 컴포넌트에서 사용한다면 상수 파일을 만들어 분리

**🙋‍♂️ 동규**

> - 상수를 분리하는 것이 안전하게 관리되지만, 아직까지도 선택 장애가와서 어렵습니다. 한 컴포넌트에서 사용할 때 그 컴포넌트 밖에 선언하는 것 vs. 상수 분리한김에 상수 폴더에서 모두 관리하는 것 고민이 됩니다.
> - 상수로 관리한다면? 객체 형태의 상수 path.baseUrl, path.todoUrl 같이 한데 묶어서 관리

**🙋‍♂️ 일윤**

> - 상수 분리를 본인 프로젝트에는 똑바로 구분하지못해 잘은 모르지만 해당 컴포넌트에서만 사용하는것이 아니라면 분류해서 사용해야된다고 생각합니다.

**🙋‍♂️ 현재**

> - 해당 상수가 어느 범위까지 사용되는 지 분류해서, 사용되는 곳이 많다면, 따로 js 파일을 생성해 정의
> - 그렇지 않다면, 해당 파일에 정의

**🙋‍♂️ 규성**

> - 다른 곳에 많이 사용되는 상수라면 따로 js파일 분리해서 관리 하는게 좋다고 생각

**🙋‍♂️ 요섭**

> - fetch url과 같은 프로젝트 전체에서 전역적으로 반복해서 사용되는 상수 같은 경우 따로 파일을 분리해서 관리 하는게 효율적이라 생각합니다.

<br>

---

### **7. 작은 규모의 프로젝트에서 디렉토리 와 컴포넌트 를 분리하는 기준은 어떻게 하는 것이 좋을까?**

**🙋 윤희**

> - 구조만 봐도 어떤 파일이 어디에 있을지 추측할 수 있도록.
> - components, apis에는 도메인별 내부폴더(todo, sign) , pages, style, utils는 단일폴더

**🙋‍♂️ 동규**

> - apis, components, hooks 등 큰 범위내에서 분리하는게 유지보수 할 때 편리한 것 같고, 컴포넌트의 경우 일단 하나의 컴포넌트로 시작해서 필요시 분리하는 것이 좋은 것 같습니다.
> - 아래의 두가지 상황은 토론때 나눠보고 싶습니다.
>   1. components 폴더 내에는 공통 컴포넌트만 넣기 + pages 폴더에서 page마다 폴더를 만들고 page와 사용되는 컴포넌트를 정리
>   2. components 폴더에서 page마다 폴더 만들어 정리 + pages폴더에서 page정리

**🙋‍♂️ 일윤**

> - 기능 과 도메인관점에서 프로젝트규모에따라 유동적으로하면 괜찮겠다고 생각

**🙋‍♂️ 현재**

> - 규모가 작기 때문에 파일을 기능별로 나누기보다는, 도메인 관점에서 먼저 크게 나눠보는 게 좋을 것 같다는 생각을 한 적 있다. e.g. todo/components, todo/api
>   - 장점
>     - 기능을 도메인 중심으로 묶기 때문에, 도메인 중심으로 생각하는 것에 조금 더 도움을 주지 않을 까 생각.
>     - 각 파일(모듈)의 역할을 조금더 명확하게 알 수 있을 듯하다.
> - 주제 의 결론이 너무 주관적이고 자유롭게 나올 수 있어 자유로운 토론을 통해 결정하는 것이 중요할 듯.

**🙋‍♂️ 규성**

> - todolist 처럼 규모가 작은 경우에는 기능 보다는 페이지 단위로 나누는게 더 편하다고 생각

**🙋‍♂️ 요섭**

> - 반복되는 구조는 컴포넌트, apis는 따로 디렉토리를 만들고 각 기능별로 분리, style, utils도 디렉토리 분리

<br>

---

### **8. 전역적인 스타일은 global.css 를 쓰는 게 좋을까? 아니면 CSS-in-JS 형태로 통일하는게 나을까?**

**🙋‍♂️ 동규**

> - styled-component나 emotion 같은 CSS-in-JS 라이브러리들이 제공하는 global style 사용!

**🙋‍♂️ 일윤**

> - CSS-in-JS 에서 JavaScript와 CSS 사이의 상수와 함수를 쉽게 공유 할 수 있고 코드 경량화도 좋을것같다.

**🙋‍♂️ 현재**

> - 전역적 스타일을 동적으로 수정할 경우 에는 CSS-in-JS 가 더 효과적 일 것 같다. e.g. 다크모드

**🙋‍♂️ 요섭**

> - 개인적으로 전역 스타일도 CSS-in-JS로 세팅하는 것이 일관적이고 동적 세팅도 가능해서 선호하는 편

<br>

---

### **9. 사용자는 props가 있을지 없을지 모르는데 공통 컴포넌트에 rest 파라미터로 props를 가변적으로 받아도 괜찮을까?**

**🙋‍♂️ 동규**

> - JSDocs로 최대한 해결해 볼 수 있을 것 같은데, 정말 comon 컴포넌트들만 한정하여 jsdoc를 적어주고 사용하는 것도 좋을 것 같습니다.
>
> > https://poiemaweb.com/jsdoc-type-hint

**🙋‍♂️ 현재**

> - 주석 /\*\* \*/ 을 달아 놓는 것으로 어느정도 해결 할 수 있다.

<br>

---

### **10. Typescript 없이 커스텀 UI Component 에 들어갈 props 명확하게 알 수 있을 방법이 있을 까?**

**🙋‍♂️ 동규**

> - JSDocs로 최대한 해결해 볼 수 있을 것 같은데, 정말 common 컴포넌트들만 한정하여 jsdoc를 적어주고 사용하는 것도 좋을 것 같습니다.

**🙋‍♂️ 현재**

> - 주석 /\*\* \*/ 을 달아 놓는다

**🙋‍♂️ 요섭**

> - 리액트에서는 PropTypes를 이용한다..?
>   > https://reactjs-kr.firebaseapp.com/docs/typechecking-with-proptypes.html  
>   > https://nyol.tistory.com/157?category=963214

### **11. 조건부 라우팅 / 엘리먼트를 라우팅 가드 컴포넌트 vs loader 속성에서 처리하기**

[관련 자료](https://www.notion.so/9cf306bf6df44e02a767f4f947ecd8a4?pvs=21)

**🙋‍♂️ 동규**

> - react-router docs에 따르면 “각 라우트는 렌더링하기 전에 라우트 요소에 데이터를 제공하는 loader 함수를 정의할 수 있습니다.”
> - useloaderdata “이 훅은 경로 로더에서 반환된 값을 제공합니다. (중략) 렌더링 사이에 반환되는 데이터가 안정적 … (후략)”
>   렌더링 사이에 어떤 데이터가 필요할 때 안전하게 받아와 사용하기 위한 목적으로 만든 프로퍼티가 아닌가 싶습니다.
> - 이러한 설계로 렌더링 중간에 loader로 리다이렉트하는게 약간 본질에 맞지않는? 느낌이 듭니다.
> - 고차 컴포넌트를 사용하면 로직을 모듈화.
> - 다른 페이지에서도 재사용 가능.
> - page를 감싸서 좀 더 명시적이다.
> - guard 라는 폴더에서 다양한 로직을 캡슐화한 guard 컴포넌트들을 관리할 수 있을 것 같음.
>
> > https://reactrouter.com/en/main/route/loader > > https://reactrouter.com/en/main/hooks/use-loader-data

**🙋‍♂️ 현재**

> - ~~똑같은 기능을 하는 함수(loader) 이 사용하는 라이브러리(react-router) 에 그대로 있기 때문에, 그 기능을 하는 컴포넌트를 만드는 것 보다 라이브러리의 함수를 사용하는 것이 조금더 명확할 수 있겠다?~~
> - 동규님 의견 중 loader api 의 목적은 “_렌더링 사이에 어떤 데이터가 필요할 때 안전하게 받아와 사용하기 위한 목적으로 만든 프로퍼티가 아닌가 싶습니다.”_ 에 동의.
> - 그래서 기존의 가드 컴포넌트를 사용하는 것이 좋다고 생각. 왜냐하면, 이후 auth 관련 기능이 추가되면 확장하기 용이하다고 생각됨.

<br>

---
