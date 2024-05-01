<template>
  <div class="container splash">
    <div class="main-color title">Daily Lucky</div>
    <img class="logo" src="/images/lucky-lucky.png" />
    <div class="sub-color subtitle">Touch to Start</div>
  </div>
</template>

<script>
export default {
  name: "SplashPage",
  data() {
    return {};
  },
};
</script>

<style scoped>
.splash {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .logo {
    width: 292px;
    height: 257px;
  }

  & .title {
    font-size: 60px;
    margin-top: 100px;
  }

  & .subtitle {
    font-size: 20px;
    margin-top: 178px;
  }
}
</style>
