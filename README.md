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

