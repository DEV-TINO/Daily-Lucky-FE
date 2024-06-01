<template>
  <div class="screen">
    <router-view></router-view>
    <div
      v-if="this.$route.name == 'Challenge'"
      style="width: 100%; min-height: 81px; height: 81px"
    ></div>
    <BottomNav v-if="showBottomNav" :bottomMenu="bottomMenu"></BottomNav>
  </div>
</template>

<script>
  import BottomNav from "@/components/BottomNav.vue";

  export default {
    components: {
      BottomNav,
    },
    data() {
      return {
        bottomMenu: ["write", "calendar", "challenge"],
      };
    },
    computed: {
      showBottomNav() {
        return this.$route.name !== "Splash";
      },
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        console.log(to.name);
      });
    },
    watch: {
      $route(to, from) {
        console.log(to.name);
      },
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
    width: 100%;
    height: 100vh; /* Full viewport height */
    /* height: auto; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #f8f6e9;
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
