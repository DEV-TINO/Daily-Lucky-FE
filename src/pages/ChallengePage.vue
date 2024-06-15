<template>
  <div class="challenge-container">
    <!-- top Nav -->
    <div class="top">
      <div class="logo">
        <img class="emoji" src="/images/lucky-lucky.png" />
        <div class="title">Daily Lucky</div>
      </div>
    </div>

    <!-- Selected Challenge -->
    <div class="challenge">
      <div class="menu">
        <div class="text main-color">Challenge!</div>
      </div>
      <div class="selected-challenge" v-if="selectedChallenge">
        <div class="title">{{ selectedChallenge.title }}</div>
        <div class="content">
          {{ selectedChallenge.content }}
        </div>
        <div class="date">
          {{ selectedChallenge.startDate }} - {{ selectedChallenge.dueDate }}
        </div>
      </div>
      <div class="no-selected-challenge" v-else>
        <img class="image" src="/images/lucky-sad.png" />
        <div class="text main-color">아직 아무 챌린지도 없어요...</div>
      </div>
    </div>

    <!-- Challenge List -->
    <div class="challenge-list">
      <div class="text main-color">List</div>
      <!-- if Challenge List is empty -->
      <div class="no-exist" v-if="challenges.length === 0">
        <div class="box">
          <img class="image" src="/images/lucky-sad.png" />
          <div class="text main-color">아직 아무 챌린지도 없어요...</div>
        </div>
      </div>

      <!-- if Challenge exists in the Challenge List -->
      <div class="exist" v-else>
        <div class="box">
          <div
            class="list"
            v-for="(challenge, index) in challenges"
            :key="index"
            :class="applyChallengeStyle(index)"
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
                {{ challenge.startDate }} -
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
      },
      applyChallengeStyle(index) {
        return index % 2 ? "even-challenge" : "odd-challenge";
      },
    },
    computed: {
      challenges() {
        return this.$store.state.challenges;
      },
    },
  };
</script>

<style scoped>
  .challenge-container {
    min-height: 100%;
    height: auto;
    overflow-y: auto;
    overflow-x: hidden;
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
      .emoji {
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
    width: 393px;
    max-width: 393px;
    min-height: 206px;
    height: fit-content;

    .menu {
      width: 100%;
      height: 65px;

      .text {
        font-size: 24px;
        padding-left: 26px;
        padding-top: 27px;
      }
    }
    .selected-challenge {
      font-size: 40px;
      min-height: 141px;
      height: auto;
      background-color: rgba(249, 233, 197, 0.35);
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 13px;
      padding: 15px 43px;
      .title {
        width: 100%;
        text-overflow: ellipsis;
        overflow: hidden;
        text-wrap: nowrap;
        font-size: 28px;
      }
      .content {
        font-size: 14px;
        color: #78540a;
      }
      .date {
        font-size: 12px;
        text-align: right;
      }
    }
    .no-selected-challenge {
      min-height: 141px;
      height: auto;
      background-color: rgba(249, 233, 197, 0.35);
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 20px;
      padding: 15px 43px;
      .image {
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
    .text {
      width: 100%;
      text-align: left;
      padding-left: 29px;
      font-size: 24px;
    }

    .no-exist {
      width: 331px;
      height: 369px;
      border: 1px solid #958565;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .box {
        gap: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .image {
          width: 132px;
          height: 109px;
        }
        .text {
          font-size: 24px;
        }
      }
    }
    .exist {
      width: 331px;
      height: 600px;
      border: 1px solid #958565;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      overflow-y: auto;
      .box {
        width: 100%;
        display: flex;
        flex-direction: column;
        .odd-challenge {
          background-color: #f8f1dc;
        }
        .even-challenge {
          background-color: rgba(255, 255, 255, 0.35);
        }
        .list {
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
              text-overflow: ellipsis;
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
