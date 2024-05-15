<template>
  <div class="screen">
    <!-- <NewWritePage v-if="currentPage == 0"></NewWritePage> -->
    <SplashPage v-if="currentPage == 1" @click="currentPage = 2" />
    <CalendarPage v-if="currentPage == 2" />
    <WritePage v-if="currentPage == 3" />
    <ChallengePage v-if="currentPage == 4" />
    <CreateChallengePage v-if="currentPage == 5" />
  </div>
</template>

<script>
  import SplashPage from "./pages/SplashPage.vue";
  import CalendarPage from "./pages/CalendarPage.vue";
  import WritePage from "./pages/WritePage.vue";
  import ChallengePage from "./pages/ChallengePage.vue";
  import NewWritePage from "./pages/NewWritePage.vue";
  import CreateChallengePage from "./pages/CreateChallengePage.vue";

  export default {
    components: {
      SplashPage,
      CalendarPage,
      WritePage,
      ChallengePage,
      NewWritePage,
      CreateChallengePage,
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

  .color-red {
    color: #dd6262;
  }
</style>
