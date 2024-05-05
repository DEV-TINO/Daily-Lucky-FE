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
      <textarea
        class="lined-textarea"
        placeholder="Write today's diary"
      ></textarea>
      <div class="upload-image">
        <img class="img" src="/public/images/cloud-arrow-up.png" />
        <div class="img-text main-color">Upload Image</div>
      </div>
      <div class="upload-button">글쓰기</div>
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
      width: 35px;
      height: 31px;
      margin-bottom: 5px;
    }
    .title {
      color: #958565;
      font-size: 10px;
    }
  }
  .today-moods {
    width: 100%;
    /* background-color: #dfebf8; */
    .moods-text {
      width: 100%;
      height: 40px;
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
      height: 85px;
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
          margin-top: 30px;
          width: 59px;
          height: 55px;
        }
        .happy {
          margin-top: 20px;
          width: 75px;
          height: 62px;
        }
        .sad {
          margin-top: 22px;
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
    height: 510px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #e6f8df; */
    .writing-date {
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      .month-year {
        padding-left: 35px;
        font-size: 24px;
      }
      .date-day {
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
    .lined-textarea::placeholder {
      color: #ccc6ba;
      font-size: 14px;
    }
    .upload-image {
      width: 80%;
      height: 110px;
      background-image: url("/images/upload-image.png");
      background-size: contain;
      background-repeat: no-repeat;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 17px;
      .img {
        width: 24px;
        height: 24px;
      }
      .img-text {
        width: 106px;
        height: 28px;
        font-size: 24px;
      }
    }
    .upload-button {
      width: 80%;
      height: 41px;
      margin-top: 18px;
      color: #988461;
      background-color: #f9e0c5;
      border-radius: 5px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
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
