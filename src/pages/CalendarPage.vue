<template>
  <div class="calendar-container">
    <!-- contents -->
    <div class="calendar-content">
      <!-- Top Nav -->
      <div class="logo">
        <img class="image" src="/images/lucky-lucky.png" />
        <div class="title main-color">Daily Lucky</div>
      </div>

      <!-- Calendar Top -->
      <div class="calendar-month">
        <div class="before" @click="changeMonth(-1)">
          {{ indicators.left }}
        </div>
        <div class="current">
          <div class="month">{{ months?.[currentMonth - 1] }}</div>
          <!-- <div class="month">{{ getMonthName }}</div> -->
          <div class="year">{{ currentYear }}</div>
        </div>
        <div class="after" @click="changeMonth(1)">
          {{ indicators.right }}
        </div>
      </div>

      <!-- Calendar date -->
      <div class="calendar-date">
        <!-- Indecates day -->
        <div class="days">
          <div class="day" v-for="(day, index) in days" :key="index">
            {{ day }}
          </div>
        </div>

        <!-- Date -->
        <div
          class="weeks"
          v-for="(week, weekIndex) in totalWeeks"
          :key="weekIndex"
        >
          <div
            class="dates"
            v-for="(date, index) in week"
            :key="index"
            @click="handleClickCalendarSelected(date, days[index])"
          >
            <!-- Default date -->
            <div class="base" v-if="!isToday(date) && date != 0">
              <div>{{ date }}</div>
            </div>

            <!-- Today date -->
            <div class="radius" v-if="isToday(date)">
              <div class="today">{{ date }}</div>
            </div>

            <!-- Emoji Icon -->
            <div
              class="emoji"
              v-if="date != 0"
              :style="
                checkPostExist(date, days[index])
                  ? {
                      backgroundImage: `url(${getPostEmoji(
                        date,
                        days[index]
                      )})`,
                    }
                  : {}
              "
            ></div>

            <!-- today bar -->
            <div v-if="isToday(date)" class="underbar"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Selected Challenge -->
    <div class="selected-challenge">
      <div class="challenge-container sub-color">
        <div class="exist" v-if="selectedChallenge">
          <div class="title">{{ selectedChallenge.title }}</div>
          <div class="content">
            {{ selectedChallenge.content }}
          </div>
          <div class="dueDate">
            {{ selectedChallenge.startDate }} - {{ selectedChallenge.dueDate }}
          </div>
        </div>
        <div class="no-exist" v-else>
          <img class="emoji" src="/images/lucky-sad.png" />
          <div class="content">아직 아무 챌린지도 없어요...</div>
        </div>
      </div>
    </div>
    <!-- <div class="bottom-container"></div> -->

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  export default {
    name: "CalendarPage",
    data() {
      return {
        indicators: { left: "<", right: ">" },
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

        selectedChallenge: this.$store.state.selectedChallenge,
      };
    },

    methods: {
      // Check if post exists
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

      // Get post emoji
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

      //
      getDayStyle(date, day) {
        if (checkPostExist(date, day)) {
          return {
            backgroundImage: `url(${getPostEmoji(date, day)})`,
          };
        }
        return {};
      },
      isFuture(calendarSelected) {
        const current = {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate(),
        };

        // Compare years first
        if (calendarSelected.year > current.year) return true;
        if (calendarSelected.year < current.year) return false;

        // If years are equal, compare months
        if (calendarSelected.month > current.month) return true;
        if (calendarSelected.month < current.month) return false;

        // If months are equal, compare dates
        if (calendarSelected.date > current.date) return true;
        return false;
      },

      handleClickCalendarSelected(date, day) {
        if (!date) return;

        // if date is not zero
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
    justify-content: space-between;
  }
  .calendar-content {
    width: 100%;
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
    .image {
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

    .before,
    .after {
      padding-left: 20px;
      padding-right: 20px;
      width: 50px;
      display: flex;
      justify-content: center;
    }

    .current {
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

  .day {
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

  .day:first-child {
    color: #dd6262;
    border-bottom: 2px solid #dd6262;
  }

  .day:last-child {
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

      .base {
        width: 100%;
        height: 16px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .base-sun {
          color: #dd6262;
        }

        .base-sat {
          color: #737fe9;
        }
      }

      .emoji {
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .radius {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        border-radius: 50%;
        color: #ffffff;
        background-color: rgba(149, 133, 101, 0.45);

        .today {
          margin-bottom: 2px;
          margin-left: 1px;
        }
      }

      .underbar {
        width: 35px;
        height: 4px;
        border-radius: 5px;
        background-color: #cbc3ae;
        position: absolute;
        bottom: 0;
      }
    }
  }

  .selected-challenge {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 80px;

    .challenge-container {
      width: 100%;
      height: 100%;
      background-color: rgba(249, 233, 197, 0.35);

      .exist {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        padding-top: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        .title {
          font-size: 28px;
        }
        .content {
          font-size: 14px;
          padding-top: 10px;
          color: #78540a;
        }
        .dueDate {
          font-size: 12px;
          align-self: flex-end;
          margin-top: auto;
          padding-right: 15px;
          padding-bottom: 15px;
        }
      }
      .no-exist {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      }

      .emoji {
        width: 87px;
        height: 72px;
        margin-right: 28px;
      }

      .content {
        font-size: 24px;
        color: #958565;
      }
    }
    .bottom-container {
      width: 100%;
      min-height: 81px;
      height: 81px;
    }
  }
</style>
