<template>
  <div class="challenge-container">
    <!-- top Logo -->

    <!-- Selected Challenge -->
    <div class="challenge">
      <div class="menu">
        <div class="text main-color">Challenge!</div>
      </div>
      <div class="selected-challenge" v-if="selectedChallenge">
        <div class="title">{{ selectedChallenge.title }}</div>
        <div class="content color-content">
          {{ selectedChallenge.content }}
        </div>
        <div class="date">
          {{ selectedChallenge.startDate }} - {{ selectedChallenge.dueDate }}
        </div>
      </div>
      <div class="no-selected-challenge" v-if="!selectedChallenge">
        <img class="image" src="/images/lucky-sad.png" />
        <div class="text main-color">아직 아무 챌린지도 없어요...</div>
      </div>
    </div>

    <!-- Challenge List -->
    <ChallengeList
      :applyChallengeStyle="applyChallengeStyle"
      @handleClickSelectedChallenge="handleClickSelectedChallenge"
      @handleClickDeleteChallenge="handleClickDeleteChallenge"
      @handleClickMakeChallenge="handleClickMakeChallenge"
    />

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import { mapState } from "vuex";
  import ChallengeList from "@/components/ChallengeList.vue";
  export default {
    name: "ChallengePage",
    components: {
      ChallengeList,
    },
    computed: {
      ...mapState(["selectedChallenge", "challenges"]),
    },
    methods: {
      handleClickMakeChallenge() {
        this.$router.push("/create-challenge");
      },
      handleClickDeleteChallenge(index) {
        const challengeToDelete = this.challenges[index];
        this.$store.commit("deleteChallenge", index);
        if (
          this.selectedChallenge &&
          this.selectedChallenge === challengeToDelete
        ) {
          this.$store.commit("selectChallenge", null);
        }
      },
      handleClickSelectedChallenge(challenge) {
        this.$store.commit("selectChallenge", challenge);
      },
      applyChallengeStyle(index) {
        return index % 2 ? "even-challenge" : "odd-challenge";
      },
    },
  };
</script>

<style scoped>
  .challenge-container {
    /* min-height: 100%; */
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
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
</style>
