<template>
  <div class="calendar-container">
    <!-- Top Nav -->
    <div class="calendar-logo">
      <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
      <div class="title">Daily Lucky</div>
    </div>

    <!-- Calendar Top -->
    <div class="calendar-month">
      <div class="month-before" @click="changeMonth(-1)"><</div>
      <div class="month-now">
        <div class="month">{{ months[currentMonth] }}</div>
        <div class="year">{{ currentYear }}</div>
      </div>
      <div class="month-after" @click="changeMonth(1)">></div>
    </div>

    <!-- Calendar date -->
    <div class="calendar">
      <div class="days">
        <div class="calendar-day" v-for="(day, index) in days" :key="index">
          {{ day }}
        </div>
      </div>
      <div class="weeks" v-for="(week, index) in 6" :key="index">
        <div class="dates" v-for="(date, index) in 7" :key="index">
          <!-- <div class="date-base">
            <div class="date-base-sun" v-if="date == 1">
              {{ (week - 1) * 7 + date }}
            </div>
            <div class="date-base-sat" v-if="dates == 7">
              {{ (week - 1) * 7 + date }}
            </div>
            <div class="date-base-today" v-if="date != 1 && date != 7">
              {{ (week - 1) * 7 + date }}
            </div>
          </div> -->

          <!-- Selected date -->
          <div class="date-today-radius">
            <div class="radius-today">24</div>
          </div>
          <div class="date-emoji"></div>
          <div class="date-today-bar"></div>

          <!-- <div class="weeks">
            <div v-for="(week, index) in calendarData" :key="index">
              <div class="date-base" v-for="(date, index) in week" :key="index">
                <div class="date-today-radius" v-if="isToday(date)">
                  <div class="radius-today">{{ currentDate }}</div>
                </div>
                <div v-else>{{ currentDate }}</div>
                <div class="date-emoji"></div>
                <div class="date-today-bar" v-if="isToday(date)"></div>
              </div>
            </div>
          </div> -->
        </div>
      </div>
    </div>

    <!-- Fill Space -->
    <div class="fill-space"></div>

    <!-- Selected Challenge -->
    <div class="calendar-challenge sub-color">
      <img
        class="calendar-challenge-image"
        src="/public/images/lucky-sad.png"
      />
      <div class="calendar-challenge-contents">
        아직 아무 챌린지도 없어요...
      </div>
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
    name: "CalendarPage",
    data() {
      return {
        days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
        months: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        currentDate: new Date().getDate(),
        daysArray: [],
        date: 1,
        calendarData: [],
      };
    },

    mounted() {
      this.calendarData = this.generateCalendar();
    },

    methods: {
      changeMonth(change) {
        this.currentMonth += change;
        if (this.currentMonth < 0) {
          this.currentMonth = 11;
          this.currentYear -= 1;
        } else if (this.currentMonth > 11) {
          this.currentMonth = 0;
          this.currentYear += 1;
        }
        this.calendarData = this.generateCalendar();
      },
      generateCalendar() {
        this.date = 1;
        this.daysArray = [];
        const startDay = new Date(
          this.currentYear,
          this.currentMonth,
          1
        ).getDay();
        const daysInMonth = new Date(
          this.currentYear,
          this.currentMonth + 1,
          0
        ).getDate();
        for (let i = 0; i < 6; i++) {
          this.daysArray.push([]);
          for (let j = 0; j < 7; j++) {
            if (this.date > daysInMonth) {
              break;
            } else {
              this.daysArray[i][j] = new Date(
                this.currentYear,
                this.currentMonth,
                this.date
              );
              this.date++;
            }
          }
        }
        return this.daysArray;
        console.log(this.daysArray);
      },
      isToday(date) {
        return (
          date.getFullYear() === new Date().getFullYear() &&
          date.getMonth() === new Date().getMonth() &&
          date.getDate() === new Date().getDate()
        );
      },
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
  .fill-space {
    flex-grow: 1;
  }
  .calendar-challenge {
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
  .bottom-nav {
    width: 100%;
    height: 64px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ddcbac;
    gap: 50px;
    .menu-write,
    .menu-calendar,
    .menu-challenge {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }
    .write-img,
    .calendar-img,
    .challenge-img {
      width: 37px;
      height: 35px;
    }
    .write-text,
    .calendar-text,
    .challenge-text {
      font-size: 10px;
      color: #988461;
    }
  }
</style>
