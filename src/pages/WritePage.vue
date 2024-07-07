<!-- 사진 업로드 후 사진 저장되는 기능 -->
<template>
  <div class="write-container background-color">
    <!-- Contents -->
    <div>
      <!-- Top Logo -->
      <div class="top">
        <div
          class="delete is-red"
          :class="toggleIsHidden()"
          @click="handleClickDeletePost()"
        >
          삭제하기
        </div>
      </div>
      <!-- Select Emoji -->
      <SelectEmoji
        :emojiSelected="emojiSelected"
        @updateEmojiType="updateEmojiType"
      />
      <!-- Write Contents -->
      <WriteContent
        :imageUrl="imageUrl"
        :content="content"
        @handleUploadImage="handleUploadImage"
        @handleClickWriteDiary="handleClickWriteDiary"
        @updateContent="updateContent"
      />
    </div>
    <div class="bottom-box"></div>

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import SelectEmoji from "@/components/SelectEmoji.vue";
  import WriteContent from "@/components/WriteContent.vue";
  import { mapState } from "vuex";
  export default {
    name: "WritePage",
    components: {
      SelectEmoji,
      WriteContent,
    },
    computed: {
      ...mapState(["bottomMenu"]),
    },
    data() {
      return {
        isHidden: false,
        emojiType: "lucky", // == emojiType
        imageUrl: "",
        content: "",
        post: {},
      };
    },
    mounted() {
      this.post = this.$store.state.posts.filter((post, index) => {
        return (
          post.date === this.$store.state.calendarSelected.date &&
          post.month === this.$store.state.calendarSelected.month &&
          post.year === this.$store.state.calendarSelected.year
        );
      })[0];
      if (this.post) {
        this.content = this.post.content;
        this.emojiType = this.post.emoji;
        this.imageUrl = this.post.imageUrl;
      } else {
        this.isHidden = true;
      }
    },
    methods: {
      updateEmojiType(emoji) {
        this.emojiType = emoji;
      },
      updateContent(content) {
        this.content = content;
      },
      handleClickWriteDiary() {
        const post = {
          ...this.$store.state.calendarSelected,
          emoji: this.emojiType,
          content: this.content,
          imageUrl: this.imageUrl,
        };
        if (!this.post) {
          this.$store.commit("addPost", post);
        } else {
          this.$store.commit("updatePost", post);
        }

        // Move to Calendar Page
        this.$router.push("/calendar");
      },
      toggleIsHidden() {
        return this.isHidden ? "is-hidden" : "";
      },
      handleUploadImage(event) {
        const uploadFiles = event.target.files;
        this.imageUrl = URL.createObjectURL(uploadFiles[0]);
      },
      handleClickDeletePost() {
        if (this.post) {
          this.$store.commit("deletePost", {
            date: this.$store.state.calendarSelected.date,
            month: this.$store.state.calendarSelected.month,
            year: this.$store.state.calendarSelected.year,
          });
        }
        this.$router.push("/calendar");
      },
      emojiSelected(emoji) {
        return this.emojiType === emoji ? "" : "is-gray";
      },
    },
  };
</script>

<style scoped>
  .write-container {
    height: 100vh;
    /* min-height: 100vh; */
    /* height: auto; */
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .delete {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 25px;
      right: 0px;
      height: 35px;
      width: 80px;
    }
    .bottom-box {
      width: 100%;
      min-height: 81px;
      height: 81px;
    }
  }
</style>
