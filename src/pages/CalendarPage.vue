<template>
  <div class="calendar-container">
    <!-- contents -->
    <div class="calendar-content">
      <!-- Top Nav -->
      <div class="logo">
        <img class="logo-emoji" src="/images/lucky-lucky.png" />
        <div class="title main-color">Daily Lucky</div>
      </div>

      <!-- Calendar Top -->
      <div class="calendar-month">
        <div class="month-before" @click="changeMonth(-1)">
          {{ indicators[0] }}
        </div>
        <div class="month-now">
          <div class="month">{{ months?.[currentMonth - 1] }}</div>
          <div class="year">{{ currentYear }}</div>
        </div>
        <div class="month-after" @click="changeMonth(1)">
          {{ indicators[1] }}
        </div>
      </div>

      <!-- Calendar date -->
      <div class="calendar">
        <!-- Indecaites -->
        <div class="days">
          <div class="calendar-day" v-for="(day, index) in days" :key="index">
            {{ day }}
          </div>
        </div>

        <!-- Days -->
        <div
          class="weeks"
          v-for="(week, weekIndex) in totalWeeks"
          :key="weekIndex"
        >
          <div
            class="dates"
            v-for="(day, index) in week"
            :key="index"
            @click="
              handleClickCalendarSelected(
                day, // dates...
                days[index]
              )
            "
          >
            <!-- Default day -->
            <div class="date-base" v-if="!isToday(day) && day != 0">
              <div>{{ day }}</div>
            </div>

            <!-- Today day -->
            <div class="date-today-radius" v-if="isToday(day)">
              <div class="radius-today">{{ day }}</div>
            </div>

            <!-- Emoji Icon -->
            <div
              class="date-emoji"
              v-if="day != 0"
              :style="
                checkPostExist(day, days[index])
                  ? {
                      backgroundImage: `url(${getPostEmoji(day, days[index])})`,
                    }
                  : {}
              "
            ></div>

            <!-- today bar -->
            <div v-if="isToday(day)" class="date-today-bar"></div>
          </div>
        </div>
      </div>

      <!-- Fill Space -->
      <div class="fill-space"></div>
    </div>

    <!-- Selected Challenge -->
    <div class="challenge-content">
      <div class="calendar-challenge sub-color">
        <img class="calendar-challenge-image" src="/images/lucky-sad.png" />
        <div class="calendar-challenge-contents">
          아직 아무 챌린지도 없어요...
        </div>
      </div>
    </div>

    <!-- Bottom Nav -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  import BottomNav from "@/components/BottomNav.vue";
  export default {
    name: "CalendarPage",
    components: {
      BottomNav,
    },
    data() {
      return {
        indicators: ["<", ">"],
        bottomMenu: ["write", "calendar", "challenge"],
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

        // Today date : Default
        currentYear: "2001",
        currentMonth: "12",
        currentDate: "14",

        // totalWeeks in Month
        totalWeeks: [],
      };
    },

    methods: {
      // 캘린더의 월, 일, 년, 달을 가지고 -> post를 가져와야함..
      // 만약에 포스트가 있으면 가져와서 이모지가 보여지는데...
      // 만약에 포스트가 없으면..? 이모지가 안보이겠죠!!
      checkPostExist(date, day) {
        const check = this.$store.state.posts.filter((post, index) => {
          return (
            post.year == this.currentYear &&
            post.month == this.currentMonth &&
            post.date == date &&
            post.day == day
          );
        });

        if (check.length > 0) {
          return true;
        } else {
          return false;
        }
      },

      getPostEmoji(date, day) {
        const emoji = this.$store.state.posts.filter((post, index) => {
          return (
            post.year == this.currentYear &&
            post.month == this.currentMonth &&
            post.date == date &&
            post.day == day
          );
        })[0].emoji;
        return `/images/lucky-${emoji}.png`;
      },

      isFuture(calendarSelected) {
        const current = {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate(),
        };
        if (calendarSelected.year > current.year) return true;
        if (calendarSelected.month > current.month) return true;
        if (calendarSelected.date > current.date) return true;
        return false;
      },

      handleClickCalendarSelected(date, day) {
        const calendarSelected = {
          year: this.currentYear,
          month: this.currentMonth,
          date: date,
          day: day,
        };

        if (this.isFuture(calendarSelected)) {
          alert("미래에 대한 일기는 쓸 수 없습니다... 바보..");
          return;
        }

        // Save calendarSelected to store
        this.$store.commit("setCalendarSelected", calendarSelected);

        // Move to WritePage
        this.$router.push("/write");
      },

      initCalendar() {
        this.currentYear = new Date().getFullYear();
        this.currentMonth = new Date().getMonth() + 1;
        this.currentDate = new Date().getDate();
      },

      changeMonth(change) {
        this.currentMonth += change;
        if (this.currentMonth < 1) {
          this.currentMonth = 12;
          this.currentYear -= 1;
        } else if (this.currentMonth > 12) {
          this.currentMonth = 1;
          this.currentYear += 1;
        }
        this.totalWeeks = this.getWeeksInMonth(
          this.currentYear,
          this.currentMonth
        );
      },

      isToday(date) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        if (
          currentYear === this.currentYear &&
          currentMonth === this.currentMonth &&
          date === this.currentDate
        ) {
          return true;
        } else {
          return false;
        }
      },

      getWeeksInMonth(year, month) {
        const first = new Date(year, month - 1, 1);
        const last = new Date(year, month, 0);

        const firstDate = first.getDate();
        const lastDate = last.getDate();

        const firstDay = first.getDay();
        const lastDay = last.getDay();

        const totalDays = lastDate - firstDate + 1;

        const daysInFirstWeek = 7 - firstDay;
        const lastDays = totalDays - daysInFirstWeek;
        const totalWeeks = Math.ceil(lastDays / 7) + 1;

        let remainDays = totalDays;
        let currentDay = 1;

        const weeks = new Array(totalWeeks)
          .fill(new Array(7).fill(0))
          .map((week, weekIndex) => {
            return week.map((day, dayIndex) => {
              if (weekIndex == 0) {
                if (dayIndex >= firstDay) {
                  remainDays -= 1;
                  return currentDay++;
                } else return 0;
              } else {
                if (remainDays > 0) {
                  remainDays -= 1;
                  return currentDay++;
                } else {
                  return 0;
                }
              }
            });
          });

        return weeks;
      },
    },

    mounted() {
      this.initCalendar();
      this.totalWeeks = this.getWeeksInMonth(
        this.currentYear,
        this.currentMonth
      );
    },
  };
</script>

<style scoped>
  .calendar-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .calendar-content {
    width: 100%;
    height: 100%;
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
      font-size: 10px;
    }
  }
  .calendar-month {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: #958565;
    font-size: 32px;

    .month-before,
    .month-after {
      padding-left: 20px;
      padding-right: 20px;
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
    height: 63px;
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    font-size: 14px;
    color: #4c3a15;

    .dates {
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

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
        /* background-image: url("/images/lucky-happy.png"); */
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
        position: absolute;
        bottom: 0;
      }
    }
  }

  .fill-space {
    flex-grow: 1;
  }
  .challenge-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

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
  }
</style>
