<template>
  <div class="calendar-date">
    <!-- Indecates day -->
    <div class="days">
      <div class="day main-color" v-for="(day, index) in days" :key="index">
        {{ day }}
      </div>
    </div>

    <!-- Date -->
    <div class="weeks" v-for="(week, weekIndex) in totalWeeks" :key="weekIndex">
      <div
        class="dates"
        v-for="(date, index) in week"
        :key="index"
        @click="handleClickCalendarSelected(date, days[index])"
      >
        <!-- Default date -->
        <div v-if="!isToday(date) && date != 0" class="base">
          <div>{{ date }}</div>
        </div>

        <!-- Today date -->
        <div v-if="isToday(date)" class="radius color-white">
          <div class="today">{{ date }}</div>
        </div>

        <!-- Emoji Icon -->
        <div
          v-if="date != 0"
          class="emoji"
          :style="getEmojiStyle(date, days[index])"
        ></div>

        <!-- today bar -->
        <div v-if="isToday(date)" class="underbar"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "CalendarDate",
    computed: {
      ...mapState(["days", "calendarSelected"]),
    },
    props: {
      totalWeeks: Array,
      getEmojiStyle: Function,
      isFuture: Function,
      handleClickCalendarSelected: Function,
      isToday: Function,
    },
  };
</script>

<style scoped>
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
</style>
