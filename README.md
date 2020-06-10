# Vue JS

## basic
### 1. SPA
Single Page Application
- HTTP 요청/응답 없이 UI 변화
- 이유
    1. 사용자 편의성
    2. 리소스

### 2. MVVM
Model-View-ViewModel
- MVC(Model-View-Control)와의 비교

### 3. Declarative Programming
선언적 프로그래밍
<-> 명령형 프로그래밍(Imperative Programing)
- 명령형(절차적) : 변화를 단계적으로 명령
    - Vanilla Javascript DOM 조작
- 선언형 : 변화를 선언(그림 그리기)
    - 프레임워크를 통한 조작

## Vue JS의 요소
### 1. Directive(지시자)
- `v-for` : 배열과 같은 데이터를 순회
- `v-if` : 조건부 렌더링
- `v-else` : 조건부 렌더링
- `v-on:이벤트` : 이벤트 바인딩(`addEventListener()`)(`@`)
- `v-model` : 양방향 데이터 바인딩
- `v-bind:속성` : 속성 바인딩 (`:`)
- `v-text` : 데이터 렌더(text) innerText
- `v-html` : 데이터 렌더(html) innerHTML

### 2. Vue Instance
- `el: '#app'` : 마운트 포인트
- `data: {}` : 관리할 데이터
- `methods: {}` : 함수
- `computed: {}` : 함수화된 데이터
- `watch: {}` : 데이터 변경에 대한 콜백

### 3. 라이프사이클 훅
- `created()` : 객체 생성 직후
- `beforeMount()` : Mount 직전
--- Mounted : DOM 보이기 시작