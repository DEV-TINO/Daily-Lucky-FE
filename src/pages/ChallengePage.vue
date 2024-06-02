<template>
  <div class="challenge-container">
    <!-- top Nav -->
    <div class="top">
      <div class="logo">
        <img class="logo-emoji" src="/images/lucky-lucky.png" />
        <div class="title">Daily Lucky</div>
      </div>
    </div>

    <!-- Selected Challenge -->
    <div class="challenge">
      <div class="challenge-menu">
        <div class="challenge-text main-color">Challenge!</div>
      </div>
      <div class="challenge-selected" v-if="selectedChallenge">
        <div class="selected-title">{{ selectedChallenge.title }}</div>
        <div class="selected-context">
          {{ selectedChallenge.content }}
        </div>
        <div class="selected-date">{{ selectedChallenge.dueDate }}</div>
      </div>
      <div class="challenge-no-selected" v-else>
        <img class="img" src="/images/lucky-sad.png" />
        <div class="text main-color">아직 아무 챌린지도 없어요...</div>
      </div>
    </div>

    <!-- Challenge List -->
    <div class="challenge-list">
      <div class="list-text main-color">List</div>
      <div class="list-box-empty" v-if="challenges.length === 0">
        <div class="no-list">
          <!-- if Challenge List is empty -->
          <img class="no-list-img" src="/images/lucky-sad.png" />
          <div class="no-list-context main-color">
            아직 아무 챌린지도 없어요...
          </div>
        </div>
      </div>

      <!-- if Challenge exists in the Challenge List -->
      <div class="list-box-exist" v-else>
        <div class="exist-list">
          <div
            class="challenge-box"
            v-for="(challenge, index) in challenges"
            :key="index"
            :class="index % 2 ? 'even-challenge' : 'odd-challenge'"
          >
            <img class="emoji" src="/images/lucky-lucky.png" />
            <div class="contents">
              <div class="title-box">
                <div class="title">
                  {{ challenge.title }}
                </div>
                <div class="buttons">
                  <div class="select-btn" @click="selectChallenge(challenge)">
                    선택하기
                  </div>
                  <div
                    class="delete-btn color-red"
                    @click="deleteChallenge(index)"
                  >
                    삭제하기
                  </div>
                </div>
              </div>
              <div class="content">
                {{ challenge.content }}
              </div>
              <div class="dueDate">
                {{ challenge.dueDate }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Make Challenge Button -->
      <div class="challenge-make-btn" @click="handleClickMakeChallenge">
        챌린지 만들러 가기
      </div>
    </div>

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "ChallengePage",
    data() {
      return {
        selectedChallenge: this.$store.state.selectedChallenge,
      };
    },
    methods: {
      handleClickMakeChallenge() {
        this.$router.push("/create-challenge");
      },
      deleteChallenge(index) {
        const challengeToDelete = this.challenges[index];
        this.$store.commit("deleteChallenge", index);
        if (
          this.selectedChallenge &&
          this.selectedChallenge === challengeToDelete
        ) {
          this.$store.commit("selectChallenge", null);
          this.selectedChallenge = null;
        }
      },
      selectChallenge(challenge) {
        this.$store.commit("selectChallenge", challenge);
        this.selectedChallenge = challenge;
        console.log(challenge);
      },
    },
    computed: {
      ...mapGetters(["getChallenges"]),
      challenges() {
        return this.getChallenges || [];
      },
    },
  };
</script>

<style scoped>
  .challenge-container {
    min-height: 100%;
    height: auto;
    overflow: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .top {
    width: 100%;
    height: 59px;
    display: flex;
    padding-top: 45px;
    gap: 95px;
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
        color: #958565;
      }
    }
  }

  .challenge {
    width: 100%;
    min-height: 206px;
    /* height: max-content; */
    height: 100%;

    .challenge-menu {
      width: 100%;
      height: 65px;

      .challenge-text {
        font-size: 24px;
        padding-left: 26px;
        padding-top: 27px;
      }
    }
    .challenge-selected {
      font-size: 40px;
      min-height: 141px;
      height: auto;
      background-color: rgba(249, 233, 197, 0.35);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 13px;
      padding: 15px 43px;
      .selected-title {
        font-size: 28px;
      }
      .selected-context {
        font-size: 14px;
        color: #78540a;
      }
      .selected-date {
        font-size: 12px;
        text-align: right;
      }
    }
    .challenge-no-selected {
      min-height: 141px;
      height: auto;
      background-color: rgba(249, 233, 197, 0.35);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 15px 43px;
      .img {
        width: 87px;
        height: 72px;
      }
      .text {
        font-size: 24px;
      }
    }
  }
  .challenge-list {
    height: 410px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
    padding: 20px;
    .list-text {
      width: 100%;
      text-align: left;
      padding-left: 29px;
      font-size: 24px;
    }

    .list-box-empty {
      width: 331px;
      height: 369px;
      border: 1px solid #958565;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .no-list {
        gap: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .no-list-img {
          width: 132px;
          height: 109px;
        }
        .no-list-context {
          font-size: 24px;
        }
      }
    }
    .list-box-exist {
      width: 331px;
      height: 600px;
      border: 1px solid #958565;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow-y: auto;
      .exist-list {
        width: 100%;
        display: flex;
        flex-direction: column;
        .odd-challenge {
          background-color: #f8f1dc;
        }
        .even-challenge {
          background-color: rgba(255, 255, 255, 0.35);
        }
        .challenge-box {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction: row;
          align-items: center;
          .emoji {
            width: 45px;
            height: 40px;
            padding: 0 15px;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.9));
          }
          .contents {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100px;
            /* justify-content: center; */
            .title-box {
              width: 255px;
              padding-top: 18px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
              .title {
                font-size: 20px;
                max-width: 145px;
                /* Text가 길이보다..,, ->길이가 정해져 있어야만 사용 가능해요.. */
                text-overflow: ellipsis;
                overflow: hidden;
                text-wrap: nowrap;
              }
              .buttons {
                display: flex;
                flex-direction: row;
                padding-right: 20px;
                gap: 10px;
                .select-btn {
                  width: fit-content;
                  height: 16px;
                  font-size: 14px;
                  color: rgb(117, 117, 241);
                }
                .delete-btn {
                  width: fit-content;
                  height: 16px;
                  font-size: 14px;
                }
              }
            }
            .content {
              display: -webkit-box;
              padding-top: 5px;
              font-size: 10px;
              color: #78540a;
              max-width: 235px;
              -webkit-line-clamp: 2;
              line-clamp: 2;
              overflow: hidden;
              height: 23px;
              -webkit-box-orient: vertical;

              /* Text가 길이보다..,, ->길이가 정해져 있어야만 사용 가능해요.. */
              /* text-overflow: ellipsis; */
              /* overflow: hidden; */
              /* text-wrap: nowrap; */
            }
            .dueDate {
              padding-top: 8px;
              font-size: 10px;
              text-align: right;
              padding-right: 25px;
            }
          }
        }
      }
    }

    .challenge-make-btn {
      width: 331px;
      height: 41px;
      min-height: 41px;
      background-color: #f9e9c5;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: #988461;
    }
  }
</style>
