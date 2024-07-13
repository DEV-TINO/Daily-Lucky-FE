<template>
  <div class="calendar-container">
    <!-- Top Logo -->

    <!-- contents -->
    <div class="calendar-content">
      <!-- Calendar Top -->
      <CalendarMonth
        :handleClickChangeMonth="handleClickChangeMonth"
        :getCurrentMonth="getCurrentMonth"
      />
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
    <div class="challenge-container">
      <div class="box">
        <SelectedChallenge containerClass="calendar-page" />
      </div>
    </div>

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import { mapState, mapActions } from "vuex";
  import CalendarDate from "@/components/CalendarDate.vue";
  import CalendarMonth from "@/components/CalendarMonth.vue";
  import SelectedChallenge from "@/components/SelectedChallenge.vue";
  export default {
    name: "CalendarPage",
    components: {
      CalendarDate,
      CalendarMonth,
      SelectedChallenge,
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
      ...mapActions(["fetchPosts"]),
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
        return post ? post.emojiUrl : "";
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
    async mounted() {
      this.initCalendar();
      await this.fetchPosts({
        year: this.calendarSelected.year,
        month: this.calendarSelected.month,
      });
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

  .challenge-container {
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 80px;

    .box {
      width: 100%;
      height: 100%;
      background-color: rgba(249, 233, 197, 0.35);
      .bottom-container {
        width: 100%;
        min-height: 81px;
        height: 81px;
      }
    }
  }
</style>
