<template>
  <div class="create-challenge-container">
    <!-- Top Logo -->

    <div class="create-challenge-box">
      <!-- Create Challenge -->
      <CreateChallenge v-model="challenge" />

      <!-- Select Date -->
      <SelectDate
        v-model="chooseDate"
        :startDateOptions="startDateOptions"
        :endDateOptions="endDateOptions"
        @startDateChange="onStartDateChange"
      />
      <!-- Save Button -->
      <div class="save-btn color-text" @click="handleClickSaveChallenge()">
        저장하기!
      </div>
    </div>
    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import CreateChallenge from "@/components/CreateChallenge.vue";
  import SelectDate from "@/components/SelectDate.vue";
  import { mapState } from "vuex";
  export default {
    name: "CreateChallengePage",
    components: {
      CreateChallenge,
      SelectDate,
    },
    computed: {
      ...mapState(["months", "days"]),
    },
    data() {
      return {
        challenge: {
          title: "",
          contents: "",
        },
        chooseDate: {
          startDate: "",
          endDate: "",
        },
        startDateOptions: [],
        endDateOptions: [],
      };
    },
    created() {
      this.initDates();
    },
    methods: {
      initDates() {
        const today = new Date();
        this.startDateOptions = this.generateFutureDateOptions(today, 30);
        this.chooseDate.startDate = this.formatDate(today);
        this.setEndDateOptions(today);
        this.chooseDate.endDate = this.endDateOptions[0];
      },
      formatDate(date) {
        return `${date.getFullYear()} ${
          this.months[date.getMonth()]
        } ${date.getDate()} ${this.days[date.getDay()]}`;
      },

      generateFutureDateOptions(baseDate, daysToAdd) {
        const dateOptions = [];
        Array(daysToAdd)
          .fill(0)
          .forEach((_, i) => {
            const date = new Date(baseDate);
            date.setDate(baseDate.getDate() + i);
            dateOptions.push(this.formatDate(date));
          });
        return dateOptions;
      },

      setEndDateOptions(startDate) {
        const startDateObj = new Date(startDate);
        this.endDateOptions = this.generateFutureDateOptions(startDateObj, 30);
      },

      onStartDateChange(event) {
        const selectedDate = event.target.value;
        const startDate = this.parseDate(selectedDate);
        this.setEndDateOptions(startDate);
        this.chooseDate.endDate = this.endDateOptions[0];
      },

      parseDate(dateStr) {
        const [year, month, date, day] = dateStr.split(" ");
        const monthIndex = this.months.indexOf(month);
        const dateIndex = parseInt(date);
        return new Date(year, monthIndex, dateIndex);
      },

      handleClickSaveChallenge() {
        const newChallenge = {
          title: this.challenge.title,
          content: this.challenge.contents,
          startDate: this.chooseDate.startDate,
          dueDate: this.chooseDate.endDate,
        };
        this.$store.dispatch("createChallenge", newChallenge);
        this.$router.push("/challenge");
      },
    },
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
  .create-challenge-box {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .save-btn {
      width: 331px;
      height: 41px;
      background-color: #f9e9c5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 19px;
      font-size: 24px;
    }
  }
</style>
