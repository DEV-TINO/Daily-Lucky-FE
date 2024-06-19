<template>
  <div class="calendar-container">
    <!-- Top Logo -->
    <!-- contents -->
    <div class="calendar-content">
      <!-- Calendar Top -->
      <div class="calendar-month main-color">
        <div class="before" @click="handleClickChangeMonth(-1)">
          {{ indicators.left }}
        </div>
        <div class="current">
          <div class="month">{{ getCurrentMonth(calendarSelected.month) }}</div>
          <div class="year">{{ calendarSelected.year }}</div>
        </div>
        <div class="after" @click="handleClickChangeMonth(1)">
          {{ indicators.right }}
        </div>
      </div>

      <!-- Calendar date -->
      <CalendarDate
        :totalWeeks="totalWeeks"
        :getEmojiStyle="getEmojiStyle"
        :isFuture="isFuture"
        :handleClickCalendarSelected="handleClickCalendarSelected"
        :isToday="isToday"
      />
    </div>

    <!-- Selected Challenge -->
    <div class="selected-challenge">
      <div class="challenge-container sub-color">
        <div v-if="selectedChallenge" class="exist">
          <div class="title">{{ selectedChallenge.title }}</div>
          <div class="content color-content">
            {{ selectedChallenge.content }}
          </div>
          <div class="dueDate">
            {{ selectedChallenge.startDate }} - {{ selectedChallenge.dueDate }}
          </div>
        </div>
        <div class="no-exist" v-if="!selectedChallenge">
          <img class="emoji" src="/images/lucky-sad.png" />
          <div class="content main-color">아직 아무 챌린지도 없어요...</div>
        </div>
      </div>
    </div>
    <!-- <div class="bottom-container"></div> -->

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import CalendarDate from "@/components/CalendarDate.vue";
  export default {
    name: "CalendarPage",
    components: {
      CalendarDate,
    },
    computed: {
      ...mapState([
        "bottomMenu",
        "days",
        "months",
        "selectedChallenge",
        "calendarSelected",
        "totalWeeks",
        "indicators",
      ]),
    },
    methods: {
      // Check if post exists
      checkPostExist(date, day) {
        const check = this.$store.state.posts.filter((post, index) => {
          return (
            post.year == this.calendarSelected.year &&
            post.month == this.calendarSelected.month &&
            post.date == date &&
            post.day == day
          );
        });

        return check.length > 0;
      },

      // Get post emoji
      getPostEmoji(date, day) {
        const emoji = this.$store.state.posts.filter((post, index) => {
          return (
            post.year == this.calendarSelected.year &&
            post.month == this.calendarSelected.month &&
            post.date == date &&
            post.day == day
          );
        })[0].emoji;
        return `/images/lucky-${emoji}.png`;
      },

      getEmojiStyle(date, day) {
        if (this.checkPostExist(date, day)) {
          return {
            backgroundImage: `url(${this.getPostEmoji(date, day)})`,
          };
        }
        return {};
      },
      handleClickCalendarSelected(date, day) {
        if (!date) return;

        // if date is not zero
        const calendarSelected = {
          year: this.calendarSelected.year,
          month: this.calendarSelected.month,
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

      isToday(date) {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;

        if (
          currentYear === this.calendarSelected.year &&
          currentMonth === this.calendarSelected.month &&
          date === this.calendarSelected.date
        ) {
          return true;
        } else {
          return false;
        }
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

      initCalendar() {
        this.$store.commit("setCalendarSelected", {
          year: new Date().getFullYear(),
          month: new Date().getMonth() + 1,
          date: new Date().getDate(),
        });
        this.setTotalWeeks();
      },

      handleClickChangeMonth(change) {
        const newMonth = this.calendarSelected.month + change;
        if (newMonth < 1) {
          this.$store.commit("setCalendarSelected", {
            ...this.calendarSelected,
            month: 12,
            year: this.calendarSelected.year - 1,
          });
        } else if (newMonth > 12) {
          this.$store.commit("setCalendarSelected", {
            ...this.calendarSelected,
            month: 1,
            year: this.calendarSelected.year + 1,
          });
        } else {
          this.$store.commit("setCalendarSelected", {
            ...this.calendarSelected,
            month: newMonth,
          });
        }
        this.setTotalWeeks();
      },

      setTotalWeeks() {
        this.$store.commit(
          "setTotalWeeks",
          this.getWeeksInMonth(
            this.calendarSelected.year,
            this.calendarSelected.month
          )
        );
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

      getCurrentMonth() {
        return this.months[this.calendarSelected.month - 1];
      },
    },

    mounted() {
      this.initCalendar();
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
  .calendar-month {
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
      }
    }
    .bottom-container {
      width: 100%;
      min-height: 81px;
      height: 81px;
    }
  }
</style>
