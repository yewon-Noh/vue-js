## 개요

_[Simle Vue.js](https://simplevue.gitbook.io/intro/)을 학습한 내용입니다._

```
버전 정보
- vue 3
- @vue/cli 5.0.8
- vue-router 4
```

<br>

### Vue.js

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

## vue 시작하기

vue 설치
```bash
npm install vue
```

애플리케이션 만들기
```bash
npm init vue@latest

✔ Project name: … [project name]
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit testing? … No / Yes
✔ Add an End-to-End Testing Solution? … No / Cypress / Playwright
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ./<your-project-name>...
Done.
```

실행하기
```bash
cd [project name]
npm install
npm run dev
```

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

Component 이름 표기법
- 컴포넌트를 등록할 때 PascalCase 이름을 사용([가이드 문서](https://ko.vuejs.org/guide/components/registration.html#component-name-casing))
- 단어 2개 이상을 사용하여 작명한다. (예: TodoApp)
- vue는 PascalCase를 사용하여 등록된 컴포넌트에 대한 kebab-case 태그 해석을 지원하므로 `TodoApp`은 `<TodoApp>` 또는 `<todo-app>`으로 참조될 수 있음
- 만약, 단어가 1개일 경우 주석을 추가해준다.
  ```js
  export default {
    //eslint-disable-next-line
    name: 'Name',
  }
  ```

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

<br>

## Computed 와 watch
Computed
- 연산결과를 `캐싱`하여 사용할 수 있게 해준다.
- 대상(ex. message)이 변경되지 않는다면 이미 연산 처리된 즉, 캐싱처리되어있는 reversedMesage를 가져온다.
```html
<script>
export default {
  name: "App",
  data() {
    return {
      message: 'Hello Vue!!'
    }
  },
  computed: {
    reversedMessage() {
      return this.message.split("").reverse().join("")
    }
  }
}
</script>
```

Watch
- state 나 props를 감시하고 해당 값이 변경되었을 때의 무엇을 할건지 지정한다.
```html
<template>
  <input v-model="firstname" />
  <input v-model="lastname"/>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      firstname: '',
      lastname: ''
    }
  },
  watch: {
    firstname (val) {          // firstname 값이 변경되었을 때
      console.log('fistname', val)
    },
    lastname (val) {          // lastname 값이 변경되었을 때
      console.log('lastname', val)
    }
  }
}
</script>
```

watch ?.. computed ..?
- 두가지 모두 같은 결과가 나온다. 어떤걸 쓰면 좋은걸까?
- `watch`는 언제 변하는지 예측하기 어려울때 많이 사용한다. (ex. 비동기 통신)
- `computed`는 복잡한 연산같은 것을 캐싱처리하기 위해 사용된다.

<br>

## Vue Router
- Vue.js의 공식 라우터
- SPA를 구현할 때 사용
- url이 변경되면, 변경된 요소의 영역에 컴포넌트를 갱신해주는 역할

vue-router 설치
```bash
npm install --save vue-router
```

router 생성
- router 4 버전에서는 `createRouter` 메서드를 사용해 라우터를 생성한다.(이전 저번에서는 인스턴스 방식을 사용, [참고](https://jinyisland.kr/post/vue-router/))
```js
// router/router.js
import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../views/HomePage.vue";

const routes = [
    // 라우팅 패스, 컴포넌트 등 정의
    { path : "/", name : "home", component : HomePage },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;
```

- 라우터를 사용하겠다고 설정해준다.
```js
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/router"

const app = createApp(App)
app.use(router)
app.mount('#app')
```

router-view
- 라우터에 맞는 컴포넌트가 이곳에 렌더링 된다.
```html
// App.vue
<template>
  <div id="app">
    <router-view />
  </div>
</template>
```

router-link
- 라우팅 된 경로로 이동하게 한다.
```html
<router-link to="/about">About</router-link>
```