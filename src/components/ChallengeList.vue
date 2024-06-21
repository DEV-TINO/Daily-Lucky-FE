<template>
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
    <div class="exist" v-if="challenges.length !== 0">
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
                <div
                  class="select-btn color-blue"
                  @click="$emit('handleClickSelectedChallenge', challenge)"
                >
                  선택하기
                </div>
                <div
                  class="delete-btn color-red"
                  @click="$emit('handleClickDeleteChallenge', index)"
                >
                  삭제하기
                </div>
              </div>
            </div>
            <div class="content color-content">
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
    <div
      class="challenge-make-btn color-text"
      @click="$emit('handleClickMakeChallenge')"
    >
      챌린지 만들러 가기
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "ChallengeList",
    computed: {
      ...mapState(["selectedChallenge", "challenges"]),
    },
    props: {
      applyChallengeStyle: Function,
      handleClickSelectedChallenge: Function,
      handleClickDeleteChallenge: Function,
      handleClickMakeChallenge: Function,
    },
  };
</script>

<style scoped>
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
    }
  }
</style>
