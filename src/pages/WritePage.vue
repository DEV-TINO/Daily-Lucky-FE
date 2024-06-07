<!-- 사진 업로드 후 사진 저장되는 기능 -->
<template>
  <div class="write-container">
    <!-- Contents -->
    <div>
      <!-- Top Nav -->
      <div class="top">
        <div
          class="delete is-red"
          :class="isHidden ? 'is-hidden' : ''"
          @click="handleClickDeletePost"
        >
          삭제하기
        </div>
        <div class="logo" @click="isHidden = !isHidden">
          <img class="logo-emoji" src="/images/lucky-lucky.png" />
          <div class="title main-color">Daily Lucky</div>
        </div>
      </div>
      <!-- Select Emoji -->
      <div class="today-moods">
        <div class="moods-text">
          <div class="todays main-color">
            Today's <span class="is-red">Mood!</span>
          </div>
        </div>
        <div class="moods-emojis">
          <div
            class="emoji"
            :class="emojiType === emoji ? '' : 'is-gray'"
            v-for="(emoji, index) in emojis"
            :key="index"
            @click="emojiType = emoji"
          >
            <img :class="emoji" :src="`/images/lucky-${emoji}.png`" />
            <div class="moods-emoji-text">
              {{ emoji }}
            </div>
          </div>
        </div>
      </div>

      <!-- Write Contents -->
      <div class="writing">
        <div class="writing-date">
          <div class="month-year main-color">
            {{ MONTHS[this.$store.state.calendarSelected.month - 1] }}
            {{ this.$store.state.calendarSelected.year }}
          </div>
          <div class="date-day main-color">
            {{ this.$store.state.calendarSelected.date }}
            {{ DAYS[this.$store.state.calendarSelected.day] }}
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
        <div class="upload-button" @click="handleClickWriteDiary()">글쓰기</div>
      </div>
    </div>
    <div style="width: 100%; min-height: 81px; height: 81px"></div>

    <!-- Bottom Nav -->
  </div>
</template>

<script>
  export default {
    name: "WritePage",
    data() {
      return {
        MONTHS: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        DAYS: {
          SUN: "Sunday",
          MON: "Monday",
          TUE: "Tuesday",
          WED: "Wednesday",
          THU: "Thursday",
          FRI: "Friday",
          SAT: "Saturday",
        },
        isHidden: false,
        emojis: ["lucky", "happy", "sad", "angry"],
        emojiType: "lucky", // == emojiType
        bottomMenu: ["write", "calendar", "challenge"],
        imageUrl: "",
        content: "", // 작성한 일기....
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
      }
    },
    methods: {
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

        // 1. TODO: Save Diary according to API Docs..
        // 2. TODO: Send to Server

        // Move to Calendar Page
        this.$router.push("/calendar");
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
    },
  };
</script>

<style scoped>
  .is-hidden {
    visibility: hidden;
  }

  .is-red {
    color: #ff7a78;
  }

  .is-gray {
    filter: grayscale(1);
  }

  .write-container {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .delete {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    /* top, right, bottom, left */
    top: 25px;
    right: 0px;
    height: 35px;
    width: 80px;
  }
  .logo {
    margin-top: 51px;
    height: 68px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo-emoji {
      width: 35px;
      height: 31px;
      margin-bottom: 5px;
    }
    .title {
      font-size: 10px;
    }
  }

  .today-moods {
    width: 100%;
    /* background-color: #dfebf8; */
    .moods-text {
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

        .lucky {
          margin-top: 30px;
          width: 59px;
          height: 55px;
        }
        .happy {
          margin-top: 20px;
          width: 75px;
          height: 62px;
        }
        .sad {
          margin-top: 22px;
          width: 68px;
          height: 56px;
        }
        .angry {
          margin-top: 8px;
          width: 75px;
          height: 70px;
        }
      }
    }
    .moods-emoji-text {
      /* background-color: #f0d5d4; */
      width: 100%;
      height: 15px;
      font-size: 10px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 72px;
    }
  }
  .writing {
    width: 100%;
    min-height: 510px;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #e6f8df; */
    .writing-date {
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
      color: #988461;
      background-color: #f9e9c5;
      border-radius: 5px;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
