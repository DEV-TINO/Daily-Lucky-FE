<template>
  <div class="challenge-container">
    <div class="logo">
      <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
      <div class="title">Daily Lucky</div>
    </div>

    <div class="footer-menu">
      <div class="menu-write">
        <img class="write-img" src="/public/images/write.png" />
        <div class="write-text">write</div>
      </div>
      <div class="menu-calendar">
        <img class="calendar-img" src="/public/images/calendar.png" />
        <div class="calendar-text">calendar</div>
      </div>
      <div class="menu-challenge">
        <img class="challenge-img" src="/public/images/challenge.png" />
        <div class="challenge-text">challenge</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChallengePage",
    data() {
      return {};
    },
  };
</script>

<style scoped>
  .challenge-container {
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
      width: 35px;
      height: 31px;
      margin-bottom: 5px;
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ddcbac;
    gap: 50px;
    .menu-write {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .write-img {
        width: 37px;
        height: 35px;
      }
      .write-text {
        font-size: 10px;
        color: #988461;
      }
    }
    .menu-calendar {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .calendar-img {
        width: 32px;
        height: 37px;
      }
      .calendar-text {
        font-size: 10px;
        color: #988461;
      }
    }
    .menu-challenge {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .challenge-img {
        width: 34px;
        height: 35px;
      }
      .challenge-text {
        font-size: 10px;
        color: #988461;
      }
    }
  }
</style>
