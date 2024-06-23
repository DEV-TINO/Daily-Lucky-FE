<template>
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
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "CalendarMonth",
    computed: {
      ...mapState(["months", "calendarSelected", "indicators"]),
    },
    props: {
      handleClickChangeMonth: Function,
      getCurrentMonth: Function,
    },
  };
</script>

<style scoped>
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
</style>
