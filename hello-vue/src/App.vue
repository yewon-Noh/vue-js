<template>
  <div>
    <h1>{{ title }}</h1>
    <input v-model="title">
  </div>
  
  <h2>웹툰</h2>
  <div>
    <input type="checkbox" id="프롬스타" value="프롬스타" v-model="checkedWebtoons">
    <label for="프롬스타">프롬스타</label>
    <input type="checkbox" id="햄스터와그녀" value="햄스터와 그녀" v-model="checkedWebtoons">
    <label for="햄스터와그녀">햄스터와 그녀</label>
    <input type="checkbox" id="위대한로맨스" value="위대한 로맨스" v-model="checkedWebtoons">
    <label for="위대한로맨스">위대한 로맨스</label>
    <input type="checkbox" id="아귀" value="아귀" v-model="checkedWebtoons">
    <label for="아귀">아귀</label>
    <br>
    <span>찜한 웹툰: {{ checkedWebtoons }}</span>
  </div>
  
  <h2>성별</h2>
  <div>
    <input type="radio" id="male" value="male" v-model="gender">
    <label for="male">남</label>
    <br>
    <input type="radio" id="female" value="female" v-model="gender">
    <label for="female">여</label>
    <br>
    <span>당신의 성별을 알려주세요: {{ gender }}</span>
  </div>

  <h2>선호 장르</h2>
  <select v-model="category">
    <option disabled value>선택해주세요</option>
    <option>로맨스</option>
    <option>호러</option>
    <option>스릴러</option>
  </select>
  <span>선택: {{ category }}</span>

  <div id="app">
    <Webtoon :items="webtoons"/> 
  </div>
</template>

<script>
import Webtoon from "./components/Webtoon";

export default {
  name: "App",
  components: {
    Webtoon,
  },
  data() {
    return {
      title: "",
      checkedWebtoons: [],
      gender: "",
      category: "",
      webtoons: [
        {
          name: "햄스터와 그녀",
          link: "http://webtoon.daum.net/webtoon/view/hamsterandher",
          img:
            "http://t1.daumcdn.net/webtoon/op/478cdf37f585607982ffa9e35b432e8503be8a54",
          isUpdate: true
        },
        {
          name: "프롬 스타",
          link: "http://webtoon.daum.net/webtoon/view/fromstar",
          img:
            "http://t1.daumcdn.net/webtoon/op/a7fb953d722c1130bfc18440f7e3ce448ece57a1",
          isUpdate: true
        },
        {
          name: "위대한 로맨스",
          link: "http://webtoon.daum.net/webtoon/view/greatromance",
          img:
            "http://t1.daumcdn.net/webtoon/op/a816281cb4df5c50a20ac386fd6e496643d0f085",
          isUpdate: false
        },
        {
          name: "빛나는 손을",
          link: "http://webtoon.daum.net/webtoon/view/Hand",
          img: "http://t1.daumcdn.net/cartoon/5913FCAC0234C50001",
          isUpdate: false
        }
      ]
    };
  }
}
</script>

<style scoped>
.wrap {
  display: flex;
}
</style>