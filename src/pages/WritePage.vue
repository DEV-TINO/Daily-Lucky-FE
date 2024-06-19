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
      <div class="writing-container background-color">
        <div class="date">
          <div class="month-year main-color">
            {{ months[this.$store.state.calendarSelected.month - 1] }}
            {{ this.$store.state.calendarSelected.year }}
          </div>
          <div class="date-day main-color">
            {{ this.$store.state.calendarSelected.date }}
            {{ daysFullNames[this.$store.state.calendarSelected.day] }}
          </div>
        </div>
        <textarea
          class="lined-textarea"
          placeholder="Write today's diary"
          v-model="content"
        ></textarea>
        <div class="upload-image" @click="handleClickUploadImage()">
          <input
            ref="upload"
            type="file"
            hidden
            @change="handleUploadImage($event)"
          />
          <div
            style="
              width: 100%;
              height: 400px;
              background-repeat: no-repeat;
              background-position: center;
              background-size: contain;
            "
            v-if="imageUrl != ''"
            :style="{ backgroundImage: `url(${this.imageUrl})` }"
          ></div>
          <img
            v-if="imageUrl == ''"
            class="img"
            src="/images/cloud-arrow-up.png"
          />
          <div v-if="imageUrl == ''" class="img-text main-color">
            Upload Image
          </div>
        </div>
        <div class="upload-button color-text" @click="handleClickWriteDiary()">
          글쓰기
        </div>
      </div>
    </div>
    <div class="bottom-box"></div>

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  import SelectEmoji from "@/components/SelectEmoji.vue";
  import { mapState } from "vuex";
  export default {
    name: "WritePage",
    components: {
      SelectEmoji,
    },
    computed: {
      ...mapState(["months", "daysFullNames", "bottomMenu", "emojis"]),
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
      handleClickUploadImage() {
        this.$refs.upload.click();
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
    .writing-container {
      width: 100%;
      min-height: 510px;
      height: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      .date {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .month-year {
          padding-left: 35px;
          font-size: 24px;
        }
        .date-day {
          padding-right: 35px;
          font-size: 16px;
        }
      }
      .lined-textarea {
        width: 80%;
        height: 250px;
        background-image: url("/images/lines.png");
        background-size: contain;
        background-repeat: no-repeat;
        font-size: 18px;
        text-align: start;
        line-height: 31px;
        padding: 0;
        font-family: "custom-font";
        background-color: transparent;
        border: none;
        overflow: clip;
      }
      .lined-textarea:focus {
        outline: none;
      }
      .lined-textarea::placeholder {
        color: #ccc6ba;
        font-size: 14px;
      }
      .upload-image {
        width: 80%;
        min-height: 110px;
        height: fit-content;
        border: #988461 dashed 2px;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 17px;
        padding-bottom: 10px;
        .img {
          width: 24px;
          height: 24px;
        }
        .img-text {
          width: 106px;
          height: 28px;
          font-size: 24px;
        }
      }
      .upload-button {
        width: 80%;
        height: 41px;
        margin-top: 18px;
        margin-bottom: 18px;
        background-color: #f9e9c5;
        border-radius: 5px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
    .bottom-box {
      width: 100%;
      min-height: 81px;
      height: 81px;
    }
  }
</style>
