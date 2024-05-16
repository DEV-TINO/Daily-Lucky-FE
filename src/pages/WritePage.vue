<template>
  <div class="write-container">
    <!-- Contents -->
    <div>
      <!-- Top Nav -->
      <div class="top">
        <!-- <div class="delete" :class="isHidden ? 'is-hidden' : ''>삭제하기</div> -->
        <div class="logo" @click="isHidden = !isHidden">
          <img class="logo-emoji" src="/public/images/lucky-lucky.png" />
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
            :class="currentSelected === emoji ? '' : 'is-gray'"
            v-for="(emoji, index) in emojis"
            :key="index"
            @click="currentSelected = emoji"
          >
            <img :class="emoji" :src="`/public/images/lucky-${emoji}.png`" />
            <div class="moods-emoji-text">
              {{ emoji }}
            </div>
          </div>
        </div>
      </div>

      <!-- Write Contents -->
      <div class="writing">
        <div class="writing-date">
          <div class="month-year main-color">MAY 2024</div>
          <div class="date-day main-color">24 Friday</div>
        </div>
        <textarea
          class="lined-textarea"
          placeholder="Write today's diary"
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
            src="/public/images/cloud-arrow-up.png"
          />
          <div v-if="imageUrl == ''" class="img-text main-color">
            Upload Image
          </div>
        </div>
        <div class="upload-button">글쓰기</div>
      </div>
    </div>

    <!-- Bottom Nav -->
    <BottomNav></BottomNav>
  </div>
</template>

<script>
  import BottomNav from "@/components/BottomNav.vue";
  export default {
    name: "WritePage",
    data() {
      return {
        isHidden: false,
        emojis: ["lucky", "happy", "sad", "angry"],
        currentSelected: "lucky",
        bottomMenu: ["write", "calendar", "challenge"],
        imageUrl: "",
      };
    },
    components: {
      BottomNav,
    },
    methods: {
      handleClickUploadImage() {
        this.$refs.upload.click();
      },
      handleUploadImage(event) {
        const uploadFiles = event.target.files;
        this.imageUrl = URL.createObjectURL(uploadFiles[0]);
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
    min-height: 100vh;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
      /* background-image: url("/images/upload-image.png"); */
      /* background-size: contain; */
      /* background-repeat: no-repeat; */

      border: #988461 dashed 2px;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 17px;
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

  .bottom-nav {
    width: 100%;
    height: 64px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #ddcbac;
    gap: 50px;
    .menu-write,
    .menu-calendar,
    .menu-challenge {
      width: 45px;
      height: 48px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .write-img,
    .calendar-img,
    .challenge-img {
      width: 37px;
      height: 35px;
    }
    .write-text,
    .calendar-text,
    .challenge-text {
      font-size: 10px;
      color: #988461;
    }
  }
</style>
