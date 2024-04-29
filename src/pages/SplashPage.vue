<template>
  <div class="splash-container">
    <div class="main-color splash-title">Daily Lucky</div>
    <img class="splash-image" src="/images/lucky-lucky.png" />
    <div class="sub-color splash-subtitle">Touch to Start</div>
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
.splash-container {
  height: 100vh; /* 내가 현재 보이는 화면 크기 전체 높이 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.splash-image {
  width: 292px;
  height: 257px;
}

.splash-title {
  margin-top: 100px;
  font-size: 60px;
}

.splash-subtitle {
  font-size: 20px;
  margin-top: 178px;
}
</style>
