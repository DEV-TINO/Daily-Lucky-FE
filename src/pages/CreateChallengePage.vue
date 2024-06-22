<template>
  <div class="create-challenge-container">
    <!-- Top Logo -->

    <div class="create-challenge-box">
      <!-- Create Challenge -->
      <CreateChallenge v-model="challenge" />

      <!-- Select Date -->
      <div class="select-date-container">
        <div class="header main-color">Due to</div>
        <div class="start-date color-coral">
          <div class="text">Start from..</div>
          <div class="start-select-box main-color">
            <div>
              <select
                class="select-date start main-color"
                v-model="startDate"
                @change="onStartDateChange($event)"
              >
                <option
                  v-for="date in startDateOptions"
                  :key="date"
                  :value="date"
                >
                  {{ date }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="end-date color-coral">
          <div class="text">End to..</div>
          <div class="end-select-box main-color">
            <div>
              <select class="select-date end main-color" v-model="endDate">
                <option
                  v-for="date in endDateOptions"
                  :key="date"
                  :value="date"
                >
                  {{ date }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
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
  import { mapState } from "vuex";
  export default {
    name: "CreateChallengePage",
    components: {
      CreateChallenge,
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
        startDate: "",
        endDate: "",
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
        this.startDate = this.formatDate(today);
        this.setEndDateOptions(today);
        this.endDate = this.endDateOptions[0];
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
        this.endDate = this.endDateOptions[0];
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
          startDate: this.startDate,
          dueDate: this.endDate,
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
    .select-date-container {
      width: 80%;
      height: 293px;
      display: flex;
      flex-direction: column;
      .header {
        font-size: 24px;
      }
      .start-date {
        .text {
          font-size: 20px;
          margin: 27px 0px 21px 13px;
        }
        .start-select-box {
          font-size: 24px;
          text-align: center;
        }
      }
      .end-date {
        .text {
          font-size: 20px;
          margin: 30px 0px 21px 13px;
        }
        .end-select-box {
          font-size: 24px;
          text-align: center;
        }
      }
      .select-date {
        border: none;
        background-color: #f8f6e9;
        outline: none;
        font-size: 24px;
        font-family: "custom-font";
      }
    }
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
