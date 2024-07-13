<template>
  <div class="today-moods">
    <div class="title">
      <div class="main-color">Today's <span class="is-red">Mood!</span></div>
    </div>
    <div class="moods-emojis">
      <div
        class="emoji"
        :class="emojiSelected(emoji.emojiType)"
        v-for="(emoji, index) in emojis"
        :key="index"
        @click="$emit('updateEmojiType', emoji.emojiType)"
      >
        <img :class="emoji.emojiType" :src="emoji.emojiUrl" />
        <div class="text is-red">
          {{ emoji.emojiType }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from "vuex";
  export default {
    name: "SelectEmoji",
    props: {
      emojiSelected: Function,
      updateEmojiType: Function,
    },
    computed: {
      ...mapState(["emojis"]),
    },
  };
</script>

<style scoped>
  .today-moods {
    width: 100%;
    .title {
      height: 40px;
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      padding-left: 29px;
      font-size: 24px;
    }
    .moods-emojis {
      width: 100%;
      height: 85px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      .emoji {
        width: 90px;
        height: 84px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .Lucky {
          margin-top: 30px;
          width: 59px;
          height: 55px;
        }
        .Happy {
          margin-top: 20px;
          width: 75px;
          height: 62px;
        }
        .Sad {
          margin-top: 22px;
          width: 68px;
          height: 56px;
        }
        .Angry {
          margin-top: 8px;
          width: 75px;
          height: 70px;
        }
      }
    }
    .text {
      width: 100%;
      height: 15px;
      font-size: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 72px;
    }
  }
</style>
