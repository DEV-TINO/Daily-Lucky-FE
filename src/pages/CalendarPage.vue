<template>
  <div class="calendar-container">
    <div class="calendar-logo">
      <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
      <div class="title">Daily Lucky</div>
    </div>
    <div class="calendar-month">
      <div class="month-before"><</div>
      <div class="month-now">
        <div class="month">April</div>
        <div class="year">2024</div>
      </div>
      <div class="month-after">></div>
    </div>
    <div class="calendar">
      <div class="days">
        <div class="calendar-day" v-for="(day, index) in days" :key="index">
          {{ day }}
        </div>
      </div>
      <div class="weeks" v-for="(week, index) in 5" :key="index">
        <div class="dates" v-for="(date, index) in 7" :key="index">
          <!-- <div class="date-base">
            <div class="date-base-sun" v-if="date == 1">
              {{ (week - 1) * 7 + date }}
            </div>
            <div class="date-base-sat" v-if="date == 7">
              {{ (week - 1) * 7 + date }}
            </div>
            <div class="date-base-today" v-if="date != 1 && date != 7">
              {{ (week - 1) * 7 + date }}
            </div>
          </div> -->
          <div class="date-today-radius">
            <div class="radius-today">24</div>
          </div>
          <div class="date-emoji"></div>
          <div class="date-today-bar"></div>
        </div>
      </div>
    </div>
    <div class="calendar-challenge sub-color">
      <img
        class="calendar-challenge-image"
        src="/public/images/lucky-sad.png"
      />
      <div class="calendar-challenge-contents">
        아직 아무 챌린지도 없어요...
      </div>
    </div>
    <div class="calendar-footer-menu">
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
    name: "CalendarPage",
    data() {
      return {
        days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      };
    },
  };
</script>

<style scoped>
  .calendar-container {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .calendar-logo {
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
  .calendar-month {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 80px;
    color: #958565;
    font-size: 32px;
    .month-before,
    .month-after {
      width: 50px;
      display: flex;
      justify-content: center;
    }
    .month-now {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .month {
        font-size: 48px;
        margin-bottom: 5px;
      }
      .year {
        font-size: 10px;
        margin-bottom: 10px;
      }
    }
  }

  .days {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 310px;
    height: 46px;
    gap: 15px;
  }
  .calendar-day {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    color: #958565;
    font-size: 18px;
    border-bottom: 2px solid #958565;
  }
  .calendar-day:first-child {
    color: #dd6262;
    border-bottom: 2px solid #dd6262;
  }
  .calendar-day:last-child {
    color: #737fe9;
    border-bottom: 2px solid #737fe9;
  }
  .weeks {
    width: 100%;
    height: 60.5px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding-bottom: 8px;
    align-items: center;
    font-size: 14px;
    color: #4c3a15;
  }
  .dates {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .date-base {
      width: 100%;
      height: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .date-base-sun {
        color: #dd6262;
      }
      .date-base-sat {
        color: #737fe9;
      }
    }
    .date-emoji {
      background-image: url("/public/images/lucky-happy.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .date-today-radius {
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      border-radius: 50%;
      color: #ffffff;
      background-color: rgba(149, 133, 101, 0.45);
      .radius-today {
        margin-bottom: 2px;
        margin-left: 1px;
      }
    }
    .date-today-bar {
      width: 35px;
      height: 4px;
      border-radius: 5px;
      background-color: #cbc3ae;
    }
  }
  .calendar-challenge {
    position: absolute;
    bottom: 94px;
    width: 100%;
    height: 141px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: rgba(249, 233, 197, 0.35);
    .calendar-challenge-image {
      width: 87px;
      height: 72px;
      margin-right: 28px;
    }
    .calendar-challenge-contents {
      font-size: 24px;
      color: #958565;
    }
  }
  .calendar-footer-menu {
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
