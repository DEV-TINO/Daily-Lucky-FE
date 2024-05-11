<template>
  <div class="create-challenge-container">
    <!-- Top Nav -->
    <div class="top">
      <div class="logo">
        <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
        <div class="title main-color">Daily Lucky</div>
      </div>
    </div>

    <div class="create-challenge-box">
      <!-- Create Challenge -->
      <div class="create">
        <div class="create-title">create challenge!</div>
        <div class="create-contents">
          <div class="challenge-title">Title</div>
          <input
            class="challenge-title-input"
            placeholder="Write challenge title"
          />
          <div class="challenge-contents">Contents</div>
          <textarea
            class="challenge-contents-textarea"
            placeholder="Write challenge contents"
          ></textarea>
        </div>
      </div>
      <!-- Select Date -->
      <div class="select-date">
        <div class="select-date-text">Due to</div>
        <div class="start-date">
          <div class="start-text">Start from..</div>
          <div class="start-select">시작날짜선택</div>
        </div>
        <div class="end-date">
          <div class="end-text">End to..</div>
          <div class="end-select">끝나는날짜선택</div>
        </div>
      </div>
      <!-- Save Button -->
      <div class="save-btn">저장하기!</div>
    </div>
    <!-- Bottom Nav -->
    <div class="bottom-nav">
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
    name: "CreateChallengePage",
  };
</script>

<style scoped>
  .create-challenge-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .top {
    width: 100%;
    height: 59px;
    display: flex;
    padding-top: 45px;
    justify-content: center;
    align-items: center;
    background-color: azure;
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .logo-emoji {
        width: 35px;
        height: 31px;
        margin-bottom: 5px;
      }
      .title {
        font-size: 10px;
      }
    }
  }
  .create-challenge-box {
    height: 664px;
    width: 100%;
    border: 1px solid #988461;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .create {
      width: 100%;
      height: 293px;
      background-color: #f7f7f7;
    }
    .select-date {
      width: 100%;
      height: 293px;
      background-color: #e5b4b4;
    }
    .save-btn {
      width: 331px;
      height: 41px;
      background-color: #f9e9c5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 19px;
      font-size: 24px;
      color: #988461;
    }
  }

  .bottom-nav {
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
