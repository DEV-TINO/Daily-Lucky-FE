<template>
  <div class="screen background-color">
    <TopLogo v-if="showTopLogo"></TopLogo>
    <router-view></router-view>
    <div class="bottom background-color" v-if="isChallengePage()"></div>
    <BottomNav v-if="showBottomNav"></BottomNav>
  </div>
</template>

<script>
  import BottomNav from "@/components/BottomNav.vue";
  import TopLogo from "@/components/TopLogo.vue";
  export default {
    components: {
      BottomNav,
      TopLogo,
    },
    computed: {
      showTopLogo() {
        return this.$route.name !== "Splash";
      },
      showBottomNav() {
        return this.$route.name !== "Splash";
      },
    },
    methods: {
      isChallengePage() {
        return this.$route.name === "Challenge";
      },
    },
  };
</script>

<style>
  @font-face {
    font-family: "custom-font";
    src: url("@/assets/fonts/custom-font.ttf");
  }
  html {
    background-color: #f8f6e9;
  }
  body {
    margin: 0;
    padding: 0;
    color: black;
    font-family: "custom-font";
    background-color: var(--background-color);
  }
  .screen {
    width: 100%;
    height: 100vh; /* Full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .bottom {
    width: 100%;
    min-height: 70px;
    height: 70px;
  }
  .is-hidden {
    visibility: hidden;
  }
  .is-gray {
    filter: grayscale(1);
  }
  .is-red {
    color: #ff7a78;
  }
  .background-color {
    background-color: #f8f6e9;
  }
  .main-color {
    color: #958565;
  }
  .main-color-border {
    border-top: 1px solid #958565;
  }
  .sub-color {
    color: #787265;
  }
  .color-red {
    color: #dd6262;
  }
  .color-blue {
    color: #737fe9;
  }
  .color-coral {
    color: #ff8e8c;
  }
  .color-white {
    color: #ffffff;
  }
  .color-text {
    color: #988461;
  }
  .color-content {
    color: #78540a;
  }
</style>
