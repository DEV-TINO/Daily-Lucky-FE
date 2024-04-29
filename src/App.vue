<template>
  <div class="screen">
    <SplashPage v-if="currentPage == 1" />
  </div>
</template>

<script>
import SplashPage from "./pages/SplashPage.vue";

export default {
  components: {
    SplashPage,
  },
  data() {
    return {
      currentPage: 1, // Splash Page
    };
  },
};
</script>

<style>
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
}

.main-color {
  color: #958565;
}

.sub-color {
  color: #787265;
}
</style>
