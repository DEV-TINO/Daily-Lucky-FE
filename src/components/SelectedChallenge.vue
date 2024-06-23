<template>
  <div v-if="selectedChallenge" :class="['selected-challenge', containerClass]">
    <div class="title">{{ selectedChallenge.title }}</div>
    <div class="content color-content">
      {{ selectedChallenge.content }}
    </div>
    <div class="dueDate">
      {{ selectedChallenge.startDate }} - {{ selectedChallenge.dueDate }}
    </div>
  </div>
  <div
    v-if="!selectedChallenge"
    :class="['no-selected-challenge', containerClass]"
  >
    <img class="emoji" src="/images/lucky-sad.png" />
    <div class="content main-color">아직 아무 챌린지도 없어요...</div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "SelectedChallenge",
    props: {
      containerClass: String,
    },
    computed: {
      ...mapState(["selectedChallenge"]),
    },
  };
</script>

<style scoped>
  /* CalendarPage */
  .selected-challenge.calendar-page {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding-top: 15px;
    padding-left: 20px;
    box-sizing: border-box;
  }

  .selected-challenge.calendar-page .title {
    font-size: 28px;
  }

  .selected-challenge.calendar-page .content {
    font-size: 14px;
    padding-top: 10px;
  }

  .selected-challenge.calendar-page .dueDate {
    font-size: 12px;
    align-self: flex-end;
    margin-top: auto;
    padding-right: 15px;
    padding-bottom: 15px;
  }

  .no-selected-challenge.calendar-page {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  .no-selected-challenge.calendar-page .emoji {
    width: 87px;
    height: 72px;
    margin-right: 28px;
  }

  .no-selected-challenge.calendar-page .content {
    font-size: 24px;
  }

  /* ChallengePage */
  .selected-challenge.challenge-page {
    font-size: 40px;
    min-height: 141px;
    height: auto;
    background-color: rgba(249, 233, 197, 0.35);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 13px;
    padding: 15px 43px;
  }

  .selected-challenge.challenge-page .title {
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    text-wrap: nowrap;
    font-size: 28px;
  }

  .selected-challenge.challenge-page .content {
    font-size: 14px;
  }

  .selected-challenge.challenge-page .dueDate {
    font-size: 12px;
    text-align: right;
  }

  .no-selected-challenge.challenge-page {
    min-height: 141px;
    height: auto;
    background-color: rgba(249, 233, 197, 0.35);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 15px 43px;
  }

  .no-selected-challenge.challenge-page .emoji {
    width: 87px;
    height: 72px;
  }

  .no-selected-challenge.challenge-page .content {
    font-size: 24px;
  }
</style>
