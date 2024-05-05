<template>
  <div class="write-container">
    <div class="logo">
      <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
      <div class="title">Daily Lucky</div>
    </div>
    <div class="today-moods">
      <div class="moods-text">
        <div class="todays main-color">Today's&nbsp;</div>
        <div class="mood">Mood!</div>
      </div>
      <div class="moods-emojis">
        <div class="emoji">
          <img class="lucky" src="/public/images/lucky-lucky.png" />
        </div>
        <div class="emoji">
          <img class="happy" src="/public/images/lucky-happy.png" />
        </div>
        <div class="emoji">
          <img class="sad" src="/public/images/lucky-sad.png" />
        </div>
        <div class="emoji">
          <img class="angry" src="/public/images/lucky-angry.png" />
        </div>
      </div>
      <div class="moods-emoji-text">
        <div class="main-color">Lucky</div>
        <div class="main-color">Happy</div>
        <div class="main-color">Sad</div>
        <div class="color-red">Angry</div>
      </div>
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
    height: 48px;
  }
  .title {
    color: #958565;
    font-size: 10px;
  }
}
.today-moods {
  width: 100%;
  height: 155px;
  .moods-text {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 29px;
    font-size: 24px;
    .mood {
      color: #ff7a78;
    }
  }
  .moods-emojis {
    width: 100%;
    height: 94.5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .emoji {
      width: 95px;
      height: 84px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .lucky {
        margin-top:11px;
        width: 68px;
        height: 60px;
      }
      .happy {
        width: 85px;
        height: 68px;
      }
      .sad {
        width: 76px;
        height: 65px;
      }
      .angry {
        margin-bottom:11px;
        width: 83px;
        height: 80px;
      }
    }
  }
  .moods-emoji-text {
    font-size: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap:75px;
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
