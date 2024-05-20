<template>
  <div class="challenge-container">
    <!-- Top Nav -->
    <div class="top">
      <div class="logo">
        <img class="logo-emoji" src="/images/lucky-lucky.png" />
        <div class="title">Daily Lucky</div>
      </div>
    </div>

    <!-- Selected Challenge -->
    <div class="challenge">
      <div class="challenge-title">
        <div class="challenge-text main-color">Challenge!</div>
      </div>
      <div class="challenge-selected">
        <div class="selected-title">없어져라 비듬비듬!</div>
        <div class="selected-context">
          이번주에 당신의 비듬은 안녕하신가요?<br />여태까지 목표한 4주 중 2일의
          비듬을 없앴답니다! 앞으로도 노력하새요!
        </div>
        <div class="selected-date">2024.04.24-2024.05.12</div>
      </div>
    </div>

    <!-- Challenge List -->
    <div class="challenge-list">
      <div class="list-text main-color">List</div>
      <div class="list-box">
        <div class="no-list">
          <img class="no-list-img" src="/images/lucky-sad.png" />
          <div class="no-list-context main-color">
            아직 아무 챌린지도 없어요...
          </div>
        </div>
      </div>
      <!-- Make Challenge Button -->
      <div class="challenge-make-btn">챌린지 만들러 가기</div>
    </div>

    <!-- Bottom Nav -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  import BottomNav from "@/components/BottomNav.vue";
  export default {
    name: "ChallengePage",
    components: {
      BottomNav,
    },
  };
</script>

<style scoped>
  .challenge-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .top {
    width: 100%;
    height: 59px;
    display: flex;
    padding-top: 45px;
    gap: 95px;
    justify-content: center;
    align-items: center;
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
        color: #958565;
      }
    }
  }

  .challenge {
    width: 100%;
    height: 206px;
    .challenge-title {
      width: 100%;
      height: 65px;
      .challenge-text {
        font-size: 24px;
        padding-left: 26px;
        padding-top: 27px;
      }
    }
    .challenge-selected {
      font-size: 40px;
      height: 141px;
      background-color: rgba(249, 233, 197, 0.35);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 13px;
      padding-left: 43px;
      .selected-title {
        font-size: 28px;
      }
      .selected-context {
        font-size: 14px;
        color: #78540a;
      }
      .selected-date {
        font-size: 12px;
        text-align: right;
        padding-right: 31px;
      }
    }
  }
  .challenge-list {
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 27px;
    padding: 20px;
    .list-text {
      width: 100%;
      text-align: left;
      padding-left: 29px;
      font-size: 24px;
    }
    .list-box {
      width: 331px;
      height: 369px;
      border: 1px solid #958565;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .no-list {
        gap: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .no-list-img {
          width: 132px;
          height: 109px;
        }
        .no-list-context {
          font-size: 24px;
        }
      }
    }
    .challenge-make-btn {
      width: 331px;
      height: 41px;
      min-height: 41px;
      background-color: #f9e9c5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: #988461;
    }
  }
</style>
