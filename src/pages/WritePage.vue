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
    <div class="writing">
      <div class="writing-date">
        <div class="month-year main-color">MAY 2024</div>
        <div class="date-day main-color">24 Friday</div>
      </div>
      <textarea class="lined-textarea" placeholder="Write today's diary"></textarea>
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
  height: 170px;
  /* background-color: #dfebf8; */
  .moods-text {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
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
      width: 90px;
      height: 84px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .lucky {
        margin-top:30px;
        width: 59px;
        height: 55px;
      }
      .happy {
        margin-top:20px;
        width: 75px;
        height: 62px;
      }
      .sad {
        margin-top:22px;
        width: 68px;
        height: 56px;
      }
      .angry {
        margin-top: 8px;
        width: 75px;
        height: 70px;
      }
    }
  }
  .moods-emoji-text {
    /* background-color: #f0d5d4; */
    width: 100%;
    height: 15px;
    font-size: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 72px;
  }
}
.writing {
  width: 100%;
  height: 460px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: #e6f8df; */
  .writing-date{
    width: 100%;
    height: 50px;
    padding-top: 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .month-year{
      padding-left: 35px;
      font-size: 24px;
    }
    .date-day{
      padding-right: 35px;
      font-size: 16px;
    }
  }
  .lined-textarea {
    width: 80%;
    height: 250px;
    background-image: url("/images/lines.png");
    background-size: contain;
    background-repeat: no-repeat;
    font-size: 18px;
    text-align: start;
    line-height: 31px;
    padding: 0;
    font-family: "custom-font";
    background-color: transparent;
    border: none;
    overflow: clip;
  }
  .lined-textarea:focus {
    outline: none;
  }
  .lined-textarea::placeholder{
    color:#CCC6BA;
    font-size: 14px;
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
