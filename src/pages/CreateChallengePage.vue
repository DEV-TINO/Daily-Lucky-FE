<template>
  <div class="create-challenge-container">
    <!-- Top Nav -->
    <div class="top">
      <div class="logo">
        <img class="logo-emoji" src="/images/lucky-lucky.png" />
        <div class="title main-color">Daily Lucky</div>
      </div>
    </div>

    <div class="create-challenge-box">
      <!-- Create Challenge -->
      <div class="create">
        <div class="create-title main-color">Create Challenge!</div>
        <div class="create-contents">
          <div class="challenge-title main-color">Title</div>
          <textarea
            v-model="challengeTitle"
            class="challenge-title-textarea main-color"
            placeholder="Write challenge title"
          ></textarea>
          <div class="challenge-contents main-color">Contents</div>
          <textarea
            v-model="challengeContents"
            class="challenge-contents-textarea main-color"
            placeholder="Write challenge contents"
          ></textarea>
        </div>
      </div>
      <!-- Select Date -->
      <div class="select-date-container">
        <div class="select-date-text main-color">Due to</div>
        <div class="start-date">
          <div class="start-text">Start from..</div>
          <div class="start-select main-color">
            <div class="select-date">
              <div class="date-box">
                <div>MAY</div>
                <div>2024</div>
                <div>⌄</div>
              </div>
              <div class="date-box">
                <div>24</div>
                <div>Friday</div>
                <div>⌄</div>
              </div>
            </div>
          </div>
        </div>
        <div class="end-date">
          <div class="end-text">End to..</div>
          <div class="end-select main-color">
            <div class="select-date">
              <div class="date-box">
                <div>MAY</div>
                <div>2024</div>
                <div>⌄</div>
              </div>
              <div class="date-box">
                <div>24</div>
                <div>Friday</div>
                <div>⌄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Save Button -->
      <div class="save-btn" @click="saveChallenge">저장하기!</div>
    </div>
    <!-- Bottom Nav -->
  </div>
</template>

<script>
  export default {
    name: "CreateChallengePage",
    data() {
      return {
        challengeTitle: "",
        challengeContents: "",
      };
    },
    methods: {
      saveChallenge() {
        const newChallenge = {
          title: this.challengeTitle,
          content: this.challengeContents,
          dueDate: "2024-12-14",
        };
        console.log(this.challengeTitle);
        console.log(this.challengeContents);
        console.log("Saving Challenge:", newChallenge);
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
      .logo-emoji {
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
    .create {
      height: auto;
      width: 100%;
      margin-top: 29px;
      display: flex;
      flex-direction: column;
      align-items: center;
      .create-title {
        height: 30px;
        width: 333px;
        display: flex;
        justify-content: flex-start;
        font-size: 24px;
      }
      .create-contents {
        height: 220px;
        width: 80%;
        margin-top: 17px;
        font-size: 24px;
        .challenge-title-textarea {
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
        }
        .challenge-title-textarea::placeholder {
          color: #ccc6ba;
        }
        .challenge-title-textarea:focus {
          outline: none;
        }
        .challenge-contents-textarea {
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
        .challenge-contents-textarea::placeholder {
          color: #ccc6ba;
        }
        .challenge-contents-textarea:focus {
          outline: none;
        }
      }
    }
    .select-date-container {
      width: 80%;
      height: 293px;
      .select-date-text {
        font-size: 24px;
      }
      .start-date {
        .start-text {
          font-size: 20px;
          margin: 18px 0px 21px 13px;
          color: #ff8e8c;
        }
        .start-select {
          font-size: 24px;
          text-align: center;
        }
      }
      .end-date {
        .end-text {
          font-size: 20px;
          margin: 41px 0px 21px 13px;
          color: #ff8e8c;
        }
        .end-select {
          font-size: 24px;
          text-align: center;
        }
      }
      .select-date {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        width: 100%;
        height: 28px;
        .date-box {
          width: 111px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
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
      color: #988461;
    }
  }
</style>
