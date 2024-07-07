<template>
  <div class="challenge-container">
    <!-- top Logo -->

    <!-- Selected Challenge -->
    <div class="challenge">
      <div class="menu">
        <div class="text main-color">Challenge!</div>
      </div>
      <SelectedChallenge containerClass="challenge-page" />
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
  import SelectedChallenge from "@/components/SelectedChallenge.vue";
  export default {
    name: "ChallengePage",
    components: {
      ChallengeList,
      SelectedChallenge,
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
  }
</style>
