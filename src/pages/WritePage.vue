<template>
  <div class="write-container">
    <div class="logo">
      <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
      <div class="title">Daily Lucky</div>
    </div>

    <div class="footer-menu">
      <img class="footer-menu-image" src="/public/images/write.png" />
      <img class="footer-menu-image" src="/public/images/calendar.png" />
      <img class="footer-menu-image" src="/public/images/challenge.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "WritePage",
};
</script>

<style scoped>
.write-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.logo {
  margin-top: 51px;
  height: 68px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .logo-emoji {
    width: 55px;
    height: 54px;
  }
  .title {
    color: #958565;
    font-size: 10px;
  }
}

.footer-menu {
  width: 100%;
  height: 64px;
  left: 0;
  right: 0;
  position: absolute;
  bottom: 17px;
  padding-top: 14px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #ddcbac;
  gap: 60px;
  .footer-menu-image {
    width: 40px;
    height: 55px;
  }
}
</style>
