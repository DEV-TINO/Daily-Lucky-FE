<template>
  <div class="create-challenge-container">
    <!-- Top Nav -->
    <div class="top">
      <div class="logo">
        <img class="emoji" src="/images/lucky-lucky.png" />
        <div class="title main-color">Daily Lucky</div>
      </div>
    </div>

    <div class="create-challenge-box">
      <!-- Create Challenge -->
      <div class="container">
        <div class="header main-color">Create Challenge!</div>
        <div class="contents">
          <div class="title main-color">Title</div>
          <textarea
            v-model="challengeTitle"
            class="title-textarea main-color"
            placeholder="Write challenge title"
          ></textarea>
          <div class="content main-color">Contents</div>
          <textarea
            v-model="challengeContents"
            class="content-textarea main-color"
            placeholder="Write challenge contents"
          ></textarea>
        </div>
      </div>
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
  import { mapState } from "vuex";
  export default {
    name: "CreateChallengePage",
    computed: {
      ...mapState(["months", "days"]),
    },
    data() {
      return {
        challengeTitle: "",
        challengeContents: "",
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
          title: this.challengeTitle,
          content: this.challengeContents,
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
  .top {
    width: 100%;
    height: 59px;
    display: flex;
    padding-top: 45px;
    justify-content: center;
    align-items: center;
    .logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .emoji {
        width: 35px;
        height: 31px;
        margin-bottom: 5px;
      }
      .title {
        font-size: 10px;
      }
    }
  }
  .create-challenge-box {
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .container {
      height: auto;
      width: 100%;
      margin-top: 29px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .header {
        height: 30px;
        width: 333px;
        display: flex;
        justify-content: flex-start;
        font-size: 24px;
      }
      .contents {
        height: 220px;
        width: 80%;
        margin-top: 17px;
        font-size: 24px;
        .title-textarea {
          width: 100%;
          height: 37px;
          margin-bottom: 15px;
          box-sizing: border-box;
          background-image: url("/images/line.png");
          background-position: bottom;
          background-size: contain;
          background-repeat: no-repeat;
          font-size: 14px;
          text-align: start;
          line-height: 35px;
          font-family: "custom-font";
          background-color: transparent;
          border: none;
          overflow: clip;
          resize: none;
          text-wrap: nowrap;
        }
        .title-textarea::placeholder {
          color: #ccc6ba;
        }
        .title-textarea:focus {
          outline: none;
        }
        .content-textarea {
          width: 100%;
          height: 80px;
          box-sizing: border-box;
          background-image: url("/images/line2.png");
          background-position: bottom;
          background-size: contain;
          background-repeat: no-repeat;
          font-size: 14px;
          text-align: start;
          line-height: 40px;
          font-family: "custom-font";
          background-color: transparent;
          border: none;
          overflow: clip;
          resize: none;
        }
        .content-textarea::placeholder {
          color: #ccc6ba;
        }
        .content-textarea:focus {
          outline: none;
        }
      }
    }
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
