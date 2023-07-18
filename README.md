## 개요

_[Simle Vue.js](https://simplevue.gitbook.io/intro/)을 학습한 내용입니다._

<br>

```
💡 컴포넌트 기반의 SPA를 구축할 수 있게 해주는 프레임워크
```

컴포넌트(Component)

- 웹을 구성하는 로고, 메뉴바, 버튼, 모달창 등 웹 페이지 내의 다양한 UI 요소
- 재사용 가능하도록 구조화 한 것

SPA(Single Page Application)

- 단일 페이지 어플리케이션
- 하나의 페이지 안에서 필요한 영역 부분만 로딩 되는 형태
- 빠른 페이지 변환
- 적은 트래픽 양

<br>

## vue-cli

- 기본 vue 개발 환경을 설정해주는 도구
- vue-cli 가 기본적인 프로젝트 세팅을 해주기 때문에 폴더 구조에 대한 고민, lint, build, 어떤 라이브러리로 구성을 해야되는지 webpack 설정은 어떻게 해야되는지에 대한 고민을 덜 수 있음

vue-cli 설치

```bash
npm install -g @vue/cli
```

vue 프로젝트 생성

```bash
vue create [project name]
```

실행하기

```bash
cd [project name]
npm run serve
```

<br>

## Vue 구조

```js
<template>            // html 부분
  <div>
    <h1>Hello Vue</h1>
  </div>
</template>

<script>              // script 부분
export default {
  name: 'App',
  components: {}
}
</script>

<style>               // style 부분
</style>
```

스타일 변경 : Scoped CSS

- 해당 컴포넌트에서만 css가 적용되도록 함
- 참고 : https://ux.stories.pe.kr/261

```html
<style scoped>
h1 {
  color: #03a9f4;
}
</style>
```

<br>

## Component 구성해보기

> Component 생성 방법은 두가지가 있음
> - Options API : [변경 사항 확인](https://engineer-mole.tistory.com/m/419)
> - Composition API : Vue3부터 도입(옵션 사항)
>
> 아래는 Options API를 사용하였음

<br>

Component 생성하기
- `src/components` 폴더 안에 생성
- Component 파일의 이름은 대문자로 시작

```js
<template>
    <div>Componet name</div>
</template>

<script>
export default {
    name: 'Name',
    // ...
};
</script>

<style scoped>
</style>
```

> Componet 작명 시 주의사항
> - 단어 2개 이상을 사용하여 작명한다. (예: todo-app)
> - 단어가 1개일 경우 주석을 추가해준다.
> ```js
> export default {
>   //eslint-disable-next-line
>   name: 'Name',
> }
> ```

Componet 가져오기
```js
// App.vue
<script>
import Content from './components/Content';           // 상대경로 사용
import Content from '@/components/Content';     // 절대경로 사용

export default {
  name: 'App',
  components: {
    // 가져온 component들을 등록
    Content,
  }
}
</script>
```

Component 사용하기
```js
<template>
  <div>
    <Content/>
  </div>
</template>
```

전역 Component
- 프로젝트 전체에 사용할 컴포넌트는 `main.js`에 등록해주면 된다.
- `app.component("이름", 컴포넌트)`
```js
import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Header'

const app = createApp(App);

//eslint-disable-next-line
app.component("Header", Header);

app.mount('#app')
```

<br>

## State 와 Props

v-bind
- 태그의 속성을 동적으로 변경할 때 사용
- `v-bind:속성`
- 예시 `<div v-bind:style="{color: #ebebeb}"></div>`

State
- 나의 data를 의미
- `data()` 함수를 이용해 구성
```js
<script>
export default {
    data() {
        return {
            width: 40,
            height: 80
        }
    }
}
</script>
```

Props
- 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달할 때 사용됨
- `props`를 통해 받을 값을 생성
```js
<script>
export default {
  props: {
    color: { type: String, default: "" }    // color 라는 값을 받음
  },
  // ...
};
</script>
```
- 내려 받은 값을 적용 (`<div v-bind:class="[state, props]"></div>`)
```html
<template>
    <div class="box" 
      v-bind:class="['box', color]" >
    </div>
</template>
```

<br>

## 리스트 렌더링 (v-for)
- `v-for` 라는 디렉티브를 이용하여 리스트를 렌더링 할 수 있음
- `item in items` 형태로 특별한 문법이 필요
  - `items` : 원본 데이터 배열
  - `item` : 반복되는 배열 엘리먼트의 별칭

```html
<ul id="example-1">
  <li class="item" v-for="(item, idx) in items" v-bind:key="{idx}">
    // ...
  </li>
</ul>
```

<br>

## 조건부 렌더링 (v-if, v-show)
v-if
- 조건이 성립하는 태그만 렌더링 한다.
```html
<div v-if="true">True</div>
<div v-if="false">False</div>
```

v-else
- `v-if`와 함께 사용
- 앞의 조건이 성립하지 않는다면 else가 동작한다.
```html
<div v-if="true">True</div>
<div v-if="false">False</div>
```

v-show
- 조건이 성랍하지 않는 경우 렌더링은 하되 `display: none` 처리를 한다.
```html
<div v-show="true">True</div>
<div v-show="false">False</div>
```

> **`v-if` vs `v-show`** <br/>
> state에 따라 보여졌다 안보여졌다하는 빈도가 많은 경우 `v-show`를 추천 <br/>
> 그 외에는 `v-if`를 추천

<br>

## 양방향 데이터 바인딩
- Vue 인스턴스와 component 가 서로의 데이터에 접근하는 것
- vue 에서는 `v-model` 디렉티브를 이용하여 양방향 데이터 바이딩을 지원

v-model
- 반드시 state 값을 사용해야 한다.
- props로 내려받은 값을 바로 사용할 수 없다.
```html
<template>
  <div>
    <h1>{{ title }}</h1>      // h1 태그는 title state 를 바탕으로 내용 구성
    <input v-model="title">   // input 은 v-model 로 title state 를 사용
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ""               // title 이라는 state 를 가지고 있음
    };
  }
};
</script>
```

