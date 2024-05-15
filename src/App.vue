<template>
  <div class="screen">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        bottomMenu: ["write", "calendar", "challenge"],
      };
    },
    // computed: {
    //   showBottomNav() {
    //     return this.$route.name !== "Splash";
    //   },
    // },
    mounted() {
      console.log(this.$route.name);
    },
  };
</script>

<style>
  /* @import "./assets/styles/bottom-nav.css"; 공통 CSS 파일을 임포트 */
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
    flex-direction: column;
  }

  .main-color {
    color: #958565;
  }

  .sub-color {
    color: #787265;
  }

  .color-red {
    color: #dd6262;
  }
</style>
