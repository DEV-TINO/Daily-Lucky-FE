<template>
  <div class="screen">
    <SplashPage v-if="currentPage == 1" @click="currentPage = 2" />
    <CalendarPage v-if="currentPage == 2" />
    <textarea v-if="currentPage == 3" class="lined-textarea"></textarea>
  </div>
</template>

<script>
import SplashPage from "./pages/SplashPage.vue";
import CalendarPage from "./pages/CalendarPage.vue";

export default {
  components: {
    SplashPage,
    CalendarPage,
  },
  data() {
    return {
      currentPage: 3, // Splash Page
    };
  },
};
</script>

<style>
.lined-textarea {
  width: 80%;
  height: 250px;
  background-image: url("/images/lines.png");
  background-size: contain;
  background-repeat: no-repeat;
  resize: none; /* 크기 조절 기능 제거 */
  font-size: 18px; /* 폰트 크기 */
  text-align: start;
  line-height: 31px;
  padding: 0;
  font-family: "custom-font";
  /* background-color: #f8f6e9; */
  background-color: transparent;
  border: none;
  overflow: hidden;
}
.lined-textarea:focus {
  outline: none;
}

@font-face {
  font-family: "custom-font";
  src: url("@/assets/fonts/custom-font.ttf");
}
body {
  margin: 0;
  padding: 0;
  color: black;
  font-family: "custom-font";
  background-color: #f8f6e9;
}
.screen {
  width: 393px;
  height: 852px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container {
  height: 100vh;
}

.main-color {
  color: #958565;
}

.sub-color {
  color: #787265;
}

.bg-select {
  background-color: #cbc3ae;
}
</style>
