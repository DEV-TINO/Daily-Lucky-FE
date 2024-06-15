<template>
  <div class="splash-container" @click="handleClickPlashContainer()">
    <div class="main-color title">Daily Lucky</div>
    <img class="image" src="/images/lucky-lucky.png" />
    <div class="sub-color subtitle">Touch to Start</div>
  </div>
</template>

<script>
  export default {
    name: "SplashPage",
    methods: {
      handleClickPlashContainer() {
        this.$router.push("/calendar");
      },
    },
  };
</script>

<style scoped>
  .splash-container {
    height: 100vh; /* Full height of the current visible screen  */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .image {
    width: 175px;
    height: 161px;
    margin-top: 25px;
  }

  .title {
    margin-top: 100px;
    font-size: 60px;
  }

  .subtitle {
    font-size: 20px;
    margin-top: 178px;
  }
</style>
